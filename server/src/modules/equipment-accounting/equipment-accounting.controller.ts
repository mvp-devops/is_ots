import { CreateSignalDto } from "./dto/create-equipment-accounting.dto";
import * as uuid from "uuid";
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseInterceptors,
  Put,
  Res,
  UploadedFiles,
} from "@nestjs/common";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import type { Response } from "express";
import { EquipmentAccountingService } from "./equipment-accounting.service";
import {
  CreateFacilityDto,
  CreateSummaryListOfEquipmentDto,
  UpdateCableLogDto,
  UpdateImpulseLineLogDto,
  UpdateMetrologyDto,
  UpdateMonitoringDto,
  UpdateSignalDto,
} from "./dto";
import { UpdateGeneralInformationDto } from "./dto/update-equipment-accounting.dto";
import type { SummaryListOfEquipmentCreateOrUpdateFiles } from "../../../common/types/equipment-accounting";
import {File} from "../../../common/types/file-storage";
import {NewEquipmentAccountingService} from "./new-equipment-accounting.service";
import {setCurrentDate} from "../../../common/utils";
import {join} from "path";

@Controller("api/equipment-accounting")
export class EquipmentAccountingController {
  constructor(
    private readonly service: EquipmentAccountingService
  ) {}

  /** Получаем единицу оборудования для формирования ОЛ */

  @Get("/equipment-asset/:id")
  getEquipmentAsset(@Param("id") id: string) {
    return this.service.getEquipmentAsset(id);
  };

/** Создание ОЛ */
  @Post("/create-questionnaire/:target")
  createQuestionnaire(
  @Param("target") target: string,
    @Body() data: any
) {
    return this.service.createQuestionnaire(data, target);
  }

