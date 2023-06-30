import { NestApplication, NestFactory } from '@nestjs/core';
import { join } from 'path';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { MainModule } from './main.module';

async function bootstrap() {
  const server = await NestFactory.create<NestApplication>(MainModule);
  server.useGlobalFilters(new HttpExceptionFilter());

  server.setBaseViewsDir(join(__dirname, '..', 'views'));
  server.setViewEngine('hbs');

  await server.listen(3000);
}

bootstrap();
