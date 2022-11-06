import { forwardRef, Module } from "@nestjs/common";
import {ReportController} from "./report.controller";
import {ReportService} from "./report.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {DesignDocumentEntity, FileStorageModule} from "../file-storage";

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [
    SequelizeModule.forFeature([
      DesignDocumentEntity
    ]),
    forwardRef(() => FileStorageModule)
    ],
  exports: [ReportService],
})
export class ReportModule {}