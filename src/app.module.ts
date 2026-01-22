import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [PrismaModule, FornecedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
