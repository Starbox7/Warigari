import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { MainModule } from './main.module';

async function bootstrap() {
  const server = await NestFactory.create(MainModule);
  server.useGlobalFilters(new HttpExceptionFilter());
  await server.listen(3000);
}

bootstrap();
