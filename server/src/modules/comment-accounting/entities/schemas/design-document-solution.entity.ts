import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { DesignDocumentCommentSolutionCreationAttrs } from "../../../../../common/types/comments-accounting";
import { DesignDocumentCommentEntity } from "./design-document-comment.entity";
import { UserEntity } from "../../../regulatory-reference-information";

@Table({ tableName: "documentation-solutions" })
export class DesignDocumentSolutionEntity extends Model<
  DesignDocumentSolutionEntity,
  DesignDocumentCommentSolutionCreationAttrs
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
    description: "Уникальный идентификатор замечания",
  })
  @ForeignKey(() => DesignDocumentCommentEntity)
  @Column({
    type: DataType.INTEGER,
  })
  commentId: number;

  @ApiProperty({
    example: 1,
    description: "Статус ответа",
  })
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @ApiProperty({
    example: "Ответ проектировщика",
    description: "Ответ проектировщика",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  answer: string;

  @ApiProperty({
    example: "Контактные данные проектировщика",
    description: "Контактные данные проектировщика",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  designContacts: string;

  @ApiProperty({
    example: 1,
    description: "Статус решения",
  })
  @Column({
    type: DataType.INTEGER,
  })
  solutionId: number;

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
    example: "Решение",
    description: "Решение",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  solution: string;

  @BelongsTo(() => DesignDocumentCommentEntity, { foreignKey: "commentId" })
  comment: DesignDocumentCommentEntity;

  @BelongsTo(() => UserEntity)
  user: UserEntity;
}
