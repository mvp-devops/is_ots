import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentAccountingService } from './comment-accounting.service';
import { CreateCommentAccountingDto } from './dto/create-comment-accounting.dto';
import { UpdateCommentAccountingDto } from './dto/update-comment-accounting.dto';

@Controller('comment-accounting')
export class CommentAccountingController {
  constructor(private readonly commentAccountingService: CommentAccountingService) {}

  @Post()
  create(@Body() createCommentAccountingDto: CreateCommentAccountingDto) {
    return this.commentAccountingService.create(createCommentAccountingDto);
  }

  @Get()
  findAll() {
    return this.commentAccountingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentAccountingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentAccountingDto: UpdateCommentAccountingDto) {
    return this.commentAccountingService.update(+id, updateCommentAccountingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentAccountingService.remove(+id);
  }
}
