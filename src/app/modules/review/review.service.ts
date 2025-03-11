import { StatusCodes } from 'http-status-codes';
import { IReview } from './review.interface';
import { Review } from './review.model';
import { JwtPayload } from 'jsonwebtoken';
import AppError from '../../errors/appError';
import QueryBuilder from '../../builder/QueryBuilder';
import mongoose from 'mongoose';
import Tutor from '../tutor/tutor.model';


//@ need to fix
const createReview = async (payload: IReview) => {
   const session = await mongoose.startSession();
   console.log(payload)
   try {
      session.startTransaction();

      const existingTutor = await Review.findOne(
         {
            tutor: payload.tutor,
         },
         null,
         { session }
      );
      const existingStudent = await Review.findOne(
         {
            student: payload.student,
         },
         null,
         { session }
      );

      if (existingTutor && existingStudent) {
         throw new AppError(
            StatusCodes.BAD_REQUEST,
            'You have already reviewed this product.'
         );
      }

      const review = await Review.create([{ ...payload }], {
         session,
      });

      // Aggregate reviews for the product
      // const reviews = await Review.aggregate([
      //    {
      //       $match: {
      //          tutor: review[0].tutor,
      //       },
      //    },
      //    {
      //       $group: {
      //          _id: null,
      //          averageRating: { $avg: '$rating' },
      //          ratingCount: { $sum: 1 },
      //       },
      //    },
      // ]);
      const reviews = await Review.aggregate([
         {
            $match: {
               tutor: review[0].tutor,
            },
         },
         {
            $group: {
               _id: null,
               averageRating: { $avg: '$rating' },
               ratingCount: { $sum: 1 },
            },
         },
      ]);

      const { averageRating = 0, ratingCount = 0 } = reviews[0] || {};

      const updatedProduct = await Tutor.findByIdAndUpdate(
         payload.tutor,
         { averageRating, ratingCount },
         { session, new: true }
      );

      if (!updatedProduct) {
         throw new AppError(
            StatusCodes.NOT_FOUND,
            'Product not found during rating update.'
         );
      }

      await session.commitTransaction();
      return review;
   } catch (err) {
      await session.abortTransaction();
      throw err;
   } finally {
      session.endSession();
   }
};

const getAllReviews = async (studentId: string) => {
   // console.log(studentId)
   const result = await Review.find({ student: studentId }).populate("tutor");
   // console.log(result)


   return result;
}

export const ReviewServices = {
   createReview,
   getAllReviews,
};
