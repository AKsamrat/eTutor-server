import { IStudent } from "./student.interface";
import Student from "./student.model";


const updateProfile = async (
  id: string, payload: Partial<IStudent>,

) => {
  console.log("service", id, payload)
  const updatedTutor = await Student.findOneAndUpdate(
    { _id: id }, payload, {
    new: true,
  });
  return updatedTutor;
};
const getSingleStudent = async (email: string) => {
  // console.log(email)
  const result = await Student.findOne({ email });
  // console.log(result)
  return result;
};
const getAllStudent = async () => {
  const result = await Student.find();
  return result;
};
export const StudentServices = {
  getSingleStudent,
  updateProfile,
  getAllStudent,
};