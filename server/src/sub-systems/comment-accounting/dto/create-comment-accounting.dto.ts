import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
} from "./../../../../../common/types/comments-accounting";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDesignDocumentCommentDto
  implements DesignDocumentCommentCreationAttrs
{
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор документации проекта",
  })
  readonly projectDocumentId: number | string | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор документации объекта капитального строительства",
  })
  readonly unitDocumentId: number | string | null;

  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор документации подобъекта",
  })
  readonly subUnitDocumentId: number | string | null;

  @ApiProperty({
    example: 1,
    description:
      "Уникальный идентификатор документации поставщика (технико-коммерческие предложения)",
  })
  readonly supplierDocumentId: number | string | null;

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

export class CreateCapitalConstructionUnitSupervisiontDto {}
