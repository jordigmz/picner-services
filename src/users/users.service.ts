import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';
import { hashPassword } from 'src/utils/bcrypt';
import { ImageService } from 'src/commons/image/image.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>, private imageService: ImageService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = hashPassword(createUserDto.password);
    const newUser = new this.userModel({ ...createUserDto, password });

    createUserDto.avatar = await this.imageService.saveImage('users', createUserDto.avatar);

    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async getUserbyUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }

  async getUserbyEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
