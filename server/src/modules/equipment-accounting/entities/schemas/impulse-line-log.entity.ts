import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { ImpulseLineLogCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";

import { SummaryListOfEquipmentEntity } from "../";

@Table({ tableName: "impulse-line-log" })
export class ImpulseLineLogEntity extends Model<
  ImpulseLineLogEntity,
  ImpulseLineLogCreateOrUpdateAttrs
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
    description: "№ импульсной линии",
  })
  @Column({
    type: DataType.STRING,
  })
  numberOfTrace: string;

  @ApiProperty({
    example: "Азот",
    description: "Тип импульсной линии",
  })
  @Column({
    type: DataType.STRING,
  })
  impulseLineType: string;

  @ApiProperty({
    example: "Площадка УЗ СОД (1,15 км)",
    description: "Место расположения точки подключения, от",
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
  toPlace: string;

  @ApiProperty({
    example: "90",
    description: "Длина импульсной линии, м",
  })
  @Column({
    type: DataType.STRING,
  })
  impulseLineLenght: string;

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
}
