import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { secretConstants } from 'secret';

@Module({
  imports: [
    AreasModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(secretConstants.databaseUrl)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
