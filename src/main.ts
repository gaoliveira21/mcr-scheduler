import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'tasks',
        protoPath: path.join('src', 'tasks', 'proto', 'tasks.proto'),
        loader: {
          objects: true,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
