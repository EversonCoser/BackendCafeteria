import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsOptional()
  @IsString()
  foto?: string;

  @IsString()
  setorPreparo: string;

  @IsOptional()
  @IsBoolean()
  disponivel?: boolean;
}
