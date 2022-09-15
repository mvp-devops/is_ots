import { DesignDocumentView } from "./file-storage";
import { NSIView } from "./regulatory-reference-information";

export interface SubsidiaryCreateOrUpdateAttrs extends Object {
  title: string;
  code: string;
  description: string;
  file: any;
}

export interface FieldCreateOrUpdateAttrs extends Object {
  subsidiaryId: number | string | null;
  title: string;
  code: string;
  description: string;
}

export interface ProjectCreateOrUpdateAttrs extends Object {
  fieldId: number | string;
  designId: number | string;
  title: string;
  code: string;
  contract: string;
  description: string;
}

export interface UnitCreateOrUpdateAttrs extends Object {
  projectId: number | string;
  equipmentId: number | string;
  supplierId: number | string;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  file: any;
}

export interface SubUnitCreateOrUpdateAttrs extends Object {
  unitId: number | string;
  equipmentId: number | string;
  supplierId: number | string;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  file: any;
}

export type PositionTreeCreateOrUpdateAttrs =
  | SubsidiaryCreateOrUpdateAttrs
  | FieldCreateOrUpdateAttrs
  | ProjectCreateOrUpdateAttrs
  | UnitCreateOrUpdateAttrs
  | SubUnitCreateOrUpdateAttrs;

export interface SubsidiaryView {
  id: string | number;
  title: string;
  code: string;
  description: string;
  logo: string | null;
}

export interface FieldView {
  id: string | number;
  subsidiaryId: string | number;
  subsidiary: SubsidiaryView;
  title: string;
  code: string;
  description: string;
}

export interface ProjectView {
  id: string | number;
  fieldId: string | number;
  field: FieldView;
  designId: string | number;
  design: NSIView;
  title: string;
  code: string;
  contract: string;
  description: string;
  documents: DesignDocumentView[];
}

export interface UnitView {
  id: string | number;
  projectId: string | number;
  supplierId: string | number;
  equipmentId: string | number;
  project: ProjectView;
  supplier: NSIView;
  equipment: NSIView;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  unitQuestionare: DesignDocumentView;
  documents: DesignDocumentView[];
}

export interface SubUnitView {
  id: string | number;
  unitId: string | number;
  supplierId: string | number;
  equipmentId: string | number;
  unit: UnitView;
  supplier: NSIView;
  equipment: NSIView;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  subUnitQuestionare: DesignDocumentView;
  documents: DesignDocumentView[];
}

export type PositionTreeView =
  | SubsidiaryView
  | FieldView
  | ProjectView
  | UnitView
  | SubUnitView;

export interface PositionTreeItem {
  target: string;
  childrenTarget: string;
  id: string;
  keys: string[];
  key: string;
  title: string;
  children?: PositionTreeItem[];
  onClick?: (target: string) => void;
}
