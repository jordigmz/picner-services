import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';
import { User } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  generateJwt(user: User): Observable<string> {
    return from(this.jwtService.signAsync({user}));
  }

  async validateUser(usr: string, pass: string): Promise<any> {
    let user;
    if (usr.includes('@')) {
      user = await this.usersService.getUserbyEmail(usr);
    } else {
      user = await this.usersService.getUserbyUsername(usr);
    }

    if (user && comparePasswords(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
