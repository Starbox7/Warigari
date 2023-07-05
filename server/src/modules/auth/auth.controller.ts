import { JwtService } from '@nestjs/jwt';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Redirect } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { SignupFormDTO } from 'src/modules/auth/dtos/signup-form.dto';
import { SigninFormDTO } from './dtos/signin-form.dto';
import { IToken } from 'src/@types/token/tokens.interface';
import { Token } from 'src/common/utils/token';

@Controller('auth')
export class AuthController {
  private readonly token: Token;
  public constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

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
  ): Promise<IToken> {
    const user = await this.authService.findUserById(form);
    await this.authService.isValid(user, form);

    console.log('test1');
    const token = new Token(this.jwtService);

    console.log('test2');
    // return await token.createAllToken(user);
    return { accessToken: 'accessToken', refreshToken: 'refreshToken' };
  }
}
