import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { MonitoringCreateOrUpdateAttrs } from "../../../../../common/types/equipment-accounting";

import { SummaryListOfEquipmentEntity } from "../";
import { CapitalConstructionUnitSupervisionCommentEntity } from "../../../comment-accounting";
import { DesignDocumentEntity } from "../../../file-storage";

@Table({ tableName: "monitorings" })
export class MonitoringEntity extends Model<
  MonitoringEntity,
  MonitoringCreateOrUpdateAttrs
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
    example: 1,
    description: "Уникальный идентификатор единицы оборудования",
  })
  @ForeignKey(() => SummaryListOfEquipmentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  sloeId: number;

  @ApiProperty({
    example: "2022-08-17 15:04:16.483+03",
    description: "Монтажа",
  })
  @Column({
    type: DataType.STRING,
  })
  mountDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description:
      "Наименование ведомости смонтированного оборудования (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  mountDocument: string;

  @ApiProperty({
    example: "2027-08-17 15:04:16.483+03",
    description: "Подключения питания",
  })
  @Column({
    type: DataType.STRING,
  })
  connectDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование документа (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  connectDocument: string;

  @ApiProperty({
    example: "2027-08-17 15:04:16.483+03",
    description: "Дата проведения ПНР",
  })
  @Column({
    type: DataType.STRING,
  })
  testDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование документа (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  testDocument: string;

  @ApiProperty({
    example: "2027-08-17 15:04:16.483+03",
    description: "Дата вывода сигналов на АРМ оператора",
  })
  @Column({
    type: DataType.STRING,
  })
  awpDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование документа (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  awpDocument: string;

  @ApiProperty({
    example: "2027-08-17 15:04:16.483+03",
    description: "Дата ввода в эксплуатацию",
  })
  @Column({
    type: DataType.STRING,
  })
  commisionDate: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование документа (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
  })
  commisionDocument: string;

  @BelongsTo(() => SummaryListOfEquipmentEntity, { foreignKey: "sloeId" })
  sloe: SummaryListOfEquipmentEntity;

  @HasMany(() => CapitalConstructionUnitSupervisionCommentEntity)
  comments: CapitalConstructionUnitSupervisionCommentEntity;

  @HasOne(() => DesignDocumentEntity)
  functionalDiagram: DesignDocumentEntity;
}
