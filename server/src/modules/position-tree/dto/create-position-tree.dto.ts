import { ApiProperty } from "@nestjs/swagger";
import {
  FieldCreateOrUpdateAttrs,
  ProjectCreateOrUpdateAttrs,
  SubsidiaryCreateOrUpdateAttrs,
  SubUnitCreateOrUpdateAttrs,
  UnitCreateOrUpdateAttrs,
} from "../../../../common/types/position-tree";
import { SubUnitEntity } from "../entities";
import { UpdateSubUnitDto } from "./update-position-tree.dto";

export class CreateSubsidiaryDto implements SubsidiaryCreateOrUpdateAttrs {
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

export class CreateFieldDto implements FieldCreateOrUpdateAttrs {
  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор Дочернего общества/Совместного предприятия",
  })
  readonly subsidiaryId: number;

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

export class CreateProjectDto implements ProjectCreateOrUpdateAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор месторождения",
  })
  readonly fieldId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектного института",
  })
  readonly designId: number;

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

export class CreateUnitDto implements UnitCreateOrUpdateAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проекта",
  })
  readonly projectId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор группы оборудования",
  })
  readonly equipmentId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  readonly supplierId: number;

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
  readonly file: any;

  readonly subUnits?: CreateSubUnitDto[];
}

export class CreateSubUnitDto implements SubUnitCreateOrUpdateAttrs {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта строительства",
  })
  readonly unitId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор группы оборудования",
  })
  readonly equipmentId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор поставщика оборудования",
  })
  readonly supplierId: number;

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
  readonly file: any;
}
