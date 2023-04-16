import { BadRequestException, Injectable } from '@nestjs/common';
import { EncryptService } from '@lib/encrypt';

import { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptService: EncryptService,
  ) {}

  async create({ password, ...data }: CreateUserDto) {
    const existingUser = await this.usersRepository.findByEmail(data.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const encryptedPassword = await this.encryptService.encrypt(password);

    const user = await this.usersRepository.create({
      ...data,
      password: encryptedPassword,
    });

    return user;
  }

  async getUserData(userId: string) {
    const user = await this.usersRepository.findById(userId);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
