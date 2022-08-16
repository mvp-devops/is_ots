import {
  CableLogCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
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

export const ImpulseLineLogItem: ImpulseLineLogCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: "",
  numberOfTrace: "",
  impulseLineType: "",
  fromPlace: "",
  toPlace: "",
  impulseLineLenght: "",
  range: "м",
  description: "",
};

export const signalItem: SignalCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: "",
  signalType: "",
  signalProtocol: "",
  signalTag: "",
  ll: "",
  l: "",
  h: "",
  hh: "",
  emergenceProtocol: "",
};

export const monitoringItem: MonitoringCreateOrUpdateAttrs = {
  id: null,
  sloeId: null,
  mountDate: null,
  mountDocument: null,
  connectDate: null,
  connectDocument: null,
  testDate: null,
  testDocument: null,
  awpDate: null,
  awpDocument: null,
  commisionDate: null,
  commisionDocument: null,
  description: "",
};

export const metrologyItem: MetrologyCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: null,
  sgroei: "",
  grsi: "",
  min: "",
  max: "",
  range: "",
  accuracy: "",
  mpi: "",
  metrologyType: "",
  documentType: "",
  documentNumber: "",
  fromDate: null,
  toDate: null,
  counterparty: "",
  document: null,
  status: "",
  arshin: "",
  verificationProcedure: null,
  typeApprovalCertificate: null,
};
