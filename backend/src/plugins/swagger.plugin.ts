import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function swaggerPlugin(instance: INestApplication): Promise<void> {
  try {
    const config = new DocumentBuilder()
      .setTitle('Storage-Manager')
      .setDescription('A simple API to manage a store inventory.')
      .setVersion('1.0')
      .build();
    const documentFactory = () =>
      SwaggerModule.createDocument(instance, config);
    SwaggerModule.setup('docs', instance, documentFactory);
  } catch (error) {
    console.log(error);
  }
}

export default swaggerPlugin;
