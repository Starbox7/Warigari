import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { FriendService } from './friend.service';
import { IFindUserById } from 'src/@types/friend/friend.interface';
import { FriendFormDTO } from './dtos/friend-form.dto';
import { Friend } from '@prisma/client';

@Controller('friend')
export class FriendController {
  public constructor(private readonly friendService: FriendService) {}

  @HttpCode(HttpStatus.OK)
  @Get('find/:id')
  public async findId(@Param() params: any): Promise<IFindUserById> {
    const friend = this.friendService.findUserById(params.id);
    return {
      id: (await friend).id,
      nickname: (await friend).nickname,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Get('request/:id')
  public async request(
    @Param() params: any,
    @Body()
    form: FriendFormDTO,
  ): Promise<void> {
    const send = await this.friendService.findUserByIdx(form.idx);
    await this.friendService.sendFriendRequest(send.id, params.id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('find')
  public async findRequest(
    @Body()
    form: FriendFormDTO,
  ): Promise<Array<Friend>> {
    const user = await this.friendService.findUserByIdx(form.idx);
    return await this.friendService.findAllFriendRequest(user.id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('refusal/:idx')
  public async refusal(@Param() params: any): Promise<void> {
    await this.friendService.refusalFriendRequest(params.idx);
  }

  @HttpCode(HttpStatus.OK)
  @Get('accept/:idx')
  public async accept(@Param() params: any): Promise<void> {
    await this.friendService.acceptFriendRequest(params.idx);
  }
}
