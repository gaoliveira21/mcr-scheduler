import { Module } from '@nestjs/common';
import { EncryptModule } from '@lib/encrypt';
import { PrismaClientModule } from '@lib/prisma-client';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [EncryptModule, PrismaClientModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository],
})
export class UsersModule {}
