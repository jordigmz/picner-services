import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AreasModule, UsersModule, MongooseModule.forRoot('mongodb://picnerAdmin:ZdY6VX2QAx9@localhost:27017/picner')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
