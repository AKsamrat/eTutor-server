import { Payment } from "./payment.model";

const getAllMyPayment = async (studentId: string) => {
  console.log(studentId)
  const result = await Payment.find({ user: studentId }).populate("order");
  // console.log(result)

  // order.payment = await Payment.findOne({ order: order._id });
  return result;
};

export const paymentService = {
  getAllMyPayment,
  async getAll() {
    // Example service logic
    return [{ message: 'Service logic here' }];
  },
};
