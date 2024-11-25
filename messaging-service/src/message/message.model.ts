import { Schema, Document } from 'mongoose';

export const MessageSchema = new Schema({
  sender: String,
  recipient: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export interface Message extends Document {
  sender: string;
  recipient: string;
  content: string;
  createdAt: Date;
}
