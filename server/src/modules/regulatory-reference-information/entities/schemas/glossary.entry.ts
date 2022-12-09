import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { RegulatoryReferenceInformationCreationAttrs } from "../../../../../common/types/regulatory-reference-information";

@Table({ tableName: "glossary" })
export class GlossaryEntity extends Model<
  GlossaryEntity,
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
    example: "Административно-бытовой жилой комплекс",
    description: "Наименование",
  })
  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "АБЖК",
    description: "Сокращение",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({
    example: "А",
    description: "Буква",
  })
  @Column({
    type: DataType.STRING,
  })
  letter: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;
}