import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AreaSchema } from './schema/area.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Area', schema: AreaSchema }])],
  controllers: [AreasController],
  providers: [AreasService]
})
export class AreasModule {}
