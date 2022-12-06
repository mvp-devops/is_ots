import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  Put, Header, Res, HttpException, HttpStatus,
} from "@nestjs/common";
import { PositionTreeService } from "./position-tree.service";
import type { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";
import { FileInterceptor } from "@nestjs/platform-express";

import type { CheckListSets } from "../../../common/types/comments-accounting";
import type {ReportRequestParams} from "../../../common/types/report.types";
import type {Response} from "express";
import {setCurrentDate} from "../../../common/utils";
import {existsSync, readFile} from "fs";
import {delay} from "rxjs";

@Controller("api/position-tree")
export class PositionTreeController {
  constructor(private readonly service: PositionTreeService) {}


  @Post("/report")

 async setReport (
    @Body() params: ReportRequestParams,
    @Query() query: {target: string, id: string},
  ) {
    const {target, id} = query;
    const  fileLocation  = await this.service.getReport(target, id, params);

    return fileLocation
  }

  @Get("/report/download")

  getReport (
    @Query() query: {0: string},
    @Res() res: Response
  ) {
    res.header(
      "Content-disposition",
      `attachment; filename=report.pdf`
    );
    res.type(
      "application/pdf"
    );

    res.download(
      query["0"],
      `report.pdf`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }

  /** Загрузка дерева позиций по шаблону */
  @Post("/create/many")
  @UseInterceptors(FileInterceptor("descriptor"))
  sendMany(
    @Query() query: { target?: string, id?: string },
    @UploadedFile() descriptor: any
  ) {
    const { target, id } = query;
    return this.service.sendMany( descriptor, target, id);
  }

  /** Скачивание шаблона загрузки дерева позиций */
  @Get("/download/template")
  async downloadTemplate(@Res() res: Response) {
    const fileLocation = this.service.downloadTemplate("position_tree_template.xlsx");
    res.header(
      "Content-disposition",
      `attachment; filename=position_tree_template.xlsx`
    );
    res.type(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.download(
      fileLocation,
      `position_tree_template.xlsx`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }

  @Post("/add")
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Body() dto: CreatePositionTreeDto,
    @Query() query: { target: string },
    @UploadedFile() file?: any
  ) {
    const { target } = query;
    return this.service.createOne(target, dto, file);
  }

  @Post("/add/many")
  createMany(
    @Body("items") dto: CreatePositionTreeDto[],
    @Query() query: { target: string }
  ) {
    const { target } = query;
    return this.service.createMany(target, dto);
  }

  @Get("/find")
  findAll(@Query() query: { target: string; parrentId?: string }) {
    const { target, parrentId } = query;
    return this.service.findAll(target, parrentId);
  }

  @Get("/find/:id")
  findOne(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.findOne(target, id);
  }

  @Get("/find/folder/:id")
  getFolderPath(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.getItemFolderPath(target, id);
  }

  @Get("/tree")
  getPositionTree() {
    return this.service.getPositionTree();
  }

  @Put("/edit/:id")
  @UseInterceptors(FileInterceptor("file"))
  update(
    @Param("id") id: string,
    @Query() query: { target: string },
    @Body() dto: UpdatePositionTreeDto,
    @UploadedFile() file?: any
  ) {
    const { target } = query;
    return this.service.update(id, target, dto, file);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.remove(id, target);
  }

  @Post("check-list/:target/:id")
  checklist(
    @Param("target") target: string,
    @Param("id") id: string,
    @Body() settings: CheckListSets
  ) {
    return this.service.getCheckList(target, id, settings);
  }

  @Get("/statistic/:id")
  statistic(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.getStatistic(target, id);
  }
}