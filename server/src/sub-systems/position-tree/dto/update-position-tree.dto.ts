import { PartialType } from "@nestjs/mapped-types";
import {
  CreateFieldDto,
  CreateProjectDto,
  CreateSubsidiaryDto,
  CreateSubUnitDto,
  CreateUnitDto,
} from "./create-position-tree.dto";

export class UpdateSubsidiaryDto extends PartialType(CreateSubsidiaryDto) {}

export class UpdateFieldDto extends PartialType(CreateFieldDto) {}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

export class UpdateUnitDto extends PartialType(CreateUnitDto) {}

export class UpdateSubUnitDto extends PartialType(CreateSubUnitDto) {}
