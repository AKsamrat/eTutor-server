import mongoose from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import { IBooking } from "./booking.interface";
import Booking from "./booking.model";





const createBooking = async (payload: Partial<IBooking>): Promise<IBooking> => {
  // const { name, subject, hourlyRate, availability } = payload;
  console.log(payload)

  const newBooking = new Booking(payload);
  return await newBooking.save();
};
const getSingleBooking = async (tutorId: string) => {
  // console.log(email)
  // const query = { _id: new ObjectId(id) };
  const result = await Booking.find({ tutorId }).populate('studentId');
  console.log(result)
  return result;
};
const approveRequest = async (
  id: string,

) => {
  console.log(id)
  const updatedTutor = await Booking.findOneAndUpdate(
    { _id: id }, { status: "completed" }, {
    new: true,
  });
  return updatedTutor;
};
const cancelRequest = async (
  id: string,

) => {
  console.log(id)
  const updatedTutor = await Booking.findOneAndUpdate(
    { _id: id }, { status: "canceled" }, {
    new: true,
  });
  return updatedTutor;
};
const getAllBooking = async (query: Record<string, unknown>) => {
  const brandQuery = new QueryBuilder(
    Booking.find(),
    query
  )
    .search(['review'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await brandQuery.modelQuery;
  const meta = await brandQuery.countTotal();

  return {
    meta,
    result,
  };
};
export const BookingServices = {
  getSingleBooking,
  createBooking,
  getAllBooking,
  approveRequest,
  cancelRequest
};