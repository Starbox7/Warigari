import { Controller, Get, Render } from '@nestjs/common';

@Controller('views')
export class ViewsController {
  constructor() {}

  @Get('auth-finish')
  @Render('auth-finish')
  public async authFinish() {}
}
