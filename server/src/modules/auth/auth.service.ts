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
// import { IUser } from 'src/@types/db/user.interface';
import { User } from '@prisma/client';

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
    // if(form.id != user.id){}
    // console.log(user.password);
    // console.log(form.password);
    // const hashed: string = await genSalt(10).then((salt: string) => hash(form.password, salt));
    // const salt = await genSalt(10);
    // const hashed = await hash(form.password, salt);
    // console.log(hashed);
    // if (hashed != user.password) {
    //   throw new UnauthorizedException();
    // }
    const isMatch = await compare(form.password, user.password);
    // console.log(isMatch);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    if (user.auth == 0) {
      throw new BadRequestException();
    }
  }

  // public async isAuth({ id, ...others }: SigninFormDTO): Promise<number> {
  //   const user = await this.prismaService.user.findUnique({
  //     where: { id: id },
  //   });

  //   if (!user) {
  //     throw new BadRequestException();
  //   }

  //   return user.auth;
  // }

  public async signup({ password, ...others }: SignupFormDTO): Promise<void> {
    const hashed: string = await genSalt(10).then((salt: string) => hash(password, salt));
    console.log(hashed);
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
