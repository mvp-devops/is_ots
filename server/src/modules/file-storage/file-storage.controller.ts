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
import { FileInterceptor } from "@nestjs/platform-express";
import {
  CreateDesignDocumentDto,
  CreateNormativeDto,
} from "./dto/create-file-storage.dto";
import { FileStorageService } from "./file-storage.service";

@Controller("api/file-storage")
export class FileStorageController {
  constructor(private readonly service: FileStorageService) {}

  @Post("/add")
  @UseInterceptors(FileInterceptor("file"))
  create(
    @Body() dto: CreateDesignDocumentDto,
    @Query()
    query: {
      parrentId: string;
      parrentTarget: string;
      parrentFolderPath: string;
    },
    @UploadedFile() file?: any
  ) {
    const { parrentId, parrentTarget, parrentFolderPath } = query;
    return this.service.createDesignDocument(
      parrentId,
      parrentTarget,
      parrentFolderPath,
      file,
      dto
    );
  }

  @Post("/add/normative")
  @UseInterceptors(FileInterceptor("file"))
  createNormative(@Body() dto: CreateNormativeDto, @UploadedFile() file: any) {
    return this.service.createNormative(dto, file);
  }

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

  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.service.deleteDesignDocument(id);
  }
}
