import { Module } from "@nestjs/common";
import { EquipmentAccountingService } from "./equipment-accounting.service";
import { EquipmentAccountingController } from "./equipment-accounting.controller";

@Module({
  controllers: [EquipmentAccountingController],
  providers: [EquipmentAccountingService],
})
export class EquipmentAccountingModule {}
