import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CounterpartyEntity, DesignEntity, EquipmentEntity } from "./entities";
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
    ]),
  ],
})
export class RegulatoryReferenceInformationModule {}
