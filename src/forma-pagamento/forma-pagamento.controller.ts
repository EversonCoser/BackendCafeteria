import { Controller, Post, Get, Delete, Param, ParseIntPipe, Body } from '@nestjs/common';
import { FormaPagamentoService } from './forma-pagamento.service';
import { CreateFormaPagamentoDto } from './dto/create-forma-pagamento.dto';

@Controller('forma-pagamento')
export class FormaPagamentoController {

    constructor(private readonly formaPagamentoService: FormaPagamentoService) {}

    @Post()
        create(@Body() dto: CreateFormaPagamentoDto) {
            return this.formaPagamentoService.create(dto);
        }
    
        @Get()
        findAll() {
            return this.formaPagamentoService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id', ParseIntPipe) id: number) {
            return this.formaPagamentoService.findOne(id);
        }

        @Delete(':id')
        remove(@Param('id', ParseIntPipe) id: number) {
            return this.formaPagamentoService.remove(id);
        }
}
