import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(usr: string, pass: string): Promise<any> {
    let user;
    if (usr.includes("@")) {
      user = await this.usersService.getUserbyEmail(usr);
    } else {
      user = await this.usersService.getUserbyUsername(usr);
    }

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.usersService.getUserbyUsername(username);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersService.getUserbyEmail(email);
  }
}
