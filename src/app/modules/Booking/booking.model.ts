import mongoose, { model, Schema, Types } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema = new Schema<IBooking>(
  {
    date: { type: Date, default: 0 },
    duration: { type: String, default: 0 },
    price: { type: Number, default: 0 },
    studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
    tutorId: { type: Schema.Types.ObjectId, ref: "Tutor" },
    status: {
      type: String,
      enum: ["pending", "completed", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

// Mongoose Model
const Booking = model<IBooking>("Booking", BookingSchema);

export default Booking;