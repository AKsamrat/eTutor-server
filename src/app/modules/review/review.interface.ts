import { Schema } from 'mongoose';

export interface IReview {
   review: string;
   rating: number;
   student: Schema.Types.ObjectId;
   tutor: Schema.Types.ObjectId;
   isFlagged?: boolean;
   flaggedReason?: string;
   isVerifiedPurchase?: boolean;
   createdAt?: Date;
   updatedAt?: Date;
}
