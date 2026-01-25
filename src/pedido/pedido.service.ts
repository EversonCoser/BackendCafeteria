import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidoService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreatePedidoDto) {
        return this.prisma.pedido.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.pedido.findMany();
    }

    async findOne(idPedido: number) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { idPedido },
        });
          
        if (!pedido) {
            throw new NotFoundException('Pedido não encontrado');
        }
          
        return pedido;
    }

    async update(
        idPedido: number,
        data: CreatePedidoDto,
    ) {
        await this.findOne(idPedido);
        return this.prisma.pedido.update({
            where: { idPedido },
            data,
        });
    }

}
