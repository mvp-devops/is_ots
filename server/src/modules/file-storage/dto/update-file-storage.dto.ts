import { PartialType } from "@nestjs/mapped-types";
import {
  CreateLogoDto,
  CreateOperationalDocumentDto,
} from "./create-file-storage.dto";

export class UpdateLogoDto extends PartialType(CreateLogoDto) {}

export class UpdateOperationalDocumentDto extends PartialType(
  CreateOperationalDocumentDto
) {}
