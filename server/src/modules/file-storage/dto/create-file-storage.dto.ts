import { LogoCreationAttrs } from "../../../../common/types/file-storage";

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
