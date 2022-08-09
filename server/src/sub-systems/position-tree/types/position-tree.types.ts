import { DeepMergeTwoTypes } from "./../../../../../common/types/main";
import {
  CreateFieldDto,
  CreateSubsidiaryDto,
  CreateSubUnitDto,
  CreateUnitDto,
} from "../dto/create-position-tree.dto";
import {
  FieldEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "../entities";

// const fn = (c: DeepMergeTwoTypes<CreateSubsidiaryDto, CreateFieldDto>) =>
//   c.code;

export type PositionTreeItem = DeepMergeTwoTypes<
  DeepMergeTwoTypes<SubsidiaryEntity, FieldEntity>,
  DeepMergeTwoTypes<UnitEntity, SubUnitEntity>
>;
