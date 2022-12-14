import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  HasOne,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { DesignOrCounterpartyCreationAttrs } from "../../../../../common/types/regulatory-reference-information";
import { ProjectEntity } from "../../../position-tree";
import { LogoEntity } from "../../../file-storage";

@Table({ tableName: "designs" })
export class DesignEntity extends Model<
  DesignEntity,
  DesignOrCounterpartyCreationAttrs
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
    example: "ООО «ЮТСК»",
    description: "Наименование проектной организации",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "GPVN",
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

  @HasMany(() => ProjectEntity)
  children: ProjectEntity[];

  @HasOne(() => LogoEntity)
  file: LogoEntity;
}
