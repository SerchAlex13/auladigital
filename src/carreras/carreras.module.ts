import { Module } from '@nestjs/common';
import { CarrerasController } from './carreras.controller';
import { CarrerasService } from './carreras.service';

@Module({
  controllers: [CarrerasController],
  providers: [CarrerasService]
})
export class CarrerasModule {}
