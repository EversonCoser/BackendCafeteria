import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateFuncionarioDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    percentComissao: number;

    @IsOptional()
    @IsDate()
    dataAdmissao: Date;

    @IsOptional()
    @IsInt()
    cargoId: number;

    @IsOptional()
    @IsInt()
    lojaId: number;

    @IsOptional()
    @IsBoolean()
    ativo?: boolean;
}
