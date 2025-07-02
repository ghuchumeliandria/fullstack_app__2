import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: process.env.FRONT_URL,
//     credentials: true,
//   });

//   app.use(cookieParser());
  
  

//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       transform: true,
//     }),
//   );

//   await app.listen(process.env.PORT ?? 3001);
// }
// bootstrap();

// main.ts

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://fullstack-app-2-vq...vercel.app'], 
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();