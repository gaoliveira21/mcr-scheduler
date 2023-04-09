import { Injectable } from '@nestjs/common';
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
    const encryptedPassword = await this.encryptService.encrypt(password);

    const user = await this.usersRepository.create({
      ...data,
      password: encryptedPassword,
    });

    return user;
  }
}
