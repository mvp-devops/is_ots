import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { TechnicalCardEntity } from "../";
import { TechnicalCardOperationCreateOrUpdateAttrs } from "../../../../../common/types/regulatory-reference-information";

@Table({ tableName: "technical-card-operation" })
export class TechnicalCardOperationEntity extends Model<
  TechnicalCardOperationEntity,
  TechnicalCardOperationCreateOrUpdateAttrs
> {
  @ForeignKey(() => TechnicalCardEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  technicalCardId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Подготовительные работы",
    description: "Вид работ",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  workType: string;

  @ApiProperty({
    example: "ТК-ПНР",
    description: "Наименование оерации",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  operationTitle: string;

  @ApiProperty({
    example: "Инженер КИПиА",
    description: "Категория исполнителя",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  categoryExecutor: string;
  @ApiProperty({ example: "0,01", description: "Трудозатраты, ч." })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  laborCosts: number;

  @BelongsTo(() => TechnicalCardEntity)
  technicalCard: TechnicalCardEntity;
}
