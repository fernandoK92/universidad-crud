import { ApiProperty } from '@nestjs/swagger';

export class CreateCarreraDto {
  @ApiProperty({ description: 'Nombre de carrera', example: 'Matemáticas' })
  nombre: string;
  
}