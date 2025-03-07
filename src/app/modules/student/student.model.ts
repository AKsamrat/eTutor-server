import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";

const StudentSchema = new Schema<IStudent>(
  {
    bio: { type: String, default: '' },
    pic: { type: String, default: '' },
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true } // Automatically manages `createdAt` and `updatedAt`
);

const Student = model<IStudent>('Student', StudentSchema);
export default Student;