import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisService {
  private client;

  constructor() {
    this.client = createClient({ url: 'redis://localhost:6379' });
    this.client.connect();
  }

  async cacheMessages(key: string, message: string) {
    await this.client.lPush(key, message); // Cache the message in Redis
    this.client.expire(key, 3600); // Set cache expiration time
  }

  async getCachedMessages(key: string) {
    return this.client.lRange(key, 0, -1); // Fetch cached messages
  }
}
