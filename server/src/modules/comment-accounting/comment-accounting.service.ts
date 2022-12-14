import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
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
  DesignDocumentCommentView, Solution, Status,
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
import {File, } from "../../../common/types/file-storage";
const { Op } = require('sequelize')

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
    private statisticService: StatisticService,
    @InjectModel(DesignDocumentEntity)
    private designDocumentRepository: typeof DesignDocumentEntity,
    @InjectModel(NormativeEntity)
    private normativeRepository: typeof NormativeEntity,
    @InjectModel(CriticalityEntity)
    private criticalityRepository: typeof CriticalityEntity,
    @InjectModel(UserEntity)
    private userRepository: typeof UserEntity,

  ) {}

  async createOne(
    dto: CreateDesignDocumentCommentDto
  ): Promise<DesignDocumentCommentEntity> {
    try {
      const item = await this.commentRepository.create(dto);

      if (dto.solutions && dto.solutions.length > 0) {
        for (let i = 0; i < dto.solutions.length; i++) {
          const { statusId, solutionId, answer, designContacts, solution, userId } =
            dto.solutions[i];

          const solutionItem = {
            key: item.id.toString(),
            commentId: item.id,
            statusId: +statusId,
            solutionId: +solutionId,
            designContacts,
            answer,
            solution,
            userId: userId ? userId : dto.userId,
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
            ],
          });

          break;
        }
        case "unit": {
          items = await this.commentRepository.findAll({
            where: { udcId: parrentId },
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
            ],
          });

          break;
        }
        case "sub-unit": {
          items = await this.commentRepository.findAll({
            where: { sudcId: parrentId },
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
            ],
          });

          break;
        }
        case "supplier": {
          items = await this.commentRepository.findAll({
            where: { sdcId: parrentId },
            include: [
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
     

        ??????????: ${items[i].user.email}
  
        
        ??????????????: ${items[i].user.phone}`,
        solutions: await this.getAllSolutions(items[i].id),
        pdcId: items[i].pdcId,
        udcId: items[i].udcId,
        sudcId: items[i].sudcId,
        sdcId: items[i].sdcId,
        userId: items[i].userId,
        directionId: items[i].directionId,
        normativeId: items[i].normativeId,
        createdAt: +new Date(items[i].createdAt),
        updatedAt: +new Date(items[i].updatedAt),
        // createdDate: formattedDate(createdAt, true),
        // updatedDate: formattedDate(updatedAt, true),
      };

      // const solutionsRender: DesignDocumentCommentSolutionView[] = [];

      // for (let i = 0; i < items[i]?.solutions.length; i++) {
      //   const { statusId, answer, user, solutionId, solution, designContacts } =
      //     items[i]?.solutions[i];

      //   const renderItem: DesignDocumentCommentSolutionView = {
      //     statusId,
      //     answer,
      //     designContacts,
      //     solutionId,
      //     solution,
      //     expertContacts: formatUser(user),
      //   };
      //   solutionsRender.push(renderItem);
      // }

      // renderItem.solutions = solutionsRender;

      switch (parrentTarget) {
        case "project": {
          renderItem.documentSection = `${items[i]?.pdc?.stage?.code}/${items[i]?.pdc?.section?.code}`;
          renderItem.documentCode = items[i]?.pdc?.code;
          renderItem.documentTitle = items[i]?.pdc?.title;
          renderItem.documentPage = "??/??";
          break;
        }
        case "unit": {
          renderItem.documentSection = `${items[i]?.udc?.stage?.code}/${items[i]?.udc?.section?.code}`;
          renderItem.documentCode = items[i]?.udc?.code;
          renderItem.documentTitle = items[i]?.udc?.title;
          renderItem.documentPage = "??/??";
          break;
        }
        case "sub-unit": {
          renderItem.documentSection = `${items[i]?.sudc?.stage?.code}/${items[i]?.sudc?.section?.code}`;
          renderItem.documentCode = items[i]?.sudc?.code;
          renderItem.documentTitle = items[i]?.sudc?.title;
          renderItem.documentPage = "??/??";
          break;
        }
        case "supplier": {
          renderItem.documentSection = `${items[i]?.sdc?.stage?.code}/${items[i]?.sdc?.supplier?.title}`;
          renderItem.documentCode = items[i]?.sdc?.code;
          renderItem.documentTitle = items[i]?.sdc?.title;
          renderItem.documentPage = "??/??";
          break;
        }
        default:
          break;
      }

      render.push(renderItem);
    }
    return render;
  };

  solutionRender = (
    item: DesignDocumentSolutionEntity
  ): DesignDocumentCommentSolutionView => {
    const { statusId, answer, designContacts, solutionId, solution, user } =
      item;

    const elem = {
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
      
      ??????????: ${user.email} \r\n\
      
      ??????????????: ${user.phone}`
        : "",
    };

    return elem;
  };

  getAllSolutions = async (
    commentId: number
  ): Promise<DesignDocumentCommentSolutionView[]> => {
    try {
      const items = await this.solutionRepository.findAll({
        where: { commentId },
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
      });
      let data: DesignDocumentCommentSolutionView[] = [];
      if (items && items.length > 0) {
        for (let i = 0, len = items.length; i < len; i++) {
          data.push(this.solutionRender(items[i]));
        }
      }

      return data;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
          
          ??????????: ${user.email} \r\n\
          
          ??????????????: ${user.phone}`
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
          
          ??????????: ${user.email}  
          
          ??????????????: ${user.phone}`
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

  uploadCommentFromDescriptor = async (data: any, descriptor: File) => {
    const filesDescription = this.excelService.convertExcelFileToJson2(descriptor);
    // return filesDescription;
    const items = [];
    for(let i = 0; i < filesDescription.length; i++) {
      const item = filesDescription[i]
      const keys = Object.keys(item);

      const  doc = await this.designDocumentRepository.findOne({where: {code: item["3"]}});
      // console.log(item["3"]);
      // console.log(doc);
      const firstName = item["10"].split(" ")[1].slice(0,1)
      const secondName = item["10"].split(" ")[2].slice(0,1)
      // return {lastName: item["10"].split(" ")[0], firstName, secondName}
      const {id: userId} = await this.userRepository.findOne({
      where: {
        firstName: {[Op.like]: `${firstName}%`},
        secondName: {[Op.like]: `${secondName}%`},
        lastName: item["10"].split(" ")[0],
      }
    });
      // return userId

      const solutions = [];



      if(item["11"]) {
        for (let j = 11; j <= keys.length; j += 6){
          const firstName = item[`${j + 5}`].split(" ")[1].slice(0,1)
          const secondName = item[`${j + 5}`].split(" ")[2].slice(0,1)

          const {id: userId} = await this.userRepository.findOne({
            where: {
              firstName: {[Op.like]: `${firstName}%`},
              secondName: {[Op.like]: `${secondName}%`},
              lastName: item[`${j + 5}`].split(" ")[0],
            }
          })
          item[keys[`${j}`]] &&
          solutions.push({
            statusId: item[`${j}`].toLowerCase() === Status.ACCEPTED.toLowerCase() ? 1 : item[`${j}`].toLowerCase() === Status.NOT_ACCEPTED.toLowerCase() ? 2 : 3,
            answer: item[`${j + 1}`],
            designContacts: item[`${j + 2}`],
            solutionId:
              item[`${j + 3}`]?.toLowerCase() === Solution.ELIMINATED.toLowerCase() ? 3
                : item[`${j + 3}`]?.toLowerCase() === Solution.NOT_ELIMINATED.toLowerCase() ? 4
                  : item[`${j + 3}`]?.toLowerCase() === Solution.PULL_OFF.toLowerCase() ? 1
                    : item[`${j + 3}`]?.toLowerCase() === Solution.NOT_PULL_OFF.toLowerCase() ? 2 : 5,
            solution: item[`${j + 4}`],
            userId

          })

        }
      }
      const normative = item["7"] ? await this.normativeRepository.findOne({where: {title: item["7"].split(".")[1].slice(1)}}) : null;

      const normativeId = normative ? normative.id : 1;

      const comment = {
        pdcId: doc.projectId ? doc.id : null,
        udcId: doc.unitId ? doc.id : null,
        sdcId: doc.supplierId ? doc.id : null,
        sudcId: doc.subUnitId ? doc.id : null,
        directionId: 1,
        comment: item["6"],
        normativeId: item["7"] ? normativeId : 1,
        criticalityId: item["8"],
        userId,
        solutions
      };

      items.push(comment);
    }

    // return items;
    // const res = []
    const res = await this.createMany(items);


    return res;
  }
}