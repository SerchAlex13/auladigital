import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';

@Module({
  imports: [AlumnosModule, CarrerasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
