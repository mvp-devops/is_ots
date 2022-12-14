import { SequelizeModule } from "@nestjs/sequelize";
import { forwardRef, Module } from "@nestjs/common";
import { CommentAccountingService } from "./comment-accounting.service";
import { CheckListService } from "./check-list.service";
import { StatisticService } from "./statistic.service";

import { CommentAccountingController } from "./comment-accounting.controller";
import {
  CapitalConstructionUnitSupervisionCommentEntity,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";
import {DesignDocumentEntity, FileStorageModule, NormativeEntity} from "../file-storage";
import {CriticalityEntity, UserEntity} from "../regulatory-reference-information";

@Module({
  controllers: [CommentAccountingController],
  providers: [CommentAccountingService, CheckListService, StatisticService],
  imports: [
    SequelizeModule.forFeature([
      DesignDocumentCommentEntity,
      DesignDocumentSolutionEntity,
      CapitalConstructionUnitSupervisionCommentEntity,
      NormativeEntity,
      CriticalityEntity,
      DesignDocumentEntity,
      UserEntity
    ]),
    forwardRef(() => FileStorageModule),
  ],
  exports: [CheckListService, CommentAccountingService, StatisticService],
})
export class CommentAccountingModule {}