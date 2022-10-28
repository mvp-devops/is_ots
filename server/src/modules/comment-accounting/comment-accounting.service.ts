import { forwardRef, Inject, Injectable } from "@nestjs/common";
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
  CheckListSets,
  CollectiveCheckSheetHeaders,
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
import { formatUser } from "../../../common/utils";
import {
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "../position-tree";
import { ExcelService } from "../file-storage/excel.service";
import { StatisticService } from "./statistic.service";

@Injectable()
export class CommentAccountingService {
  constructor(
    @InjectModel(DesignDocumentCommentEntity)
    private commentRepository: typeof DesignDocumentCommentEntity,
    @InjectModel(DesignDocumentSolutionEntity)
    private solutionRepository: typeof DesignDocumentSolutionEntity,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService,
    @Inject(forwardRef(() => StatisticService))
    private statisticService: StatisticService
  ) {}

  async createOne(
    dto: CreateDesignDocumentCommentDto
  ): Promise<DesignDocumentCommentEntity> {
    try {
      const item = await this.commentRepository.create(dto);

      if (dto.solutions.length > 0) {
        for (let i = 0; i < dto.solutions.length; i++) {
          const { statusId, solutionId, answer, designContacts, solution } =
            dto.solutions[i];

          const solutionItem = {
            key: item.id.toString(),
            commentId: item.id,
            statusId: +statusId,
            solutionId: +solutionId,
            designContacts,
            answer,
            solution,
            userId: +dto.userId,
          };

          try {
            await this.solutionRepository.create(solutionItem);
          } catch (error) {
            throw new Error(error.message);
          }
        }
      }
      return item;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createOneSolution(
    dto: CreateDesignDocumentSolutionDto
  ): Promise<DesignDocumentSolutionEntity> {
    try {
      const item = await this.solutionRepository.create(dto);

      return item;
    } catch (error) {
      throw new Error(error.message);
    }
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
    let render: DesignDocumentCommentView[] = [];
    let documentSection = "",
      documentCode = "",
      documentTitle = "";

    switch (target) {
      case "project": {
        documentSection = `${item.pdc.stage.code}/${item.pdc.section.code}`;
        documentCode = item.pdc.code;
        documentTitle = item.pdc.title;
        render = this.commentRender(
          [item],
          documentSection,
          documentCode,
          documentTitle
        );

        break;
      }
      case "unit": {
        documentSection = `${item.udc.stage.code}/${item.udc.section.code}`;
        documentCode = item.udc.code;
        documentTitle = item.udc.title;
        break;
      }
      case "sub-unit": {
        documentSection = `${item.sudc.stage.code}/${item.sudc.section.code}`;
        documentCode = item.sudc.code;
        documentTitle = item.sudc.title;
        break;
      }
      case "supplier": {
        documentSection = `${item.sdc.stage.code}/${item.sdc.supplier.title}`;
        documentCode = item.sdc.code;
        documentTitle = item.sdc.title;
        break;
      }
      default:
        break;
    }

    render = this.commentRender(
      [item],
      documentSection,
      documentCode,
      documentTitle
    );

    return render[0];
  };

  findAll = async (
    parrentTarget: string,
    parrentId?: string,
    parrentIds?: string[]
  ): Promise<DesignDocumentCommentView[]> => {
    let items: DesignDocumentCommentEntity[] = [];

    const getItems = async (
      parrentTarget: string,
      parrentId: string
    ): Promise<DesignDocumentCommentEntity[]> => {
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
                  {
                    model: ProjectEntity,
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
                  {
                    model: UnitEntity,
                  },
                  {
                    model: SubUnitEntity,
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

      return items;
    };

    if (parrentId) {
      items = await getItems(parrentTarget, parrentId);
    }

    if (parrentIds) {
      for (let i = 0; i < parrentIds.length; i++) {
        const elems = await getItems(parrentTarget, parrentIds[i]);
        items.push(...elems);
      }
    }

    const render: DesignDocumentCommentView[] = [];

    for (let i = 0; i < items.length; i++) {
      const renderItem: DesignDocumentCommentView = {
        id: items[i].id,
        number: items[i].id,
        documentSection: "",
        documentCode: "",
        documentTitle: "",
        documentPage: "",
        comment: items[i].comment,
        normative: `${items[i].normative.code}. ${items[i].normative.title}`,
        criticalityId: items[i].criticalityId,
        expertSubdivision: `${items[i].user.subsidiary.title}
      
        ${items[i].user.subdivision} `,
        expertContacts: `${items[i].user.lastName} ${items[
          i
        ].user.firstName.slice(0, 1)}. ${items[i].user.secondName.slice(0, 1)}.
      
        ${items[i].user.position}
     

        почта: ${items[i].user.email}
  
        
        телефон: ${items[i].user.phone}`,
        solutions: [],
        pdcId: items[i].pdcId,
        udcId: items[i].udcId,
        sudcId: items[i].sudcId,
        sdcId: items[i].sdcId,
        userId: items[i].userId,
        directionId: items[i].directionId,
        normativeId: items[i].normativeId,
        createdAt: +new Date(items[i].createdAt),
        updatedAt: +new Date(items[i].updatedAt),
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
    const item = await this.findOne(target, id);

    await this.commentRepository.destroy({ where: { id } });

    return item;
  };

  solutionsRender = (
    solutions: DesignDocumentSolutionEntity[]
  ): DesignDocumentCommentSolutionView[] => {
    let commentSolutions: DesignDocumentCommentSolutionView[] = [];

    if (solutions?.length > 0) {
      for (let s = 0; s < solutions.length; s++) {
        const { statusId, answer, designContacts, solutionId, solution, user } =
          solutions[s];

        const elem: DesignDocumentCommentSolutionView = {
          statusId,
          answer,
          designContacts,
          solutionId,
          solution,
          expertContacts: user
            ? `${user.lastName} ${user.firstName.slice(
                0,
                1
              )}. ${user.secondName.slice(0, 1)}.  \r\n\
          
          ${user.subsidiary.title} \r\n\
          
          ${user.subdivision} \r\n\
          
          ${user.position} \r\n\
          
          почта: ${user.email} \r\n\
          
          телефон: ${user.phone}`
            : "",
        };
        commentSolutions.push(elem);
      }
    }
    return commentSolutions;
  };

  commentRender = (
    items: DesignDocumentCommentEntity[],
    documentSection: string,
    documentCode: string,
    documentTitle: string
  ): DesignDocumentCommentView[] => {
    let comments: DesignDocumentCommentView[] = [];

    if (items && items.length > 0) {
      for (let c = 0; c < items.length; c++) {
        const {
          id,
          pdcId,
          udcId,
          sudcId,
          sdcId,
          userId,
          directionId,
          direction,
          comment,
          normativeId,
          normative,
          criticalityId,
          criticality,
          solutions,
          user,
          createdAt,
          updatedAt,
        } = items[c];

        const item: DesignDocumentCommentView = {
          id,
          number: c + 1,
          documentSection,
          documentCode,
          documentTitle,
          documentPage: 0,
          comment,
          normative: `${normative.code}. ${normative.title}`,
          criticalityId,
          expertSubdivision: user ? user.subsidiary.title : "",
          expertContacts: user
            ? `${user.lastName} ${user.firstName.slice(
                0,
                1
              )}. ${user.secondName.slice(0, 1)}.        

          ${user.position} 
          
          почта: ${user.email}  
          
          телефон: ${user.phone}`
            : "",

          solutions: this.solutionsRender(solutions),
          createdAt: +new Date(createdAt),
          updatedAt: +new Date(updatedAt),
          pdcId,
          udcId,
          sudcId,
          sdcId,
          directionId,
          normativeId,
          userId,
        };

        comments.push(item);
      }
    }

    return comments;
  };

  exportExcelFile = async (
    target: string,
    parrentId?: string,
    parrentIds?: string[]
  ) => {
    const data = await this.findAll(target, parrentId, parrentIds);

    const headers: CollectiveCheckSheetHeaders = {
      projectTitleRender: "",
      unitTitleRender: "",
      unitQuestionareRender: null,
      subUnitTitleRender: "",
      subUnitQuestionareRender: null,
    };

    const file = await this.excelService.exportCollectiveCheckSheet(
      headers,
      data
    );
    return file;
  };
}
