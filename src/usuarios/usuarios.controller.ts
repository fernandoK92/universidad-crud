import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crear(@Body() body: { username: string; password: string; rolId: number }) {
    return this.usuariosService.crearUsuario(body);
  }

  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Post('asignar-rol')
  async asignarRol(@Body() body: { usuarioId: number; rolId: number }) {
    return this.usuariosService.asignarRol(body.usuarioId, body.rolId);
  }
}