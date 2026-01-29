import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { HistoricoService } from './historico.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';

@Roles(Role.FUNCIONARIO, Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('historico')
export class HistoricoController {

    constructor(private readonly historicoService: HistoricoService) {}

    @Get()
    findAll() {
        return this.historicoService.findAll();
    }

    @Get(':idProduto')
    findByProduto(@Param('idProduto', ParseIntPipe) idProduto: number) {
        return this.historicoService.findByProduto(idProduto);
    }

}
