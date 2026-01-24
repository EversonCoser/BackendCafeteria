import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ProdutoLojaFornecedorService } from './produto-loja-fornecedor.service';
import { CreateProdutoLojaFornecedorDto } from './dto/create-produto-loja-fornecedor.dto';
import { UpdateProdutoLojaFornecedorDto } from './dto/update-produto-loja-fornecedor.dto';

@Controller('produto-loja-fornecedor')
export class ProdutoLojaFornecedorController {
  constructor(
    private readonly service: ProdutoLojaFornecedorService,
  ) {}

  @Post()
  create(@Body() dto: CreateProdutoLojaFornecedorDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':produtoId/:lojaId/:fornecedorId')
  findOne(
    @Param('produtoId', ParseIntPipe) produtoId: number,
    @Param('lojaId', ParseIntPipe) lojaId: number,
    @Param('fornecedorId', ParseIntPipe) fornecedorId: number,
  ) {
    return this.service.findOne(produtoId, lojaId, fornecedorId);
  }

  @Patch(':produtoId/:lojaId/:fornecedorId')
  update(
    @Param('produtoId', ParseIntPipe) produtoId: number,
    @Param('lojaId', ParseIntPipe) lojaId: number,
    @Param('fornecedorId', ParseIntPipe) fornecedorId: number,
    @Body() dto: UpdateProdutoLojaFornecedorDto,
  ) {
    return this.service.update(
      produtoId,
      lojaId,
      fornecedorId,
      dto,
    );
  }

  @Get('produto/:produtoId/lojas')
  findLojasByProduto(
    @Param('produtoId', ParseIntPipe) produtoId: number,
  ) {
    return this.service.findLojasByProduto(produtoId);
  }

  @Get('produto/:produtoId/fornecedores')
  findFornecedoresByProduto(
    @Param('produtoId', ParseIntPipe) produtoId: number,
  ) {
    return this.service.findFornecedoresByProduto(produtoId);
  }

  @Get('loja/:lojaId/produtos')
  findProdutosByLoja(
    @Param('lojaId', ParseIntPipe) lojaId: number,
  ) {
    return this.service.findProdutosByLoja(lojaId);
  }

  @Get('loja/:lojaId/fornecedores')
  findFornecedoresByLoja(
    @Param('lojaId', ParseIntPipe) lojaId: number,
  ) {
    return this.service.findFornecedoresByLoja(lojaId);
  }

  @Get('fornecedor/:fornecedorId/produtos')
  findProdutosByFornecedor(
    @Param('fornecedorId', ParseIntPipe) fornecedorId: number,
  ) {
    return this.service.findProdutosByFornecedor(fornecedorId);
  }
}
