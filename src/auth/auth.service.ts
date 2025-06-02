import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

interface login {
  username: string;
  password: string;
}


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prisma.usuario.findUnique({
      where: { username },
      include: {
        roles: {
          include: {
            rol: {
              include: {
                permisos: { include: { permiso: true } }
              }
            }
          }
        }
      }
    });
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Extrae roles y permisos en arrays simples
      const roles = user.roles.map(r => r.rol.nombre);
      const permisos = user.roles.flatMap(r => r.rol.permisos.map(p => p.permiso.nombre));
      const { password, ...result } = user;
      return { ...result, roles, permisos };
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
      permisos: user.permisos,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}