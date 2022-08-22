export interface SummaryListOfEquipmentView {
  id: string;
  project: string;
  projectId: string;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  facilityId: string | number | null;
  installationLocation: string;
  facility: FacilityView;
  facilityModification: string;
  questionare?: {
    questionareType: string;
    questionareName: string;
    questionarePath: string;
  };
  functionalDiagram?: {
    functionalDiagramType: string;
    functionalDiagramName: string;
    functionalDiagramPath: string;
  };
  systemType: string[];
  tag: string;
  controlledParameter: string;
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

export interface SummaryListOfEquipmentCreateOrUpdateAttrs {
  projectId: string | number | null;
  unitId: string | number | null;
  subUnitId: string | number;
  facilityId: string | number | null;
  installationLocation: string;
  questionare: any;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  facilityModification: string;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
  facility?: FacilityCreateOrUpdateAtts;
  cableLog?: CableLogCreateOrUpdateAttrs[] | null;
  impulseLineLog?: ImpulseLineLogCreateOrUpdateAttrs[] | null;
  metrology?: MetrologyCreateOrUpdateAttrs | null;
  signals?: SignalCreateOrUpdateAttrs[] | null;
  monitoring?: MonitoringCreateOrUpdateAttrs | null;
}

export interface SummaryListOfEquipmentFormData {
  generalInformation: GeneralInformationCreateOrUpdateAttrs;
  metrology?: MetrologyCreateOrUpdateAttrs;
  monitoring?: MonitoringCreateOrUpdateAttrs;
  cableLog: CableLogCreateOrUpdateAttrs[];
  impulseLineLog: ImpulseLineLogCreateOrUpdateAttrs[];
  signals: SignalCreateOrUpdateAttrs[];
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
  id: string | number | null;
  sloeId: string | number | null;
  wiringDiagram: any;
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
  id: string | number | null;
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
  id: string | number | null;
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
  metrologyType: string;
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

export interface MetrologyCreateOrUpdateAttrs {
  id: string | number | null;
  sloeId: string | number | null;
  sgroei: string;
  grsi: string;
  min: string;
  max: string;
  range: string;
  accuracy: string;
  mpi: string;
  metrologyType: string;
  documentType: string;
  counterparty: string;
  documentNumber: string;
  fromDate: Date | null | string;
  toDate: Date | null | string;
  document: any;
  status: string;
  arshin: string;
  verificationProcedure: any;
  typeApprovalCertificate: any;
}

export interface MonitoringView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  functionalDiagram?: {
    functionalDiagramType: string;
    functionalDiagramName: string;
    functionalDiagramPath: string;
  };
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
  mountDocument: any;
  connectDate: Date | null | string;
  connectDocument: any;
  testDate: Date | null | string;
  testDocument: any;
  awpDate: Date | null | string;
  awpDocument: any;
  commisionDate: Date | null | string;
  commisionDocument: any;
  description: string;
}

export interface GeneralInformationView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  facility: FacilityView;
  installationLocation: string;
  questionare?: {
    questionareType: string;
    questionareName: string;
    questionarePath: string;
  };

  systemType: string[];
  tag: string;
  controlledParameter: string;
  facilityId: string | number | null;
  facilityModification: string;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
}

export interface GeneralInformationCreateOrUpdateAttrs {
  id: string | number | null;
  sloeId: string | number | null;
  unitId: string | number | null;
  subUnitId: string | number | null;
  installationLocation: string;
  questionare: any;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  facilityId: string | number | null;
  facility?: FacilityCreateOrUpdateAtts | null;
  facilityModification: string | null;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
}

export interface FacilityView {
  id: string | number | null;
  country: string;
  vendor: string;
  title: string;
  equipmentType: string;
  measurementArea?: string | null;
  meansurementType?: string | null;
  meansureGroup?: string | null;
  modifications: string[];
}

export interface FacilityCreateOrUpdateAtts extends FacilityView {}
