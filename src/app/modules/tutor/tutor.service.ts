import QueryBuilder from "../../builder/QueryBuilder";
import { ITutor } from "./tutor.interface";
import Tutor from "./tutor.model";

const updateProfile = async (
  id: string, payload: Partial<ITutor>,

) => {
  console.log(id, payload)
  const updatedTutor = await Tutor.findOneAndUpdate(
    { _id: id }, payload, {
    new: true,
  });
  return updatedTutor;
};
const getSingleTutor = async (email: string) => {
  // console.log(email)
  const result = await Tutor.findOne({ email });
  // console.log(result)
  return result;
};
const getAllTutor = async (query: Record<string, unknown>) => {
  const brandQuery = new QueryBuilder(
    Tutor.find(),
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
export const TutorServices = {
  getSingleTutor,
  getAllTutor,
  updateProfile,
};