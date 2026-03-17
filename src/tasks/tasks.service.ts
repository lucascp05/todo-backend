import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
   private tasks: any[] = [];

  create(createTaskDto) {
  const task = {
    id: this.tasks.length + 1,
    ...createTaskDto
  };

  this.tasks.push(task);

  return task;
}

 findAll() {
  return this.tasks;
}

  findOne(id: number) {
  return this.tasks.find(task => task.id === id);
}

  update(id: number, updateTaskDto) {
  const task = this.tasks.find(task => task.id === id);

  if (!task) {
    return { message: 'Task not found' };
  }

  Object.assign(task, updateTaskDto);

  return task;
}

  remove(id: number) {
  const index = this.tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return { message: 'Task not found' };
  }

  this.tasks.splice(index, 1);

  return { message: 'Task deleted' };
}
}
