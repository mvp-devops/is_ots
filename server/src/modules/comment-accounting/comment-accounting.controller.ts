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
  Res,
} from "@nestjs/common";
import { setCurrentDate } from "../../../common/utils";
import {
  CheckListSets,
  CollectiveCheckSheetHeaders,
  DesignDocumentCommentView,
} from "../../../common/types/comments-accounting";
import { CommentAccountingService } from "./comment-accounting.service";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";
import { Response } from "express";

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

  @Post("/download")
  async download(
    @Body("body")
    body: {
      headers: CollectiveCheckSheetHeaders;
      data: DesignDocumentCommentView[];
    },
    @Res() res: Response
  ) {
    const { headers, data } = body;
    let fileLocation = await this.service.exportExcelFile(headers, data);
    res.header(
      "Content-disposition",
      `attachment; filename=CCKSH_${setCurrentDate()}.xlsx`
    );
    res.type(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.download(fileLocation, `CCKSH_${setCurrentDate()}.xlsx`, (err) => {
      if (err) console.log(err);
    });
  }
}