  @Get("/questionnaire/download")
  getQuestionnaire (
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

  @Post("/add/new-asset")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "questionnaire", maxCount: 1 },
      { name: "wiringDiagram", maxCount: 100 },
      { name: "document", maxCount: 1 },
      { name: "verificationProcedure", maxCount: 1 },
      { name: "typeApprovalCertificate", maxCount: 1 },
      { name: "functionalDiagram", maxCount: 1 },
      { name: "mountDocument", maxCount: 1 },
      { name: "connectDocument", maxCount: 1 },
      { name: "testDocument", maxCount: 1 },
      { name: "awpDocument", maxCount: 1 },
      { name: "commissionDocument", maxCount: 1 },
    ])
  )
  createNewAsset(
    @Body() data: any,
    @UploadedFiles()
      files?: any
    ) {
    return this.service.createNewAssetData(data,files);
  }



  @Get("/facilities/find")
  findAllFacilityAssets() {
    return this.service.findAllFacilityAssets();
  }

  @Post("/facility/add/many")
  createManyFacilities(@Body("items") dto: CreateFacilityDto[]) {
    return this.service.createNewFacilityAssets(dto);
  }

  @Post("/signals/add/many")
  createManySignals(@Body("items") dto: CreateSignalDto[]) {
    return this.service.createNewSignalAssets(dto);
  }

  @Post("/facility/add")
  createOneFacility(@Body() dto: CreateFacilityDto) {
    return this.service.createNewFacilityAsset(dto);
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
    const fileName = `export_to_atlas_${setCurrentDate()}.json`;

    res.header("Content-disposition", `attachment; filename=${fileName}`);
    res.type("application/json; charset=UTF-8");

    res.download(fileLocation, `${fileName}`, (err) => {
      if (err) console.log(err);
    });
  }

  // @Get("/export-to-atlas")
  // async download(@Query() query) {
  //   const { parrentTarget, parrentId, parrentTitle, parrentFolder } = query;
  //   return this.service.exportToAtlas(
  //     parrentTarget,
  //     parrentId,
  //     parrentTitle,
  //     parrentFolder
  //   );
  // }

  @Post("/summary-list-of-equipment-asset/add")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "questionare", maxCount: 1 },
      { name: "wiringDiagram", maxCount: 100 },
      { name: "document", maxCount: 1 },
      { name: "verificationProcedure", maxCount: 1 },
      { name: "typeApprovalCertificate", maxCount: 1 },
      { name: "functionalDiagram", maxCount: 1 },
      { name: "mountDocument", maxCount: 1 },
      { name: "connectDocument", maxCount: 1 },
      { name: "testDocument", maxCount: 1 },
      { name: "awpDocument", maxCount: 1 },
      { name: "commisionDocument", maxCount: 1 },
    ])
  )
  create(
    @Body()
    dto: CreateSummaryListOfEquipmentDto,

    @Query() query: { parrentFolderPath?: string },
    @UploadedFiles()
    files?: SummaryListOfEquipmentCreateOrUpdateFiles
  ) {
    const { parrentFolderPath } = query;
    return this.service.createNewSummaryListOfEquipmentAsset(
      dto,
      files,
      parrentFolderPath
    );
  }

  @Post("/summary-list-of-equipment-asset/add/many")
  createMany(@Body("items") dto: CreateSummaryListOfEquipmentDto[]) {
    return this.service.createNewSummaryListOfEquipmentAssets(dto);
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
  deleteSummaryListOfEquipmentAsset(
    @Param("id") id: string,
    @Query() query: { target: string }
  ) {
    const { target } = query;
    return this.service.deleteSummaryListOfEquipmentSubAsset(target, +id);
  }

  @Put("/summary-list-of-equipment-asset/edit/:id")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "questionare", maxCount: 1 },
      { name: "wiringDiagram", maxCount: 1 },
      { name: "document", maxCount: 1 },
      { name: "verificationProcedure", maxCount: 1 },
      { name: "typeApprovalCertificate", maxCount: 1 },
      { name: "functionalDiagram", maxCount: 1 },
      { name: "mountDocument", maxCount: 1 },
      { name: "connectDocument", maxCount: 1 },
      { name: "testDocument", maxCount: 1 },
      { name: "awpDocument", maxCount: 1 },
      { name: "commisionDocument", maxCount: 1 },
    ])
  )
  updateSummaryListOfEquipmentAsset(
    @Param("id") id: string,
    @Query() query: { target: string; parrentFolderPath?: string },
    @Body()
    dto:
      | UpdateCableLogDto
      | UpdateImpulseLineLogDto
      | UpdateMetrologyDto
      | UpdateMonitoringDto
      | UpdateSignalDto
      | UpdateGeneralInformationDto,
    @UploadedFiles()
    files?: SummaryListOfEquipmentCreateOrUpdateFiles
  ) {
    const { target, parrentFolderPath } = query;
    return this.service.updateSummaryListOfEquipmentAsset(
      target,
      id,
      dto,
      files,
      parrentFolderPath
    );
  }

  /** Импорт данных из файла xlsx */

  @Post("/import")
  @UseInterceptors(FileFieldsInterceptor([
    { name: "descriptor", maxCount: 1 },
    { name: "documents", maxCount: 1000 }
  ]))
  importDataFromConsolidatedList (
    @Body() data: any,
    @UploadedFiles() files: {
      descriptor: File,
      documents?: File[]
    }
  ) {

    return this.service.importDataFromConsolidatedList(data, files);
  }

  @Get("/download/document")

  getDocument (
    @Query() query: {path: string, name: string},
    @Res() res: Response
  ) {
    const {path} = query;
    res.header(
      "Content-disposition",
      `attachment; filename=report.pdf`
    );
    res.type(
      "application/pdf"
    );
    const pathToFile = join("dist", "file-storage", path)
    res.download(
pathToFile,      `${uuid.v4()}.pdf`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }

  @Get("/atlas")
  findAtlasAssets (
    @Query() query: {parentTarget: string, parentId: string},
  ) {
    const { parentTarget, parentId } = query;
    return this.service.findAtlasAssets(parentTarget, parentId);
  }

}