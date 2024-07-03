import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('rest-api');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Para que otros sitios puedan consultar la API y no dé error de CORS
  app.enableCors({
    // Para especificar dominios que sí pueden acceder
    origin: 'https://faztweb.com'
  });

  await app.listen(3000);
}
bootstrap();
