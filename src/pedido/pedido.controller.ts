import { Body, Controller, Get, Post, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Controller('pedido')
export class PedidoController {

    constructor(private readonly pedidoService: PedidoService) {}

    @Post()
    create(@Body() dto: CreatePedidoDto) {
        return this.pedidoService.create(dto);
    }

    @Get()
    findAll() {
        return this.pedidoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pedidoService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: CreatePedidoDto,
    ) {
        return this.pedidoService.update(id, dto);
    }

}