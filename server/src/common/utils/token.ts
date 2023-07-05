import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IToken } from 'src/@types/token/tokens.interface';

export class Token {
  private readonly JwtService: JwtService;
  private readonly configService: ConfigService;

  constructor(private jwtService: JwtService) {}

  public async createAllToken(user): Promise<IToken> {
    console.log(user.idx);
    console.log(process.env.JWT_ACCESS_KEY);
    const accessPayload = { idx: user.idx };
    const accessToken = await this.jwtService.signAsync(accessPayload, {
      expiresIn: '5m',
    });
    const refreshPayload = { idx: user.idx };
    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }
}
