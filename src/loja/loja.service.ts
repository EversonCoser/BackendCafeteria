import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LojaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    cnpj: string;
    endereco: string;
    telefone: string;
  }) {
    return this.prisma.loja.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.loja.findMany();
  }

    async findOne(idLoja: number) {
        const loja = await this.prisma.loja.findUnique({
            where: { idLoja },
        });
        if (!loja) {
            throw new NotFoundException('Loja não encontrada');
        }
        return loja;
    }

    async update(
        idLoja: number,
        data: {
            cnpj?: string;
            endereco?: string;
            telefone?: string;
        },
    ) {
        await this.findOne(idLoja);
        return this.prisma.loja.update({
            where: { idLoja },
            data,
        });
    }
}