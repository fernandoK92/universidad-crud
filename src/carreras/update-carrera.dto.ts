import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarreraDto {
  @ApiProperty({ description: 'Nombre actualizado de la carrera', example: 'Física Avanzada' })
  nombre: string;
}