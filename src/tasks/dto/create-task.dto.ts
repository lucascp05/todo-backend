import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {

  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString({ message: 'O título deve ser um texto' })
  title: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser um texto' })
  description?: string;
}
