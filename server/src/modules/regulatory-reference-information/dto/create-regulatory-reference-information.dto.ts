import { ApiProperty } from "@nestjs/swagger";

import {
  RegulatoryReferenceInformationCreationAttrs,
  DesignOrCounterpartyCreationAttrs,
  CriticalityCreationAttrs,
  UserCreateOrUpdateAttrs,
} from "../../../../common/types/regulatory-reference-information";

export class CreateDesignOrCounterpartyDto
  implements DesignOrCounterpartyCreationAttrs
{
  @ApiProperty({
    example: "АО «Гипровостокнефть»",
    description: "Наименование контрагента",
  })
  readonly title: string;

  @ApiProperty({
    example: "Шифр контрагента",
    description: "GPVN",
  })
  readonly code: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;

  @ApiProperty({
    example: "Логотип",
    description: "Логотип",
  })
  readonly file: any;
}

export class CreateNSIDto
  implements RegulatoryReferenceInformationCreationAttrs
{
  @ApiProperty({
    example: "Промышленная автоматизация",
    description: "Наименование объекта справочника",
  })
  readonly title: string;

  @ApiProperty({
    example: "Шифр объекта справочника",
    description: "GPVN",
  })
  readonly code: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateCriticalityDto implements CriticalityCreationAttrs {
  @ApiProperty({
    example: "Наименование критерия критичности",
    description: "Наименование критерия критичности",
  })
  readonly title: string;

  @ApiProperty({
    example: "20",
    description: "Вес критерия критичности",
  })
  readonly code: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;

  @ApiProperty({
    example: "4",
    description: "Порог",
  })
  readonly threshold: string;

  @ApiProperty({
    example: "2",
    description: "Цель",
  })
  readonly goal: string;

  @ApiProperty({
    example: "0",
    description: "Амцель",
  })
  readonly tenseGoal: string;
}

export class CreateUserDto implements UserCreateOrUpdateAttrs {
  @ApiProperty({
    example: "Уникальный идентификатор ДО/СП",
    description: "Уникальный идентификатор ДО/СП",
  })
  readonly subsidiaryId: string;

  @ApiProperty({
    example: "Уникальный идентификатор контрагента",
    description: "Уникальный идентификатор контрагента",
  })
  readonly designId: string;

  @ApiProperty({
    example: "Уникальный идентификатор контрагента",
    description: "Уникальный идентификатор контрагента",
  })
  readonly counterpartyId: string;

  @ApiProperty({
    example: "Уникальный идентификатор месторождения",
    description: "Уникальный идентификатор месторождения",
  })
  readonly fieldId: string;

  @ApiProperty({
    example: "Имя",
    description: "Имя",
  })
  readonly firstName: string;

  @ApiProperty({
    example: "Отчество",
    description: "Отчество",
  })
  readonly secondName: string;

  @ApiProperty({
    example: "Фамилия",
    description: "Фамилия",
  })
  readonly lastName: string;

  @ApiProperty({
    example: "Подразделение",
    description: "Подразделение",
  })
  readonly subdivision: string;

  @ApiProperty({
    example: "Должность",
    description: "Должность",
  })
  readonly position: string;

  @ApiProperty({
    example: "Телефон",
    description: "Телефон",
  })
  readonly phone: string;

  @ApiProperty({
    example: "E-mail",
    description: "E-mail",
  })
  readonly email: string;

  @ApiProperty({
    example: "Пароль",
    description: "Пароль",
  })
  readonly password: string;

  @ApiProperty({
    example: "Роли доступа",
    description: "Роли доступа",
  })
  readonly roles: string[];
}
