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
import { LogoCreationAttrs } from "../../../../../../common/types/file-storage";

import { SubsidiaryEntity } from "../../../position-tree";
import {
  CounterpartyEntity,
  DesignEntity,
} from "../../../regulatory-reference-information";

@Table({ tableName: "logos" })
export class LogoEntity extends Model<LogoEntity, LogoCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: "Наименование Дочернего общества/Совмостного предприятия",
  })
  @ForeignKey(() => SubsidiaryEntity)
  @Column
  subsidiaryId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор контрагента",
  })
  @ForeignKey(() => CounterpartyEntity)
  @Column
  counterpartyId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектной организации",
  })
  @ForeignKey(() => DesignEntity)
  @Column
  designId: number;

  // @ApiProperty({
  //   example: 1,
  //   description:
  //     'Уникальный идентификатор пользователя системы',
  // })
  // @ForeignKey(() => UserEntity)
  // @Column
  // userId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  filePath: string;

  @ApiProperty({
    example: "Тип файла",
    description: "Тип файла",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileType: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.png",
    description: "Наименование файла (сгенерированное с помощью UUIDv4)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fileName: string;

  @BelongsTo(() => SubsidiaryEntity)
  subsidiary: SubsidiaryEntity;

  @BelongsTo(() => CounterpartyEntity)
  counterparty: CounterpartyEntity;

  @BelongsTo(() => DesignEntity)
  design: DesignEntity;

  // @BelongsTo(() => UserEntity)
  // user: UserEntity;
}
