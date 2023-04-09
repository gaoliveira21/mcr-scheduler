import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@lib/prisma-client';

import {
  CreateUserInput,
  CreateUserOutput,
} from './interfaces/create-user.interface';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaClientService) {}

  async create(createUserInput: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.prisma.user.create({
      data: { ...createUserInput },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
