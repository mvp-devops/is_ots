import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { CommentAccountingService } from "./comment-accounting.service";
import { CheckListService } from "./check-list.service";

import { CommentAccountingController } from "./comment-accounting.controller";
import {
  CapitalConstructionUnitSupervisionCommentEntity,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";

@Module({
  controllers: [CommentAccountingController],
  providers: [CommentAccountingService, CheckListService],
  imports: [
    SequelizeModule.forFeature([
      DesignDocumentCommentEntity,
      DesignDocumentSolutionEntity,
      CapitalConstructionUnitSupervisionCommentEntity,
    ]),
  ],
  exports: [CheckListService, CommentAccountingService],
})
export class CommentAccountingModule {}
