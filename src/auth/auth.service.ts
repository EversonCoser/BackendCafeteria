import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from './roles.enum';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { username },
      include: {
        funcionario: true,
        cliente: true,
      },
    });

    if (!pessoa) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const senhaValida = await bcrypt.compare(password, pessoa.password);
    if (!senhaValida) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    let role: Role;

    if (pessoa.funcionario) {
      role = Role.FUNCIONARIO;
    } else if (pessoa.cliente) {
      role = Role.CLIENTE;
    } else {
      role = Role.CLIENTE;
    }

    const payload = {
      sub: pessoa.idPessoa,
      username: pessoa.username,
      role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
