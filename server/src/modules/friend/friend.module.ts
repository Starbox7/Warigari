import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { PrismaService } from 'src/common/config/prisma.service';
import { FriendController } from './friend.controller';

@Module({
  providers: [FriendService, PrismaService],
  controllers: [FriendController],
  exports: [FriendService],
})
export class FriendModule {}
