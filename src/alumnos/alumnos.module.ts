import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService]
})
export class AlumnosModule {}
