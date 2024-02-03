import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config();

  const config = new DocumentBuilder()
    .setTitle('Estação Alerta')
    .setVersion('1.0')
    .addTag('alert-station')
    .build();

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
