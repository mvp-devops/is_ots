import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
} from "./dto";
import { RegulatoryReferenceInformationService } from "./regulatory-reference-information.service";

@Controller("regulatory-reference-information")
export class RegulatoryReferenceInformationController {
  constructor(
    private readonly service: RegulatoryReferenceInformationService
  ) {}

  @Post("/add")
  create(
    @Body() dto: CreateRegulatoryReferenceInformationDto,
    @Query() query: { target: string }
  ) {
    const { target } = query;
    return this.service.create(target, dto);
  }

  @Get("/find")
  findAll() {
    return this.service.findAll();
  }

  @Get("/find:id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Patch("/edit:id")
  update(
    @Param("id") id: string,
    @Query() query: { target: string },
    @Body() dto: UpdateRegulatoryReferenceInformationDto
  ) {
    const { target } = query;
    return this.service.update(id, target, dto);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
