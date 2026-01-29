import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common'
import { FornecedorService } from './fornecedor.service'
import { CreateFornecedorDto } from './dto/create-fornecedor.dto'
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto'

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('fornecedores')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post()
  create(@Body() dto: CreateFornecedorDto) {
    return this.fornecedorService.create(dto)
  }

  @Get()
  findAll() {
    return this.fornecedorService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fornecedorService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFornecedorDto,
  ) {
    return this.fornecedorService.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fornecedorService.remove(id)
  }
}
