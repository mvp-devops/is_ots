import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { OperationalDocumentCreateOrUpdateAttrs } from "../../../../../common/types/file-storage";
import {
  MetrologyEntity,
  MonitoringEntity,
} from "../../../equipment-accounting";

@Table({ tableName: "operation-documents" })
export class OperationDocumentEntity extends Model<
  OperationDocumentEntity,
  OperationalDocumentCreateOrUpdateAttrs
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
    example: "1",
    description: "Уникальный идентификатор документа со сведениями о поверке",
  })
  @Column({
    type: DataType.NUMBER,
  })
  metrologyDocumentId: number;

  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор методики поверки",
  })
  @Column({
    type: DataType.NUMBER,
  })
  verificationProcedureId: number;

  @ApiProperty({
    example: "1",
    description:
      "Уникальный идентификатор свидетельства об утверждении типа СИ",
  })
  @Column({
    type: DataType.NUMBER,
  })
  typeApprovalCertificateId: number;

  @ApiProperty({
    example: "1",
    description:
      "Уникальный идентификатор ведомости смонтированного оборудования",
  })
  @Column({
    type: DataType.NUMBER,
  })
  mountDocumentId: number;

  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор акта о подключении оборудования",
  })
  @Column({
    type: DataType.NUMBER,
  })
  connectDocumentId: number;

  @ApiProperty({
    example: "1",
    description:
      "Уникальный идентификатор протокола проведения индивидуальных испытаний",
  })
  @Column({
    type: DataType.NUMBER,
  })
  testDocumentId: number;

  @ApiProperty({
    example: "1",
    description:
      "Уникальный идентификатор протокола проверки прохождения сигналов на АРМ оператора",
  })
  @Column({
    type: DataType.NUMBER,
  })
  awpDocumentId: number;

  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор акта ввода в эксплуатацию",
  })
  @Column({
    type: DataType.NUMBER,
  })
  commisionDocumentId: number;

  @ApiProperty({
    example: "Наименование документа",
    description: "Наименование документа",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  filePath: string;

  @ApiProperty({
    example: "Тип файла",
    description: "Тип файла",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileType: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Путь к файлу",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  @Column({
    type: DataType.TEXT,
  })
  readonly description: string;

  @BelongsTo(() => MetrologyEntity, {
    as: "document",
    foreignKey: "metrologyDocumentId",
  })
  document: MetrologyEntity;

  @BelongsTo(() => MetrologyEntity, {
    as: "verificationProcedure",
    foreignKey: "verificationProcedureId",
  })
  verificationProcedure: MetrologyEntity;
}
