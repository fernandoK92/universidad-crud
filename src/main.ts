import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Railway deployment
  app.enableCors({
    origin: true, // In production, specify your frontend domain
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Universidad API')
    .setDescription('API para gestionar cursos, materias, estudiantes, etc.')
    .setVersion('1.0')
    .addTag('universidad')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();