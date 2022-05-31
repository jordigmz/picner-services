import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageService } from 'src/commons/image/image.service';
import { UserSchema } from './schema/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, ImageService],
  exports: [UsersService]
})
export class UsersModule {}
