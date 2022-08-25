import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DesignDocumentEntity, LogoEntity } from "./entities";
import { FileStorageController } from "./file-storage.controller";
import { FileStorageService } from "./file-storage.service";
import { RegulatoryReferenceInformationModule } from "../regulatory-reference-information";

@Module({
  controllers: [FileStorageController],
  providers: [FileStorageService],
  exports: [FileStorageService],
  imports: [
    SequelizeModule.forFeature([LogoEntity, DesignDocumentEntity]),
    RegulatoryReferenceInformationModule,
  ],
})
export class FileStorageModule {}
