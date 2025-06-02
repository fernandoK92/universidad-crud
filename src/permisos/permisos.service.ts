import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PermisosService {
  constructor(private prisma: PrismaService) {}

  async crearPermiso(nombre: string) {
    return this.prisma.permiso.create({ data: { nombre } });
  }

  async findAll() {
    return this.prisma.permiso.findMany();
  }
}