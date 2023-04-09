import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksConsumer } from './tasks.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'tasks',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksConsumer],
})
export class TasksModule {}
