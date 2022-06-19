import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SignupModule } from './signup/signup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import mysqlConfig from '../mysqlConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    UsersModule,
    AuthModule,
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
