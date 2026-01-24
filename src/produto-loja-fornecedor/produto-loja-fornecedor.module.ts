import { Module } from '@nestjs/common';
import { ProdutoLojaFornecedorService } from './produto-loja-fornecedor.service';
import { ProdutoLojaFornecedorController } from './produto-loja-fornecedor.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProdutoLojaFornecedorController],
  providers: [ProdutoLojaFornecedorService, PrismaService],
})
export class ProdutoLojaFornecedorModule {}
