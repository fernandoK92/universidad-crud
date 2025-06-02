import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasModule } from './materias/materias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { DocentesModule } from './docentes/docentes.module';
import { ConsultasModule } from './consultas/consultas.module';
import { PrismaModule } from './prisma/prisma.module'; // Importa PrismaModule
import { CarrerasModule } from './carreras/carreras.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { PermisosService } from './permisos/permisos.service';
import { PermisosController } from './permisos/permisos.controller';

@Module({
  imports: [
    MateriasModule,
    EstudiantesModule,
    DocentesModule,
    ConsultasModule,
    PrismaModule,
    CarrerasModule,
    AuthModule, // Asegúrate de importar PrismaModule
  ],
  controllers: [AppController, UsuariosController, RolesController, PermisosController],
  providers: [AppService, UsuariosService, RolesService, PermisosService], // Elimina PrismaService de aquí
})
export class AppModule {}