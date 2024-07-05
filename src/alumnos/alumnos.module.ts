import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoSchema } from './schemas/alumnos.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Alumno', schema: AlumnoSchema}
        ])
    ],
    controllers: [AlumnosController],
    providers: [AlumnosService]
})
export class AlumnosModule {}
