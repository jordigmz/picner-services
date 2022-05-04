import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Area } from './interfaces/areas.interface';

@Injectable()
export class AreasService {
  constructor(@InjectModel('Area') 
  private readonly areaModel: Model<Area>) {}

  async create(createAreaDto: CreateAreaDto): Promise<Area> {
    const newArea = new this.areaModel(createAreaDto);
    return await newArea.save();
  }

  async findAll(): Promise<Area[]> {
    return await this.areaModel.find().exec();
  }

  async findOne(id: string): Promise<Area> {
    return await this.areaModel.findById(id).exec();
  }

  async update(id: string, updateAreaDto: UpdateAreaDto): Promise<Area> {
    return await this.areaModel.findByIdAndUpdate(id, updateAreaDto).exec();
  }

  async remove(id: string): Promise<Area> {
    return await this.areaModel.findByIdAndDelete(id).exec();
  }
}
