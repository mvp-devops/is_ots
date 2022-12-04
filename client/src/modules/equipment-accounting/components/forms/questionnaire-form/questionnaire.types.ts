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
  tempMeasureAreaMin?: number;
  tempMeasureAreaMax?: number;
  pressureMeasureAreaMin?: number;
  pressureMeasureAreaMax?: number;
  sensorLength?: number; //Длина чувствительного элемента / глубина погружения защитной гильзы, мм
  warmingUp?: number;
  responseTime?: number;
  valveBlock?: boolean;
  valveBlockType?: string;
  airBleedValve?: boolean;
  connectionScheme?: string;
  settingRange?: string;
  sensorLDiameter?: number;
  protectiveSleeve?: boolean;
  protectiveSleeveMaterial?: string; //Материал защитной гильзы
  lowerThreshold?: number;
  upperThreshold?: number;
  fault?: boolean; //Выходное реле "Неисправность"
  registrationEvents?: boolean; //Регистрация событий в энергонезависимой памяти
  adjustment?: boolean; // Требуется настройка электроники при замене сенсора
  density_1?: number;
  density_2?: number;
  viscosity_1?: number;
  viscosity_2?: number;
  conductivity?: number;
  particulateMatter?: boolean;
  corrosiveImpurities?: number;
  phasePartitionControl?: boolean;
  corpsMaterial: string;
  protection: string;
  explosionType: string;
  explosionMark: string;
  safety: string;
  lifeTime: number;
  mtbf: number;










  zeroDrift?: boolean;
  opticsCleanliness?: boolean;
  connectionType: string;
  connection: string;
  outputSignal: string;
  voltage: number;
  hart: boolean;
  hartVersion?: string;
  localIndication: boolean;
  internalDiagnostic: boolean;
  converter?: string;
  converterType?: string;
  pipelineDiameter?: number;
  pipeMaterial?: string;
  flowMeterDistanceBefore?: number;
  flowMeterDistanceAfter?: number;
  flowStraighteners?: boolean; //Наличие струевыпрямителей
  processTurbulence?: boolean;
  turbulenceCause?: string;
  selfDiagnostic?: boolean;
  blockageDiagnostic?: boolean;
  currentLoopIntegrityDiagnostic?: boolean;
  accuracy: string;
  relativeAccuracy?: number;
  sensorAccuracy?: string;
  permissible?: number; // Предел допускаемой вариации выходного сигнала, в долях от пределов допускаемой основной
  ambientPermissible?: number; //Предел допускаемой погрешности от изменения температуры окружающей среды от нормальной на каждые 10 оС, в долях от пределов допускаемой основной погрешности
  sensorCalibration?: string;
  verification: boolean;
  verificationMethod?: string;
  calibrationStamp: boolean;
  mpi: number;


  cableEntry: string;
  reserveCableEntryStub: string;
  heating: string;  // Обогрев или обогрев оптики для газиков
  thermCase?: string;
  thermBox?: string;
  flanges?: boolean;
  dustProof?: boolean;
  mountingBracket: string;
}