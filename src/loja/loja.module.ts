import { Module } from '@nestjs/common';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [LojaService],
  controllers: [LojaController],
  imports: [PrismaModule]
})
export class LojaModule {}
