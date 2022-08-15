import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CommentAccountingService } from "./comment-accounting.service";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";

@Controller("api/comment-accounting")
export class CommentAccountingController {
  constructor(private readonly service: CommentAccountingService) {}

  @Post()
  create(@Body() createCommentAccountingDto: CreateDesignDocumentCommentDto) {
    return this.service.create(createCommentAccountingDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCommentAccountingDto: UpdateDesignDocumentCommentDto
  ) {
    return this.service.update(+id, updateCommentAccountingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.remove(+id);
  }
}
