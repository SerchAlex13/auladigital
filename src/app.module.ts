import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { IndexController } from './index/index.controller';
import { ActividadesModule } from './actividades/actividades.module';

@Module({
  imports: [AlumnosModule, CarrerasModule, ActividadesModule],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
