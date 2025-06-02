import { Controller, Post, Body, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async crear(@Body() body: { nombre: string }) {
    return this.rolesService.crearRol(body.nombre);
  }

  @Post('asignar-permiso')
  async asignarPermiso(@Body() body: { rolId: number; permisoId: number }) {
    return this.rolesService.asignarPermisoARol(body.rolId, body.permisoId);
  }

  @Get()
  async findAll() {
    return this.rolesService.findAll();
  }
}