import {
  CounterpartyEntity,
  CriticalityEntity,
  DesignEntity,
  DirectionEntity,
  EquipmentEntity,
  SectionEntity,
  StageEntity,
  UserEntity,
} from "../../src/modules/regulatory-reference-information";

export interface RegulatoryReferenceInformationCreationAttrs {
  title: string;
  code: number | string | null;
  description: string | null;
}

export interface CriticalityCreationAttrs {
  title: string;
  code: number | string;
  description: string;
  threshold: number | string;

  goal: number | string;
  tenseGoal: number | string;
}

export interface NSIView {
  id: string | number;
  title: string;
  code: string;
  description: string;
  file?: string | null;
  threshold?: string | number;
  goal?: string | number;
  tenseGoal?: string | number;
}

export interface DesignOrCounterpartyCreationAttrs
  extends RegulatoryReferenceInformationCreationAttrs {
  file: any;
}

export type NsiCreateOrUpdateAttrs =
  | DesignOrCounterpartyCreationAttrs
  | CriticalityCreationAttrs
  | RegulatoryReferenceInformationCreationAttrs
  | null;

export interface UserCreateOrUpdateAttrs {
  subsidiaryId: string | number | null;
  designId: string | number | null;
  counterpartyId: string | number | null;
  fieldId: string | number | null;
  firstName: string;
  secondName: string;
  lastName: string;
  subdivision: string;
  position: string;
  email: string;
  phone: string;
  password: string;
  roles: string[];
  file?: File | null;
}

export interface UserView {
  id: string | number | null;
  subsidiaryId: string | number | null;
  subsidiaryTitle: string | null;
  designId: string | number | null;
  designTitle: string | null;
  counterpartyId: string | number | null;
  counterpartyTitle: string | null;
  fieldId: string | number | null;
  fieldTitle: string | null;
  firstName: string;
  secondName: string;
  lastName: string;
  subdivision: string;
  position: string;
  email: string;
  phone: string;
  roles: string[];
  token: string | null;
  avatar?: string | null;
}

export interface TechnicalCardOperationCreateOrUpdateAttrs {
  technicalCardId: string | number | null;
  workType: "" | "" | "";
  operationTitle: string;
  categoryExecutor: string;
  laborCosts: number;
}

export interface TechnicalCardCreateOrUpdateAttrs
  extends RegulatoryReferenceInformationCreationAttrs {
  operations?: TechnicalCardOperationCreateOrUpdateAttrs[];
}

export type NsiEntries =
  | CounterpartyEntity
  | CriticalityEntity
  | DesignEntity
  | DirectionEntity
  | EquipmentEntity
  | SectionEntity
  | StageEntity
  | UserEntity;
