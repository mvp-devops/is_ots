import { Module } from "@nestjs/common";
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

@Module({
  controllers: [PositionTreeController],
  providers: [PositionTreeService],
  exports: [FileStorageModule],
  imports: [
    SequelizeModule.forFeature([
      SubsidiaryEntity,
      FieldEntity,
      ProjectEntity,
      UnitEntity,
      SubUnitEntity,
    ]),
  ],
})
export class PositionTreeModule {}
