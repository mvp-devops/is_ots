import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { SummaryListOfEquipmentEntity } from "../../../equipment-accounting/entities";
import { TechnicalCardCreateOrUpdateAttrs } from "../../../../../common/types/regulatory-reference-information";
import { TechnicalCardOperationEntity } from "./technical-card-operation.entity";

@Table({ tableName: "technical-card" })
export class TechnicalCardEntity extends Model<
  TechnicalCardEntity,
  TechnicalCardCreateOrUpdateAttrs
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
    example: "Термометр сопротивления",
    description: "наименование и тип единицы оборудования",
  })
  @Column({
    type: DataType.TEXT,
    // unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "ТК-ПНР",
    description: "Шифр",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @HasMany(() => SummaryListOfEquipmentEntity)
  equipments: SummaryListOfEquipmentEntity[];

  @HasMany(() => TechnicalCardOperationEntity)
  operations: TechnicalCardOperationEntity[];
}
