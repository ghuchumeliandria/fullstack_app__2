import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutService } from './about.service';
import { AboutSchema } from './schema/about.schema';
import { AboutController } from './about.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'about', schema: AboutSchema }]),
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
