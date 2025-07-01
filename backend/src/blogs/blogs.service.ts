import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schema/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('blog') private blogModel: Model<Blog>) {}

  create(createBlogDto: CreateBlogDto, userId: string) {
    if (!userId) throw new ForbiddenException('User not authenticated');
    return this.blogModel.create({ ...createBlogDto, author: userId });
  }

  findAll() {
    return this.blogModel.find().populate('author', 'fullName');
  }

  findByUser(userId: string) {
    return this.blogModel
      .find({ author: userId })
      .sort({ createdAt: -1 })
      .populate('author', 'fullName');
  }

  findOne(id: string) {
    return this.blogModel.findById(id).populate('author', 'fullName');
  }

  async update(id: string, dto: UpdateBlogDto, userId: string) {
    const blog = await this.blogModel.findById(id);
    if (!blog) throw new NotFoundException('Blog not found');
    if (blog.author.toString() !== userId) {
      throw new ForbiddenException('Not authorized to update this blog');
    }
    return this.blogModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(blogId: string, userId: string) {
    const blog = await this.blogModel.findById(blogId);
    if (!blog) throw new NotFoundException('Blog not found');
    if (blog.author.toString() !== userId) {
      throw new ForbiddenException('Not authorized to delete this blog');
    }
    return this.blogModel.findByIdAndDelete(blogId);
  }
}
