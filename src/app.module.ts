import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FeedModule } from './main/feed/feed.module';
import { AuthModule } from './main/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    FeedModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule {}
