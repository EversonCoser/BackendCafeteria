import { Module } from '@nestjs/common';
import { CargoController } from './cargo.controller';
import { CargoService } from './cargo.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CargoController],
  providers: [CargoService],
  imports: [PrismaModule]
})
export class CargoModule {}
