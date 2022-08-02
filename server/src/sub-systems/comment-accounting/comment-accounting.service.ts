import { Injectable } from '@nestjs/common';
import { CreateCommentAccountingDto } from './dto/create-comment-accounting.dto';
import { UpdateCommentAccountingDto } from './dto/update-comment-accounting.dto';

@Injectable()
export class CommentAccountingService {
  create(createCommentAccountingDto: CreateCommentAccountingDto) {
    return 'This action adds a new commentAccounting';
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(id: number, updateCommentAccountingDto: UpdateCommentAccountingDto) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentAccounting`;
  }
}
