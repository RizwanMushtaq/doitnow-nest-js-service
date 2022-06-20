import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('todos')
@ApiBearerAuth('defaultBearerAuth')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':userId')
  findByUserId(@Param('userId') userId: number) {
    return this.todosService.findByUserId(userId);
  }

  @Get('/:userId/:date')
  findByDate(@Param('userId') userId: number, @Param('date') date: string) {
    return this.todosService.findByUserIdAndDate(userId, date);
  }

  @Patch(':todoId')
  update(
    @Param('todoId') todoId: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(todoId, updateTodoDto);
  }

  @Delete(':todoId')
  remove(@Param('todoId') todoId: number) {
    return this.todosService.remove(todoId);
  }
}
