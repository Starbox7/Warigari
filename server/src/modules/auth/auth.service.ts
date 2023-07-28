import {
  ConflictException,
  Inject,
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/common/config/prisma.service';
import { UserAuthState, UserState } from 'src/common/enums/user-enum';
import { authMailTemplate } from 'src/common/utils/auth-mail-template';
import { sendMail } from 'src/common/utils/mail';
import { SignupFormDTO } from 'src/modules/auth/dtos/signup-form.dto';
import { SigninFormDTO } from './dtos/signin-form.dto';
import { User } from '@prisma/client';
import { IToken } from 'src/@types/token/tokens.interface';
import { Token } from 'src/common/utils/token';

@Injectable()
export class AuthService {
  public constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
    private readonly token: Token,
  ) {}

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

  public async findUserById({ id, ...others }: SigninFormDTO): Promise<User> {
    return await this.prismaService.user
      .findUnique({
        where: { id: id },
      })
      .then((find) => {
        return find;
      });
  }

  public async isValid(user, form): Promise<void> {
    const isMatch = await compare(form.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    if (user.auth == 0) {
      throw new BadRequestException();
    }
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

  public async signin(idx): Promise<IToken> {
    return await this.token.createAllToken(idx);
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
