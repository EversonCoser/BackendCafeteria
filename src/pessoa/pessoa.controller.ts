import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';


import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.CLIENTE, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
    create(@Body() dto: CreatePessoaDto) {
    return this.pessoaService.create(dto);
    }

  @Get()
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(':idPessoa')
  findOne(@Param('idPessoa', ParseIntPipe) idPessoa: number) {
    return this.pessoaService.findOne(idPessoa);
  }

  @Patch(':idPessoa')
    update(
    @Param('idPessoa', ParseIntPipe) idPessoa: number,
    @Body() dto: UpdatePessoaDto,
    ) {
    return this.pessoaService.update(idPessoa, dto);
    }
}
