import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoLojaFornecedorDto } from './dto/create-produto-loja-fornecedor.dto';
import { UpdateProdutoLojaFornecedorDto } from './dto/update-produto-loja-fornecedor.dto';

@Injectable()
export class ProdutoLojaFornecedorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProdutoLojaFornecedorDto) {
    return this.prisma.produtoLojaFornecedor.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.produtoLojaFornecedor.findMany({
      include: {
        produto: true,
        loja: true,
        fornecedor: true,
      },
    });
  }

  async findOne(
    produtoId: number,
    lojaId: number,
    fornecedorId: number,
  ) {
    const registro = await this.prisma.produtoLojaFornecedor.findUnique({
      where: {
        produtoId_lojaId_fornecedorId: {
          produtoId,
          lojaId,
          fornecedorId,
        },
      },
      include: {
        produto: true,
        loja: true,
        fornecedor: true,
      },
    });

    if (!registro) {
      throw new NotFoundException(
        'Relação produto-loja-fornecedor não encontrada',
      );
    }

    return registro;
  }

  async update(
    produtoId: number,
    lojaId: number,
    fornecedorId: number,
    data: UpdateProdutoLojaFornecedorDto,
  ) {
    await this.findOne(produtoId, lojaId, fornecedorId);

    return this.prisma.produtoLojaFornecedor.update({
      where: {
        produtoId_lojaId_fornecedorId: {
          produtoId,
          lojaId,
          fornecedorId,
        },
      },
      data,
    });
  }

  async findLojasByProduto(produtoId: number) {
    return this.prisma.produtoLojaFornecedor.findMany({
      where: { produtoId },
      include: {
        loja: true,
      },
    });
  }

  async findFornecedoresByProduto(produtoId: number) {
    return this.prisma.produtoLojaFornecedor.findMany({
      where: { produtoId },
      include: {
        fornecedor: true,
      },
    });
  }

  async findProdutosByLoja(lojaId: number) {
    return this.prisma.produtoLojaFornecedor.findMany({
      where: { lojaId },
      include: {
        produto: true,
      },
    });
  }

  async findFornecedoresByLoja(lojaId: number) {
    return this.prisma.produtoLojaFornecedor.findMany({
      where: { lojaId },
      include: {
        fornecedor: true,
      },
    });
  }

  async findProdutosByFornecedor(fornecedorId: number) {
    return this.prisma.produtoLojaFornecedor.findMany({
      where: { fornecedorId },
      include: {
        produto: true,
      },
    });
  }

}
