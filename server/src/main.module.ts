import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { PrismaService } from 'src/common/config/prisma.service';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class MainModule {}
