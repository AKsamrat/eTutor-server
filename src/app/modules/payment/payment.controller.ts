import { Request, Response } from 'express';
import { paymentService } from './payment.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const getAllMyPayment = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await paymentService.getAllMyPayment(
    studentId

  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Payment retrive succesfully",
    data: result,

  });
});

export const paymentController = {
  async getAll(req: Request, res: Response) {
    const data = await paymentService.getAll();
    res.json(data);
  },
  getAllMyPayment,
};
