import { Controller, UseFilters } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { ExceptionFilter } from 'src/@shared/exception-filters/rpc-exception.filter';

import { CreateTaskDto } from './dtos/create-task.dto';

@Controller()
export class TasksController {
  @UseFilters(new ExceptionFilter())
  @GrpcMethod('TasksService', 'Create')
  async create(data: CreateTaskDto) {
    return { message: 'Task scheduled' };
  }
}
