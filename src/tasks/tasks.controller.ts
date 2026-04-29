// decorators do NestJS para criar rotas da API
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// service que contém a lógica das tarefas
import { TasksService } from './tasks.service';

// DTO para criar tarefa
import { CreateTaskDto } from './dto/create-task.dto';

// DTO para atualizar tarefa
import { UpdateTaskDto } from './dto/update-task.dto';

// define a rota base: /tasks
@Controller('tasks')
export class TasksController {

  // injeta o service das tarefas
  constructor(private readonly tasksService: TasksService) {}
  
  // POST /tasks -> cria tarefa
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  // GET /tasks -> lista todas tarefas
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  // GET /tasks/:id -> busca 1 tarefa
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  // PATCH /tasks/:id -> atualiza tarefa
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  // DELETE /tasks/:id -> remove tarefa
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
