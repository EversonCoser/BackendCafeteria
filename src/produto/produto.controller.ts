import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';

import { ProdutoService } from './produto.service';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { UpdateProdutoAlimentoDto } from './dto/update-produto-alimento.dto';
import { UpdateProdutoBebidaDto } from './dto/update-produto-bebida.dto';
import { UpdateProdutoCafeDto } from './dto/update-produto-cafe.dto';
import { CreateProdutoAlimentoDto } from './dto/create-produto-alimento.dto';
import { CreateProdutoBebidaDto } from './dto/create-produto-bebida.dto';
import { CreateProdutoCafeDto } from './dto/create-produto-cafe.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.findOne(id);
  }

  @Put(':id')
  updateProdutoCompleto(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      produto?: Partial<UpdateProdutoDto>;
      alimento?: Partial<UpdateProdutoAlimentoDto>;
      bebida?: Partial<UpdateProdutoBebidaDto>;
      cafe?: Partial<UpdateProdutoCafeDto>;
    },
  ) {
    return this.produtoService.updateProdutoCompleto(
      id,
      body.produto,
      body.alimento,
      body.bebida,
      body.cafe,
    );
  }

  @Post('alimento')
  createAlimento(@Body() dto: CreateProdutoAlimentoDto) {
    return this.produtoService.createAlimento(dto);
  }

  @Post('bebida')
  createBebida(@Body() dto: CreateProdutoBebidaDto) {
    return this.produtoService.createBebida(dto);
  }

  @Post('cafe')
  createCafe(@Body() dto: CreateProdutoCafeDto) {
    return this.produtoService.createCafe(dto);
  }
}
