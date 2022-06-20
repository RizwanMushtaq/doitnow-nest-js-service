import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  async hashPassword(plainPassword: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(plainPassword, saltOrRounds);
  }
}
