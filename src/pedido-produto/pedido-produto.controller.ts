import { Controller, Param, Patch, ParseIntPipe, Body, Delete, Post, Get, UseGuards } from '@nestjs/common';
import { PedidoProdutoService } from './pedido-produto.service';
import { UpdatePedidoProdutoDto } from './dto/update-pedido-produto.dto';
import { CreatePedidoProdutoDto } from './dto/create-pedido-produto.dto';


import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.CLIENTE, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
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
