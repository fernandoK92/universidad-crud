import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocenteDto {
  @ApiProperty({ description: 'Nombre actualizado del docente', example: 'María López' })
  nombre: string;

  @ApiProperty({
    description: 'ID de la carrera que dicta el docente (opcional)',
    example: 1,
    required: false,
  })
  carreraId?: number; // ID de la carrera, opcional si no se desea cambiar

  @ApiProperty({
    description: 'IDs de las materias que dicta el docente (opcional)',
    example: [1, 2],
    required: false,
    type: [Number],
  })
  materiasIds?: number[]; // IDs de las materias, opcional si no se desea cambiar
}
