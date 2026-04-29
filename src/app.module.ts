// importa decorator de módulo do NestJS
import { Module } from '@nestjs/common';

// controller principal (não usamos muito aqui)
import { AppController } from './app.controller';

// service principal (não usamos muito aqui)
import { AppService } from './app.service';

// módulo das tasks (onde está nosso CRUD)
import { TasksModule } from './tasks/tasks.module';

// serviço do Prisma para acessar o banco
import { PrismaService } from './prisma/prisma.service'

// define o módulo principal da aplicação
@Module({

  // módulos que o app vai usar
  imports: [TasksModule],

  // controllers globais
  controllers: [AppController],

  // serviços disponíveis na aplicação
  providers: [AppService, PrismaService],

})
export class AppModule {}
