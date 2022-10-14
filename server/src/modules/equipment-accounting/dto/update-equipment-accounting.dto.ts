import { PartialType } from "@nestjs/swagger";
import {
  CreateCableLogDto,
  CreateFacilityDto,
  CreateImpulseLineLogDto,
  CreateMetrologyDto,
  CreateMonitoringDto,
  CreateSummaryListOfEquipmentDto,
} from ".";
import {
  CreateGeneralInformationDto,
  CreateSignalDto,
} from "./create-equipment-accounting.dto";

export class UpdateFacilityDto extends PartialType(CreateFacilityDto) {}

export class UpdateCableLogDto extends PartialType(CreateCableLogDto) {}

export class UpdateImpulseLineLogDto extends PartialType(
  CreateImpulseLineLogDto
) {}

export class UpdateMetrologyDto extends PartialType(CreateMetrologyDto) {}

export class UpdateMonitoringDto extends PartialType(CreateMonitoringDto) {}

export class UpdateSignalDto extends PartialType(CreateSignalDto) {}

export class UpdateSummaryListOfEquipmentDto extends PartialType(
  CreateSummaryListOfEquipmentDto
) {}

export class UpdateGeneralInformationDto extends PartialType(
  CreateGeneralInformationDto
) {}
