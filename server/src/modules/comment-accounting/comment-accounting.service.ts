import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";
import { CreateDesignDocumentSolutionDto } from "./dto/create-comment-accounting.dto";
import {
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";
import {
  DesignDocumentCommentSolutionView,
  DesignDocumentCommentView,
} from "../../../common/types/comments-accounting";
import { DesignDocumentEntity, NormativeEntity } from "../file-storage";
import {
  CounterpartyEntity,
  CriticalityEntity,
  DirectionEntity,
  SectionEntity,
  StageEntity,
  UserEntity,
} from "../regulatory-reference-information";
import { formatUser } from "common/utils";
import { SubsidiaryEntity } from "../position-tree";

@Injectable()
export class CommentAccountingService {
  constructor(
    @InjectModel(DesignDocumentCommentEntity)
    private commentRepository: typeof DesignDocumentCommentEntity,
    @InjectModel(DesignDocumentSolutionEntity)
    private solutionRepository: typeof DesignDocumentSolutionEntity // @Inject(forwardRef(() => RegulatoryReferenceInformationService)) // private nsiService: RegulatoryReferenceInformationService
  ) {}

  async createOne(
    dto: CreateDesignDocumentCommentDto
  ): Promise<DesignDocumentCommentEntity> {
    const item = await this.commentRepository.create(dto);

    if (dto.solutions.length > 0) {
      for (let i = 0; i < dto.solutions.length; i++) {
        const { statusId, solutionId, answer, solution } = dto.solutions[i];
        const solutionItem = {
          commentId: item.id,
          statusId,
          solutionId,
          answer,
          solution,
          userId: dto.userId,
        };
        await this.solutionRepository.create(solutionItem);
      }
    }
    return item;
  }

  createMany = async (
    dto: CreateDesignDocumentCommentDto[]
  ): Promise<DesignDocumentCommentEntity[]> => {
    const items: DesignDocumentCommentEntity[] = [];
    for (let i = 0; i < dto.length; i++) {
      const item = await this.createOne(dto[i]);
      items.push(item);
    }
    return items;
  };

  findOne = async (
    target: string,
    id: string
  ): Promise<DesignDocumentCommentView> => {
    const item = await this.commentRepository.findOne({
      where: { id },
      include: [
        {
          model: DesignDocumentEntity,
          as: "pdc",
          include: [
            {
              model: StageEntity,
            },
            {
              model: SectionEntity,
            },
          ],
        },
        {
          model: DesignDocumentEntity,
          as: "udc",
          include: [
            {
              model: StageEntity,
            },
            {
              model: SectionEntity,
            },
          ],
        },
        {
          model: DesignDocumentEntity,
          as: "sudc",
          include: [
            {
              model: StageEntity,
            },
            {
              model: SectionEntity,
            },
          ],
        },
        {
          model: DesignDocumentEntity,
          as: "sdc",
          include: [
            {
              model: StageEntity,
            },
            {
              model: SectionEntity,
            },
            {
              model: CounterpartyEntity,
            },
          ],
        },
        {
          model: DirectionEntity,
        },
        {
          model: NormativeEntity,
        },
        {
          model: CriticalityEntity,
        },
        {
          model: UserEntity,
          include: [
            {
              model: SubsidiaryEntity,
            },
          ],
        },
        {
          model: DesignDocumentSolutionEntity,
          include: [
            {
              model: UserEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
          ],
        },
      ],
    });

    const render: DesignDocumentCommentView = {
      number: item.id,
      documentSection: "",
      documentCode: "",
      documentTitle: "",
      documentPage: "",
      comment: item.comment,
      normative: `${item.normative.code}. ${item.normative.title}`,
      criticalityId: item.criticalityId,
      expertSubdivision: `${item.user.subsidiary.title}  \n\
      ${item.user.subdivision} `,
      expertContacts: ` ${item.user.position} \n\
      ${item.user.email} \n\
      ${item.user.phone}`,
      solutions: [],
    };

    const solutionsRender: DesignDocumentCommentSolutionView[] = [];

    for (let i = 0; i < item.solutions.length; i++) {
      const { statusId, answer, user, solutionId, solution, designContacts } =
        item.solutions[i];

      const renderItem: DesignDocumentCommentSolutionView = {
        statusId,
        answer,
        designContacts,
        solutionId,
        solution,
        expertContacts: formatUser(user),
      };
      solutionsRender.push(renderItem);
    }

    render.solutions = solutionsRender;

    switch (target) {
      case "project": {
        render.documentSection = `${item.pdc.stage.code}/${item.pdc.section.code}`;
        render.documentCode = item.pdc.code;
        render.documentTitle = item.pdc.title;
        render.documentPage = "н/д";
        break;
      }
      case "unit": {
        render.documentSection = `${item.udc.stage.code}/${item.udc.section.code}`;
        render.documentCode = item.udc.code;
        render.documentTitle = item.udc.title;
        render.documentPage = "н/д";
        break;
      }
      case "sub-unit": {
        render.documentSection = `${item.sudc.stage.code}/${item.sudc.section.code}`;
        render.documentCode = item.sudc.code;
        render.documentTitle = item.sudc.title;
        render.documentPage = "н/д";
        break;
      }
      case "supplier": {
        render.documentSection = `${item.sdc.stage.code}/${item.sdc.supplier.title}`;
        render.documentCode = item.sdc.code;
        render.documentTitle = item.sdc.title;
        render.documentPage = "н/д";
        break;
      }
      default:
        break;
    }

    return render;
  };

  findAll = async (
    parrentTarget: string,
    parrentId: string
  ): Promise<DesignDocumentCommentView[]> => {
    let items: DesignDocumentCommentEntity[] = [];

    switch (parrentTarget) {
      case "project": {
        items = await this.commentRepository.findAll({
          where: { pdcId: parrentId },
          include: [
            {
              model: DesignDocumentEntity,
              as: "pdc",
              include: [
                {
                  model: StageEntity,
                },
                {
                  model: SectionEntity,
                },
              ],
            },
            {
              model: DirectionEntity,
            },
            {
              model: NormativeEntity,
            },
            {
              model: CriticalityEntity,
            },
            {
              model: UserEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: DesignDocumentSolutionEntity,
              include: [
                {
                  model: UserEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });

        break;
      }
      case "unit": {
        items = await this.commentRepository.findAll({
          where: { pdcId: parrentId },
          include: [
            {
              model: DesignDocumentEntity,
              as: "udc",
              include: [
                {
                  model: StageEntity,
                },
                {
                  model: SectionEntity,
                },
              ],
            },
            {
              model: DirectionEntity,
            },
            {
              model: NormativeEntity,
            },
            {
              model: CriticalityEntity,
            },
            {
              model: UserEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: DesignDocumentSolutionEntity,
              include: [
                {
                  model: UserEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });

        break;
      }
      case "sub-unit": {
        items = await this.commentRepository.findAll({
          where: { pdcId: parrentId },
          include: [
            {
              model: DesignDocumentEntity,
              as: "sudc",
              include: [
                {
                  model: StageEntity,
                },
                {
                  model: SectionEntity,
                },
              ],
            },
            {
              model: DirectionEntity,
            },
            {
              model: NormativeEntity,
            },
            {
              model: CriticalityEntity,
            },
            {
              model: UserEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: DesignDocumentSolutionEntity,
              include: [
                {
                  model: UserEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });

        break;
      }
      case "supplier": {
        items = await this.commentRepository.findAll({
          where: { pdcId: parrentId },
          include: [
            {
              model: DesignDocumentEntity,
              as: "sdc",
              include: [
                {
                  model: StageEntity,
                },
                {
                  model: CounterpartyEntity,
                },
              ],
            },
            {
              model: DirectionEntity,
            },
            {
              model: NormativeEntity,
            },
            {
              model: CriticalityEntity,
            },
            {
              model: UserEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: DesignDocumentSolutionEntity,
              include: [
                {
                  model: UserEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });

        break;
      }
      default:
        break;
    }

    const render: DesignDocumentCommentView[] = [];

    for (let i = 0; i < items.length; i++) {
      const renderItem: DesignDocumentCommentView = {
        number: items[i].id,
        documentSection: "",
        documentCode: "",
        documentTitle: "",
        documentPage: "",
        comment: items[i].comment,
        normative: `${items[i].normative.code}. ${items[i].normative.title}`,
        criticalityId: items[i].criticalityId,
        expertSubdivision: `${items[i].user.subsidiary.title}  \n\
        ${items[i].user.subdivision} `,
        expertContacts: ` ${items[i].user.position} \n\
        ${items[i].user.email} \n\
        ${items[i].user.phone}`,
        solutions: [],
      };

      const solutionsRender: DesignDocumentCommentSolutionView[] = [];

      for (let i = 0; i < items[i].solutions.length; i++) {
        const { statusId, answer, user, solutionId, solution, designContacts } =
          items[i].solutions[i];

        const renderItem: DesignDocumentCommentSolutionView = {
          statusId,
          answer,
          designContacts,
          solutionId,
          solution,
          expertContacts: formatUser(user),
        };
        solutionsRender.push(renderItem);
      }

      renderItem.solutions = solutionsRender;

      switch (parrentTarget) {
        case "project": {
          renderItem.documentSection = `${items[i].pdc.stage.code}/${items[i].pdc.section.code}`;
          renderItem.documentCode = items[i].pdc.code;
          renderItem.documentTitle = items[i].pdc.title;
          renderItem.documentPage = "н/д";
          break;
        }
        case "unit": {
          renderItem.documentSection = `${items[i].udc.stage.code}/${items[i].udc.section.code}`;
          renderItem.documentCode = items[i].udc.code;
          renderItem.documentTitle = items[i].udc.title;
          renderItem.documentPage = "н/д";
          break;
        }
        case "sub-unit": {
          renderItem.documentSection = `${items[i].sudc.stage.code}/${items[i].sudc.section.code}`;
          renderItem.documentCode = items[i].sudc.code;
          renderItem.documentTitle = items[i].sudc.title;
          renderItem.documentPage = "н/д";
          break;
        }
        case "supplier": {
          renderItem.documentSection = `${items[i].sdc.stage.code}/${items[i].sdc.supplier.title}`;
          renderItem.documentCode = items[i].sdc.code;
          renderItem.documentTitle = items[i].sdc.title;
          renderItem.documentPage = "н/д";
          break;
        }
        default:
          break;
      }

      render.push(renderItem);
    }
    return render;
  };

  remove = async (
    target: string,
    id: string
  ): Promise<DesignDocumentCommentView> => {
    const item = this.findOne(target, id);

    await this.commentRepository.destroy({ where: { id } });

    return item;
  };
}
