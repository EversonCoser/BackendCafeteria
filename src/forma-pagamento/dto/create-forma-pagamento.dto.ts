import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormaPagamentoDto {
    @IsNotEmpty()
    @IsString()
    nomeFormaPagamento: string;

}