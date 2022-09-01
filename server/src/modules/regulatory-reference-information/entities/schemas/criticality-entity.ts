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
import { StageEntity } from "./stage.entity";

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

  @HasMany(() => CapitalConstructionUnitSupervisionCommentEntity)
  monitoringComments: CapitalConstructionUnitSupervisionCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity)
  designDocumentComments: DesignDocumentCommentEntity[];
}
