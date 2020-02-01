declare const module: any

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(8080);

  if ( module.hot ) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap();
