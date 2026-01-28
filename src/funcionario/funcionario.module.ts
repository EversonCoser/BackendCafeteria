import { Module } from '@nestjs/common';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  imports: [PrismaModule ],
})
export class FuncionarioModule {}
