import {
  FieldCreateOrUpdateAttrs,
  ProjectCreateOrUpdateAttrs,
  SubsidiaryCreateOrUpdateAttrs,
  SubUnitCreateOrUpdateAttrs,
  UnitCreateOrUpdateAttrs,
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
  designId: "",
  title: "",
  code: "",
  contract: "",
  description: "",
};

export const unitItem: UnitCreateOrUpdateAttrs = {
  projectId: "",
  supplierId: "",
  equipmentId: "",
  position: "",
  title: "",
  code: "",
  contract: "",
  description: "",
  questionare: null,
};

export const subUnitItem: SubUnitCreateOrUpdateAttrs = {
  unitId: "",
  supplierId: "",
  equipmentId: "",
  position: "",
  title: "",
  code: "",
  contract: "",
  description: "",
  questionare: null,
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
