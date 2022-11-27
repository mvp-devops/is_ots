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
import {DesignDocumentService} from "./design-document.service";

@Controller("api/file-storage")
export class FileStorageController {
  constructor(
    private readonly service: FileStorageService,
    private readonly normativeService: NormativeService,
    private readonly designDocumentService: DesignDocumentService
  ) {}

  // @Post("/add/design-document")
  // @UseInterceptors(FileInterceptor("file"))
  // create(
  //   @Body() dto: CreateDesignDocumentDto,
  //   @Query()
  //   query: {
  //     parrentId: string;
  //     parrentTarget: string;
  //     parrentFolderPath: string;
  //   },
  //   @UploadedFile() file?: any
  // ) {
  //   const { parrentId, parrentTarget, parrentFolderPath } = query;
  //
  //   return this.service.createDesignDocument(
  //     parrentId,
  //     parrentTarget,
  //     parrentFolderPath,
  //     file,
  //     dto
  //   );
  // }

  /* DESIGN-DOCUMENTS */

  @Post("/add/design-document")
  @UseInterceptors(FileFieldsInterceptor([
    { name: "document", maxCount: 1 },
    { name: "descriptor", maxCount: 1 },
    { name: "documents", maxCount: 20 }
  ]))
  uploadDesignDocument(
    @Body() data: any,
    @UploadedFiles() files: {
      document?: File,
      descriptor?: File,
      documents?: File[]
    }) {
    return this.designDocumentService.uploadManyDesignDocument(data, files);
  }

  @Get("/find/design-documents")
  findAllDesignDocuments(
    @Query() query: {
      parentTarget: string;
      parentId: string;
    }) {
    const { parentTarget, parentId } = query;
    return this.designDocumentService.findAllDesignDocuments(parentTarget, parentId);
  }

  @Get("/find/design-document/:id")
  findOneDesignDocument(
    @Param("id") id: string,
    @Query() query: { parentTarget?: string}) {
    const { parentTarget } = query;
    return this.designDocumentService.findOneDesignDocument(+id, parentTarget);
  }

  @Put("/edit/design-document/:id")
  @UseInterceptors(FileInterceptor("document"))
  updateOneDesignDocument(
    @Param("id") id: string,
    @Body() data: any,
    @UploadedFile() document?: File) {
    return this.designDocumentService.updateDesignDocument(data, +id, document);
  }

  @Delete("/remove/design-document/:id")
  removeOneDesignDocument(
    @Param("id") id: string,
    @Query() query: { parentTarget?: string}) {
    const {parentTarget} = query
    return this.designDocumentService.removeOneDesignDocument(+id, parentTarget);
  }

  @Delete("/remove/design-document")
  removeManyDesignDocument(@Query() query: { ids: string, parentTarget: string }) {
    const {ids, parentTarget} = query;
    return this.designDocumentService.removeManyDesignDocuments(ids, parentTarget);
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
    @UploadedFiles() files: {
      document?: File,
      descriptor?: File,
      documents?: File[]
    }) {
    return this.normativeService.uploadManyNormative(data, files);
  }

  @Get("/find/normative")
  findAllNormative() {
    return this.normativeService.findAllNormative();
  }

  @Get("/find/normative/:id")
  findOneNormative(@Param("id") id: string) {
    return this.normativeService.findOneNormative(id);
  }

  @Put("/edit/normative/:id")
  @UseInterceptors(FileInterceptor("document"))
  updateOneNormative(
    @Param("id") id: string,
    @Body() data: DocumentCreateOrUpdateAttrs,
    @UploadedFile() document?: File) {
    return this.normativeService.updateNormative(data, id, document);
  }

  @Delete("/remove/normative/:id")
  removeOneNormative(@Param("id") id: string) {
    return this.normativeService.removeOneNormative(id);
  }

  @Delete("/remove/normative")
  removeManyNormative(@Query() query: { ids: string }) {
    const {ids} = query;
    return this.normativeService.removeManyNormative(ids);
  }
}