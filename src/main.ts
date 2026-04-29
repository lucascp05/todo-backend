// cria a aplicação NestJS
import { NestFactory } from '@nestjs/core';

// importa o módulo principal do projeto
import { AppModule } from './app.module';

// função que inicia o servidor
async function bootstrap() {

  // cria a aplicação baseada no AppModule
  const app = await NestFactory.create(AppModule);

  // inicia o servidor na porta 3000 (ou porta do .env)
  await app.listen(process.env.PORT ?? 3000);
}

// executa a função de inicialização
bootstrap();
