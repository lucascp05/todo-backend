// permite usar a classe como serviço no NestJS
import { Injectable } from '@nestjs/common';

// DTO para criar tarefa
import { CreateTaskDto } from './dto/create-task.dto';

// DTO para atualizar tarefa
import { UpdateTaskDto } from './dto/update-task.dto';

// serviço que conecta ao banco via Prisma
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {

  // injeta o Prisma para acessar o banco
  constructor(private prisma: PrismaService) {}

  // cria uma nova tarefa no banco
  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        status: "todo"
      }
    });
  }

  // busca todas as tarefas
  async findAll() {
    return this.prisma.task.findMany();
  }

  // busca uma tarefa pelo id
  async findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  // atualiza uma tarefa pelo id
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  // remove uma tarefa pelo id
  async remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
