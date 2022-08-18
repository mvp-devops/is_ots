import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { MetrologyCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";

import { SummaryListOfEquipmentEntity } from "../";
import { CounterpartyEntity } from "src/modules/regulatory-reference-information";

// metrologyType: string;
// documentType: string;
// counterparty: string;
// documentNumber: string;
// fromDate: Date | null | string;
// toDate: Date | null | string;

// status: string;
// arshin: string;
// verificationProcedure: any;
// typeApprovalCertificate: any;

@Table({ tableName: "metrologies" })
export class MetrologyEntity extends Model<
  MetrologyEntity,
  MetrologyCreateOrUpdateAttrs
> {
  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор единицы оборудования",
  })
  @ForeignKey(() => SummaryListOfEquipmentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  sloeId: number;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор организации, выполнившей поверку/калибровку",
  })
  @ForeignKey(() => CounterpartyEntity)
  @Column({
    type: DataType.INTEGER,
  })
  counterpartyId: number;

  @ApiProperty({
    example:
      "Осуществление производственного контроля за соблюдением установленных законодательством Российской Федерации требований промышленной безопасности к эксплуатации опасного производственного объекта",
    description:
      "Сфера государственного регулирования обеспечения единства измерений",
  })
  @Column({
    type: DataType.STRING,
  })
  sgroei: string;

  @ApiProperty({
    example: "11121-2015",
    description: "№ СИ в государственном реестре средств измерений",
  })
  @Column({
    type: DataType.STRING,
  })
  grsi: string;

  @ApiProperty({
    example: "0",
    description: "Предел измерений, min",
  })
  @Column({
    type: DataType.STRING,
  })
  min: string;

  @ApiProperty({
    example: "10",
    description: "Предел измерений, max",
  })
  @Column({
    type: DataType.STRING,
  })
  max: string;

  @ApiProperty({
    example: "МПа",
    description: "Единица измерения",
  })
  @Column({
    type: DataType.STRING,
  })
  range: string;

  @ApiProperty({
    example: "+/-1 %",
    description: "Погрешность/класс точности",
  })
  @Column({
    type: DataType.STRING,
  })
  accuracy: string;

  @ApiProperty({
    example: "60",
    description: "Межповерочный интервал, мес.",
  })
  @Column({
    type: DataType.STRING,
  })
  mpi: string;

  @ApiProperty({
    example: "Поверка",
    description: "Вид работ в области обеспечения единства измерений",
  })
  @Column({
    type: DataType.STRING,
  })
  metrologyType: string;

  @ApiProperty({
    example: "Паспорт",
    description: "Тип документа со сведениями о поверке/калибровке",
  })
  @Column({
    type: DataType.STRING,
  })
  documentType: string;

  @ApiProperty({
    example: "12588678",
    description: "№ документа со сведениями о поверке/калибровке",
  })
  @Column({
    type: DataType.STRING,
  })
  documentNumber: string;

  @ApiProperty({
    example: "2022-08-17 15:04:16.483+03",
    description: "Дата поверки/калибровки",
  })
  @Column({
    type: DataType.STRING,
  })
  fromDate: string;

  @ApiProperty({
    example: "2027-08-17 15:04:16.483+03",
    description: "Дата следующей поверки/калибровки",
  })
  @Column({
    type: DataType.STRING,
  })
  toDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description:
      "Наименование документа со сведениями о поверке (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  document: string;

  @ApiProperty({
    example: "Поверено",
    description: "Статус оборудования",
  })
  @Column({
    type: DataType.STRING,
  })
  status: string;

  @ApiProperty({
    example: "https://fgis.gost.ru/fundmetrology/cm/results/1-57128327",
    description: "Ссылка на ФГИС «АРШИН»",
  })
  @Column({
    type: DataType.STRING,
  })
  arshin: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description:
      "Наименование методики поверки (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  verificationProcedure: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description:
      "Наименование свидетельства об утверждении типа СИ (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  typeApprovalCertificate: string;

  @BelongsTo(() => SummaryListOfEquipmentEntity, { foreignKey: "sloeId" })
  sloe: SummaryListOfEquipmentEntity;

  @BelongsTo(() => CounterpartyEntity)
  counterparty: CounterpartyEntity;
}
