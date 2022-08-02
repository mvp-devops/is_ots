import { PartialType } from "@nestjs/mapped-types";
import {
  CreateCapitalConstructionUnitSupervisiontDto,
  CreateDesignDocumentCommentDto,
} from "./create-comment-accounting.dto";

export class UpdateDesignDocumentCommentDto extends PartialType(
  CreateDesignDocumentCommentDto
) {}

export class UpdateCapitalConstructionUnitSupervisiontDto extends PartialType(
  CreateCapitalConstructionUnitSupervisiontDto
) {}
