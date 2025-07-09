// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Linkedin API')
    .setDescription('API documentation for the admin panel')
    .setVersion('1.0')
    .addTag('Posts') // Optional: group routes
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // URL: /api/docs

  await app.listen(3000);
}
bootstrap();
