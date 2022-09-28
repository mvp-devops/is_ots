import { ApiProperty } from "@nestjs/swagger";
import {
  CableLogCreateOrUpdateAttrs,
  FacilityCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  SummaryListOfEquipmentFormData,
} from "../../../../common/types/equipment-accounting";

export class CreateFacilityDto implements FacilityCreateOrUpdateAttrs {
  @ApiProperty({
    example: "Российская Федерация",
    description: "Страна-производитель",
  })
  readonly country: string;

  @ApiProperty({
    example: "ЗАО ПГ МЕТРАН",
    description: "Завод-изготовитель (вендор)",
  })
  readonly vendor: string;

  @ApiProperty({
    example: "МЕТРАН 150",
    description: "Наименование",
  })
  readonly title: string;

  @ApiProperty({
    example: "Средство измерений",
    description: "Тип оборудования",
  })
  readonly equipmentType: string;

  @ApiProperty({
    example: "Область измерений",
    description: "Область измерений",
  })
  readonly measurementArea?: string;

  @ApiProperty({
    example: "Вид измерений",
    description: "Вид измерений",
  })
  readonly meansurementType?: string;

  @ApiProperty({
    example: "Группа СИ",
    description: "Группа СИ",
  })
  readonly meansureGroup?: string;

  @ApiProperty({
    example: "Модификации",
    description: "Модификации",
  })
  readonly modifications: string[];
}

export class CreateCableLogDto implements CableLogCreateOrUpdateAttrs {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор единицы оборудования",
  })
  readonly sloeId: number;

  @ApiProperty({
    example: "34599-bb-de",
    description: "№ кабельной трассы",
  })
  readonly numberOfTrace: string;

  @ApiProperty({
    example: "КВВГ-НГ",
    description: "Марка кабеля",
  })
  readonly cableMark: string;

  @ApiProperty({
    example: "2х2х1.0",
    description: "Сечение кабеля, мм2",
  })
  readonly cableSection: string;

  @ApiProperty({
    example: "Место подключения, от",
    description: "Место подключения, от",
  })
  readonly fromUnit: string;

  @ApiProperty({
    example: "Точка подключения, от",
    description: "Точка подключения, от",
  })
  readonly fromPlace: string;

  @ApiProperty({
    example: "Место подключения, до",
    description: "Место подключения, до",
  })
  readonly toUnit: string;

  @ApiProperty({
    example: "Точка подключения, до",
    description: "Точка подключения, до",
  })
  readonly toPlace: string;

  @ApiProperty({
    example: "Длина кабеля",
    description: "Длина кабеля",
  })
  readonly cableLenght: string;

  @ApiProperty({
    example: "м",
    description: "Единица измерения длины кабеля",
  })
  readonly range: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateImpulseLineLogDto
  implements ImpulseLineLogCreateOrUpdateAttrs
{
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор единицы оборудования",
  })
  readonly sloeId: number;

  @ApiProperty({
    example: "34599-bb-de",
    description: "№ импульсной линии",
  })
  readonly numberOfTrace: string;

  @ApiProperty({
    example: "Тип импульсной линии",
    description: "Тип импульсной линии",
  })
  readonly impulseLineType: string;

  @ApiProperty({
    example: "Точка подключения, от",
    description: "Точка подключения, от",
  })
  readonly fromPlace: string;

  @ApiProperty({
    example: "Точка подключения, до",
    description: "Точка подключения, до",
  })
  readonly toPlace: string;

  @ApiProperty({
    example: "Длина импульсной линии",
    description: "Длина импульсной линии",
  })
  readonly impulseLineLenght: string;

  @ApiProperty({
    example: "м",
    description: "Единица измерения длины кабеля",
  })
  readonly range: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateMetrologyDto implements MetrologyCreateOrUpdateAttrs {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор единицы оборудования",
  })
  readonly sloeId: number;

  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор организации, выполнившей поверку",
  })
  readonly counterpartyId: number;

  @ApiProperty({
    example:
      "Сфера государственного регулирования обеспечения единства измерений",
    description:
      "Сфера государственного регулирования обеспечения единства измерений",
  })
  readonly sgroei: string;

  @ApiProperty({
    example: "№ СИ в государственном реестре средст измерений",
    description: "№ СИ в государственном реестре средст измерений",
  })
  readonly grsi: string;

  @ApiProperty({
    example: "Предел измерений, min",
    description: "Предел измерений, min",
  })
  readonly min: string;

  @ApiProperty({
    example: "Предел измерений, max",
    description: "Предел измерений, max",
  })
  readonly max: string;

  @ApiProperty({
    example: "м",
    description: "Единица измерения длины кабеля",
  })
  readonly range: string;

  @ApiProperty({
    example: "Погрешность/класс точности",
    description: "Погрешность/класс точности",
  })
  readonly accuracy: string;

  @ApiProperty({
    example: "Межповерочный интервал, мес.",
    description: "Межповерочный интервал, мес.",
  })
  readonly mpi: string;

  @ApiProperty({
    example: "Вид работ по МО",
    description: "Вид работ по МО",
  })
  readonly metrologyType: string;

  @ApiProperty({
    example: "Тип документа со сведениями о поверке/калибровке",
    description: "Тип документа со сведениями о поверке/калибровке",
  })
  readonly documentType: string;

  @ApiProperty({
    example: "№ документа со сведениями о поверке/калибровке",
    description: "№ документа со сведениями о поверке/калибровке",
  })
  readonly documentNumber: string;

  @ApiProperty({
    example: "Дата поверки/калибровки",
    description: "Дата поверки/калибровки",
  })
  readonly fromDate: string;

  @ApiProperty({
    example: "Дата следующей поверки/калибровки",
    description: "Дата следующей поверки/калибровки",
  })
  readonly toDate: string;

  @ApiProperty({
    example: "Стату оборудования",
    description: "Стату оборудования",
  })
  readonly status: string;

  @ApiProperty({
    example: "ССылка на ФГИС АРШИН",
    description: "ССылка на ФГИС АРШИН",
  })
  readonly arshin: string;
}

