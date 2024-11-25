import { Injectable } from '@nestjs/common';
import amqp from 'amqplib';

@Injectable()
export class RabbitMQService {
  private connection;
  private channel;

  async connect() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue('messageQueue', { durable: true });
  }

  async sendMessageToQueue(message: string) {
    this.channel.sendToQueue('messageQueue', Buffer.from(message), {
      persistent: true,
    });
  }
}
