import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoricoService {

    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.historico.findMany();
    }

    async findByProduto(idProduto: number) {
    return this.prisma.historico.findMany({
        where: {
        produtoId: idProduto,
        },
    });
    }

}
