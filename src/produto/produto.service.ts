// src/produto/produto.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateProdutoAlimentoDto } from './dto/create-produto-alimento.dto';
import { CreateProdutoBebidaDto } from './dto/create-produto-bebida.dto';
import { CreateProdutoCafeDto } from './dto/create-produto-cafe.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { UpdateProdutoAlimentoDto } from './dto/update-produto-alimento.dto';
import { UpdateProdutoBebidaDto } from './dto/update-produto-bebida.dto';
import { UpdateProdutoCafeDto } from './dto/update-produto-cafe.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.produto.findMany({
      include: {
        alimento: true,
        bebida: true,
        cafe: true,
      },
    });
  }

  async findOne(id: number) {
    const produto = await this.prisma.produto.findUnique({
      where: { idProduto: id },
      include: {
        alimento: true,
        bebida: true,
        cafe: true,
      },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async updateProdutoCompleto(
    id: number,
    produtoData?: Partial<UpdateProdutoDto>,
    alimentoData?: Partial<UpdateProdutoAlimentoDto>,
    bebidaData?: Partial<UpdateProdutoBebidaDto>,
    cafeData?: Partial<UpdateProdutoCafeDto>,
  ) {
    const produtoExistente = await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      let produtoAtualizado;
      if (produtoData && Object.keys(produtoData).length > 0) {
        produtoAtualizado = await tx.produto.update({
          where: { idProduto: id },
          data: produtoData,
        });
      }

      let alimentoAtualizado;
      if (alimentoData && produtoExistente.alimento) {
        alimentoAtualizado = await tx.produtoalimento.update({
          where: { idProdAli: id },
          data: alimentoData,
        });
      }

      let bebidaAtualizado;
      if (bebidaData && produtoExistente.bebida) {
        bebidaAtualizado = await tx.produtobebida.update({
          where: { idProdBeb: id },
          data: bebidaData,
        });
      }

      let cafeAtualizado;
      if (cafeData && produtoExistente.cafe) {
        cafeAtualizado = await tx.produtocafe.update({
          where: { idProdCafe: id },
          data: cafeData,
        });
      }

      return {
        produto: produtoAtualizado ?? produtoExistente,
        alimento: alimentoAtualizado,
        bebida: bebidaAtualizado,
        cafe: cafeAtualizado,
      };
    });
  }

  async createAlimento(data: CreateProdutoAlimentoDto) {
    return this.prisma.$transaction(async (tx) => {
      const produto = await tx.produto.create({
        data: {
          descricao: data.descricao,
          preco: data.preco,
          setorPreparo: data.setorPreparo,
          disponivel: data.disponivel ?? true,
        },
      });

      const alimento = await tx.produtoalimento.create({
        data: {
          idProdAli: produto.idProduto, 
          peso: data.peso,
          ingredientes: data.ingredientes,
          dataValidade: new Date(data.dataValidade),
          classAlimentar: data.classAlimentar,
          quantPorEmba: data.quantPorEmba,
        },
      });

      return { produto, alimento };
    });
  }

  async createBebida(data: CreateProdutoBebidaDto) {
    return this.prisma.$transaction(async (tx) => {
      const produto = await tx.produto.create({
        data: {
          descricao: data.descricao,
          preco: data.preco,
          setorPreparo: data.setorPreparo,
          disponivel: data.disponivel ?? true,
        },
      });

      const bebida = await tx.produtobebida.create({
        data: {
          idProdBeb: produto.idProduto, 
          volume: data.volume,
          calorias: data.calorias,
          GelOuQuente: data.GelOuQuente,
          acucar: data.acucar,
          lactose: data.lactose,
          ingredientes: data.ingredientes,
        },
      });

      return { produto, bebida };
    });
  }

  async createCafe(data: CreateProdutoCafeDto) {
    return this.prisma.$transaction(async (tx) => {
      const produto = await tx.produto.create({
        data: {
          descricao: data.descricao,
          preco: data.preco,
          setorPreparo: data.setorPreparo,
          disponivel: data.disponivel ?? true,
        },
      });

      const cafe = await tx.produtocafe.create({
        data: {
          idProdCafe: produto.idProduto, 
          tipoMoagem: data.tipoMoagem,
          tipoTorra: data.tipoTorra,
          acidez: data.acidez,
          origem: data.origem,
          tamEmbalagem: data.tamEmbalagem,
          tipoGrao: data.tipoGrao,
        },
      });

      return { produto, cafe };
    });
  }
}
