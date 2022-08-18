import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { RegulatoryReferenceInformationCreationAttrs } from "../../../../../common/types/regulatory-reference-information";
import {
  DesignDocumentCommentEntity,
  CapitalConstructionUnitSupervisionCommentEntity,
} from "../../../comment-accounting";

@Table({ tableName: "directions" })
export class DirectionEntity extends Model<
  DirectionEntity,
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
    example: "Промышленная автоматизация",
    description: "Наименование функционального направления",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "ПА",
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

  @HasMany(() => CapitalConstructionUnitSupervisionCommentEntity)
  monitoringComments: CapitalConstructionUnitSupervisionCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity)
  designDocumentComments: DesignDocumentCommentEntity[];
}
