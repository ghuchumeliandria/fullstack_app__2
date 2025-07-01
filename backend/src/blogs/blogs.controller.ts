import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { IsAuthGuard } from '../auth/guards/isAuth.guard';
import { UserId } from '../users/decorators/user.decorator';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @UseGuards(IsAuthGuard)
  create(@Body() createBlogDto: CreateBlogDto, @UserId() userId: string) {
    return this.blogsService.create(createBlogDto, userId);
  }

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get('me')
  @UseGuards(IsAuthGuard)
  findMyBlogs(@UserId() userId: string) {
    return this.blogsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(IsAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
    @UserId() userId: string,
  ) {
    return this.blogsService.update(id, updateBlogDto, userId);
  }

  @Delete(':id')
  @UseGuards(IsAuthGuard)
  remove(@Param('id') id: string, @UserId() userId: string) {
    return this.blogsService.delete(id, userId);
  }
}
