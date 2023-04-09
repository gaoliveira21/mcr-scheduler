import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@lib/prisma-client';

import {
  CreateUserInput,
  CreateUserOutput,
} from './interfaces/create-user.interface';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaClientService) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { email } });
  }

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
