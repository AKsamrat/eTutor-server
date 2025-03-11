import { ObjectId, Schema, model } from 'mongoose';
import { IReview } from './review.interface'; // Assuming you have a file for the interface


const reviewSchema = new Schema<IReview>(
   {
      review: {
         type: String,
         required: [true, 'Review text is required.'],
         trim: true,
      },
      rating: {
         type: Number,
         required: [true, 'Rating is required.'],
         min: [1, 'Rating must be at least 1.'],
         max: [5, 'Rating cannot be greater than 5.'],
      },
      student: {
         type: Schema.Types.ObjectId,
         ref: 'Student',
         required: true,
      },
      tutor: {
         type: Schema.Types.ObjectId,
         ref: 'Tutor',
         required: true,
      },
      isFlagged: {
         type: Boolean,
         default: false,
      },
      flaggedReason: {
         type: String,
         default: '',
      },
      isVerifiedPurchase: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   }
);

export const Review = model<IReview>('Review', reviewSchema);
