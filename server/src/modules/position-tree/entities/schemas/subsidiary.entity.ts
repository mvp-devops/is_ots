import {
  Column,
  DataType,
  HasMany,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { SubsidiaryCreateOrUpdateAttrs } from "../../../../../common/types/position-tree";
import { FieldEntity } from "./field.entity";
import { LogoEntity } from "../../../file-storage";
import { UserEntity } from "../../../regulatory-reference-information";

@Table({ tableName: "subsidiaries" })
export class SubsidiaryEntity extends Model<
  SubsidiaryEntity,
  SubsidiaryCreateOrUpdateAttrs
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
    example: "ООО «Газпромнефть-Автоматизация»",
    description: "Наименование Дочернего общества/Совмостного предприятия",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "GPNA",
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

  @HasMany(() => FieldEntity, {
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  })
  fields: FieldEntity[];

  @HasOne(() => LogoEntity, {
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  })
  file: LogoEntity;

  @HasMany(() => UserEntity, {
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  })
  users: UserEntity[];
}
