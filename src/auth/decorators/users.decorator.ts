import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/interfaces/users.interface';

export const AuthUser = createParamDecorator<unknown, ExecutionContext, User>(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);