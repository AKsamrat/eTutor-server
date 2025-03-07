import mongoose, { Document, Model, Schema, Types } from 'mongoose';


export interface IBooking {
  date?: Date;
  duration?: string;
  price?: Number;
  studentId?: Types.ObjectId;
  tutorId?: Types.ObjectId;
  status: "pending" | "completed" | "canceled";
  createdAt: Date;
  updatedAt: Date;
}
