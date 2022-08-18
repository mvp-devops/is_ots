import {
  Column,
  DataType,
  HasMany,
  HasOne,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { FieldEntity, SubsidiaryEntity } from "../../../position-tree";
import { LogoEntity } from "../../../file-storage";
import { UserCreateOrUpdateAttrs } from "../../../../../common/types/regulatory-reference-information";
import { DesignEntity } from "./design.entity";
import { CounterpartyEntity } from "./counterparty.entity";

@Table({ tableName: "users" })
export class UserEntity extends Model<UserEntity, UserCreateOrUpdateAttrs> {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор Дочернего общества)",
  })
  @ForeignKey(() => SubsidiaryEntity)
  @Column
  subsidiaryId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор месторождения)",
  })
  @ForeignKey(() => FieldEntity)
  @Column
  fieldId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектного института)",
  })
  @ForeignKey(() => DesignEntity)
  @Column
  designId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор контрагента)",
  })
  @ForeignKey(() => CounterpartyEntity)
  @Column
  counterpartyId: number;

  @ApiProperty({ example: 1, description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Иван",
    description: "Имя",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({
    example: "Иванович",
    description: "Отчество",
  })
  @Column({
    type: DataType.STRING,
  })
  secondName: string;

  @ApiProperty({
    example: "Иванов",
    description: "Имя",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: "Управление перспективных технологий",
    description: "Подразделение",
  })
  @Column({
    type: DataType.STRING,
  })
  subdivision: string;

  @ApiProperty({
    example: "Ведущий инженер-программист",
    description: "Должность",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  position: string;

  @ApiProperty({
    example: "ivanov.ii@example.ru",
    description: "Адрес электронной почты",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "8-888-888-88-88",
    description: "Контактный телефон",
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: "Qwerty.1",
    description: "Пароль",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @BelongsTo(() => SubsidiaryEntity)
  subsidiary: SubsidiaryEntity;
  @BelongsTo(() => FieldEntity)
  field: FieldEntity;
  @BelongsTo(() => DesignEntity)
  design: DesignEntity;
  @BelongsTo(() => CounterpartyEntity)
  counterparty: CounterpartyEntity;

  @HasOne(() => LogoEntity)
  avatar: LogoEntity;
}
