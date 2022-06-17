import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Server Port: ',process.env.SERVER_PORT)
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
