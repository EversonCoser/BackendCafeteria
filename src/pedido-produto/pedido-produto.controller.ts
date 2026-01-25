import { Controller, Param, Patch, ParseIntPipe, Body, Delete, Post, Get } from '@nestjs/common';
import { PedidoProdutoService } from './pedido-produto.service';
import { UpdatePedidoProdutoDto } from './dto/update-pedido-produto.dto';
import { CreatePedidoProdutoDto } from './dto/create-pedido-produto.dto';

@Controller('pedido-produto')
export class PedidoProdutoController {

    constructor(private readonly pedidoProdutoService: PedidoProdutoService) {}

    @Post()
    create(@Body() dto: CreatePedidoProdutoDto) {
        return this.pedidoProdutoService.create(dto);
    }

    @Get()
    findAll() {
        return this.pedidoProdutoService.findAll();
    }

    @Get('pedido/:pedidoId')
    findPedidos(@Param('pedidoId', ParseIntPipe) pedidoId: number) {
        return this.pedidoProdutoService.findPedidos(pedidoId);
    }

    @Patch(':pedidoId/:produtoId/quantidade')
    updateQuantidade(
        @Param('pedidoId', ParseIntPipe) pedidoId: number,
        @Param('produtoId', ParseIntPipe) produtoId: number,
        @Body() dto: UpdatePedidoProdutoDto,
    ) {
        return this.pedidoProdutoService.updateQuantidade(pedidoId, produtoId, dto);
    }

    @Delete(':pedidoId/:produtoId')
    remove(
        @Param('pedidoId', ParseIntPipe) pedidoId: number,
        @Param('produtoId', ParseIntPipe) produtoId: number,
    ) {
        return this.pedidoProdutoService.remove(pedidoId, produtoId);
    }
}
