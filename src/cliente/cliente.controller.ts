import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.CLIENTE, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('pessoa/:idPessoa')
  create(
    @Param('idPessoa', ParseIntPipe) idPessoa: number,
    @Body() dto: CreateClienteDto,
  ) {
    return this.clienteService.create(idPessoa, dto);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':idCliente')
  findOne(
    @Param('idCliente', ParseIntPipe) idCliente: number,
  ) {
    return this.clienteService.findOne(idCliente);
  }

  @Patch(':idCliente')
  update(
    @Param('idCliente', ParseIntPipe) idCliente: number,
    @Body() dto: UpdateClienteDto,
  ) {
    return this.clienteService.update(idCliente, dto);
  }

}
