import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CarrerasController } from './carreras.controller';
import { CarrerasService } from './carreras.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [CarrerasController],
  providers: [CarrerasService]
})
export class CarrerasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('carreras').apply(AuthMiddleware).forRoutes('carreras');

    consumer.apply(LoggerMiddleware).forRoutes(
      {path: '/carreras', method: RequestMethod.GET}
    );
  }
}
