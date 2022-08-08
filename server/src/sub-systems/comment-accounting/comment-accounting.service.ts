import { Injectable } from "@nestjs/common";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";

@Injectable()
export class CommentAccountingService {
  create(createCommentAccountingDto: CreateDesignDocumentCommentDto) {
    return "This action adds a new commentAccounting";
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(
    id: number,
    updateCommentAccountingDto: UpdateDesignDocumentCommentDto
  ) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentAccounting`;
  }
}
