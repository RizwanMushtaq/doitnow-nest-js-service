import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  todoId: number;

  @ApiProperty()
  @Column()
  userId: number;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  @Column()
  todoItem: string;

  @ApiProperty()
  @Column()
  isDone: boolean;
}
