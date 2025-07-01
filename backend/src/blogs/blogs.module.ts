import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schema/blog.entity';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'blog', schema: BlogSchema }])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
