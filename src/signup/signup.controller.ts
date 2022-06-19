import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('signup')
@Controller('signup')
export class SignupController {
  constructor(private usersService: UsersService) {}

  @ApiConflictResponse({
    description: 'When username is not available',
  })
  @ApiCreatedResponse({
    description: 'When user is successfully created',
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'username not available',
        },
        HttpStatus.CONFLICT,
      );
    }
    return user;
  }
}
