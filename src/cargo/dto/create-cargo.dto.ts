import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCargoDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    salaBase: number;

    @IsNotEmpty()
    @IsNumber()
    lojaId: number;

}