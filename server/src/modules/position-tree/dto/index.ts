import {
  CreateSubsidiaryDto,
  CreateFieldDto,
  CreateProjectDto,
  CreateUnitDto,
  CreateSubUnitDto,
} from "./create-position-tree.dto";

import {
  UpdateSubsidiaryDto,
  UpdateFieldDto,
  UpdateProjectDto,
  UpdateUnitDto,
  UpdateSubUnitDto,
} from "./update-position-tree.dto";

type CreatePositionTreeDto =
  | CreateSubsidiaryDto
  | CreateFieldDto
  | CreateProjectDto
  | CreateUnitDto
  | CreateSubUnitDto;

type UpdatePositionTreeDto =
  | UpdateSubsidiaryDto
  | UpdateFieldDto
  | UpdateProjectDto
  | UpdateUnitDto
  | UpdateSubUnitDto;

export type {
  CreateSubsidiaryDto,
  CreateFieldDto,
  CreateProjectDto,
  CreateUnitDto,
  CreateSubUnitDto,
  UpdateSubsidiaryDto,
  UpdateFieldDto,
  UpdateProjectDto,
  UpdateUnitDto,
  UpdateSubUnitDto,
  CreatePositionTreeDto,
  UpdatePositionTreeDto,
};
