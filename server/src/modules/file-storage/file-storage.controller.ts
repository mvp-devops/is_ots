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
  UploadedFile, UploadedFiles, Put,
} from "@nestjs/common";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {
  CreateDesignDocumentDto,
  CreateNormativeDto,
} from "./dto/create-file-storage.dto";
import { FileStorageService } from "./file-storage.service";
import {NormativeService} from "./normative.service";
import type {DocumentCreateOrUpdateAttrs, File, NormativeCreateOrUpdateAttrs} from "../../../common/types/file-storage";

@Controller("api/file-storage")
export class FileStorageController {
  constructor(
    private readonly service: FileStorageService,
    private readonly normativeService: NormativeService
  ) {}

  @Post("/add/design-document")
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


  //NORMATIVE

  @Post("/add/normative")
  @UseInterceptors(FileFieldsInterceptor([
    { name: "document", maxCount: 1 },
    { name: "descriptor", maxCount: 1 },
    { name: "documents", maxCount: 20 }
  ]))
  uploadNormative(
    @Body()
    data: DocumentCreateOrUpdateAttrs,
    @UploadedFiles()
      files: {
      document?: File,
      descriptor?: File,
      documents?: File[]
    }) {
    return this.normativeService.uploadManyNormative(data, files);
  }

  @Get("/find/normative/all")
  findAllNormative() {
    return this.normativeService.findAllNormative();
  }

  @Get("/find/normative/:id")
  findOneNormative(
    @Param("id") id: string
  ) {
    return this.normativeService.findOneNormative(id);
  }

  @Put("/edit/normative/:id")
  @UseInterceptors(FileInterceptor("document"))
  updateOneNormative(
    @Param("id") id: string,
    @Body() data: DocumentCreateOrUpdateAttrs,
    @UploadedFile() document?: File
  ) {

    return this.normativeService.updateNormative(data, id, document);
  }

  @Delete("/remove/normative/:id")
  removeOneNormative(
    @Param("id") id: string
  ) {
    return this.normativeService.removeOneNormative(id);
  }

  @Delete("/remove/normative")
  removeManyNormative(
    @Query() query: { ids: string }
  ) {
    const {ids} = query;
    return this.normativeService.removeManyNormative(ids);
  }

  @Get("/find/design-documents")
  findAllDesignDocuments(
    @Query()
    query: {
      parrentTarget: string;
      parrentId: string;
    }
  ) {
    const { parrentTarget, parrentId } = query;
    return this.service.findAllDesignDocuments(parrentTarget, parrentId);
  }

  @Get("/find/design-document/:id")
  findOneDesignDocument(@Param("id") id: string) {
    return this.service.findOneDesignDocument(+id);
  }

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

  @Delete("remove/design-document/:id")
  remove(@Param("id") id: string) {
    return this.service.deleteDesignDocument(id);
  }
}