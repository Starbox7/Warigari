import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/config/prisma.service';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class MainModule {}
