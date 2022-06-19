import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SignupController],
})
export class SignupModule {}
