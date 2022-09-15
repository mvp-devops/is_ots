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

import { ProjectCreateOrUpdateAttrs } from "../../../../../common/types/position-tree";

import { FieldEntity } from "./field.entity";
import { UnitEntity } from "./unit.entity";
import { DesignEntity } from "../../../regulatory-reference-information";
import { DesignDocumentEntity } from "../../../file-storage";

@Table({ tableName: "projects" })
export class ProjectEntity extends Model<
  ProjectEntity,
  ProjectCreateOrUpdateAttrs
> {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор родительского узла (Месторождения)",
  })
  @ForeignKey(() => FieldEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fieldId: number;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор родительского узла (Проектные организации)",
  })
  @ForeignKey(() => DesignEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 10,
  })
  designId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "ООО НИПИ НГ ПЕТОН",
    description: "Наименование проектной организации",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: "PETON",
    description:
      "Шифр. Необходим для формирования корректного шифра проектной документации",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty({
    example: "ГПНР-000.000.00/2021",
    description: "Номер договора с подрядной организацией",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contract: string;

  @ApiProperty({ example: "Поле для примечаний", description: "Примечания" })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @BelongsTo(() => FieldEntity)
  field: FieldEntity;

  @BelongsTo(() => DesignEntity)
  design: DesignEntity;

  @HasMany(() => UnitEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
  })
  units: UnitEntity[];

  @HasMany(() => DesignDocumentEntity, {
    // onUpdate: "CASCADE",
    // onDelete: "SET NULL",
    as: "projectDocuments",
  })
  projectDocuments: DesignDocumentEntity[];
}
