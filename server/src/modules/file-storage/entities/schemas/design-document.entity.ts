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
import { DesignDocumentCreateOrUpdateAttrs } from "../../../../../common/types/file-storage";
import { DesignDocumentCommentEntity } from "../../../comment-accounting";
import {
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
} from "../../../position-tree";
import {
  CableLogEntity,
  MonitoringEntity,
  SummaryListOfEquipmentEntity,
} from "../../../equipment-accounting";
import {
  StageEntity,
  SectionEntity,
  CounterpartyEntity,
} from "../../../regulatory-reference-information";

@Table({ tableName: "design-documents" })
export class DesignDocumentEntity extends Model<
  DesignDocumentEntity,
  DesignDocumentCreateOrUpdateAttrs
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
    example: "М-15.001.002.03",
    description: "Шифр документа",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проекта",
  })
  @ForeignKey(() => ProjectEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  projectId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта строительства",
  })
  @ForeignKey(() => UnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  unitId: number;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор опросного листа объекта строительства",
  })
  @ForeignKey(() => UnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  uqstId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор подбъекта",
  })
  @ForeignKey(() => SubUnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  subUnitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор опросного листа подбъекта",
  })
  @ForeignKey(() => SubUnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  suqstId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  @ForeignKey(() => CounterpartyEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  supplierId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор стадии жизненного цикла проекта",
  })
  @ForeignKey(() => StageEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 3,
  })
  stageId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор марки/раздела документации",
  })
  @ForeignKey(() => SectionEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 57,
  })
  sectionId: number;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор опросного листа единицы оборудования",
  })
  @ForeignKey(() => SummaryListOfEquipmentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  sloeId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор схем внешних электрических проводок",
  })
  @ForeignKey(() => CableLogEntity)
  @Column({
    type: DataType.INTEGER,
  })
  cableLogId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор функциональной схемы автоматизации",
  })
  @ForeignKey(() => MonitoringEntity)
  @Column({
    type: DataType.INTEGER,
  })
  monitoringId: number;

  @ApiProperty({
    example: "Промышленная автоматизация",
    description: "Наименование документа",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 1,
    description: "Номер ревизии документа",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "1",
  })
  revision: string;

  @ApiProperty({
    example: "PDF",
    description: "Тип файла",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileType: string;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  filePath: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование файла (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @BelongsTo(() => ProjectEntity, { as: "project" })
  project: ProjectEntity;

  @BelongsTo(() => UnitEntity, { as: "unit" })
  unit: UnitEntity;

  @BelongsTo(() => UnitEntity, {
    as: "unitQuestionare",
    foreignKey: "uqstId",
  })
  unitQuestionare: UnitEntity;

  @BelongsTo(() => SubUnitEntity, { as: "subUnit" })
  subUnit: SubUnitEntity;

  @BelongsTo(() => SubUnitEntity, {
    as: "subUnitQuestionare",
    foreignKey: "suqstId",
  })
  subUnitQuestionare: SubUnitEntity;

  @BelongsTo(() => CounterpartyEntity, {
    as: "supplier",
    foreignKey: "supplierId",
  })
  supplier: CounterpartyEntity;

  @BelongsTo(() => StageEntity)
  stage: StageEntity;

  @BelongsTo(() => SectionEntity)
  section: SectionEntity;

  @BelongsTo(() => SummaryListOfEquipmentEntity, {
    as: "equipmentQuestionare",
    foreignKey: "sloeId",
  })
  equipmentQuestionare: SummaryListOfEquipmentEntity;

  @BelongsTo(() => CableLogEntity, {
    as: "wiringDiagram",
    foreignKey: "cableLogId",
  })
  wiringDiagram: CableLogEntity;

  @BelongsTo(() => MonitoringEntity, {
    as: "functionalDiagram",
    foreignKey: "monitoringId",
  })
  functionalDiagram: MonitoringEntity;

  @HasMany(() => DesignDocumentCommentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",

    as: "pdc",
    foreignKey: "pdcId",
  })
  pdc: DesignDocumentCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
    as: "udc",
    foreignKey: "udcId",
  })
  udc: DesignDocumentCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
    as: "sudc",
    foreignKey: "sudcId",
  })
  sudc: DesignDocumentCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
    as: "sdc",
    foreignKey: "sdcId",
  })
  sdc: DesignDocumentCommentEntity[];
}
