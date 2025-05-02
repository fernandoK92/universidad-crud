import { ApiProperty } from '@nestjs/swagger';

export class CreateMateriaDto {
  @ApiProperty({ description: 'Nombre de la materia', example: 'Matemáticas' })
  nombre: string;
}