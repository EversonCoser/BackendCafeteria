import { Body, Controller, Get, ParseIntPipe, Post, Param, Patch } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('cargo')
export class CargoController {

    constructor(private readonly cargoService: CargoService) {}

    @Post()
    create(@Body() dto: CreateCargoDto) {
        return this.cargoService.create(dto);
    }

    @Get()
    findAll() {
        return this.cargoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.cargoService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateCargoDto,
    ) {
        return this.cargoService.update(id, dto);
    }

}
