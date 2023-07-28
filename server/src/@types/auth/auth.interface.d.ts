export interface ISignin {
  accessToken: string;
  refreshToken: string;
  nickname: string;
  status: number;
  statusMessage?: string;
  profile?: string;
}
