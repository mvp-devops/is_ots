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
import {ReportModule} from "../reports/report.module";
import {CounterpartyEntity, DesignEntity, EquipmentEntity} from "../regulatory-reference-information";

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
      DesignEntity,
      CounterpartyEntity,
      EquipmentEntity
    ]),
    forwardRef(() => FileStorageModule),
    forwardRef(() => CommentAccountingModule),
    forwardRef(() => ReportModule),
  ],
})
export class PositionTreeModule {}