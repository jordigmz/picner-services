import { Body, Controller, Get, HttpCode, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) { }

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('register')
  create(@Body(new ValidationPipe({ transform: true, whitelist: true })) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('validate')
  @HttpCode(204)
  validate(): void {
    // Valida el token
  }
}
