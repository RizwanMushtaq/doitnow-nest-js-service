import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { TodosByUserIdQueryDto } from './dto/todosByUserIdQuery.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('todos')
@ApiBearerAuth('defaultBearerAuth')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get('/all')
  findAll() {
    return this.todosService.findAll();
  }

  // @Get(':userId')
  // findByUserId(@Param('userId') userId: number) {
  //   return this.todosService.findByUserId(userId);
  // }

  @Get()
  findByUserId(@Query() query: TodosByUserIdQueryDto) {
    return this.todosService.findByUserId(query.userId);
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
