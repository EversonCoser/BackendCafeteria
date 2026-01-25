import { IsInt, Min } from 'class-validator';

export class UpdatePedidoProdutoDto {
  @IsInt()
  @Min(1)
  quantidade: number;
}
