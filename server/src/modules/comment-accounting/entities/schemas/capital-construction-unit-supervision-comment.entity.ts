import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { CapitalConstructionUnitSupervisionCommentCreationAttrs } from "../../../../../common/types/comments-accounting";
import {
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
} from "../../../position-tree";
import { MonitoringEntity } from "../../../equipment-accounting";

@Table({ tableName: "comments" })
export class CapitalConstructionUnitSupervisionCommentEntity extends Model<
  CapitalConstructionUnitSupervisionCommentEntity,
  CapitalConstructionUnitSupervisionCommentCreationAttrs
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
    description: "Уникальный идентификатор проекта",
  })
  @ForeignKey(() => ProjectEntity)
  @Column({
    type: DataType.INTEGER,
  })
  projectId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта строительства",
  })
  @ForeignKey(() => UnitEntity)
  @Column({
    type: DataType.INTEGER,
  })
  unitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор установки",
  })
  @ForeignKey(() => SubUnitEntity)
  @Column({
    type: DataType.INTEGER,
  })
  subUnitId: number;

  //   @ApiProperty({
  //     example: 1,
  //     description:
  //       'Уникальный идентификатор функционального направления',
  //   })
  //   @ForeignKey(() => DirectionEntity)
  //   @Column({
  //     type: DataType.INTEGER,
  //   })
  //   directionId: number;

  //   @ApiProperty({
  //     example: 1,
  //     description:
  //       'Уникальный идентификатор критерия критичности',
  //   })
  //   @ForeignKey(() => CriticalityEntity)
  //   @Column({
  //     type: DataType.INTEGER,
  //   })
  //   criticalityId: number;

  //   @ApiProperty({
  //     example: 1,
  //     description:
  //       'Уникальный идентификатор нормативной ссылки',
  //   })
  //   @ForeignKey(() => NormativeEntity)
  //   @Column({
  //     type: DataType.INTEGER,
  //   })
  //   normativeId: number;

  //   @ApiProperty({
  //     example: 1,
  //     description: 'Уникальный идентификатор пользователя',
  //   })
  //   @ForeignKey(() => UserEntity)
  //   @Column({
  //     type: DataType.INTEGER,
  //   })
  //   userId: number;

  @ApiProperty({
    example: "Поле для замечания",
    description: "Поле для замечания",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comment: string;

  @BelongsTo(() => ProjectEntity)
  project: ProjectEntity;

  @BelongsTo(() => UnitEntity)
  unit: UnitEntity;

  @BelongsTo(() => SubUnitEntity)
  subUnit: SubUnitEntity;

  @BelongsTo(() => MonitoringEntity)
  monitoring: MonitoringEntity;

  //   @BelongsTo(() => DirectionEntity)
  //   direction: DirectionEntity;

  //   @BelongsTo(() => CriticalityEntity)
  //   criticality: CriticalityEntity;

  //   @BelongsTo(() => NormativeEntity)
  //   normative: NormativeEntity;

  //   @BelongsTo(() => UserEntity)
  //   user: UserEntity;
}
