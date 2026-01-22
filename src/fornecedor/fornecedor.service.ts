import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FornecedorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    cnpjcpf: string;
    nome: string;
    endereco: string;
    telefone: string;
    tipoFornecimento: string;
    prazoEntrega: number;
    email: string;
  }) {
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
    data: {
      cnpjcpf?: string;
      nome?: string;
      endereco?: string;
      telefone?: string;
      tipoFornecimento?: string;
      prazoEntrega?: number;
      email?: string;
    },
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
