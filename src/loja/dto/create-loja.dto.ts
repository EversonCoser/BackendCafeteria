import { IsNotEmpty, IsString } from 'class-validator'

export class CreateLojaDto {
  @IsNotEmpty()
  @IsString()
  cnpj: string

  @IsNotEmpty()
  @IsString()
  endereco: string

  @IsNotEmpty()
  @IsString()
  telefone: string

}
