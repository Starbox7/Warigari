import { IsString } from 'class-validator';

export class tokenFormDTO {
  @IsString()
  idx: string;
}
