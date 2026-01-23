import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdutoBebidaDto {
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
  volume: number;

  @IsNumber()
  calorias: number;

  @IsString()
  GelOuQuente: string;

  @IsBoolean()
  acucar: boolean;

  @IsBoolean()
  lactose: boolean;

  @IsString()
  ingredientes: string;
}
