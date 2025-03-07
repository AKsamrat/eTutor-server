import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { StudentServices } from './student.service';




const updateStudentProfile = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  console.log("controller", studentId)
  const result = await StudentServices.updateProfile(
    studentId, req.body
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'profile update successfully!',
    data: result,
  });
});

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudent();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor are retrieved successfully',
    data: result,
  });
}); ``
const getSingleStudent = catchAsync(async (req, res) => {
  const { email } = req.params;
  // console.log("single tutor", email)
  const result = await StudentServices.getSingleStudent(email);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor  retrieved successfully',
    data: result,
  });
});




export const StudentController = {
  updateStudentProfile,
  getAllStudent,
  getSingleStudent,


};
