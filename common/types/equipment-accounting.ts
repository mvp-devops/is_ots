import { DesignDocumentCreateOrUpdateAttrs } from "./file-storage";
export interface SummaryListOfEquipmentView {
  id: string;
  project: string;
  projectId: string;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  installationLocation: string;
  questionare: string;
  equipmentType: string;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  country: string;
  vendor: string;
  facilityTitle: string;
  facilityModification: string;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
  cableLog?: CableLogView[];
  impulseLineLog?: ImpulseLineLogView[];
  metrology?: MetrologyView;
  signals?: SignalView[];
  monitoring?: MonitoringView;
}

export interface CableLogView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  wiringDiagramTitle: string;
  numberOfTrace: string;
  cableMark: string;
  cableSection: string;
  fromUnit: string;
  fromPlace: string;
  toUnit: string;
  toPlace: string;
  cableLenght: string;
  range: string;
  description: string;
}

export interface CableLogCreateOrUpdateAttrs {
  id: string | number;
  sloeId: string | number | null;
  wiringDiagram: DesignDocumentCreateOrUpdateAttrs | null;
  numberOfTrace: string;
  cableMark: string;
  cableSection: string;
  fromUnit: string;
  fromPlace: string;
  toUnit: string;
  toPlace: string;
  cableLenght: string;
  range: string;
  description: string;
}

export interface ImpulseLineLogView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  numberOfTrace: string;
  impulseLineType: string;
  fromPlace: string;
  toPlace: string;
  impulseLineLenght: string;
  range: string;
  description: string;
}

export interface ImpulseLineLogCreateOrUpdateAttrs {
  id: string | number;
  sloeId: string | number | null;
  numberOfTrace: string;
  impulseLineType: string;
  fromPlace: string;
  toPlace: string;
  impulseLineLenght: string;
  range: string;
  description: string;
}

export interface SignalView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  signalType: string;
  signalProtocol: string;
  signalTag: string;
  ll: string;
  l: string;
  h: string;
  hh: string;
  emergenceProtocol: string;
}

export interface SignalCreateOrUpdateAttrs {
  id: string | number;
  sloeId: string | number | null;
  signalType: string;
  signalProtocol: string;
  signalTag: string;
  ll: string;
  l: string;
  h: string;
  hh: string;
  emergenceProtocol: string;
}

export interface MetrologyView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  sgroei: string;
  measurementArea: string;
  meansurementType: string;
  meansureGroup: string;
  grsi: string;
  min: string;
  max: string;
  range: string;
  accuracy: string;
  mpi: string;
  documentType: string;
  documentNumber: string;
  document: string;
  counterparty: string;
  fromDate: string;
  toDate: string;
  status: string;
  arshin: string;
  verificationProcedure: string;
  typeApprovalCertificate: string;
}

export interface MonitoringView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  mountDate: string;
  mountDocument: string;
  connectDate: string;
  connectDocument: string;
  testDate: string;
  testDocument: string;
  awpDate: string;
  awpDocument: string;
  commisionDate: string;
  commisionDocument: string;
  description: string;
}

export interface MonitoringCreateOrUpdateAttrs {
  id: string | number | null;
  sloeId: string | number | null;
  mountDate: Date | null | string;
  mountDocument: DesignDocumentCreateOrUpdateAttrs | null;
  connectDate: Date | null | string;
  connectDocument: DesignDocumentCreateOrUpdateAttrs | null;
  testDate: Date | null | string;
  testDocument: DesignDocumentCreateOrUpdateAttrs | null;
  awpDate: Date | null | string;
  awpDocument: DesignDocumentCreateOrUpdateAttrs | null;
  commisionDate: Date | null | string;
  commisionDocument: DesignDocumentCreateOrUpdateAttrs | null;
  description: string;
}

export interface GeneralInformationView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  installationLocation: string;
  questionare: string;
  equipmentType: string;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  country: string;
  vendor: string;
  facilityTitle: string;
  facilityModification: string;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
}
