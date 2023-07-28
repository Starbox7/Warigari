import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/config/prisma.service';
import { FriendFormDTO } from './dtos/friend-form.dto';
import { Friend, User } from '@prisma/client';

@Injectable()
export class FriendService {
  public constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  public async findUserByIdx(idx): Promise<User> {
    return await this.prismaService.user
      .findUnique({
        where: { idx: parseInt(idx, 10) },
      })
      .then((find) => {
        return find;
      });
  }
  public async findUserById(id): Promise<User> {
    return await this.prismaService.user
      .findUnique({
        where: { id: id },
      })
      .then((find) => {
        return find;
      });
  }

  public async sendFriendRequest(send, receive): Promise<void> {
    await this.prismaService.friend.create({
      data: {
        send: send,
        receive: receive,
        friend: 0,
        block: 0,
      },
    });
  }
  public async findAllFriendRequest(id): Promise<Friend[]> {
    return await this.prismaService.friend.findMany({
      where: {
        receive: id,
      },
    });
  }

  public async refusalFriendRequest(idx): Promise<void> {
    await this.prismaService.friend.delete({
      where: {
        idx: parseInt(idx, 10),
      },
    });
  }

  public async acceptFriendRequest(idx): Promise<void> {
    await this.prismaService.friend.update({
      where: {
        idx: parseInt(idx, 10),
      },
      data: {
        friend: 1,
      },
    });
  }

  //   public async findAllOnlineFriend() {}
  //   public async findAllOfflineFriend() {}
  //   public async findAllBlockFriend() {}
}
