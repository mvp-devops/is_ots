import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DesignDocumentEntity, LogoEntity, NormativeEntity } from "./entities";
import { FileStorageController } from "./file-storage.controller";
import { FileStorageService } from "./file-storage.service";
import { RegulatoryReferenceInformationModule } from "../regulatory-reference-information";
import { CommentAccountingModule } from "../comment-accounting";
import { ExcelService } from "./excel.service";
import {NewFileStorageService} from "./new-file-storage.service";
import {NormativeService} from "./normative.service";
import {DesignDocumentService} from "./design-document.service";



@Module({
  controllers: [FileStorageController],
  providers: [FileStorageService, ExcelService, NewFileStorageService, NormativeService, DesignDocumentService],
  exports: [FileStorageService, ExcelService, NewFileStorageService, NormativeService, DesignDocumentService],
  imports: [
    SequelizeModule.forFeature([
      LogoEntity,
      DesignDocumentEntity,
      NormativeEntity,
    ]),
    forwardRef(() => RegulatoryReferenceInformationModule),
    forwardRef(() => CommentAccountingModule),
  ],
})
export class FileStorageModule {}