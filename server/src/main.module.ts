import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { PrismaService } from 'src/common/config/prisma.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ViewsModule } from 'src/modules/views/views.module';
import { FriendModule } from './modules/friend/friend.module';
import { JwtMiddleware } from './common/middleware/jwt.middleware';
import { JwtModule } from '@nestjs/jwt';
import { Token } from './common/utils/token';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ViewsModule,
    FriendModule,
    JwtModule,
  ],
  providers: [PrismaService, Token],
  exports: [PrismaService],
})
export class MainModule implements NestModule {
  // 위에서 작성한 미들웨어를 consumer에 적용 시킨다.
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes({
      path: '/friend/*', // 특정 path 혹은 method에 대해서만 적용 시킬수도 있다.
      method: RequestMethod.ALL,
    });
  }
}
