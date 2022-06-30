import { ApiProperty } from '@nestjs/swagger';

export class TodosByUserIdQueryDto {
  @ApiProperty()
  userId: number;
}
