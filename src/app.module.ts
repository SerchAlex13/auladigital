import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { IndexController } from './index/index.controller';

@Module({
  imports: [AlumnosModule, CarrerasModule],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
