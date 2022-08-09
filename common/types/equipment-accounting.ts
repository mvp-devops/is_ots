export interface CableLogView {
  unit: string;
  subUnit: string;
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

export interface ImpulseLineLogView {
  unit: string;
  subUnit: string;
  tag: string;
  numberOfTrace: string;
  impulseLineType: string;
  fromPlace: string;
  toPlace: string;
  impulseLineLenght: string;
  range: string;
  description: string;
}

export interface SignalView {
  unit: string;
  subUnit: string;
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

export interface MetrologyView {
  unit: string;
  subUnit: string;
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
  unit: string;
  subUnit: string;
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

export interface GeneralInformationView {
  unit: string;
  subUnit: string;
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
