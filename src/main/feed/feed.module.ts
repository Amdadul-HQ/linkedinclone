import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './feed.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [FeedService, PrismaService],
  controllers: [FeedController],
})
export class FeedModule {}
