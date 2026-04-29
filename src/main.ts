import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,       // ignora campos no declarados en el DTO
      forbidNonWhitelisted: true,
      transform: true,       // convierte tipos automáticamente (ej: string → number)
    }),
  );

  await app.listen(5005);
}
bootstrap();