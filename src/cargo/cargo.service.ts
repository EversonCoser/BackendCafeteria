import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargoService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateCargoDto) {
        return this.prisma.cargo.create({
            data,
        });
    }
    
    async findAll() {
        return this.prisma.cargo.findMany();
    }

    async findOne(idCargo: number) {
        const cargo = await this.prisma.cargo.findUnique({
            where: { idCargo },
        });

        if (!cargo) {
            throw new NotFoundException('Cargo não encontrado');
        }

        return cargo;
    }

    async update(
        idCargo: number,
        data: UpdateCargoDto,
    ) {
        await this.findOne(idCargo);

        return this.prisma.cargo.update({
            where: { idCargo },
            data,
        });
    }

}