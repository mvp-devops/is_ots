import { Module } from '@nestjs/common';
import { CommentAccountingService } from './comment-accounting.service';
import { CommentAccountingController } from './comment-accounting.controller';

@Module({
  controllers: [CommentAccountingController],
  providers: [CommentAccountingService]
})
export class CommentAccountingModule {}
