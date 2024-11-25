import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { DataSource } from 'typeorm'; // Import DataSource

@Module({
  imports: [
    // Configure TypeORM to connect to PostgreSQL (make sure credentials are correct)
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type (PostgreSQL)
      host: 'localhost', // Database host
      port: 5432, // Default PostgreSQL port
      username: '', // Your PostgreSQL username
      password: '', // Your PostgreSQL password
      database: 'bamboo', // Your database name
      entities: [User], // Register your entities here
      synchronize: true, // Use true only for development (automatically sync schema)
    }),
    TypeOrmModule.forFeature([User]), // Register User entity for repository
    JwtModule.register({
      secret: 'your-jwt-secret', // Use a secure secret in production
      signOptions: { expiresIn: '1h' }, // Set token expiration time
    }),
  ],
  controllers: [UserController], // Your controllers
  providers: [UserService], // Your services
})
export class AppModule {
  constructor(private dataSource: DataSource) {} // Inject DataSource here to resolve dependencies
}
