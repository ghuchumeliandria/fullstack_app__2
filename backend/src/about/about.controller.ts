import { Controller, Get, UseGuards, Body, Patch } from '@nestjs/common';
import { AboutService } from './about.service';
import { IsAuthGuard } from '../auth/guards/isAuth.guard';
import { UserId } from '../users/decorators/user.decorator';

@Controller('about')
@UseGuards(IsAuthGuard)
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get('me')
  @UseGuards(IsAuthGuard)
  getMyAbout(@UserId() userId: string) {
    return this.aboutService.getByUserId(userId);
  }

  @Patch()
  updateMyAbout(@UserId() userId: string, @Body('content') content: string) {
    return this.aboutService.update(userId, content);
  }
}
