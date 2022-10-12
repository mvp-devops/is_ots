import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { SummaryListOfEquipmentCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";
import {
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
} from "../../../position-tree";
import {
  FacilityEntity,
  CableLogEntity,
  ImpulseLineLogEntity,
  SignalEntity,
  MetrologyEntity,
  MonitoringEntity,
} from "../";
import { DesignDocumentEntity } from "../../../file-storage";
import { TechnicalCardEntity } from "../../../regulatory-reference-information";

@Table({ tableName: "summary-list-of-equipments" })
export class SummaryListOfEquipmentEntity extends Model<
  SummaryListOfEquipmentEntity,
  SummaryListOfEquipmentCreateOrUpdateAttrs
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
    description: "Уникальный идентификатор Проекта",
  })
  @ForeignKey(() => ProjectEntity)
  @Column({
    type: DataType.INTEGER,
  })
  projectId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта",
  })
  @ForeignKey(() => UnitEntity)
  @Column({
    type: DataType.INTEGER,
  })
  unitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор установки",
  })
  @ForeignKey(() => SubUnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  subUnitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор марки/типа оборудования",
  })
  @ForeignKey(() => FacilityEntity)
  @Column({
    type: DataType.INTEGER,
  })
  facilityId: number;

  @ForeignKey(() => TechnicalCardEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  technicalCardId: number;

  @ApiProperty({
    example: "Кран Г-3",
    description: "Место установки",
  })
  @Column({
    type: DataType.STRING,
  })
  installationLocation: string;

  @ApiProperty({
    example: "РСУ, ПАЗ",
    description: "Принадлежность к системам управления ТП",
  })
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ["РСУ"],
  })
  systemType: string[];

  @ApiProperty({
    example: "ТП",
    description: "Модификация оборудования",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: "н/д",
  })
  facilityModification: string;

  @ApiProperty({
    example: "456456",
    description: "Заводской номер",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: "н/д",
  })
  factoryNumber: string;

  @ApiProperty({
    example: "PG-1-1",
    description: "TAG",
  })
  @Column({
    type: DataType.STRING,
  })
  tag: string;

  @ApiProperty({
    example: "Давление до крана Г-3",
    description: "Контролируемый параметр",
  })
  @Column({
    type: DataType.STRING,
  })
  controlledParameter: string;

  @ApiProperty({
    example: "2020 ",
    description: "Год выпуска",
  })
  @Column({
    type: DataType.STRING,
  })
  year: string;
  @ApiProperty({
    example: "12",
    description: "Месяц выпуска",
  })
  @Column({
    type: DataType.STRING,
  })
  month: string;
  @ApiProperty({
    example: "240",
    description: "Срок эксплуатации, мес.",
  })
  @Column({
    type: DataType.STRING,
  })
  period: string;

  @ApiProperty({
    example: "Спецификация",
    description: "Спецификация поставки",
  })
  @Column({
    type: DataType.STRING,
  })
  specification: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsTo(() => FacilityEntity)
  facility: FacilityEntity;

  @BelongsTo(() => ProjectEntity)
  project: ProjectEntity;

  @BelongsTo(() => UnitEntity)
  unit: UnitEntity;

  @BelongsTo(() => SubUnitEntity)
  subUnit: SubUnitEntity;

  @BelongsTo(() => TechnicalCardEntity)
  technicalCard: TechnicalCardEntity;

  @HasMany(() => CableLogEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  cableLog: CableLogEntity[];

  @HasMany(() => ImpulseLineLogEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  impulseLineLog: ImpulseLineLogEntity[];

  @HasMany(() => SignalEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  signals: SignalEntity[];

  @HasOne(() => MetrologyEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  metrology: MetrologyEntity;

  @HasOne(() => MonitoringEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  monitoring: MonitoringEntity;

  @HasOne(() => DesignDocumentEntity, {
    as: "equipmentQuestionare",
    foreignKey: "sloeId",
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  equipmentQuestionare: DesignDocumentEntity;
}
