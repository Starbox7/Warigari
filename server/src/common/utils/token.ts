import { JwtService } from '@nestjs/jwt';
import { IToken } from 'src/@types/token/tokens.interface';
import { ConfigService } from '@nestjs/config';
import { tokenFormDTO } from 'src/modules/auth/dtos/token-form.dto';

export class Token {
  private readonly accessService: JwtService;
  private readonly refreshService: JwtService;
  private readonly configService: ConfigService;

  constructor() {
    this.configService = new ConfigService();
    this.accessService = new JwtService({
      secret: this.configService.get('JWT_ACCESS_KEY'),
      signOptions: {
        expiresIn: '5m',
      },
    });
    this.refreshService = new JwtService({
      secret: this.configService.get('JWT_REFRESH_KEY'),
      signOptions: {
        expiresIn: '15d',
      },
    });
  }

  public async createAccessToken(idx: tokenFormDTO): Promise<string> {
    const accessPayload = { idx: idx };
    return await this.accessService.signAsync(accessPayload);
  }

  public async createRefreshToken(idx: tokenFormDTO): Promise<string> {
    const refreshPayload = { idx: idx };
    return await this.refreshService.signAsync(refreshPayload);
  }

  public async createAllToken(idx: tokenFormDTO): Promise<IToken> {
    const accessToken = await this.createAccessToken(idx);
    const refreshToken = await this.createRefreshToken(idx);
    return { accessToken, refreshToken };
  }
}
