import { Injectable } from '@nestjs/common';

import {
  CreateUserInput,
  CreateUserOutput,
} from './interfaces/create-user.interface';

@Injectable()
export class UsersRepository {
  async create(createUserInput: CreateUserInput): Promise<CreateUserOutput> {
    return {
      id: '1',
      name: createUserInput.name,
      email: createUserInput.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
