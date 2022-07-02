import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  todoItem: string;

  @ApiProperty()
  isDone: boolean;
}
