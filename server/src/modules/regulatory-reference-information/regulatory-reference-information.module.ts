import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FileStorageModule } from "../file-storage";
import {
  CounterpartyEntity,
  DesignEntity,
  EquipmentEntity,
  DirectionEntity,
  CriticalityEntity,
  UserEntity,
} from "./entities";
import { RegulatoryReferenceInformationController } from "./regulatory-reference-information.controller";
import { RegulatoryReferenceInformationService } from "./regulatory-reference-information.service";

@Module({
  controllers: [RegulatoryReferenceInformationController],
  providers: [RegulatoryReferenceInformationService],
  imports: [
    SequelizeModule.forFeature([
      CounterpartyEntity,
      DesignEntity,
      EquipmentEntity,
      DirectionEntity,
      CriticalityEntity,
      UserEntity,
    ]),

    forwardRef(() => FileStorageModule),
  ],
})
export class RegulatoryReferenceInformationModule {}
