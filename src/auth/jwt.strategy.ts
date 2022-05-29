import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { secretConstants } from 'secret';
import { User } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretConstants.jwt,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    try {
      const user = await this.usersService.findOne(payload.id);
      return user;
    } catch {
      throw new UnauthorizedException();
    }
  }
}