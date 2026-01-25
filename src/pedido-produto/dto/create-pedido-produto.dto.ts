import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePedidoProdutoDto {
    @IsNotEmpty()
    @IsNumber()
    quantidade: number;

    @IsNotEmpty()
    @IsNumber()
    pedidoId: number;

    @IsNotEmpty()
    @IsNumber()
    produtoId: number;
}