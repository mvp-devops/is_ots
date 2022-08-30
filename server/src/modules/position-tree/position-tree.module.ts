import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import {
  FieldEntity,
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "./entities";
import { PositionTreeController } from "./position-tree.controller";
import { PositionTreeService } from "./position-tree.service";
import { FileStorageModule } from "../file-storage";
import { CommentAccountingModule } from "../comment-accounting";

@Module({
  controllers: [PositionTreeController],
  providers: [PositionTreeService],
  exports: [],
  imports: [
    SequelizeModule.forFeature([
      SubsidiaryEntity,
      FieldEntity,
      ProjectEntity,
      UnitEntity,
      SubUnitEntity,
    ]),
    forwardRef(() => FileStorageModule),
    forwardRef(() => CommentAccountingModule),
  ],
})
export class PositionTreeModule {}
