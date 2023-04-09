import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create({ password, ...data }: CreateUserDto) {
    const user = this.usersRepository.create({
      ...data,
      password,
    });

    return user;
  }
}
