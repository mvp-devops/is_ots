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

import { RegulatoryReferenceInformationCreationAttrs } from "../../../../../common/types/regulatory-reference-information";
import {
  DesignDocumentCommentEntity,
  CapitalConstructionUnitSupervisionCommentEntity,
} from "../../../comment-accounting";

@Table({ tableName: "criticalities" })
export class CriticalityEntity extends Model<
  CriticalityEntity,
  RegulatoryReferenceInformationCreationAttrs
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
    example: "Критерий критичности",
    description: "Наименование критерия критичности",
  })
  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "20",
    description: "Вес критерия критичности, %",
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

  @ApiProperty({
    example: "4",
    description: "Порог",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  threshold: string;

  @ApiProperty({
    example: "2",
    description: "Цель",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  goal: string;

  @ApiProperty({
    example: "0",
    description: "Амцель",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  tenseGoal: string;

  @HasMany(() => CapitalConstructionUnitSupervisionCommentEntity)
  monitoringComments: CapitalConstructionUnitSupervisionCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity)
  designDocumentComments: DesignDocumentCommentEntity[];
}
