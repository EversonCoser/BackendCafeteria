import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

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
