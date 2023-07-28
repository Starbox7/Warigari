import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Token } from '../utils/token';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtMiddleware implements NestMiddleware<Request, Response> {
  private readonly configService: ConfigService;
  private readonly accessService: JwtService;
  private readonly refreshService: JwtService;

  constructor(private readonly token: Token) {
    this.configService = new ConfigService();
    this.accessService = new JwtService({
      secret: this.configService.get('JWT_ACCESS_KEY'),
      signOptions: {
        expiresIn: '60s',
      },
    });
    this.refreshService = new JwtService({
      secret: this.configService.get('JWT_REFRESH_KEY'),
      signOptions: {
        expiresIn: '5m',
      },
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    if (!('accesstoken' in req.headers) && !('refreshtoken' in req.headers)) {
      throw new BadRequestException();
    }
    if (!('refreshtoken' in req.headers)) {
      throw new BadRequestException();
    }

    if ('accesstoken' in req.headers) {
      const accessToken = req.headers['accesstoken'];
      const refreshToken = req.headers['refreshtoken'];
      try {
        const decoded = this.accessService.verify(accessToken.toString());
        const tokens = await this.token.createAllToken(decoded.idx);
        if (typeof decoded === 'object' && decoded.hasOwnProperty('idx')) {
          req.body.idx = decoded.idx;
          req.body.accessToken = tokens.accessToken;
          req.body.refreshToken = tokens.refreshToken;
        }
      } catch (error) {
        const decoded = this.refreshService.verify(refreshToken.toString());
        const tokens = await this.token.createAllToken(decoded.idx);
        if (typeof decoded === 'object' && decoded.hasOwnProperty('idx')) {
          req.body.idx = decoded.idx;
          req.body.accessToken = tokens.accessToken;
          req.body.refreshToken = tokens.refreshToken;
        }
      }
    } else {
      const refreshToken = req.headers['refreshtoken'];
      const decoded = this.refreshService.verify(refreshToken.toString());
      const tokens = await this.token.createAllToken(decoded.idx);
      if (typeof decoded === 'object' && decoded.hasOwnProperty('idx')) {
        req.body.idx = decoded.idx;
        req.body.accessToken = tokens.accessToken;
        req.body.refreshToken = tokens.refreshToken;
      }
    }
    next();
  }
}
