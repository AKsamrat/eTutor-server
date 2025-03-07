import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

import config from '../../config';
import { TutorServices } from './tutor.service';


const updateProfile = (async (req: Request, res: Response) => {
  const { tutorId } = req.params;
  // console.log(tutorId, req.body)

  // if (!tutorId) {
  //   return res.status(400).json({ error: "Missing tutor ID in URL" });
  // }
  const result = await TutorServices.updateProfile(
    tutorId, req.body,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor data updated successfully!',
    data: result,
  });
});

const getAllTutor = catchAsync(async (req, res) => {
  const result = await TutorServices.getAllTutor(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor are retrieved successfully',
    data: result,
  });
}); ``
const getSingleTutor = catchAsync(async (req, res) => {
  const { email } = req.params;
  // console.log("single tutor", email)
  const result = await TutorServices.getSingleTutor(email);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor  retrieved successfully',
    data: result,
  });
});


export const TutorController = {
  updateProfile,
  getAllTutor,
  getSingleTutor,
};
