import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('tasks')
export class TasksConsumer {
  @Process()
  async run(job: Job<unknown>) {
    console.log('job running...', job.data);
  }
}
