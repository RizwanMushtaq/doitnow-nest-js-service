import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { userName: createUserDto.userName },
    });
    if (user) {
      return null;
    }

    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(userName: string) {
    const user = await this.usersRepository.findOne({
      where: { userName: userName },
    });
    if (!user) {
      return null;
    }
    return user;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // async remove(id: number) {
  //   const user = await this.usersRepository.findOneOrFail({
  //     where: { id: id },
  //   });
  //   return this.usersRepository.remove(user);
  // }
}
