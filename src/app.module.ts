import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AreasModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/picner')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
