import { Document, Model } from 'mongoose';


export interface IStudent extends Document {
  bio?: string;
  pic?: string;
  email?: string;
  name: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}