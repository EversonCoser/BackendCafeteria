import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoProdutoDto } from './dto/create-pedido-produto.dto';
import { UpdatePedidoProdutoDto } from './dto/update-pedido-produto.dto';

@Injectable()
export class PedidoProdutoService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreatePedidoProdutoDto) {
        return this.prisma.pedidoProduto.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.pedidoProduto.findMany();
    }

    async findPedidos(pedidoId: number) {
        const pedidoProduto = await this.prisma.pedidoProduto.findMany({
            where: { pedidoId },
        });

        if (!pedidoProduto) {
            throw new NotFoundException('PedidoProduto não encontrado');
        }
        return pedidoProduto;
    }

    async updateQuantidade(
    pedidoId: number,
    produtoId: number,
    dto: UpdatePedidoProdutoDto,
  ) {
    const item = await this.prisma.pedidoProduto.findUnique({
      where: {
        pedidoId_produtoId: {
          pedidoId,
          produtoId,
        },
      },
    });

    if (!item) {
      throw new NotFoundException('Produto não encontrado no pedido');
    }

    return this.prisma.pedidoProduto.update({
      where: {
        pedidoId_produtoId: {
          pedidoId,
          produtoId,
        },
      },
      data: {
        quantidade: dto.quantidade,
      },
    });
  }

    async remove(pedidoId: number, produtoId: number) {
        const item = await this.prisma.pedidoProduto.findUnique({
            where: {
            pedidoId_produtoId: {
                pedidoId,
                produtoId,
            },
            },
        });

        if (!item) {
            throw new NotFoundException('Produto não encontrado no pedido');
        }

        return this.prisma.pedidoProduto.delete({
            where: {
            pedidoId_produtoId: {
                pedidoId,
                produtoId,
            },
            },
        });

    }
}
