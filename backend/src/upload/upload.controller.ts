import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { memoryStorage } from 'multer';
import cloudinary from 'src/config/cloudinary.config';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file || !file.buffer) {
      throw new InternalServerErrorException('File or buffer not provided');
    }

    try {
      const result = await new Promise((resolve, reject) => {
        console.log(file , "ფილეეეეეეეეეეედსადს")
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'image' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Error:', error);
              return reject(new InternalServerErrorException('Upload failed'));
            }
            console.log(result , 'resuultt')
            resolve(result);
          },
        );
        uploadStream.end(file.buffer);
      });

      return result;
    } catch (error) {
      console.error('Upload failed:', error);
      throw new InternalServerErrorException('Upload to Cloudinary failed');
    }
  }
}
