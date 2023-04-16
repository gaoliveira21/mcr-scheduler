import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../@shared/guards/auth.guard';
import { User, UserData } from '../@shared/decorators/user.decorator';

import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@User() { userId }: UserData) {
    return this.usersService.getUserData(userId);
  }
}
