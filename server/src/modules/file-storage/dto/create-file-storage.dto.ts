import {
  DesignDocumentCreateOrUpdateAttrs,
  LogoCreationAttrs,
  NormativeCreateOrUpdateAttrs,
} from "../../../../common/types/file-storage";

import { ApiProperty } from "@nestjs/swagger";

export class CreateLogoDto implements LogoCreationAttrs {
  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор Дочернего общества/Совместного предприятия",
  })
  readonly subsidiaryId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор контрагента",
  })
  readonly counterpartyId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проектного института",
  })
  readonly designId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор пользователя",
  })
  readonly userId: number | string | null;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  readonly filePath: string;

  @ApiProperty({
    example: "Тип файла",
    description: "Тип файла",
  })
  readonly fileType: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.png",
    description: "Путь к файлу",
  })
  readonly fileName: string;
}

export class CreateDesignDocumentDto
  implements DesignDocumentCreateOrUpdateAttrs
{
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор проекта",
  })
  readonly projectId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта строительства",
  })
  readonly unitId: string | number | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор ОЛ, ТТ, ТЗ на проектирование объекта строительства",
  })
  readonly uqstId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор объекта/установки",
  })
  readonly subUnitId: string | number | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор ОЛ, ТТ, ТЗ на проектирование объекта/установки",
  })
  readonly suqstId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор контрагента",
  })
  readonly supplierId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор стадии проектирования",
  })
  readonly stageId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор марки/раздела документации",
  })
  readonly sectionId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор ОЛ единицы оборудования",
  })
  readonly sloeId: string | number | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор функциональной схемы автоматизации",
  })
  readonly monitoringId: string | number | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор схемы внешних эелектрических проводок",
  })
  readonly cableLogId: string | number | null;

  @ApiProperty({
    example: "Шифр документа",
    description: "Шифр документа",
  })
  readonly code: string;

  @ApiProperty({
    example: "Наименование документа",
    description: "Наименование документа",
  })
  readonly title: string;

  @ApiProperty({
    example: "№ ревизии",
    description: "№ ревизии",
  })
  readonly revision: string;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  readonly filePath: string;

  @ApiProperty({
    example: "Тип файла",
    description: "Тип файла",
  })
  readonly fileType: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.png",
    description: "Путь к файлу",
  })
  readonly fileName: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}

export class CreateNormativeDto implements NormativeCreateOrUpdateAttrs {
  @ApiProperty({
    example: "Шифр документа",
    description: "Шифр документа",
  })
  readonly code: string;

  @ApiProperty({
    example: "Наименование документа",
    description: "Наименование документа",
  })
  readonly title: string;

  @ApiProperty({
    example: "№ ревизии",
    description: "№ ревизии",
  })
  readonly revision: string;

  @ApiProperty({
    example: "Путь к файлу",
    description: "Путь к файлу",
  })
  readonly filePath: string;

  @ApiProperty({
    example: "Тип файла",
    description: "Тип файла",
  })
  readonly fileType: string;

  @ApiProperty({
    example: "00dd3128-3332-4ff1-b108-75d739291a0d.png",
    description: "Путь к файлу",
  })
  readonly fileName: string;

  @ApiProperty({
    example: "Примечание",
    description: "Примечание",
  })
  readonly description: string;
}
