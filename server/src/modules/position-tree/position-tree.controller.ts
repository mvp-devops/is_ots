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
import { PositionTreeService } from "./position-tree.service";
import { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("api/position-tree")
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
  findAll(@Query() query: { target: string; parrentId?: string }) {
    const { target, parrentId } = query;
    return this.service.findAll(target, parrentId);
  }

  @Get("/find/:id")
  findOne(@Param("id") id: string, @Query() query: { target: string }) {
    const { target } = query;
    return this.service.findOne(target, id);
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
}
