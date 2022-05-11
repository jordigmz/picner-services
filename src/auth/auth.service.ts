import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private usersService: UsersService,
  ) {}

  async validateUserUsername(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserbyUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserEmail(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserbyEmail(email);
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
