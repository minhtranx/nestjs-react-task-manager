import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');

  // const port = 3000;
  await app.listen(serverConfig.port);
  logger.log(`Server is listening on port ${serverConfig.port}`);
}
bootstrap();