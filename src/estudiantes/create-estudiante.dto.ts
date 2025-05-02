import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
  @ApiProperty({ description: 'Nombre del estudiante', example: 'Juan Pérez' })
  nombre: string;

  @ApiProperty({ description: 'ID de la carrera del estudiante', example: 1 })
  carreraId: number; // ID de la carrera a la que pertenece el estudiante

  @ApiProperty({ 
    description: 'IDs de las materias que cursa el estudiante', 
    example: [1, 2], 
    type: [Number] 
  })
  materiasIds: number[]; // IDs de las materias que cursa el estudiante
}
