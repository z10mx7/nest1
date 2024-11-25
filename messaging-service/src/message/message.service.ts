import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  async createMessage(
    sender: string,
    recipient: string,
    content: string,
  ): Promise<Message> {
    const newMessage = new this.messageModel({ sender, recipient, content });
    return newMessage.save();
  }

  async getMessages(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }
}
