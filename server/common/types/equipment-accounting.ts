import { DesignDocumentEntity } from "../../src/modules/file-storage";
import { DesignDocumentView } from "./file-storage";
import { NsiCreateOrUpdateAttrs } from "./regulatory-reference-information";

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
  questionare?: DesignDocumentEntity | null;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
  createdAt?: number | string;
  updatedAt?: number | string;
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
  questionare?: any;
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
}

export interface SummaryListOfEquipmentFormData {
  generalInformation: GeneralInformationCreateOrUpdateAttrs;
  metrology?: MetrologyCreateOrUpdateAttrs | null;
  monitoring?: MonitoringCreateOrUpdateAttrs | null;
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
  wiringDiagram: DesignDocumentEntity | null;
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
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface CableLogCreateOrUpdateAttrs {
  id?: string | number | null;
  sloeId: string | number | null;
  wiringDiagram?: any;
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
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface ImpulseLineLogCreateOrUpdateAttrs {
  id?: string | number | null;
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
  signalParameter: string;
  ll: string;
  l: string;
  h: string;
  hh: string;
  emergencyProtocol: string;
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface SignalCreateOrUpdateAttrs {
  id?: string | number | null;
  sloeId: string | number | null;
  signalType: string;
  signalProtocol: string;
  signalTag: string;
  signalParameter: string;
  ll: string;
  l: string;
  h: string;
  hh: string;
  emergencyProtocol: string;
}

export interface MetrologyView {
  id: string | number | null;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  counterpartyId: string | number | null;
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
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface MetrologyCreateOrUpdateAttrs {
  id?: string | number | null;
  sloeId: number | null;
  counterpartyId: number | null;
  sgroei: string;
  grsi: string;
  min: string;
  max: string;
  range: string;
  accuracy: string;
  mpi: string;
  metrologyType: string;
  documentType: string;
  documentNumber: string;
  fromDate: string | null;
  toDate: string | null;
  document?: any;
  status: string;
  arshin: string;
  verificationProcedure?: any;
  typeApprovalCertificate?: any;
  newCounterParty?: { title: string; code: string; description: string };
}

export interface MonitoringView {
  id: string | number;
  sloeId: string | number | null;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  tag: string;
  functionalDiagram: DesignDocumentEntity | null;
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
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface MonitoringCreateOrUpdateAttrs {
  id?: string | number | null;
  functionalDiagram?: any;
  sloeId: string | number | null;
  mountDate: string | null;
  mountDocument?: any;
  connectDate: string | null;
  connectDocument?: any;
  testDate: string | null;
  testDocument?: any;
  awpDate: string | null;
  awpDocument?: any;
  commisionDate: string | null;
  commisionDocument?: any;
}

export interface GeneralInformationView {
  id: string | number;
  sloeId: string | number | null;
  projectId: string;
  project: string;
  unit: string;
  unitId: string;
  subUnit: string;
  subUnitId: string;
  facility: FacilityView;
  installationLocation: string;
  questionare?: DesignDocumentEntity | null;
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
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface GeneralInformationCreateOrUpdateAttrs {
  id?: string | number | null;
  sloeId?: string | number | null;
  projectId: string | number | null;
  unitId: string | number | null;
  subUnitId: string | number | null;
  facilityId: string | number | null;
  technacalCardId?: string | number | null;
  installationLocation: string;
  questionare?: any;
  systemType: string[];
  tag: string;
  controlledParameter: string;
  facility?: FacilityCreateOrUpdateAttrs | null;
  facilityModification: string | null;
  factoryNumber: string;
  year: string;
  month: string;
  period: string;
  specification: string;
  description: string;
}

export interface FacilityView {
  id?: string | number | null;
  country: string;
  vendor: string;
  title: string;
  equipmentType: string;
  meansurementArea?: string | null;
  meansurementType?: string | null;
  meansureGroup?: string | null;
  modifications: string[];
  createdAt?: number | string;
  updatedAt?: number | string;
}

export interface FacilityCreateOrUpdateAttrs extends FacilityView {}

export interface ExportEquipmentToAtlas {
  company: string; //subsidiary.title
  subdivision: string; //у нас нет н/д
  field: string; //field.title
  prod_area: string; //sub-unit.title
  place_install: string; //summaryListOfEquipment.installationPlace
  position_tag: string; //summaryListOfEquipment.tag
  partic_sbpaz: string; //summaryListOfEquipment.systemType.includes("ПАЗ")
  phys_quantity: string; //у нас нет н/д
  clarification: string; //summaryListOfEquipment.controlledParameter
  category: string; //facility.equipmentType
  name: string; //у нас нет н/д
  type_eq: string; //facility.title
  model_eq: string; //summaryListOfEquipment.facilityModification
  country: string; //facility.country
  factory: string; //facility.vendor.title
  sn: string; //summaryListOfEquipment.factoryNumber
  prod_dt: Date; //summaryListOfEquipment.month . summaryListOfEquipment.year MySQL date
  life_time: string; //summaryListOfEquipment.period
  set_type: string; //у нас нет н/д
  set_sn: string; //у нас нет н/д
  type_control: string; //summaryListOfEquipment.metrology.metrologyType
  dt: Date; //summaryListOfEquipment.metrology.fromDate MySQL datetimeoffset
  m_range: string; ////summaryListOfEquipment.metrology.mpi MySQL datetimeoffset
  dt_next: Date; //summaryListOfEquipment.metrology.toDate
  type_doc: string; //summaryListOfEquipment.metrology.documentType
  number_doc: string; //summaryListOfEquipment.metrology.documentNumber
  organization: string; //summaryListOfEquipment.metrology.counterparty.title
  low_limit: string; //summaryListOfEquipment.metrology.min
  upper_limit: string; //summaryListOfEquipment.metrology.max
  units: string; //summaryListOfEquipment.metrology.range
  acc: string; //summaryListOfEquipment.metrology.accuracy
  num_registry: string; //summaryListOfEquipment.metrology.grsi
  method_mc: string; //summaryListOfEquipment.metrology.verificationProcedure.title
  meansur_area: string; //facility.meansurementArea
  type_meansur: string; //facility.meansurementType
  group_eq: string; //facility.meansurementGroup
  sgroei: string; //summaryListOfEquipment.metrology.sgroei
  remark: string; //summaryListOfEquipment.metrology.status
  actual_tech_condition: string; //summaryListOfEquipment.description
}

export type EquipmentAccountingAssetView =
  | SummaryListOfEquipmentView
  | GeneralInformationView
  | MetrologyView
  | SignalView
  | CableLogView
  | ImpulseLineLogView
  | MonitoringView
  | null;

export type EquipmentAccountingAssetCreateOrUpdateAttrs =
  | GeneralInformationCreateOrUpdateAttrs
  | MetrologyCreateOrUpdateAttrs
  | SignalCreateOrUpdateAttrs
  | CableLogCreateOrUpdateAttrs
  | ImpulseLineLogCreateOrUpdateAttrs
  | MonitoringCreateOrUpdateAttrs
  | SummaryListOfEquipmentFormData;

export interface SummaryListOfEquipmentCreateOrUpdateFiles {
  questionare?: any;
  wiringDiagram?: any;
  document?: any;
  verificationProcedure?: any;
  typeApprovalCertificate?: any;
  functionalDiagram?: any;
  mountDocument?: any;
  connectDocument?: any;
  testDocument?: any;
  awpDocument?: any;
  commisionDocument?: any;
}

export interface MReestrEqMeansur {
  register_eq: string; // metrology.grsi
  dt_start: Date; // metrology.fromDate
  dt_end: Date; // metrology.toDate
  name: string; // facility.title - например массовый расходомер
  type_eq: string; // нужно подумать конкретная модель оборудования
  model_eq: string; //facilityModification
  method_measur: string; //metrology.verificationProcedure
  interval_measur: string; //metrology.mpi
  country: string; //facility.country
  factory: string; //facility.vendor
  measur_area: string; //facility.meansurementArea
  group_eq: string; //facility.meansureGroup

}

export interface AtlasCreateOrUpdateAttrs extends MReestrEqMeansur{
  company: string; //sloe.subUnit.unit.project.field.subsidiary.title
  subdivision: string; //у нас нет ставим н/д
  field: string; //sloe.subUnit.unit.project.field.title
  facility: string; //sloe.subUnit.unit.title
  prod_area: string; //sloe.subUnit.title
  place_install: string; //installationLocation
  position_tag: string; //tag
  partic_sbpaz: string;//systemType.includes("ПАЗ") ? "Да" : "Нет"
  phys_quantity: string; // измеряемый параметр в зависимости от вида измерений прописывать
  clarification: string; //controlledParameter
  category: string; //facility.equipmentType
  type_protection: string; //explosionMark - ручной ввод??
  sn: string;   // factoryNumber
  prod_dt: Date; // new Date(year, month)
  life_time: number; // +period/12
  set_type: string; //у нас нет ставим н/д
  set_sn: string; //у нас нет ставим н/д
  actual_mc: string; //metrology.metrologyType
  dt: Date; // metrology.fromDate
  dt_next: Date; // metrology.toDate
  m_range: string; //metrology.mpi
  type_doc: string; //metrology.documentType
  number_doc: string; //metrology.documentNumber
  num_registry: string; // metrology.grsi
  name: string; // facility.title - например массовый расходомер
  type_eq: string; // нужно подумать конкретная модель оборудования
  model_eq: string; //facilityModification
  method_mc: string; //metrology.verificationProcedure
  country: string; //facility.country
  factory: string; //facility.vendor
  measur_area: string; //facility.meansurementArea
  group_eq: string; //facility.meansureGroup
  organization: string; //metrology.counterparty.title
  low_limit: string; //metrology.min
  upper_limit: string; //metrology.max
  units: string;//metrology.range
  acc: string; //metrology.accuracy
  type_measur: string; //facility.meansurementType
  sgroei: string; //metrology.sgroei
  remark: string; // примечание
  actual_tech_condition: string; //metrology.status
  distance: string; //удаленность объекта у нас нет
  contract: string; //договор у нас нет
  opo: string; // ОПО у нас нет
  rpo: number; //0 или 1 Признак РПО
  flag_rtk:number; //0 или 1 Признак эксплуатации
  tko: string; //Тех карта МО/ТО
  path_to_doc: string; //путь к документу
  path_to_method_mc: string; // путь к методике поверки
  path_to_type_app_cert: string // путь к СоП
}