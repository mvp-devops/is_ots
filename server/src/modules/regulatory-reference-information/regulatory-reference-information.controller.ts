import { FileInterceptor } from "@nestjs/platform-express";
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
  Header,
  Res,
} from "@nestjs/common";
import type {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
} from "./dto";
import { RegulatoryReferenceInformationService } from "./regulatory-reference-information.service";
import {CreateGlossaryDto, CreateUserDto} from "./dto/create-regulatory-reference-information.dto";
import type { Response } from "express";
import { setCurrentDate } from "../../../common/utils";

@Controller("api/regulatory-reference-information")
export class RegulatoryReferenceInformationController {
  constructor(
    private readonly service: RegulatoryReferenceInformationService
  ) {}

  @Post("/add")
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Body() dto: CreateRegulatoryReferenceInformationDto,
    @Query() query: { target: string },
    @UploadedFile() file?: any
  ) {
    const { target } = query;
    return this.service.createOne(target, dto, file);
  }

  @Post("/add/user")
  @UseInterceptors(FileInterceptor("file"))
  registration(@Body() dto: CreateUserDto, @UploadedFile() file?: any) {
    return this.service.userRegistration(dto, file);
  }

  @Get("/auth")
  login(@Query() query: { email: string; password: string }) {
    const { email, password } = query;
    return this.service.userLogin(email, password);
  }

  @Post("/add/many")
  createMany(
    @Body("items") dto: CreateRegulatoryReferenceInformationDto[],
    @Query() query: { target: string }
  ) {
    const { target } = query;
    return this.service.createMany(target, dto);
  }

  @Post("/create/:target")
  createAsset(
    @Param("target") target: string,
    @Body("data") dto: CreateGlossaryDto[]
  ) {
    return this.service.createAsset(dto, target);
  }

  @Get("/get/:target")
  getAssets(    @Param("target") target: string,) {
    return this.service.getAssets(target);
  }

  @Get("/find")
  findAll(@Query() query: { target: string }) {
    const { target } = query;
    return this.service.findAll(target);
  }

  @Get("/find/:id")
  findOne(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.findOne(target, id);
  }

  @Put("/edit/:id")
  @UseInterceptors(FileInterceptor("file"))
  update(
    @Param("id") id: string,
    @Query() query: { target: string },
    @Body() dto: UpdateRegulatoryReferenceInformationDto,
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

  @Get("/download")
  async download(@Query() query: { target: string }, @Res() res: Response) {
    const { target } = query;
    let fileLocation = await this.service.downdoad(target);
    res.header(
      "Content-disposition",
      `attachment; filename=import_${target}_${setCurrentDate()}.xlsx`
    );
    res.type(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.download(
      fileLocation,
      `import_${target}_${setCurrentDate()}.xlsx`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }

  @Get("/download/tech-cards")
  async downloadTechCards(@Res() res: Response) {
    let fileLocation = await this.service.downdoadTechCards();
    res.header(
      "Content-disposition",
      `attachment; filename=import_tech_cards_${setCurrentDate()}.xlsx`
    );
    res.type(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.download(
      fileLocation,
      `import_tech_cards_${setCurrentDate()}.xlsx`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }
}