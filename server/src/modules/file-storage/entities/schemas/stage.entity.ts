import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { RegulatoryReferenceInformationCreationAttrs } from "../../../../../common/types/regulatory-reference-information";

@Table({ tableName: "stages" })
export class StageEntity extends Model<
  StageEntity,
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
    example: "Задание на проектирование",
    description: "Наименование стадии",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "ЗП",
    description: "Шифр стадии",
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

  // @HasMany(() => ProjectDocuments)
  // projectDocs: Array<ProjectDocuments>;

  // @HasMany(() => UnitDocuments)
  // unitDocs: Array<UnitDocuments>;

  // @HasMany(() => SubUnitDocuments)
  // subUnitDocs: Array<SubUnitDocuments>;
}
