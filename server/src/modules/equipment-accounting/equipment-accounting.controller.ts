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
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { EquipmentAccountingService } from "./equipment-accounting.service";

@Controller("api/equipment-accounting")
export class EquipmentAccountingController {
  constructor(private readonly service: EquipmentAccountingService) {}

  // @Post("/add/")
  // @UseInterceptors(FileInterceptor("file"))
  // create(
  //   @Body() dto: any,
  //   @Query() query: { target: string },
  //   @UploadedFile() file?: any
  // ) {
  //   const { target } = query;
  //   return this.service.createOne(target, dto, file);
  // }

  @Get("/facilities")
  getFacilitiesList() {
    return this.service.getFacilitiesList();
  }

  // @Get("/find")
  // findAll(@Query() query: { target: string }) {
  //   const { target } = query;
  //   return this.service.findAll(target);
  // }

  // @Get("/find/:id")
  // findOne(@Param("id") id: string, @Query() query: { target: string }) {
  //   const { target } = query;
  //   return this.service.findOne(target, id);
  // }

  // @Get("/tree")
  // getPositionTree() {
  //   return this.service.getPositionTree();
  // }

  // @Put("/edit/:id")
  // @UseInterceptors(FileInterceptor("file"))
  // update(
  //   @Param("id") id: string,
  //   @Query() query: { target: string },
  //   @Body() dto: UpdatePositionTreeDto,
  //   @UploadedFile() file?: any
  // ) {
  //   const { target } = query;
  //   return this.service.update(id, target, dto, file);
  // }

  // @Delete("remove/:id")
  // remove(@Param("id") id: string, @Query() query: { target: string }) {
  //   const { target } = query;
  //   return this.service.remove(id, target);
  // }
}
