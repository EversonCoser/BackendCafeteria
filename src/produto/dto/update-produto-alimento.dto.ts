import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoAlimentoDto } from './create-produto-alimento.dto';

export class UpdateProdutoAlimentoDto extends PartialType(CreateProdutoAlimentoDto) {}