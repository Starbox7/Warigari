import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Redirect } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { SignupFormDTO } from 'src/modules/auth/dtos/signup-form.dto';
import { SigninFormDTO } from './dtos/signin-form.dto';
import { ISignin } from 'src/@types/auth/auth.interface';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  public async signup(
    @Body()
    form: SignupFormDTO,
  ): Promise<void> {
    await this.authService.isConflict(form);
    await this.authService.signup(form);
    await this.authService.sendAuthenticationMail(form);
  }

  @HttpCode(HttpStatus.OK)
  @Get('signup')
  @Redirect('/views/auth-finish')
  public async changeAuthState(@Query('email') email: string): Promise<void> {
    await this.authService.findUserByEmail(email);
    await this.authService.changeAuthByEmail(email);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  public async signin(
    @Body()
    form: SigninFormDTO,
  ): Promise<ISignin> {
    const user = await this.authService.findUserById(form);
    await this.authService.isValid(user, form);
    const tokens = this.authService.signin(user.idx);

    return {
      accessToken: (await tokens).accessToken,
      refreshToken: (await tokens).refreshToken,
      nickname: user.nickname,
      status: user.status,
      profile: user.profile,
      statusMessage: user.statusMessage,
    };
  }
}
