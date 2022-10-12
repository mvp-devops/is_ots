import { NsiCreateOrUpdateAttrs, NSIView } from "../../types";

export const userItem = {
  subsidiaryId: null,
  designId: null,
  counterpartyId: null,
  fieldId: null,
  firstName: "",
  secondName: "",
  lastName: "",
  subdivision: "",
  position: "",
  email: "",
  phone: "",
  password: "",
  roles: [],
  file: null,
};

export const nsiItem: NsiCreateOrUpdateAttrs = {
  title: "",
  code: "",
  description: "",
  threshold: "",
  goal: "",
  tenseGoal: "",
  file: null,
};

export const initFormData = (row?: NSIView): NsiCreateOrUpdateAttrs => {
  let item: NsiCreateOrUpdateAttrs = null;

  if (row) {
    item = {
      title: row.title,
      code: row.code,
      description: row.description,
      threshold: row.threshold,
      goal: row.goal,
      tenseGoal: row.tenseGoal,
      file: null,
    };
  } else {
    item = nsiItem;
  }

  return item;
};
