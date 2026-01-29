import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common'
import { LojaService } from './loja.service'
import { CreateLojaDto } from './dto/create-loja.dto'
import { UpdateLojaDto } from './dto/update-loja.dto'

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('loja')
export class LojaController {
    constructor(private readonly lojaService: LojaService) {}

    @Post()
    create(@Body() dto: CreateLojaDto) {
        return this.lojaService.create(dto)
    }

    @Get()
    findAll() {
        return this.lojaService.findAll()
    }

    @Get(':idLoja')
    findOne(@Param('idLoja', ParseIntPipe) idLoja: number) {
        return this.lojaService.findOne(idLoja)
    }

    @Patch(':idLoja')
    update(
        @Param('idLoja', ParseIntPipe) idLoja: number,
        @Body() dto: UpdateLojaDto,
    ) {
        return this.lojaService.update(idLoja, dto)
    }
}