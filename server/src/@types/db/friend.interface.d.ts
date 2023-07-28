export interface IFriend {
  idx?: number;
  send: string;
  receive: string;
  friend: 0 | 1;
  block: 0 | 1 | 2 | 3;
  sendMemo?: string;
  receiveMemo?: string;
}
