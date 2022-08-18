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

import { SubsidiaryCreationAttrs } from "../../../../../common/types/position-tree";
import { FieldEntity } from "./field.entity";
import { LogoEntity } from "../../../file-storage";

@Table({ tableName: "subsidiaries" })
export class SubsidiaryEntity extends Model<
  SubsidiaryEntity,
  SubsidiaryCreationAttrs
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

  @HasMany(() => FieldEntity)
  fields: FieldEntity[];

  @HasOne(() => LogoEntity)
  file: LogoEntity;

  // @HasMany(() => UserEntity)
  // users: UserEntity[];
}
