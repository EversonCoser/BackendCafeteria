import { IsNotEmpty, IsOptional, IsString, IsNumber, IsEmail } from 'class-validator'

export class CreateFornecedorDto {
  @IsNotEmpty()
  @IsString()
  cnpjcpf: string

  @IsNotEmpty()
  @IsString()
  nome: string

  @IsNotEmpty()
  @IsString()
  endereco: string

  @IsNotEmpty()
  @IsString()
  telefone: string

  @IsNotEmpty()
  @IsString()
  tipoFornecimento: string

  @IsNotEmpty()
  @IsNumber()
  prazoEntrega: number

  @IsNotEmpty()
  @IsEmail()
  email: string
}
