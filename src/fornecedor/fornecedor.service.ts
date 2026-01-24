import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFornecedorDto) {
    return this.prisma.fornecedor.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.fornecedor.findMany();
  }

  async findOne(idFornecedor: number) {
    const fornecedor = await this.prisma.fornecedor.findUnique({
      where: { idFornecedor },
    });

    if (!fornecedor) {
      throw new NotFoundException('Fornecedor não encontrado');
    }

    return fornecedor;
  }

  async update(
    idFornecedor: number,
    data: UpdateFornecedorDto,
  ) {
    await this.findOne(idFornecedor);

    return this.prisma.fornecedor.update({
      where: { idFornecedor },
      data,
    });
  }

  async remove(idFornecedor: number) {
    await this.findOne(idFornecedor);

    return this.prisma.fornecedor.delete({
      where: { idFornecedor },
    });
  }
}
