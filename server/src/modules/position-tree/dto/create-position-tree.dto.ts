import { ApiProperty } from "@nestjs/swagger";
import {
  FieldCreationAttrs,
  ProjectCreationAttrs,
  SubsidiaryCreationAttrs,
  SubUnitCreationAttrs,
  UnitCreationAttrs,
} from "../../../../common/types/position-tree";

export class CreateSubsidiaryDto implements SubsidiaryCreationAttrs {
  @ApiProperty({
    example: "Наименование Дочернего общества/Совместного предприятия",
    description: "АО «Газпромнефть-Ноябрьскнефтегаз»",
  })
  readonly title: string;

  @ApiProperty({
    example: "Шифр Дочернего общества/Совместного предприятия",
    description: "NNG",
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

export class CreateFieldDto implements FieldCreationAttrs {
  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор Дочернего общества/Совместного предприятия",
  })
  readonly subsidiaryId: string | number;

  @ApiProperty({
    example: "Новопортовское нефтегазоконденсатное месторождение",
    description: "Наименование месторождения",
  })
  readonly title: string;

  @ApiProperty({
    example: "Шифр месторождения",
    description: "NP",
  })
  readonly code: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateProjectDto implements ProjectCreationAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор месторождения",
  })
  readonly fieldId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектного института",
  })
  readonly designId: string | number;

  @ApiProperty({
    example: "Обустройство куста скважин №2",
    description: "Наименование проекта",
  })
  readonly title: string;

  @ApiProperty({
    example: "123-10/12",
    description: "Шифр проекта",
  })
  readonly code: string;

  @ApiProperty({
    example: "ГПРН-34534-232",
    description: "Номер договора на проектирование",
  })
  readonly contract: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateUnitDto implements UnitCreationAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проекта",
  })
  readonly projectId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор группы оборудования",
  })
  readonly equipmentId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  readonly supplierId: string | number;

  @ApiProperty({
    example: "12.3",
    description: "Позиция по ГП",
  })
  readonly position: string;

  @ApiProperty({
    example: "Наименование объекта капитильного строительства",
    description: "Новопортовское нефтегазоконденсатное месторождение",
  })
  readonly title: string;

  @ApiProperty({
    example: "123-10/12",
    description: "Шифр проекта",
  })
  readonly code: string;

  @ApiProperty({
    example: "ГПРН-34534-232",
    description: "Номер договора поставки",
  })
  readonly contract: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;

  @ApiProperty({
    example: "ТЗ",
    description: "ТЗ, ТТ, ОЛ",
  })
  readonly questionare: any;
}

export class CreateSubUnitDto implements SubUnitCreationAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта строительства",
  })
  readonly unitId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор группы оборудования",
  })
  readonly equipmentId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  readonly supplierId: string | number;

  @ApiProperty({
    example: "12.3",
    description: "Позиция по ГП",
  })
  readonly position: string;

  @ApiProperty({
    example: "Наименование объекта капитильного строительства",
    description: "Новопортовское нефтегазоконденсатное месторождение",
  })
  readonly title: string;

  @ApiProperty({
    example: "123-10/12",
    description: "Шифр проекта",
  })
  readonly code: string;

  @ApiProperty({
    example: "ГПРН-34534-232",
    description: "Номер договора поставки",
  })
  readonly contract: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;

  @ApiProperty({
    example: "ТЗ",
    description: "ТЗ, ТТ, ОЛ",
  })
  readonly questionare: any;
}
