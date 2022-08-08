import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { RegulatoryReferenceInformationCreationAttrs } from "../../../../../../common/types/regulatory-reference-information";
import { UnitEntity, SubUnitEntity } from "../../../position-tree";

@Table({ tableName: "equipments" })
export class EquipmentEntity extends Model<
  EquipmentEntity,
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
    example: "ООО «ЮТСК»",
    description: "Наименование типа/группы оборудования",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "GPVN",
    description: "Шифр ",
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

  @HasMany(() => UnitEntity)
  units: UnitEntity[];

  @HasMany(() => SubUnitEntity)
  subUnits: SubUnitEntity[];
}
