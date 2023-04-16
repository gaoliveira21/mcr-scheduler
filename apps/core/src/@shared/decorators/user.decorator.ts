import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type UserData = {
  userId: string;
};

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserData => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
