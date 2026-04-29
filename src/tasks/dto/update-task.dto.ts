// utilitário que permite reutilizar DTOs
import { PartialType } from '@nestjs/mapped-types';

// importa o DTO de criação
import { CreateTaskDto } from './create-task.dto';

// cria DTO de atualização com campos opcionais
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
