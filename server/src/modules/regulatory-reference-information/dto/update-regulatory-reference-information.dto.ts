import { PartialType } from "@nestjs/mapped-types";
import {
  CreateCriticalityDto,
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
} from "./create-regulatory-reference-information.dto";

export class UpdateNSIDto extends PartialType(CreateNSIDto) {}

export class UpdateDesignOrCounterpartyDto extends PartialType(
  CreateDesignOrCounterpartyDto
) {}

export class UpdateCriticalityDto extends PartialType(CreateCriticalityDto) {}
