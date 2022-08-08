import { PartialType } from "@nestjs/mapped-types";
import { CreateLogoDto } from "./create-file-storage.dto";

export class UpdateLogoDto extends PartialType(CreateLogoDto) {}
