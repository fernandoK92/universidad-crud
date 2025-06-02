import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async crearRol(nombre: string) {
    return this.prisma.rol.create({ data: { nombre } });
  }

  async asignarPermisoARol(rolId: number, permisoId: number) {
    return this.prisma.rolPermiso.create({
      data: { rolId, permisoId }
    });
  }

  async findAll() {
    return this.prisma.rol.findMany({
      include: { permisos: { include: { permiso: true } } }
    });
  }
}