import { Document, Model } from 'mongoose';


export interface ITutor extends Document {
  id?: string;
  subject?: string;
  bio?: string;
  pic?: string;
  email?: string;
  preferredClass?: string;
  preferredArea?: string;
  hourlyRate?: number;
  institute?: string;
  location?: string;
  name: string;
  review?: number;
  lastLogin?: Date;
  availability?: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number
}

