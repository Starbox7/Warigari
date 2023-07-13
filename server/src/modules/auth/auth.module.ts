import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/config/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Token } from 'src/common/utils/token';

@Module({
  providers: [AuthService, PrismaService, Token],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
