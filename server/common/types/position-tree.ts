export interface SubsidiaryCreateOrUpdateAttrs {
  title: string;
  code: string;
  description: string;
  file: any;
}

export interface FieldCreateOrUpdateAttrs {
  subsidiaryId: number | string | null;
  title: string;
  code: string;
  description: string;
}

export interface ProjectCreateOrUpdateAttrs {
  fieldId: number | string;
  designId: number | string;
  title: string;
  code: string;
  contract: string;
  description: string;
}

export interface UnitCreateOrUpdateAttrs {
  projectId: number | string;
  equipmentId: number | string;
  supplierId: number | string;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  questionare: any;
}

export interface SubUnitCreateOrUpdateAttrs {
  unitId: number | string;
  equipmentId: number | string;
  supplierId: number | string;
  position: string;
  title: string;
  code: string;
  contract: string;
  description: string;
  questionare: any;
}

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

// export interface TreeDataNode {
//   title: string;
//   key: string;
//   children?: Array<TreeDataNode>;
//   onClick?: (target: string) => void;
// }
