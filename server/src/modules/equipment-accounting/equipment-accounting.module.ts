import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { EquipmentAccountingService } from "./equipment-accounting.service";
import { EquipmentAccountingController } from "./equipment-accounting.controller";
import {
  FacilityEntity,
  SummaryListOfEquipmentEntity,
  CableLogEntity,
  ImpulseLineLogEntity,
  SignalEntity,
  MetrologyEntity,
  MonitoringEntity,
} from "./entities";

@Module({
  controllers: [EquipmentAccountingController],
  providers: [EquipmentAccountingService],
  imports: [
    SequelizeModule.forFeature([
      FacilityEntity,
      SummaryListOfEquipmentEntity,
      CableLogEntity,
      ImpulseLineLogEntity,
      SignalEntity,
      MetrologyEntity,
      MonitoringEntity,
    ]),
  ],
})
export class EquipmentAccountingModule {}
