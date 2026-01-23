import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoBebidaDto } from './create-produto-bebida.dto';

export class UpdateProdutoBebidaDto extends PartialType(CreateProdutoBebidaDto) {}