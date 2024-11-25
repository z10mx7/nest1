import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageService } from './message.service';

@WebSocketGateway()
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('send_message')
  async handleSendMessage(
    @MessageBody() data: { sender: string; recipient: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messageService.createMessage(
      data.sender,
      data.recipient,
      data.content,
    );
    client.broadcast.emit('new_message', message); // Emit message to all clients except the sender
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    client.join(roomId); // Join specific room for real-time communication
  }
}
