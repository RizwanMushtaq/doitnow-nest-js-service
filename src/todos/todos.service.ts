import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const newTodo = this.todosRepository.create(createTodoDto);
    return this.todosRepository.save(newTodo);
  }

  findAll() {
    return this.todosRepository.find();
  }

  findByUserId(userId: number) {
    return this.todosRepository.find({
      where: { userId: userId },
    });
  }

  findByUserIdAndDate(userId: number, date: string) {
    return this.todosRepository.find({
      where: { userId: userId, date: date },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo: Todo = await this.todosRepository.findOneOrFail({
      where: { id: id },
    });
    todo.todoItem = updateTodoDto.todoItem;
    const newTodo = this.todosRepository.create(todo);
    return this.todosRepository.save(newTodo);
  }

  async remove(id: number) {
    const todo = await this.todosRepository.findOneOrFail({
      where: { id: id },
    });
    return this.todosRepository.remove(todo);
  }
}
