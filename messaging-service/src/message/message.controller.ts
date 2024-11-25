import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages') // This sets the route base path
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getAllMessages() {
    return this.messageService.getMessages();
  }

  @Post()
  async createMessage(
    @Body() body: { sender: string; recipient: string; content: string },
  ) {
    return this.messageService.createMessage(
      body.sender,
      body.recipient,
      body.content,
    );
  }
}
