import { IsNumber, IsString } from 'class-validator';

export class FriendFormDTO {
  @IsNumber()
  idx: number;

  @IsString()
  id: string;

  @IsString()
  nickname: string;
}
