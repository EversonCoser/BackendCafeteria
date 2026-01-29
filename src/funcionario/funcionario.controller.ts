import { Controller, Post, Param, Body, ParseIntPipe, Get, Patch, UseGuards } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';


import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.CLIENTE, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('funcionario')
export class FuncionarioController {

    constructor(private readonly funcionarioService: FuncionarioService) {}
    
      @Post('pessoa/:idPessoa')
      create(
        @Param('idPessoa', ParseIntPipe) idPessoa: number,
        @Body() dto: CreateFuncionarioDto,
      ) {
        return this.funcionarioService.create(idPessoa, dto);
      }
    
      @Get()
      findAll() {
        return this.funcionarioService.findAll();
      }
    
      @Get(':idFuncionario')
      findOne(
        @Param('idFuncionario', ParseIntPipe) idFuncionario: number,
      ) {
        return this.funcionarioService.findOne(idFuncionario);
      }
    
      @Patch(':idFuncionario')
      update(
        @Param('idFuncionario', ParseIntPipe) idFuncionario: number,
        @Body() dto: UpdateFuncionarioDto,
      ) {
        return this.funcionarioService.update(idFuncionario, dto);
      }

}
