import { IsEnum, IsInt } from 'class-validator';
import { PrioridadeFornecedor } from '@prisma/client';

export class CreateProdutoLojaFornecedorDto {
  @IsInt()
  produtoId: number;

  @IsInt()
  lojaId: number;

  @IsInt()
  fornecedorId: number;

  @IsEnum(PrioridadeFornecedor)
  prioridade: PrioridadeFornecedor;
}
