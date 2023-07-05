import { IsString } from 'class-validator';

export class SigninFormDTO {
  @IsString()
  id: string;

  @IsString()
  password: string;
}
