import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ValidationPipe,
  UseGuards,
  Put
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/decorators/users.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('me')
  getCurrentUser(@AuthUser() user: User): User {
    user.me = true;
    return user;
  }

  @Get('username/:username')
  async getUsersByName(@Param('username') username: string): Promise<User> {
    const user = await this.usersService.getUserbyUsername(username);
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('me')
  update(
    @AuthUser() user: User,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUserInfo(user._id, updateUserDto);
  }

  @Put('me/photo')
  updatePhoto(
    @AuthUser() user: User,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateAvatar(user._id, updateUserDto);
  }

  @Put('me/password')
  updatePass(
    @AuthUser() user: User,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updatePassword(user._id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
