import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:@:30844/my-app?authSource=admin'), // Update with your MongoDB connection string
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// @Module({
//   imports: [
//     MongooseModule.forRoot(
//       'mongodb://root:44JoziHDKaDDVBRP4C0j3q1l@taftan.liara.cloud:30844/my-app?authSource=admin',
//     ), // Update with your MongoDB connection string
//     MessageModule,
//   ],
// })
export class AppModule {}
