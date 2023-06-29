import { IsString } from 'class-validator';

export class SignupFormDTO {
  @IsString()
  id: string;

  @IsString()
  password: string;

  @IsString()
  nickname: string;

  @IsString()
  email: string;
}
