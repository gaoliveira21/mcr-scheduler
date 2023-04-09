import { Controller, UseFilters } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { ExceptionFilter } from 'src/@shared/exception-filters/rpc-exception.filter';

import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseFilters(new ExceptionFilter())
  @GrpcMethod('TasksService', 'Create')
  async create(data: CreateTaskDto) {
    const jobId = await this.tasksService.create(data);

    return { message: 'Task scheduled', jobId };
  }
}
