import { Schema, Document } from 'mongoose';

export const MessageSchema = new Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export interface Message extends Document {
  sender: string;
  recipient: string;
  content: string;
  timestamp: Date;
}
