import { SequelizeModule } from "@nestjs/sequelize";
import { forwardRef, Module } from "@nestjs/common";
import { CommentAccountingService } from "./comment-accounting.service";
import { CheckListService } from "./check-list.service";

import { CommentAccountingController } from "./comment-accounting.controller";
import {
  CapitalConstructionUnitSupervisionCommentEntity,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";
// import { FileStorageModule } from "../file-storage";

@Module({
  controllers: [CommentAccountingController],
  providers: [CommentAccountingService, CheckListService],
  imports: [
    SequelizeModule.forFeature([
      DesignDocumentCommentEntity,
      DesignDocumentSolutionEntity,
      CapitalConstructionUnitSupervisionCommentEntity,
    ]),
    // forwardRef(() => FileStorageModule),
  ],
  exports: [CheckListService, CommentAccountingService],
})
export class CommentAccountingModule {}
