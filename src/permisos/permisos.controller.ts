import { Controller, Post, Body, Get } from '@nestjs/common';
import { PermisosService } from './permisos.service';

@Controller('permisos')
export class PermisosController {
  constructor(private readonly permisosService: PermisosService) {}

  @Post()
  async crear(@Body() body: { nombre: string }) {
    return this.permisosService.crearPermiso(body.nombre);
  }

  @Get()
  async findAll() {
    return this.permisosService.findAll();
  }
}