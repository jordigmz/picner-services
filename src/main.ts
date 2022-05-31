import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Picner services - API REST')
    .setDescription('Documentación de los servicios web app Picner')
    .setVersion('1.0')
    .addTag('areas')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.use('/img', express.static('img'));
  app.use(express.json({ limit: '10mb' }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
}
bootstrap();
