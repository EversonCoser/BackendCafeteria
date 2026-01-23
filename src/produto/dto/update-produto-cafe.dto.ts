import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoCafeDto } from './create-produto-cafe.dto';

export class UpdateProdutoCafeDto extends PartialType(CreateProdutoCafeDto) {}