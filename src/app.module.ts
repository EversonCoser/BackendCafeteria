import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { ProdutoLojaFornecedorModule } from './produto-loja-fornecedor/produto-loja-fornecedor.module';

@Module({
  imports: [PrismaModule, FornecedorModule, ProdutoModule, LojaModule, ProdutoLojaFornecedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
