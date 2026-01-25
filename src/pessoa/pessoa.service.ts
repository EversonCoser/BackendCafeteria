import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pessoa.findMany({
      include: {
        cliente: true,
        funcionario: true,
      },
    });
  }

  async findOne(idPessoa: number) {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { idPessoa },
      include: {
        cliente: true,
        funcionario: true,
      },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

      return pessoa;
    }

    async create(data: CreatePessoaDto) {
    return this.prisma.pessoa.create({ data });
    }

    async update(idPessoa: number, data: UpdatePessoaDto) {
    await this.findOne(idPessoa);

    return this.prisma.pessoa.update({
        where: { idPessoa },
        data,
    });
    }
}