export class CreateMonitoringDto implements MonitoringCreateOrUpdateAttrs {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор единицы оборудования",
  })
  readonly sloeId: number;

  @ApiProperty({
    example: "Дата монтажа",
    description: "Дата монтажа",
  })
  readonly mountDate: string;

  @ApiProperty({
    example: "Дата подключения",
    description: "Дата подключения",
  })
  readonly connectDate: string;

  @ApiProperty({
    example: "Дата проведения индивидуальных испытаний",
    description: "Дата проведения индивидуальных испытаний",
  })
  readonly testDate: string;

  @ApiProperty({
    example: "Дата проверки прохождения сигналов на АРМ оператора",
    description: "Дата проверки прохождения сигналов на АРМ оператора",
  })
  readonly awpDate: string;

  @ApiProperty({
    example: "Дата ввода в эксплуатацию",
    description: "Дата ввода в эксплуатацию",
  })
  readonly commisionDate: string;
}

export class CreateSignalDto implements SignalCreateOrUpdateAttrs {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор единицы оборудования",
  })
  readonly sloeId: number;

  @ApiProperty({
    example: "Тип сигнала",
    description: "Тип сигнала",
  })
  readonly signalType: string;

  @ApiProperty({
    example: "Тип протокола передачи данных",
    description: "Тип протокола передачи данных",
  })
  readonly signalProtocol: string;

  @ApiProperty({
    example: "TAG сигнала",
    description: "TAG сигнала",
  })
  readonly signalTag: string;

  @ApiProperty({
    example: "Авария, min",
    description: "Авария, min",
  })
  readonly h: string;

  @ApiProperty({
    example: "Сигнализация, min",
    description: "Сигнализация, min",
  })
  readonly l: string;

  @ApiProperty({
    example: "Сигнализация, max",
    description: "Сигнализация, max",
  })
  readonly ll: string;

  @ApiProperty({
    example: "Авария, max",
    description: "Авария, max",
  })
  readonly hh: string;

  @ApiProperty({
    example: "Аварийный протокол",
    description: "Аварийный протокол",
  })
  readonly emergencyProtocol: string;
}

export class CreateSummaryListOfEquipmentDto
  implements SummaryListOfEquipmentFormData
{
  generalInformation: GeneralInformationCreateOrUpdateAttrs;
  metrology: MetrologyCreateOrUpdateAttrs | null;
  monitoring: MonitoringCreateOrUpdateAttrs | null;
  cableLog: CableLogCreateOrUpdateAttrs[];
  impulseLineLog: ImpulseLineLogCreateOrUpdateAttrs[];
  signals: SignalCreateOrUpdateAttrs[];
}
