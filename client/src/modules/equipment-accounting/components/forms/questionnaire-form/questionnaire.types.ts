export interface QuestionnaireFormData {
  /** Передаем параметрами */
  subsidiary: string;
  field: string;
  project: string;
  unit: string;
  subUnit: string;
  cipher: string;
  title: string;
  questionnaireType: string;
  count: number;
  year: number;
  tag: string;
  location: string;
  fda: string;
  parameter?: string;
  tempAmbientMin: number;
  tempAmbientMax: number;
  measuredArea: string;
  measureType?: string;
  measureRangeMax: number;
  measureRangeMin: number;
  tempMeasureAreaMin?: number;
  tempMeasureAreaMax?: number;
  pressureMeasureAreaMin?: number;
  pressureMeasureAreaMax?: number;
  valveBlock?: boolean;
  valveBlockType?: string;
  airBleedValve?: boolean;
  valveBlockCorpMaterial?: string;
  connectionScheme?: string;
  settingRange?: string;
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
  voltage: number;
  hart: boolean;
  hartVersion?: string;
  localIndication: boolean;
  internalDiagnostic: boolean;
  selfDiagnostic?: boolean;
  blockageDiagnostic?: boolean;
  currentLoopIntegrityDiagnostic?: boolean;
  accuracy: string;
  heating: string;  // Обогрев или обогрев оптики для газиков
  thermCase?: string;
  thermBox?: string;
  calibrationStamp: boolean;
  mpi: number;
  verification: boolean;
  density_1?: number;
  viscosity_1?: number;
  particulateMatter?: boolean;
  corrosiveImpurities?: number;
  pipelineDiameter?: number;
  pipeMaterial?: string;
  flowMeterDistanceBefore?: number;
  flowMeterDistanceAfter?: number;
  verificationMethod?: string;
  cableEntry: string;
  reserveCableEntryStub: string;
  conductivity?: number;
  converter?: string;
  converterType?: string;
  flanges?: boolean;
  flowStraighteners?: boolean; //Наличие струевыпрямителей
  phasePartitionControl?: boolean;
  density_2?: number;
  viscosity_2?: number;
  processTurbulence?: boolean;
  turbulenceCause?: string;
  mountingBracket: string;
  sensorAccuracy?: string;
  sensorCalibration?: string;
  sensorLength?: number; //Длина чувствительного элемента / глубина погружения защитной гильзы, мм
  protectiveSleeve?: boolean;
  protectiveSleeveMaterial?: string; //Материал защитной гильзы
  sensorLDiameter?: number;
  warmingUp?: number;
  responseTime?: number;
  lowerThreshold?: number;
  upperThreshold?: number;
  fault?: boolean; //Выходное реле "Неисправность"
  registrationEvents?: boolean; //Регистрация событий в энергонезависимой памяти
  adjustment?: boolean; // Требуется настройка электроники при замене сенсора
  zeroDrift?: boolean;
  opticsCleanliness?: boolean;
  relativeAccuracy?: number;
  permissible?: number; // Предел допускаемой вариации выходного сигнала, в долях от пределов допускаемой основной
  ambientPermissible?: number; //Предел допускаемой погрешности от изменения температуры окружающей среды от нормальной на каждые 10 оС, в долях от пределов допускаемой основной погрешности
  dustProof?: boolean;
  controlCableConnection?: string;
}