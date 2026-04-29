// decorators para criar rotas
import { Controller, Get } from '@nestjs/common';

// service principal do app
import { AppService } from './app.service';

// rota base da aplicação "/"
@Controller()
export class AppController {

  // injeta o AppService
  constructor(private readonly appService: AppService) {}

  // GET / -> retorna mensagem padrão
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
