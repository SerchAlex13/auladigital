import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';

@Module({
  imports: [AlumnosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
