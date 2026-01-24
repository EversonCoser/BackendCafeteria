import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLojaDto) {
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
    data: UpdateLojaDto,
  ) {
    await this.findOne(idLoja);

    return this.prisma.loja.update({
      where: { idLoja },
      data,
    });
  }
}
