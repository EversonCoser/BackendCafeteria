import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    valorBruto: number;

    @IsNotEmpty()
    @IsNumber()
    desconto: number;

    @IsNotEmpty()
    @IsString()
    statusPedido: string;

    @IsNotEmpty()
    @IsNumber()
    valorTotal: number;

    @IsNotEmpty()
    @IsNumber()
    clienteId: number;

    @IsNotEmpty()
    @IsNumber()
    funcionarioId: number;

    @IsNotEmpty()
    @IsNumber()
    lojaId: number;

    @IsNotEmpty()
    @IsNumber()
    formaPagId: number;

}