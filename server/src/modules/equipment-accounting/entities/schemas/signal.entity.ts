import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { SignalCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";

import { SummaryListOfEquipmentEntity } from "../";

@Table({ tableName: "signals" })
export class SignalEntity extends Model<
  SignalEntity,
  SignalCreateOrUpdateAttrs
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
    example: "AI",
    description: "Тип сигнала",
  })
  @Column({
    type: DataType.STRING,
  })
  signalType: string;

  @ApiProperty({
    example: "HART",
    description: "Тип протокола передачи данных",
  })
  @Column({
    type: DataType.STRING,
  })
  signalProtocol: string;

  @ApiProperty({
    example: "Кран открыт",
    description: "Контролируемый параметр",
  })
  @Column({
    type: DataType.TEXT,
  })
  signalParameter: string;

  @ApiProperty({
    example: "PISA-1-1",
    description: "TAG сигнала",
  })
  @Column({
    type: DataType.STRING,
  })
  signalTag: string;

  @ApiProperty({
    example: "2",
    description: "Нижний аварийный предел",
  })
  @Column({
    type: DataType.STRING,
  })
  ll: string;

  @ApiProperty({
    example: "2",
    description: "Нижний предупредительный предел",
  })
  @Column({
    type: DataType.STRING,
  })
  l: string;

  @ApiProperty({
    example: "2",
    description: "Верхний предупредительный предел",
  })
  @Column({
    type: DataType.STRING,
  })
  h: string;

  @ApiProperty({
    example: "2",
    description: "Верхний аварийный предел",
  })
  @Column({
    type: DataType.STRING,
  })
  hh: string;

  @ApiProperty({
    example: "Закрыть кран Г-3",
    description: "Аварийный протокол",
  })
  @Column({
    type: DataType.STRING,
  })
  emergencyProtocol: string;

  @BelongsTo(() => SummaryListOfEquipmentEntity, { foreignKey: "sloeId" })
  sloe: SummaryListOfEquipmentEntity;
}
