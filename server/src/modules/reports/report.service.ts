import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import {Remarks, ReportRow,  SignerData} from "../../../common/types/report.types";
import {InjectModel} from "@nestjs/sequelize";
import {DesignDocumentEntity, NewFileStorageService} from "../file-storage";
import {DesignDocumentCommentEntity, DesignDocumentSolutionEntity} from "../comment-accounting";
import { StageEntity} from "../regulatory-reference-information";
import {FieldEntity, ProjectEntity, SubUnitEntity, UnitEntity} from "../position-tree";
import {formattedDate} from "../../../common/utils/formatDate.pipe";

const pdf =  require("html-pdf");
import {monthReport as template} from "../../../common/templates/month.report";




@Injectable()
export class ReportService {
  constructor(
    @InjectModel(DesignDocumentEntity)
    private designDocumentRepository: typeof DesignDocumentEntity,
    @Inject(forwardRef(() => NewFileStorageService))
    private fileService: NewFileStorageService
  ) {
  }

  /*
  1. получить перечень объектов
  2. установить период отчета
  3. получить дату выдачи замечаний, шифр проекта, наименование проекта, наименование объекта проектирования/строительства,
  вид работ, выдано замечаний, повторно выданные, критичные, снятые.
  4. расчет трудозатрат
   */

//TODO: реализовать проверку на замечания по направлениям - если отчет по МО, выбирать только МО замечания иначе все
  getDocumentForReport = async (target: string, parentId: string, period: string[]) => {
    let reportRows: ReportRow[] = [];
    let documents: DesignDocumentEntity[] = [];


    switch (target) {
      case "project": {
        documents = await this.designDocumentRepository.findAll({
          where: {projectId: parentId},
          include: [
            {
              model: DesignDocumentCommentEntity,
              as: "pdc",
              include: [
                {
                  model: DesignDocumentSolutionEntity
                }
              ]
            },
            {
              model: StageEntity
            },
            {
              model: ProjectEntity,
              include: [
                {
                  model: FieldEntity
                }
              ]
            }
          ]
        })
        break;
      }
      case "unit": {
        documents = await this.designDocumentRepository.findAll({
          where: {unitId: parentId},
          include: [
            {
              model: DesignDocumentCommentEntity,
              as: "udc",
              include: [
                {
                  model: DesignDocumentSolutionEntity
                }
              ]
            },
            {
              model: StageEntity
            },
            {
              model: UnitEntity,
              as: "unit",
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: FieldEntity
                    }
                  ]
                }
              ]
            }
          ]
        })
        break;
      }
      case "sub-unit": {
        documents = await this.designDocumentRepository.findAll({
          where: {subUnitId: parentId},
          include: [
            {
              model: DesignDocumentCommentEntity,
              as: "sudc",
              include: [
                {
                  model: DesignDocumentSolutionEntity
                }
              ]
            },
            {
              model: StageEntity
            },
            {
              model: SubUnitEntity,
              as: "subUnit",
              include: [
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: ProjectEntity,
                      include: [
                        {
                          model: FieldEntity
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })
        break;
      }
      case "supplier": {
        documents = await this.designDocumentRepository.findAll({
          where: {supplierId: parentId},
          include: [
            {
              model: DesignDocumentCommentEntity,
              as: "sdc",
              include: [
                {
                  model: DesignDocumentSolutionEntity
                }
              ]
            },
            {
              model: StageEntity
            },
            {
              model: UnitEntity,
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: FieldEntity
                    }
                  ]
                }
              ]
            },
            {
              model: SubUnitEntity,
              include: [
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: ProjectEntity,
                      include: [
                        {
                          model: FieldEntity
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })
        break;
      }
      default:
        break;
    }


    const getReportRowRemarks = (comments: DesignDocumentCommentEntity[]): {date: string, remarks: Remarks} => {
      let issued = 0,
        repeated = 0,
        critical = 0,
        eliminated = 0;
      let date = "";

      if (comments && comments.length > 0) {
        for(let i = 0, len = comments.length; i < len; i++) {
          const {createdAt, updatedAt, solutions, criticalityId, direction} = comments[i];

          /*
          * Если дата создания или обновления замечания в диапазоне отчета:
          * Проверяем наличие решений:
          * Статус решения отсутствует и код критерия критичности от 2 до 5 - обновляем счетчик критичных замечаний, иначе обновляем счетчик вновь выданных замечаний
          * Статус решения "Не снято" или "Не устранено" - обновляем счетчик повторных замечаний
          * В остальных случаях обновляем счетчик снятых замечаний
           */

          const dateOfCreateComment = formattedDate(createdAt);
          const dateOfUpdateComment = formattedDate(updatedAt);
          const solutionId = solutions && solutions.length > 0 ? solutions.pop().solutionId : null;
          const criticalityFlag = criticalityId > 1 && criticalityId <= 5;
          const solutionFlag = solutionId === 2 || solutionId === 4;
          date = dateOfUpdateComment;

          if (period.includes(dateOfCreateComment) || period.includes(dateOfUpdateComment)) {
            !solutionId
              ? criticalityFlag
                ? critical++
                : issued++
              : solutionFlag
                ? repeated++
                : eliminated++;
          }
        }
      }

      return {
        date,
        remarks: {
        issued,
          repeated,
          critical,
          eliminated

        }
      }
    }

    /*
    * Если документы присутствуют в системе
    * Проходим по каждому документу и получаем замечания
    */

    if (documents.length > 0) {
      for (let i = 0, len = documents.length; i < len; i++) {
        const {pdc, udc, sudc, sdc, stage, project, title, code, unit, subUnit, supplier} = documents[i];


        const projectCode = target === "project" ? project.code
          : target === "unit" ? unit.project.code
            : subUnit.unit.project.code;

        const projectTitle = target === "project" ? project.title
          : target === "unit" ? unit.project.title
            : subUnit.unit.project.title;

        const typeOfWork = `Экспертиза ${stage.code}`;

        const documentTitle = stage.id !== 5 ? `${code}.${title}` : `${stage.code} на поставку `;

        const {date, remarks} = pdc && pdc.length > 0 ? getReportRowRemarks(pdc)
          : udc && udc.length > 0  ? getReportRowRemarks(udc)
            : sudc && sudc.length > 0  ? getReportRowRemarks(sudc)
              : getReportRowRemarks(sdc);

        const row: ReportRow = {
          typeOfWork,
          date,
          code: projectCode,
          title: projectTitle,
          documents: documentTitle,
          remarks
        }
        const {issued, repeated, critical, eliminated} = remarks;
        (issued !== 0 || repeated !== 0 || critical !== 0 || eliminated !== 0) && reportRows.push(row);
      }
    }

    return reportRows;
  }


  reportRowLaborCosts = (remarks: Remarks, totalRemarks: Remarks, costs: number): number => {
    /**
     *  Расчет трудозатрат по отчету:
     *    1. Сумма выданных, повторно выданных, критичных и снятых замечаний по строке (документу/документам);
     *    2. Сумма выданных, повторно выданных, критичных и снятых замечаний по всем строкам;
     *    3. Сумма п. 1 умножена на количество рабочих часов в отчетном периоде согласно производственного календаря;
     *    4. Значение п. 3 делить на значение п. 2
     */
    const {issued, repeated, critical, eliminated} = remarks;
    const {
      issued: totalIssued,
      repeated: totalRepeated,
      critical: totalCritical,
      eliminated: totalEliminated
    } = totalRemarks;

    const sumPerRow = issued + repeated + critical + eliminated;
    const sumTotal = totalIssued + totalRepeated + totalCritical + totalEliminated;
    const laborCosts = sumPerRow * costs / sumTotal;

    return laborCosts;
  }

  createReport = async (target: string, fields: string[], reportRows: ReportRow[], costs: number, direction: string, period: string, customer: SignerData, executor: SignerData): Promise<string> => {
      const totalRemarks: Remarks = {
        issued: 0,
        repeated: 0,
        critical: 0,
        eliminated: 0
      }
      const rows: ReportRow[] = [];

      if (reportRows.length > 0) {
        for (let i = 0, len = reportRows.length; i < len; i++) {

          const {issued, repeated, critical, eliminated} = reportRows[i].remarks
          totalRemarks.issued += issued;
          totalRemarks.repeated += repeated;
          totalRemarks.critical += critical;
          totalRemarks.eliminated += eliminated;
        }
        for (let i = 0, len = reportRows.length; i < len; i++) {
          const index = i < 9 ? `00${i + 1}` : i < 100 ? `0${i + 1}` : (i + 1).toString();
          const {date, code, title, documents, typeOfWork} = reportRows[i];
          const {remarks} = reportRows[i];
          const laborCosts = this.reportRowLaborCosts(remarks, totalRemarks, costs);
          rows.push({
            index,
            date,
            code,
            title,
            documents,
            typeOfWork,
            remarks,
            laborCosts
          })
        }
      }

      const months = ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      const month = +period.split(".")[0];
      const year = period.split(".")[1];
      const reportPeriod = `${months[month - 1]} ${year} г.`

      const data = {
        fields,
        direction,
        period: reportPeriod,
        rows,
        totalRemarks,
        costs,
        customer,
        executor
      }

      const reportFolder = this.fileService.getCurrentPath("reports");
      this.fileService.createDirectory(reportFolder);

    const fileName = `${target}. Отчет за ${reportPeriod} (${direction}).pdf`
    const pathToFile = this.fileService.getPath([reportFolder, fileName]);

    const file = this.createPdf(5000, template(data), pathToFile, {format: 'A4', orientation: "landscape"})

    return file
  }

  createPdf = async (delay: number, template: string, fileName: string, options?: Object, ) => {

        function sleep(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }


      pdf.create(template, options).toFile(fileName, (e: Error) => {
        if (e) {
          throw new HttpException(e.message, HttpStatus.FORBIDDEN)
        }
      })

    await sleep(delay)

      return fileName


   }



}