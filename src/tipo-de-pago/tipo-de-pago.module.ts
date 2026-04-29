import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDePago } from './entities/tipo-de-pago.entity';
import { TipoDePagoController } from './tipo-de-pago.controller';
import { TipoDePagoService } from './tipo-de-pago.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDePago])],
  controllers: [TipoDePagoController],
  providers: [TipoDePagoService],
  exports: [TipoDePagoService],
})
export class TipoDePagoModule {}