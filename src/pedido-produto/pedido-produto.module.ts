import { Module } from '@nestjs/common';
import { PedidoProdutoService } from './pedido-produto.service';
import { PedidoProdutoController } from './pedido-produto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PedidoProdutoService],
  controllers: [PedidoProdutoController],
  imports: [PrismaModule],
})
export class PedidoProdutoModule {}
