import { JwtModule, JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/config/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: 'mysecret',
        signOptions: { expiresIn: '60s' },
      }),
    }),
  ],
  providers: [AuthService, PrismaService, JwtService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
