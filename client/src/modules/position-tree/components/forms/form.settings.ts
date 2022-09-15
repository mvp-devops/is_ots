import {
  FieldCreateOrUpdateAttrs,
  FieldView,
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeView,
  ProjectCreateOrUpdateAttrs,
  ProjectView,
  SubsidiaryCreateOrUpdateAttrs,
  SubUnitCreateOrUpdateAttrs,
  SubUnitView,
  UnitCreateOrUpdateAttrs,
  UnitView,
} from "../../../../../../server/common/types/position-tree";

export const subsidiaryItem: SubsidiaryCreateOrUpdateAttrs = {
  title: "",
  code: "",
  description: "",
  file: null,
};

export const fieldItem: FieldCreateOrUpdateAttrs = {
  subsidiaryId: "",
  title: "",
  code: "",
  description: "",
};

export const projectItem: ProjectCreateOrUpdateAttrs = {
  fieldId: "",
  designId: 10,
  title: "",
  code: "",
  contract: "н/д",
  description: "PRJ",
};

export const unitItem: UnitCreateOrUpdateAttrs = {
  projectId: "",
  supplierId: 1,
  equipmentId: 1,
  position: "0",
  title: "",
  code: "",
  contract: "н/д",
  description: "",
  file: null,
};

export const subUnitItem: SubUnitCreateOrUpdateAttrs = {
  unitId: "",
  supplierId: 1,
  equipmentId: 1,
  position: "0",
  title: "",
  code: "",
  contract: "н/д",
  description: "",
  file: null,
};

export const initData = (
  target: string,
  row?: PositionTreeView,
  parrentId?: string
): PositionTreeCreateOrUpdateAttrs | null => {
  let item: PositionTreeCreateOrUpdateAttrs | null = null;

  switch (target) {
    case "subsidiary": {
      item = row
        ? {
            title: row.title,
            code: row.code,
            description: row.description,
            file: null,
          }
        : subsidiaryItem;
      break;
    }
    case "field": {
      item = row
        ? {
            subsidiaryId: (row as FieldView).subsidiaryId,
            title: row.title,
            code: row.code,
            description: row.description,
          }
        : { ...fieldItem, subsidiaryId: parrentId ? parrentId : "" };
      break;
    }
    case "project": {
      item = row
        ? {
            fieldId: (row as ProjectView).fieldId,
            designId: (row as ProjectView).designId,
            title: row.title,
            code: row.code,
            contract: (row as ProjectView).contract,
            description: row.description,
          }
        : { ...projectItem, fieldId: parrentId ? parrentId : "" };
      break;
    }
    case "unit": {
      item = row
        ? {
            projectId: (row as UnitView).projectId,
            supplierId: (row as UnitView).supplierId,
            equipmentId: (row as UnitView).equipmentId,
            position: (row as UnitView).position,
            title: row.title,
            code: row.code,
            contract: (row as UnitView).contract,
            description: row.description,
            file: null,
          }
        : { ...unitItem, projectId: parrentId ? parrentId : "" };
      break;
    }
    case "sub-unit": {
      item = row
        ? {
            unitId: (row as SubUnitView).unitId,
            supplierId: (row as SubUnitView).supplierId,
            equipmentId: (row as SubUnitView).equipmentId,
            position: (row as SubUnitView).position,
            title: row.title,
            code: row.code,
            contract: (row as SubUnitView).contract,
            description: row.description,
            file: null,
          }
        : { ...subUnitItem, unitId: parrentId ? parrentId : "" };
      break;
    }
    default:
      break;
  }

  return item;
};

export const projectMock = {
  id: "1",
  fieldId: "2",
  designId: "6",

  title: "1q",
  code: "w2",
  contract: "",
  description: "df",
  field: {
    id: "1",
    subsidiaryId: "1",
    subsidiary: {
      id: "1",
      title: "sub1",
      code: "code1",
      description: "",
      logo: null,
    },
    title: "sub1",
    code: "code1",
    description: "",
  },
  design: {
    id: "6",
    title: "",
    code: "",
    description: "",
    logo: null,
  },
  documents: [],
};
