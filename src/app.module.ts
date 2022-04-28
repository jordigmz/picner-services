import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AreasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
