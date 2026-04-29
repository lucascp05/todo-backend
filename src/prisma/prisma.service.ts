// permite usar a classe como serviço no NestJS
import { Injectable } from '@nestjs/common';

// cliente do Prisma para acessar o banco
import { PrismaClient } from '@prisma/client';

@Injectable()

// serviço que conecta o NestJS ao banco via Prisma
export class PrismaService extends PrismaClient {}
