import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from './hashing.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private hashingService: HashingService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto.userName);
    const user = await this.usersRepository.findOne({
      where: { userName: createUserDto.userName },
    });
    console.log(user);
    if (user) {
      return null;
    }
    const hash = await this.hashingService.hashPassword(createUserDto.password);
    const hashedUser = {
      ...createUserDto,
      password: hash,
    };
    console.log(hashedUser);
    const newUser = this.usersRepository.create(hashedUser);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(username: string) {
    const user = await this.usersRepository.findOne({
      where: { userName: username },
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
