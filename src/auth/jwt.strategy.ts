import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { secretConstants } from 'secret';
import { User } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretConstants.jwt,
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.usersService.findOne(payload.sub);

    if (!user) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
    }    
    return user;
  }
}