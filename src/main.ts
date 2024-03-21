import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service = app.get(ConfigService)
  const PORT = service.get('PORT')
  app.enableCors()

  await app.listen(PORT);
}
bootstrap();
