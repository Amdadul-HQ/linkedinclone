import { Controller, Post } from '@nestjs/common';

@Controller('feed')
export class FeedController {
  @Post('create')
  createFeed() {
    // Logic to create a feed post
  }
}
