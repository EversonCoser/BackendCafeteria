import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PessoaService],
  controllers: [PessoaController],
  imports: [PrismaModule]
})
export class PessoaModule {}
