import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/common/config/prisma.service';
import { UserAuthState, UserState } from 'src/common/enums/user-enum';
import { authMailTemplate } from 'src/common/utils/auth-mail-template';
import { sendMail } from 'src/common/utils/mail';
import { SignupFormDTO } from 'src/modules/auth/dtos/signup-form.dto';

@Injectable()
export class AuthService {
  public constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  public async isConflict({ id, ...others }: SignupFormDTO): Promise<void> {
    await this.prismaService.user
      .findFirst({
        where: { id: id },
      })
      .then((find) => {
        if (find) {
          throw new ConflictException();
        }
      });
  }

  public async signup({ password, ...others }: SignupFormDTO): Promise<void> {
    const hashed: string = await genSalt(10).then((salt: string) => hash(password, salt));
    await this.prismaService.user.create({
      data: {
        ...others,
        password: hashed,
        status: UserState.offline,
        auth: UserAuthState.notVerify,
      },
    });
  }

  public async sendAuthenticationMail({
    nickname,
    email,
    ...others
  }: SignupFormDTO): Promise<void> {
    return await sendMail(
      email,
      `[와리가리] 회원가입 인증 요청`,
      authMailTemplate(nickname, email),
    );
  }

  public async findUserByEmail(email: string): Promise<void> {
    await this.prismaService.user
      .findFirst({
        where: { email: email },
      })
      .then((find) => {
        if (!find) {
          throw new ConflictException();
        }
      });
  }

  public async changeAuthByEmail(email: string): Promise<void> {
    await this.prismaService.user.update({
      where: { email: email },
      data: { auth: UserAuthState.verify },
    });
  }
}
