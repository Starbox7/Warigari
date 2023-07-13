import { JwtService } from '@nestjs/jwt';
import { IToken } from 'src/@types/token/tokens.interface';

export class Token {
  private readonly accessService: JwtService;
  private readonly refreshService: JwtService;
  constructor() {
    this.accessService = new JwtService({
      secret: process.env.JWT_ACCESS_KEY,
      signOptions: {
        expiresIn: '60s',
      },
    });
    this.refreshService = new JwtService({
      secret: process.env.JWT_REFRESH_KEY,
      signOptions: {
        expiresIn: '5m',
      },
    });
  }

  public async createAllToken(user): Promise<IToken> {
    const accessPayload = { sub: user.id, nickname: user.nickname };
    const accessToken = await this.accessService.signAsync(accessPayload);
    const refreshPayload = { sub: user.id, nickname: user.nickname };
    const refreshToken = await this.refreshService.signAsync(refreshPayload);

    return { accessToken, refreshToken };
  }
}
