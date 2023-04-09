import { Module } from '@nestjs/common';
import { EncryptModule } from '@lib/encrypt';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [EncryptModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
