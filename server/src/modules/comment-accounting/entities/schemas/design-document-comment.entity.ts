import { SummaryListOfEquipmentEntity } from "../../../equipment-accounting";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { DesignDocumentCommentCreationAttrs } from "../../../../../common/types/comments-accounting";
import {
  CriticalityEntity,
  DirectionEntity,
  UserEntity,
} from "../../../regulatory-reference-information";
import { NormativeEntity, DesignDocumentEntity } from "../../../file-storage";
import { DesignDocumentSolutionEntity } from "./design-document-solution.entity";

@Table({ tableName: "documentation-comments" })
export class DesignDocumentCommentEntity extends Model<
  DesignDocumentCommentEntity,
  DesignDocumentCommentCreationAttrs
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
    description: "Уникальный идентификатор проектной документации проекта",
  })
  @ForeignKey(() => DesignDocumentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  pdcId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор документации объектов строительства",
  })
  @ForeignKey(() => DesignDocumentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  udcId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектной документации установок",
  })
  @ForeignKey(() => DesignDocumentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  sudcId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор технико-коммерческого предложения",
  })
  @ForeignKey(() => DesignDocumentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  sdcId: number;
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор функционального направления",
  })
  @ForeignKey(() => DirectionEntity)
  @Column({
    type: DataType.INTEGER,
  })
  directionId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор критерия критичности",
  })
  @ForeignKey(() => CriticalityEntity)
  @Column({
    type: DataType.INTEGER,
  })
  criticalityId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор нормативной ссылки",
  })
  @ForeignKey(() => NormativeEntity)
  @Column({
    type: DataType.INTEGER,
  })
  normativeId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор пользователя",
  })
  @ForeignKey(() => UserEntity)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
  @ApiProperty({
    example: "Поле для замечания",
    description: "Поле для замечания",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comment: string;

  @BelongsTo(() => DirectionEntity)
  direction: DirectionEntity;

  @BelongsTo(() => CriticalityEntity)
  criticality: CriticalityEntity;

  @BelongsTo(() => NormativeEntity)
  normative: NormativeEntity;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => DesignDocumentEntity, {
    as: "pdc",
    foreignKey: {
      name: "pdcId",
      allowNull: true,
    },
  })
  pdc: DesignDocumentEntity;

  @BelongsTo(() => DesignDocumentEntity, {
    as: "udc",
    foreignKey: {
      name: "udcId",
      allowNull: true,
    },
  })
  udc: DesignDocumentEntity;

  @BelongsTo(() => DesignDocumentEntity, {
    as: "sudc",
    foreignKey: {
      name: "sudcId",
      allowNull: true,
    },
  })
  sudc: DesignDocumentEntity;

  @BelongsTo(() => DesignDocumentEntity, {
    as: "sdc",
    foreignKey: {
      name: "sdcId",
      allowNull: true,
    },
  })
  sdc: DesignDocumentEntity;

  @HasMany(() => DesignDocumentSolutionEntity)
  solutions: DesignDocumentSolutionEntity[];
}
