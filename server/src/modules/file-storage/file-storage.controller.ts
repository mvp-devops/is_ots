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
import { FileStorageService } from "./file-storage.service";

@Controller("file-storage")
export class FileStorageController {
  constructor(private readonly service: FileStorageService) {}

  // @Post("/add")
  // create(
  //   @Body() dto: CreateFileStorageDto,
  //   @Query() query: { target: string }
  // ) {
  //   const { target } = query;
  //   return this.service.create(target, dto);
  // }

  // @Get("/find")
  // findAll() {
  //   return this.service.findAll();
  // }

  // @Get("/find:id")
  // findOne(@Param("id") id: string) {
  //   return this.service.findOne(id);
  // }

  // @Patch("/edit:id")
  // update(
  //   @Param("id") id: string,
  //   @Query() query: { target: string },
  //   @Body() dto: UpdateFileStorageDto
  // ) {
  //   const { target } = query;
  //   return this.service.update(id, target, dto);
  // }

  // @Delete("remove/:id")
  // remove(@Param("id") id: string) {
  //   return this.service.remove(id);
  // }
}