import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormaPagamentoDto } from './dto/create-forma-pagamento.dto';

@Injectable()
export class FormaPagamentoService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateFormaPagamentoDto) {
        return this.prisma.formaPagamento.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.formaPagamento.findMany();
    }

    async findOne(idFormaPag: number) {
        const formaPagamento = await this.prisma.formaPagamento.findUnique({
            where: { idFormaPag },
        });
      
        if (!formaPagamento) {
            throw new NotFoundException('Forma de pagamento não encontrada');
        }
      
        return formaPagamento;
    }
      
    async remove(idFormaPag: number) {
        await this.findOne(idFormaPag);
        return this.prisma.formaPagamento.delete({
            where: { idFormaPag },
        });
    }




}
