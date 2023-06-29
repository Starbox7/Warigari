export interface IUser {
  idx?: number;
  id: string;
  email: string;
  nickname: string;
  password: string;
  profile?: string;
  status: 0 | 1 | 2 | 3;
  statusMessage?: string;
  auth: 0 | 1;
}
