import { IsEnum, IsOptional } from 'class-validator';
import { PrioridadeFornecedor } from '@prisma/client';

export class UpdateProdutoLojaFornecedorDto {
  @IsOptional()
  @IsEnum(PrioridadeFornecedor)
  prioridade?: PrioridadeFornecedor;
}
