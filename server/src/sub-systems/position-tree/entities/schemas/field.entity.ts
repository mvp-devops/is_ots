import {
  Column,
  DataType,
  HasMany,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { FieldCreationAttrs } from "./../../../../../../common/types/position-tree";
import { SubsidiaryEntity, ProjectEntity } from "../..";

@Table({ tableName: "fields" })
export class FieldEntity extends Model<FieldEntity, FieldCreationAttrs> {
  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор рДочернего общества/Совместного предприятия",
  })
  @ForeignKey(() => SubsidiaryEntity)
  @Column
  subsidiaryId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Новопортовское нефтегазоконденсатное месторождение",
    description: "Наименование месторождения",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "NP",
    description:
      "Шифр. Необходим для формирования корректного шифра проектной документации",
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

  @BelongsTo(() => SubsidiaryEntity)
  parrent: SubsidiaryEntity;

  @HasMany(() => ProjectEntity)
  children: ProjectEntity[];
}
