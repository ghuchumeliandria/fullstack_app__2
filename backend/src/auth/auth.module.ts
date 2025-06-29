import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/users/schema/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
 imports : [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    JwtModule.register({
      global : true,
      secret : process.env.JWT_SECRET
    }),
     MongooseModule.forFeature([
       {schema : userSchema , name : 'user'}
     ])
   ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
