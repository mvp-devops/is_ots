import {
  CableLogCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../../../../common/types/equipment-accounting";

export const initData = () => {};

export enum FormActions {
  EDIT = "UPDATE",
  ADD = "POST",
  REMOVE = "DELETE",
  VIEW = "GET",
}

export const facilityItem = {
  id: null,
  country: "",
  vendor: "",
  title: "",
  equipmentType: "",
  measurementArea: null,
  meansurementType: null,
  meansureGroup: null,
  modifications: [],
};

export const generalInformationItem: GeneralInformationCreateOrUpdateAttrs = {
  id: null,
  sloeId: null,
  unitId: null,
  subUnitId: null,
  installationLocation: "",
  questionare: null,
  systemType: [],
  tag: "",
  controlledParameter: "",
  facilityId: null,
  facility: {
    id: null,
    country: "",
    vendor: "",
    title: "",
    equipmentType: "",
    measurementArea: null,
    meansurementType: null,
    meansureGroup: null,
    modifications: [],
  },
  facilityModification: "",
  factoryNumber: "",
  year: "",
  month: "",
  period: "",
  specification: "",
  description: "",
};

export const cableLogItem: CableLogCreateOrUpdateAttrs = {
  id: null,
  sloeId: "",
  wiringDiagram: null,
  numberOfTrace: "",
  cableMark: "",
  cableSection: "",
  fromUnit: "",
  fromPlace: "",
  toUnit: "",
  toPlace: "",
  cableLenght: "",
  range: "м",
  description: "",
};
