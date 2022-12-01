export interface QuestionnaireFormData {
  /** Передаем параметрами */
  subsidiary: string;
  field: string;
  unit: string; //Unit or Project
  title: string;
  questionnaireType: string;
  count: number;
  year: number;
  tag: string;
  subUnit: string;
  fda: string;
  parameter?: string;
  tempAmbientMin: number;
  tempAmbientMax: number;
  measuredArea: string;
  measureType?: string;
  measureRangeMax: number;
  measureRangeMin: number;

  //1-2
  tempMeasureAreaMin?: number;
  tempMeasureAreaMax?: number;
  pressureMeasureAreaMin?: number;
  pressureMeasureAreaMax?: number;
  warmingUp?: number;
  responseTime?: number;

//3 для газика и температуры выбрать флажки
  phasePartitionControl?: boolean;
  particulateMatter?: boolean;
  valveBlock?: boolean;

  // для расхода 4-5 еще 2, для уровня от раздела фаз: либо 4-5, либо 4,5,6,7
  density?: number;
  viscosity?: number;
//для давления 4-5 еще 2
  valveBlockType?: string;
  airBleedValve?: boolean;
  //для газиков 4-5 еще 2
  lowerThreshold?: number;
  upperThreshold?: number;


  corpsMaterial: string;
  protection: string;
  explosionType: string;
  explosionMark: string;
  safety: string;
  lifeTime: number;
  mtbf: number;









  connectionType: string;
  connection: string;

  outputSignal: string;
  connectionScheme: string;
  voltage: number;
  hart: boolean;
  hartVersion?: string;
  internalDiagnostic: boolean;
  settingRange: string;
  accuracy: string;

  localIndication: boolean;

  calibrationStamp: boolean;
  mpi: number;
  selfDiagnostic: boolean;
  blockageDiagnostic: boolean;
  currentLoopIntegrityDiagnostic: boolean;

  cableEntry: string;
  reserveCableEntryStub: string;
  heating: string;
  thermCase?: string;
  thermBox?: string;

  mountingBracket: string;
}