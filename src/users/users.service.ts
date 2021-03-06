import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
  @InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userEmail = await this.getUserbyEmail(createUserDto.email);
    const userUsername = await this.getUserbyUsername(createUserDto.username);
    
    if (userEmail) {
      throw new HttpException('Ya existe un usuario con ese correo.', HttpStatus.CONFLICT);
    }

    if (userUsername) {
      throw new HttpException('Ya existe un usuario con ese nombre de usuario.', HttpStatus.CONFLICT);
    }

    const password = hashPassword(createUserDto.password);
    const newUser = new this.userModel({ ...createUserDto, password });

    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async getUserbyUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }

  async getUserbyEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async updateUserInfo(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userEdit = new this.userModel(updateUserDto);

    this.userModel.findByIdAndUpdate(id, updateUserDto).exec();

    return await userEdit.overwrite(updateUserDto);
  }

  async updateAvatar(id: string, updateUserDto: UpdateUserDto): Promise<User> {    
    const userEdit = new this.userModel(updateUserDto);

    this.userModel.findByIdAndUpdate(id, updateUserDto).exec();

    return await userEdit.overwrite(updateUserDto);
  }

  async updatePassword(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    updateUserDto.password = hashPassword(updateUserDto.password);

    const userEdit = new this.userModel(updateUserDto);

    this.userModel.findByIdAndUpdate(id, updateUserDto).exec();

    return await userEdit.overwrite(updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
