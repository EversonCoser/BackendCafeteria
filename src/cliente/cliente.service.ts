import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(idPessoa: number, dto: CreateClienteDto) {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { idPessoa },
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    const clienteExiste = await this.prisma.cliente.findUnique({
      where: { idCliente: idPessoa },
    });

    if (clienteExiste) {
      throw new BadRequestException('Pessoa já cadastrada como cliente');
    }

    return this.prisma.cliente.create({
      data: {
        idCliente: idPessoa,
        ...dto,
      },
    });
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      include: {
        pessoa: true,
      },
    });
  }

  async findOne(idCliente: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { idCliente },
      include: {
        pessoa: true,
      },
    });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return cliente;
  }

  async update(idCliente: number, dto: UpdateClienteDto) {
    await this.findOne(idCliente);

    return this.prisma.cliente.update({
      where: { idCliente },
      data: dto,
    });
  }

}
