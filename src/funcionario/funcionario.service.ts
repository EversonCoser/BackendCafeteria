import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {

    constructor(private readonly prisma: PrismaService) {}
    
    async create(idPessoa: number, dto: CreateFuncionarioDto) {
        const pessoa = await this.prisma.pessoa.findUnique({
          where: { idPessoa },
        });
    
        if (!pessoa) {
          throw new NotFoundException('Pessoa não encontrada');
        }
    
        const funcionarioExiste = await this.prisma.funcionario.findUnique({
          where: { idFuncionario: idPessoa },
        });
    
        if (funcionarioExiste) {
          throw new BadRequestException('Pessoa já cadastrada como funcionario');
        }
    
        return this.prisma.funcionario.create({
          data: {
            idFuncionario: idPessoa,
            ...dto,
          },
        });
      }
    
      async findAll() {
        return this.prisma.funcionario.findMany({
          include: {
            pessoa: true,
          },
        });
      }
    
      async findOne(idFuncionario: number) {
        const funcionario = await this.prisma.funcionario.findUnique({
          where: { idFuncionario },
          include: {
            pessoa: true,
          },
        });
    
        if (!funcionario) {
          throw new NotFoundException('Funcionario não encontrado');
        }
    
        return funcionario;
      }
    
      async update(idFuncionario: number, dto: UpdateFuncionarioDto) {
        await this.findOne(idFuncionario);
    
        return this.prisma.funcionario.update({
          where: { idFuncionario },
          data: dto,
        });
      }

}
