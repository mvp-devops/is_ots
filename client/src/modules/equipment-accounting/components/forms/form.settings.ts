import {
  CableLogCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  SummaryListOfEquipmentFormData,
} from "../../types";

export const initData = () => {};

export const facilityItem = {
  id: null,
  country: "",
  vendor: "",
  title: "",
  equipmentType: "",
  meansurementArea: null,
  meansurementType: null,
  meansureGroup: null,
  modifications: [],
};

export const generalInformationItem: GeneralInformationCreateOrUpdateAttrs = {
  id: null,
  sloeId: null,
  projectId: null,
  unitId: null,
  subUnitId: null,
  installationLocation: "",
  questionare: null,
  systemType: [],
  tag: "",
  controlledParameter: "",
  facilityId: null,
  facility: facilityItem,
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
  id: null,
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
  id: null,
  sloeId: "",
  signalType: "",
  signalProtocol: "",
  signalTag: "",
  ll: "",
  l: "",
  h: "",
  hh: "",
  emergencyProtocol: "",
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
};

export const metrologyItem: MetrologyCreateOrUpdateAttrs = {
  id: null,
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
  counterpartyId: null,
  document: null,
  status: "",
  arshin: "",
  verificationProcedure: null,
  typeApprovalCertificate: null,
};

export const summaryListOfEquipmentFormData: SummaryListOfEquipmentFormData = {
  generalInformation: generalInformationItem,
  metrology: metrologyItem,
  monitoring: monitoringItem,
  cableLog: [],
  impulseLineLog: [],
  signals: [],
};
