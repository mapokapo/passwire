import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  // Create Express app
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Route input validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  // Cookie parsing
  app.use(cookieParser());

  // Enable cors for main web app domain
  app.enableCors({
    origin: 'http://localhost:8000',
    credentials: true,
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Password Manager API')
    .setDescription('The Password Manager API route docs')
    .setVersion((await import('../package.json')).version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Start app
  await app.listen(3000);
}
bootstrap();
