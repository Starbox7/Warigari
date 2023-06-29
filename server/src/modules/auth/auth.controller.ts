import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { sendAuthenticationMail } from 'src/common/utils/mail';
import { AuthService } from 'src/modules/auth/auth.service';
import { SignupFormDTO } from 'src/modules/auth/dtos/signup-form.dto';

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
    await sendAuthenticationMail(form.email)
      .then((response) => {})
      .catch((error) => {});
  }

  @HttpCode(HttpStatus.OK)
  @Get('signup')
  public async changeAuthState(@Query('email') email: string): Promise<void> {
    await this.authService.findUserByEmail(email);
    await this.authService.changeAuthByEmail(email);
  }
}
