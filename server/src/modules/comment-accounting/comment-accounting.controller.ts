import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from "@nestjs/common";
import { CheckListSets } from "common/types/comments-accounting";
import { CommentAccountingService } from "./comment-accounting.service";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";

@Controller("api/comment-accounting")
export class CommentAccountingController {
  constructor(private readonly service: CommentAccountingService) {}

  @Post("/add")
  create(@Body() dto: CreateDesignDocumentCommentDto) {
    return this.service.createOne(dto);
  }

  @Post("/add/many")
  createMany(@Body("items") dto: CreateDesignDocumentCommentDto[]) {
    return this.service.createMany(dto);
  }

  @Get("/find")
  findAll(@Query() query: { parrentTarget: string; parrentId: string }) {
    const { parrentTarget, parrentId } = query;
    return this.service.findAll(parrentTarget, parrentId);
  }

  @Get("/find/:id")
  findOne(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.findOne(target, id);
  }
  @Put("/edit/:id")
  update(
    @Param("id") id: string,
    @Query() query: { target: string },
    @Body() dto: UpdateDesignDocumentCommentDto
  ) {
    const { target } = query;
    // return this.service.update(id, target, dto,);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.remove(target, id);
  }
}
