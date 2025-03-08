import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";
import { Request, Response } from "express";
import mongoose from "mongoose";

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBooking(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking are retrieved successfully',
    data: result,
  });
});
const getSingleBooking = catchAsync(async (req, res) => {
  const { tutorId } = req.params;
  console.log("single Booking", tutorId)
  const result = await BookingServices.getSingleBooking(tutorId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking  retrieved successfully',
    data: result,
  });
});
const getStudentBookings = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  console.log("single Booking", studentId)
  const result = await BookingServices.getStudentBookings(studentId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking  retrieved successfully',
    data: result,
  });
});
const approveRequest = (async (req: Request, res: Response) => {
  const { tutorId } = req.params;
  // console.log(tutorId, req.body)

  // if (!tutorId) {
  //   return res.status(400).json({ error: "Missing tutor ID in URL" });
  // }
  const result = await BookingServices.approveRequest(
    tutorId,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Request data updated successfully!',
    data: result,
  });
});
const cancelRequest = (async (req: Request, res: Response) => {
  const { tutorId } = req.params;
  // console.log(tutorId, req.body)

  // if (!tutorId) {
  //   return res.status(400).json({ error: "Missing tutor ID in URL" });
  // }
  const result = await BookingServices.cancelRequest(
    tutorId,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Request data updated successfully!',
    data: result,
  });
});
const createBooking = (async (req: Request, res: Response) => {
  try {
    console.log("Received booking data:", req.body);

    const { date, duration, price, studentId, tutorId, status } = req.body;


    // Call service to create booking
    const studentObjectId = new mongoose.Types.ObjectId(studentId);
    const tutorObjectId = new mongoose.Types.ObjectId(tutorId);

    // Call service to create booking
    const newBooking = await BookingServices.createBooking({
      date,
      duration,
      price,
      studentId: studentObjectId,
      tutorId: tutorObjectId,
      status: status || "pending",
    });

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  approveRequest,
  cancelRequest,
  getStudentBookings
};