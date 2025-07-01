import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async updateProfile(
    userId: string,
    update: { fullName?: string; image?: string },
  ) {
    const user = await this.userModel.findById(userId);
    if (!user) throw new Error('User not found');

    if (update.fullName) user.fullName = update.fullName;
    if (update.image) user.userImage = update.image;

    await user.save();

    return {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      userImage: user.userImage,
    };
  }
}
