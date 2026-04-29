// permite usar a classe como serviço no NestJS
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // retorna mensagem padrão da rota "/"
  getHello(): string {
    return 'Hello World!';
  }

}
