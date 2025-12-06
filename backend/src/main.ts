import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import corsPlugin from './plugins/cors.plugin';
import swaggerPlugin from './plugins/swagger.plugin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  swaggerPlugin(app);
  corsPlugin(app);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
