import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.entity';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/SignIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp({ fullName, email, password, userImage }: SignUpDto) {
    const existUser = await this.userModel.findOne({ email });

    if (existUser) throw new BadRequestException('user already exist');

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await this.userModel.create({
      fullName,
      email,
      password: hashedPass,
      userImage,
    });

    return {
      message: 'User created successfully',
      data: {
        fullName,
        email,
        userImage,
        _id: newUser._id,
      },
    };
  }

  async signIn({ email, password }: SignInDto) {
    const existUser = await this.userModel
      .findOne({ email })
      .select('+password');

    if (!existUser) throw new BadRequestException('Invalid Credentials');

    const isPassEqual = await bcrypt.compare(password, existUser.password);
    if (!isPassEqual) throw new BadRequestException('Invalid Credentials');

    const payload = { id: existUser._id };

    const token = this.jwtService.sign(payload, { expiresIn: '1d' });

    return token;
  }

  async getCurrentUser(userId: string) {
    return this.userModel.findById(userId);
  }
}
