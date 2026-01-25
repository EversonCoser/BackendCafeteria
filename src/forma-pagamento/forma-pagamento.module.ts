import { Module } from '@nestjs/common';
import { FormaPagamentoController } from './forma-pagamento.controller';
import { FormaPagamentoService } from './forma-pagamento.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FormaPagamentoController],
  providers: [FormaPagamentoService],
  imports: [PrismaModule]
})
export class FormaPagamentoModule {}
