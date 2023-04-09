import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

import { CreateTaskDto } from './dtos/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectQueue('tasks') private tasksQueue: Queue) {}

  async create({ userId, runAt, metadata }: CreateTaskDto): Promise<string> {
    const job = await this.tasksQueue.add(
      { userId, metadata },
      { attempts: 3, delay: new Date(runAt).getTime() - Date.now() },
    );

    return job.id.toString();
  }
}
