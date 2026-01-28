import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateClienteDto {
  @IsOptional()
  @IsBoolean()
  fidelidade?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  fidelidadePontos?: number;

  @IsOptional()
  @IsString()
  preferAlimentar?: string;
}
