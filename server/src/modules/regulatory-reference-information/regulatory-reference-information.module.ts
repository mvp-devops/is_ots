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
  StageEntity,
  SectionEntity,
  TechnicalCardEntity,
  TechnicalCardOperationEntity,
} from "./entities";
import { RegulatoryReferenceInformationController } from "./regulatory-reference-information.controller";
import { RegulatoryReferenceInformationService } from "./regulatory-reference-information.service";
import {GlossaryEntity} from "./entities/schemas/glossary.entry";

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
      StageEntity,
      SectionEntity,
      TechnicalCardEntity,
      TechnicalCardOperationEntity,
      GlossaryEntity
    ]),

    forwardRef(() => FileStorageModule),
  ],
  exports: [RegulatoryReferenceInformationService],
})
export class RegulatoryReferenceInformationModule {}