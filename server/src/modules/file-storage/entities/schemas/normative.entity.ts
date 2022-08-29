import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { NormativeCreateOrUpdateAttrs } from "../../../../../common/types/file-storage";
import {
  CapitalConstructionUnitSupervisionCommentEntity,
  DesignDocumentCommentEntity,
} from "../../../comment-accounting";

@Table({ tableName: "normatives" })
export class NormativeEntity extends Model<
  NormativeEntity,
  NormativeCreateOrUpdateAttrs
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
    example: "М-15.001.002.03",
    description: "Шифр документа",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({
    example: "Промышленная автоматизация",
    description: "Наименование нормативного документа",
  })
  @Column({
    type: DataType.STRING,

    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "№ актуальной ревизии документа",
    description: "№ актуальной ревизии документа",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  revision: string;

  @ApiProperty({
    example: "PDF",
    description: "Тип файла",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileType: string;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "normatives",
  })
  filePath: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.pdf",
    description: "Наименование файла (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @HasMany(() => CapitalConstructionUnitSupervisionCommentEntity)
  monitoringComments: CapitalConstructionUnitSupervisionCommentEntity[];

  @HasMany(() => DesignDocumentCommentEntity)
  designDocumentComments: DesignDocumentCommentEntity[];
}
