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
  Put,
  Res,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { setCurrentDate } from "../../../common/utils";
import type { Response } from "express";
import { EquipmentAccountingService } from "./equipment-accounting.service";
import { CreateSummaryListOfEquipmentDto } from "./dto";

@Controller("api/equipment-accounting")
export class EquipmentAccountingController {
  constructor(private readonly service: EquipmentAccountingService) {}

  @Get("/facilities/find")
  findAllFacilityAssets() {
    return this.service.findAllFacilityAssets();
  }

  @Get("/export-to-atlas")
  async download(@Query() query, @Res() res: Response) {
    const { parrentTarget, parrentId, parrentTitle, parrentFolder } = query;
    let fileLocation = await this.service.exportToAtlas(
      parrentTarget,
      parrentId,
      parrentTitle,
      parrentFolder
    );
    const fileName = `${parrentTitle}_export_to_atlas_${setCurrentDate()}.json`;
    res.header("Content-disposition", `attachment; filename=${fileName}`);
    res.type("application/json; charset=UTF-8");

    res.download(fileLocation, `=${fileName}`, (err) => {
      if (err) console.log(err);
    });
  }

  @Post("/summary-list-of-equipment-asset/add")
  @UseInterceptors(
    FileInterceptor("questionare"),
    FileInterceptor("wiringDiagram"),
    FileInterceptor("document"),
    FileInterceptor("verificationProcedure"),
    FileInterceptor("typeApprovalCertificate"),
    FileInterceptor("functionalDiagram"),
    FileInterceptor("mountDocument"),
    FileInterceptor("connectDocument"),
    FileInterceptor("testDocument"),
    FileInterceptor("awpDocument"),
    FileInterceptor("commisionDocument")
  )
  create(
    @Body() dto: CreateSummaryListOfEquipmentDto,
    @Query() query: { parrentFolderPath?: string },
    @UploadedFile() questionare?: any,
    @UploadedFile() wiringDiagram?: any,
    @UploadedFile() document?: any,
    @UploadedFile() verificationProcedure?: any,
    @UploadedFile() typeApprovalCertificate?: any,
    @UploadedFile() functionalDiagram?: any,
    @UploadedFile() mountDocument?: any,
    @UploadedFile() connectDocument?: any,
    @UploadedFile() testDocument?: any,
    @UploadedFile() awpDocument?: any,
    @UploadedFile() commisionDocument?: any
  ) {
    const { parrentFolderPath } = query;
    return this.service.createNewSummaryListOfEquipmentAsset(
      dto,
      questionare,
      wiringDiagram,
      document,
      verificationProcedure,
      typeApprovalCertificate,
      functionalDiagram,
      mountDocument,
      connectDocument,
      testDocument,
      awpDocument,
      commisionDocument,
      parrentFolderPath
    );
  }

  @Get("/summary-list-of-equipment-asset/find/:id")
  findOneSummaryListOfEquipmentAsset(@Param("id") id: string) {
    return this.service.findOneSummaryListOfEquipmentAsset(+id);
  }

  @Get("/summary-list-of-equipment-assets/find")
  findAllSummaryListOfEquipmentAssets(@Query() query) {
    const { parrentTarget, parrentId } = query;
    return this.service.findAllSummaryListOfEquipmentAssets(
      parrentTarget,
      parrentId
    );
  }

  @Delete("/summary-list-of-equipment-asset/remove/:id")
  deleteSummaryListOfEquipmentAsset(@Param("id") id: string) {
    return this.service.deleteSummaryListOfEquipmentAsset(+id);
  }
}
