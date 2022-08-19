import { PartialType } from "@nestjs/mapped-types";
import {
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
} from "./create-regulatory-reference-information.dto";

export class UpdateNSIDto extends PartialType(CreateNSIDto) {}

export class UpdateDesignOrCounterpartyDto extends PartialType(
  CreateDesignOrCounterpartyDto
) {}
