import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdutoCafeDto {
  @IsString()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsString()
  setorPreparo: string;

  @IsOptional()
  @IsBoolean()
  disponivel?: boolean;

  @IsString()
  tipoMoagem: string;

  @IsString()
  tipoTorra: string;

  @IsString()
  acidez: string;

  @IsString()
  origem: string;

  @IsNumber()
  tamEmbalagem: number;

  @IsString()
  tipoGrao: string;
}
