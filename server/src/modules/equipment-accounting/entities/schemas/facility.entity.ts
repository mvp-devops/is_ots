import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { FacilityCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";
import { SummaryListOfEquipmentEntity } from "./summary-list-of-facility.entity";
import {TechnicalCardEntity} from "../../../regulatory-reference-information";

@Table({ tableName: "facilities" })
export class FacilityEntity extends Model<
  FacilityEntity,
  FacilityCreateOrUpdateAttrs
> {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор",
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Российская Федерация",
    description: "Страна-производитель",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "Россия",
  })
  country: string;

  @ApiProperty({
    example: "ЗАО ПГ Метран",
    description: "Завод-изготовитель",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "Не определен",
  })
  vendor: string;

  @ApiProperty({
    example: "Метран-150",
    description: "Наименование/модель",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "СИ",
    description: "Тип оборудования",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  equipmentType: string;

  @ApiProperty({
    example: "Давление/вакуум",
    description: "Область измерений",
  })
  @Column({
    type: DataType.STRING,
  })
  measurementArea: string;

  @ApiProperty({
    example: "Геометрические измерения",
    description: "Тип измерений",
  })
  @Column({
    type: DataType.STRING,
  })
  meansurementType: string;

  @ApiProperty({
    example: "Датчики давления",
    description: "Группа СИ",
  })
  @Column({
    type: DataType.STRING,
  })
  meansureGroup: string;

  @ApiProperty({
    example: "Модификация",
    description: "Модификации",
  })
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  modifications: string[];

  @ApiProperty({
    example: "1",
    description: "№ Тех. карты ПНР",
  })
  @ForeignKey(() => TechnicalCardEntity)
  @Column({
    type: DataType.INTEGER,
  })
  technicalCardId: number;

  @BelongsTo(() => TechnicalCardEntity)
  technicalCard: TechnicalCardEntity;

  @HasMany(() => SummaryListOfEquipmentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  summaryListOfEquipments: SummaryListOfEquipmentEntity[];
}