import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { IndexController } from './index/index.controller';
import { ActividadesModule } from './actividades/actividades.module';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client/dist'),
        }),
        MongooseModule.forRoot('mongodb://localhost/auladigital'),
        AlumnosModule,
        CarrerasModule,
        ActividadesModule
    ],
    controllers: [IndexController],
    providers: [],
})
export class AppModule {}
