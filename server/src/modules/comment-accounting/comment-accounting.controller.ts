import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  Res,
} from "@nestjs/common";
import { setCurrentDate } from "../../../common/utils";
import { CommentAccountingService } from "./comment-accounting.service";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";
import type { Response } from "express";
import * as uuid from "uuid";

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
  findAll(
    @Query()
    query: {
      parrentTarget: string;
      parrentId?: string;
      parrentIds?: string[];
    }
  ) {
    const { parrentTarget, parrentId, parrentIds } = query;

    return this.service.findAll(parrentTarget, parrentId, parrentIds);
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

  @Get("/download")
  async download(
    @Query()
    query: { target: string; parrentId?: string; parrentIds?: string[] },
    @Res() res: Response
  ) {
    const { target, parrentId, parrentIds } = query;
    let fileLocation = await this.service.exportExcelFile(
      target,
      parrentId,
      parrentIds
    );
    const fileName = `${uuid.v4()}_${setCurrentDate()}.xlsx`;
    res.header("Content-disposition", `attachment; filename=${fileName}`);
    res.type(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.download(fileLocation, fileName, (err) => {
      console.log(fileLocation);
      console.log(fileName);
      if (err) console.log(err);
    });
  }
}
