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
} from "@nestjs/common";
import { PositionTreeService } from "./position-tree.service";
import { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("position-tree")
export class PositionTreeController {
  constructor(private readonly service: PositionTreeService) {}

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

  @Get("/find")
  findAll() {
    return this.service.findAll();
  }

  @Get("/find:id")
  findOne(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.findOne(id, target);
  }

  @Patch("/edit:id")
  update(
    @Param("id") id: string,
    @Query() query: { target: string },
    @Body() dto: UpdatePositionTreeDto
  ) {
    const { target } = query;
    return this.service.update(id, target, dto);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
