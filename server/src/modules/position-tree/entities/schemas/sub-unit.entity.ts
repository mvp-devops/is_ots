import {
  Column,
  DataType,
  HasMany,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { SubUnitCreateOrUpdateAttrs } from "../../../../../common/types/position-tree";
import { UnitEntity } from "./unit.entity";
import {
  EquipmentEntity,
  CounterpartyEntity,
} from "../../../regulatory-reference-information";
import { DesignDocumentEntity } from "src/modules/file-storage";
import { SummaryListOfEquipmentEntity } from "src/modules/equipment-accounting";

@Table({ tableName: "sub-units" })
export class SubUnitEntity extends Model<
  SubUnitEntity,
  SubUnitCreateOrUpdateAttrs
> {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта капитального строительства",
  })
  @ForeignKey(() => UnitEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  unitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор типа/группы оборудования",
  })
  @ForeignKey(() => EquipmentEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  equipmnetId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  @ForeignKey(() => CounterpartyEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  supplierId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "2.3",
    description: "Позиция по генеральному плану",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;

  @ApiProperty({
    example: "Измерительная установка",
    description: "Наименование объекта/установки",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "ИЗУ",
    description: "Шифр объекта/установки",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({
    example: "ГПНР-000.000.00/2021",
    description: "Номер договора с подрядной организацией",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contract: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @BelongsTo(() => UnitEntity)
  unit: UnitEntity;

  @BelongsTo(() => CounterpartyEntity)
  supplier: CounterpartyEntity;

  @BelongsTo(() => EquipmentEntity)
  equipment: EquipmentEntity;

  @HasMany(() => DesignDocumentEntity, { as: "subUnitDocuments" })
  documents: DesignDocumentEntity[];

  @HasOne(() => DesignDocumentEntity, { as: "subUnitQuestionare" })
  questionare: DesignDocumentEntity;

  @HasMany(() => SummaryListOfEquipmentEntity)
  summaryListOfEquipments: SummaryListOfEquipmentEntity[];
}
