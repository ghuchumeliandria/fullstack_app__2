import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { SignInDto } from './dto/SignIn.dto';
import { IsAuthGuard } from './guards/isAuth.guard';
import { UserId } from 'src/users/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto : SignUpDto){
    return this.authService.signUp(signUpDto)
  }

  @Post('sign-in')
  signIn(@Body() signInDto : SignInDto){
    return this.authService.signIn(signInDto)
  }

  @Get('/current-user')
  @UseGuards(IsAuthGuard)
  getCurrentUser(@UserId() userId){
    return this.authService.getCurrentUser(userId)
  }
}
