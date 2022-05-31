import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AreaSchema } from './schema/area.schema';
import { ImageService } from 'src/commons/image/image.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Area', schema: AreaSchema }])],
  controllers: [AreasController],
  providers: [AreasService, ImageService]
})
export class AreasModule {}
