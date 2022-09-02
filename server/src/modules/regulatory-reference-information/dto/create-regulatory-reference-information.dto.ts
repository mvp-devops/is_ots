import { ApiProperty } from "@nestjs/swagger";

import {
  RegulatoryReferenceInformationCreationAttrs,
  DesignOrCounterpartyCreationAttrs,
  CriticalityCreationAttrs,
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
