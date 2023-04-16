import { Module } from '@nestjs/common';
import { EncryptModule } from '@lib/encrypt';
import { PrismaClientModule } from '@lib/prisma-client';
import { JwtModule } from '@nestjs/jwt';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [EncryptModule, PrismaClientModule, JwtModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository],
})
export class UsersModule {}
