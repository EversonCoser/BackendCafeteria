import { Module } from '@nestjs/common';
import { HistoricoService } from './historico.service';
import { HistoricoController } from './historico.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [HistoricoService],
  controllers: [HistoricoController],
  imports: [PrismaModule],
})
export class HistoricoModule {}
