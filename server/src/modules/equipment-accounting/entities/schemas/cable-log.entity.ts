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
import { CableLogCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";

import { SummaryListOfEquipmentEntity } from "../";
import { DesignDocumentEntity } from "src/modules/file-storage";

@Table({ tableName: "cable-log" })
export class CableLogEntity extends Model<
  CableLogEntity,
  CableLogCreateOrUpdateAttrs
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
    example: "С-3-4-5",
    description: "№ кабельной линии",
  })
  @Column({
    type: DataType.STRING,
  })
  numberOfTrace: string;

  @ApiProperty({
    example: "КВВГ-НГ",
    description: "Марка кабеля",
  })
  @Column({
    type: DataType.STRING,
  })
  cableMark: string;

  @ApiProperty({
    example: "2x2x1.5",
    description: "Сечение кабеля",
  })
  @Column({
    type: DataType.STRING,
  })
  cableSection: string;

  @ApiProperty({
    example: "Площадка УЗ СОД (1,15 км)",
    description: "Место расположения точки подключения, от",
  })
  @Column({
    type: DataType.STRING,
  })
  fromUnit: string;

  @ApiProperty({
    example: "Коробка соедини-тельная JB-S-01-A (сигнализация)",
    description: "Точка подключения, от",
  })
  @Column({
    type: DataType.STRING,
  })
  fromPlace: string;

  @ApiProperty({
    example: "Блок-бокс БКЭС  (1,15 км)",
    description: "Место расположения точки подключения, до",
  })
  @Column({
    type: DataType.STRING,
  })
  toUnit: string;

  @ApiProperty({
    example: "Шкаф СТК-ТМ на УЗ СОД (1,15 км)",
    description: "Точка подключения, до",
  })
  @Column({
    type: DataType.STRING,
  })
  toPlace: string;

  @ApiProperty({
    example: "90",
    description: "Длина кабельной трассы, м",
  })
  @Column({
    type: DataType.STRING,
  })
  cableLenght: string;

  @ApiProperty({
    example: "м",
    description: "Единица измерения",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: "м",
  })
  range: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsTo(() => SummaryListOfEquipmentEntity, { foreignKey: "sloeId" })
  sloe: SummaryListOfEquipmentEntity;

  @HasOne(() => DesignDocumentEntity)
  wiringDiagram: DesignDocumentEntity;
}
