declare const module: any

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from './pipe/validation/validation.pipe';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(8080);

  if ( module.hot ) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap();
