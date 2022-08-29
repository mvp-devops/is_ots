import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
} from "../../../../common/types/comments-accounting";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDesignDocumentCommentDto
  implements DesignDocumentCommentCreationAttrs
{
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор документации проекта",
  })
  readonly pdcId: number | string | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор документации объекта капитального строительства",
  })
  readonly udcId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор документации подобъекта",
  })
  readonly sudcId: number | string | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор документации поставщика (технико-коммерческие предложения)",
  })
  readonly sdcId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор кода замечания ",
  })
  readonly criticalityId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор функционального направления",
  })
  readonly directionId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор нормативной ссылки",
  })
  readonly normativeId: number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор эксперта, выдавшего замечание",
  })
  readonly userId: number;

  @ApiProperty({
    example: "Замечание",
    description: "Замечание",
  })
  readonly comment: string;

  @ApiProperty({
    example: "Решения по замечанию",
    description: "Решения по замечанию",
  })
  readonly solutions: DesignDocumentCommentSolutionCreationAttrs[];
}

export class CreateDesignDocumentSolutionDto
  implements DesignDocumentCommentSolutionCreationAttrs
{
  @ApiProperty({
    example: 1,
    description: "Ключ",
  })
  readonly key: string;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор замечания",
  })
  readonly commentId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор эксперта, выдавшего замечание",
  })
  readonly userId: string | number;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор статуса ответа на замечание",
  })
  readonly statusId: string | number;

  @ApiProperty({
    example: "Ответ",
    description: "Ответ на замечание от проектировщика",
  })
  readonly answer: string;

  @ApiProperty({
    example: "Контактные данные проектировщика",
    description: "Контактные данные проектировщика",
  })
  readonly designContacts: string;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор статуса решения по замечанию",
  })
  readonly solutionId: string | number;

  @ApiProperty({
    example: "Решение",
    description: "Решение эксперта",
  })
  readonly solution: string;
}

export class CreateCapitalConstructionUnitSupervisiontDto {}
