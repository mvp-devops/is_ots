export interface SubsidiaryCreationAttrs {
  title: string;
  code: string;
  description: string;
  file: any;
}

export interface FieldCreationAttrs {
  subsidiaryId: number | string | null;
  title: string;
  code: string;
  description: string;
}

export interface ProjectCreationAttrs {
  fieldId: number | string;
  designId: number | string;
  title: string;
  code: string;
  contract: string;
  description: string;
}

export interface UnitCreationAttrs {
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

export interface SubUnitCreationAttrs {
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
