import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async crearUsuario(data: { username: string; password: string; rolId: number }) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.usuario.create({
      data: {
        username: data.username,
        password: hash,
        roles: {
          create: { rolId: data.rolId }
        }
      },
      include: {
        roles: { include: { rol: true } }
      }
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      include: {
        roles: { include: { rol: true } }
      }
    });
  }

  async asignarRol(usuarioId: number, rolId: number) {
    return this.prisma.usuarioRol.create({
      data: { usuarioId, rolId }
    });
  }
}