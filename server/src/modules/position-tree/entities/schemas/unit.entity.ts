import { SubUnitEntity } from "./sub-unit.entity";
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

import { UnitCreateOrUpdateAttrs } from "../../../../../common/types/position-tree";
import { ProjectEntity } from "./project.entity";
import {
  EquipmentEntity,
  CounterpartyEntity,
} from "../../../regulatory-reference-information";
import { SummaryListOfEquipmentEntity } from "../../../equipment-accounting";
import { DesignDocumentEntity } from "../../../file-storage";

@Table({ tableName: "units" })
export class UnitEntity extends Model<UnitEntity, UnitCreateOrUpdateAttrs> {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проекта",
  })
  @ForeignKey(() => ProjectEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  projectId: number;

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
  equipmentId: number;

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
    description: "Наименование объекта капитального строительства",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "ИЗУ",
    description: "Шифр объекта капитального строительства",
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

  @BelongsTo(() => ProjectEntity)
  project: ProjectEntity;

  @BelongsTo(() => CounterpartyEntity)
  supplier: CounterpartyEntity;

  @BelongsTo(() => EquipmentEntity)
  equipment: EquipmentEntity;

  @HasMany(() => SubUnitEntity)
  subUnits: SubUnitEntity[];

  @HasMany(() => DesignDocumentEntity, { as: "unitDocuments" })
  unitDocuments: DesignDocumentEntity[];

  @HasOne(() => DesignDocumentEntity, { as: "unitQuestionare" })
  questionare: DesignDocumentEntity;

  @HasMany(() => SummaryListOfEquipmentEntity)
  summaryListOfEquipments: SummaryListOfEquipmentEntity[];
}
