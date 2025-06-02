import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- AGREGA ESTA LÍNEA

@Module({
  imports: [
    JwtModule.register({
      secret: 'supersecreto',
      signOptions: { expiresIn: '1h' },
    }),
    PrismaModule, 
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}