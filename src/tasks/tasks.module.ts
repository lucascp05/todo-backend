// importa decorator de módulo
import { Module } from '@nestjs/common';

// service que contém as regras de negócio das tasks
import { TasksService } from './tasks.service';

// controller que recebe as requisições (GET, POST, etc)
import { TasksController } from './tasks.controller';

// módulo do prisma para acessar o banco
import { PrismaModule } from '../prisma/prisma.module';

// define o módulo de tasks
@Module({

  // módulos que este módulo usa
  imports: [PrismaModule],

  // controller responsável pelas rotas de tasks
  controllers: [TasksController],

  // service responsável pela lógica das tasks
  providers: [TasksService],

})
export class TasksModule {}
