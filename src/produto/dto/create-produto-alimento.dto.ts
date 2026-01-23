import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdutoAlimentoDto {
  @IsString()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsString()
  setorPreparo: string;

  @IsOptional()
  @IsBoolean()
  disponivel?: boolean;

  @IsNumber()
  peso: number;

  @IsString()
  ingredientes: string;

  @IsDateString()
  dataValidade: string;

  @IsString()
  classAlimentar: string;

  @IsNumber()
  quantPorEmba: number;
}
