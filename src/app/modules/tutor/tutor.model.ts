import { Schema, model } from 'mongoose';
import { ITutor } from './tutor.interface';

// Enum for User Roles


// User Schema Definition
const TutorSchema = new Schema<ITutor>(
  {
    subject: { type: String, default: '' },
    pic: { type: String, default: '' },
    bio: { type: String, default: '' },
    email: { type: String, required: true },
    hourlyRate: { type: Number, default: '' },
    name: { type: String, required: true },
    preferredClass: { type: String, required: true },
    preferredArea: { type: String, required: true },
    institute: { type: String, required: true },
    location: { type: String, required: true },
    review: { type: Number, default: '' },
    lastLogin: { type: Date, default: Date.now, },
    availability: { type: String, default: "available", },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Tutor = model<ITutor>('Tutor', TutorSchema);

export default Tutor;