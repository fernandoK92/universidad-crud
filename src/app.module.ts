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
  controllers: [AppController],
  providers: [AppService], // Elimina PrismaService de aquí
})
export class AppModule {}