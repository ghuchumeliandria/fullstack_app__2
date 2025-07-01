import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About } from './schema/about.schema';

@Injectable()
export class AboutService {
  constructor(@InjectModel('about') private aboutModel: Model<About>) {}

  async getByUserId(userId: string) {
    const about = await this.aboutModel.findOne({ user: userId });
    return about || { content: '' }; 
  }

  async update(userId: string, content: string) {
    const about = await this.aboutModel.findOne({ user: userId });
    if (about) {
      about.content = content;
      return about.save();
    } else {
      return this.aboutModel.create({ user: userId, content });
    }
  }
}
