import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  // Usuario con contraseña ya hasheada (hash de 'test')
  private users = [
    {
      id: 1,
      username: 'test',
      password: '$2a$10$7JIhXOI1MKGmBFXN8YZvS.L5z8cQPx1La/40h6hFqSQqGEpYqGvFi', // bcrypt hash de 'test'
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find((u) => u.username === username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Retornamos todo menos la contraseña
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
