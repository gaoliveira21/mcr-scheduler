import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { CreateTaskDto } from './dtos/create-task.dto';

@Controller()
export class TasksController {
  @GrpcMethod('TasksService', 'Create')
  async create(
    data: CreateTaskDto,
    _metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ) {
    console.log(call.request);
    return data.metadata;
  }
}
