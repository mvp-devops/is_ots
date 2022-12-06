import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {
  CheckListSets,
  StatisticView,
} from "../../../common/types/comments-accounting";
import {PositionTreeItem} from "../../../common/types/position-tree";
import {
  CheckListService,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
  StatisticService,
} from "../comment-accounting";
import {
  DesignDocumentEntity,
  FileStorageService,
  LogoEntity, NewFileStorageService,
} from "../file-storage";
import {
  CounterpartyEntity,
  DesignEntity,
  EquipmentEntity,
  UserEntity,
} from "../regulatory-reference-information";
import {
  CreatePositionTreeDto,
  UpdatePositionTreeDto,
  UpdateFieldDto,
  CreateProjectDto,
  CreateUnitDto,
  UpdateUnitDto,
  UpdateSubUnitDto,
} from "./dto";
import {
  FieldEntity,
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "./entities";
import {Remarks, ReportRequestParams, ReportRow, ReportView, SignerData} from "../../../common/types/report.types";
import type {File} from "../../../common/types/file-storage";
import {ReportService} from "../reports/report.service";
import {join} from "path";
import {ExcelService} from "../file-storage/excel.service";

type PositionTreeView =
  | SubsidiaryEntity
  | FieldEntity
  | ProjectEntity
  | UnitEntity
  | SubUnitEntity
  | null;

const positionSorter = (posA: string, posB: string): number => {
  if (!posA && !posB) {
    return 0;
  } else {
    const a = posA.split(".");
    const b = posB.split(".");
    if (+a[0] < +b[0]) {
      return -1;
    }
    if (+a[0] > +b[0]) {
      return 1;
    }
    if (+a[0] === +b[0]) {
      if (+a[1] < +b[1]) {
        return -1;
      }
      if (+a[1] > +b[1]) {
        return 1;
      }
      if (+a[1] === +b[1]) {
        if (+a[2] < +b[2]) {
          return -1;
        }
        if (+a[2] > +b[2]) {
          return 1;
        }
        if (+a[2] === +b[2]) {
        }
      }
    }
  }
};

@Injectable()
export class PositionTreeService {
  constructor(
    @InjectModel(SubsidiaryEntity)
    private subsidiaryRepository: typeof SubsidiaryEntity,
    @InjectModel(FieldEntity)
    private fieldRepository: typeof FieldEntity,
    @InjectModel(ProjectEntity)
    private projectRepository: typeof ProjectEntity,
    @InjectModel(UnitEntity)
    private unitRepository: typeof UnitEntity,
    @InjectModel(SubUnitEntity)
    private subUnitRepository: typeof SubUnitEntity,
    @InjectModel(DesignEntity)
    private designRepository: typeof DesignEntity,
    @InjectModel(CounterpartyEntity)
    private counterpartyRepository: typeof CounterpartyEntity,
    @InjectModel(EquipmentEntity)
    private equipmentRepository: typeof EquipmentEntity,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService,
    @Inject(forwardRef(() => NewFileStorageService))
    private newFileService: NewFileStorageService,
    @Inject(forwardRef(() => CheckListService))
    private readonly checkListService: CheckListService,
    @Inject(forwardRef(() => StatisticService))
    private readonly statisticService: StatisticService,
    @Inject(forwardRef(() => ReportService))
    private readonly reportService: ReportService,
    @Inject(forwardRef(() => ExcelService))
    private readonly excelService: ExcelService,
  ) {
  }

  getPositionTree = async (): Promise<PositionTreeItem[]> => {
    let items: PositionTreeItem[] = [];

    const subsidiaries: SubsidiaryEntity[] =
      await this.subsidiaryRepository.findAll({
        attributes: ["id", "title"],
        include: [
          {
            model: FieldEntity,
            attributes: ["subsidiaryId", "id", "title"],
            include: [
              {
                model: ProjectEntity,
                attributes: ["fieldId", "id", "title", "code"],
                include: [
                  {
                    model: UnitEntity,
                    attributes: ["projectId", "id", "position", "title"],
                    include: [
                      {
                        model: SubUnitEntity,
                        attributes: ["unitId", "id", "position", "title"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

    for (let i = 0; i < subsidiaries.length; i++) {
      const {id, title, fields} = subsidiaries[i];

      let subsidiaryChildren: PositionTreeItem[] = [];

      for (let j = 0; j < fields.length; j++) {
        const {subsidiaryId, id, title, projects} = fields[j];
        let fieldChilren: PositionTreeItem[] = [];

        for (let p = 0; p < projects.length; p++) {
          const {fieldId, id, title, code, units} = projects[p];
          let projectChildren: PositionTreeItem[] = [];

          for (let u = 0; u < units.length; u++) {
            const {projectId, id, position, title, subUnits} = units[u];
            let unitChildren: PositionTreeItem[] = [];

            for (let su = 0; su < subUnits.length; su++) {
              const {unitId, id, position, title} = subUnits[su];

              const unitChild = {
                target: "sub-unit",
                childrenTarget: "",
                keys: [
                  subsidiaryId.toString(),
                  fieldId.toString(),
                  projectId.toString(),
                  unitId.toString(),
                  id.toString(),
                ],
                key: `${subsidiaryId.toString()}-${fieldId.toString()}-${projectId.toString()}-${unitId.toString()}-${id.toString()}`,
                id: id.toString(),
                title: `${position}. ${title}`,
              };
              unitChildren.push(unitChild);
            }

            const projectChild = {
              target: "unit",
              childrenTarget: "sub-unit",
              keys: [
                subsidiaryId.toString(),
                fieldId.toString(),
                projectId.toString(),
                id.toString(),
              ],
              key: `${subsidiaryId.toString()}-${fieldId.toString()}-${projectId.toString()}-${id.toString()}`,
              id: id.toString(),
              title: `${position}. ${title}`,
              children: unitChildren.sort((a, b) =>
                a.title < b.title ? -1 : 0
              ),
            };
            projectChildren.push(projectChild);
          }

          const fieldChild = {
            target: "project",
            childrenTarget: "unit",
            keys: [subsidiaryId.toString(), fieldId.toString(), id.toString()],
            key: `${subsidiaryId.toString()}-${fieldId.toString()}-${id.toString()}`,
            id: id.toString(),
            title: `${title} (${code})`,
            children: projectChildren.sort((a, b) =>
              a.title < b.title ? -1 : 0
            ),
          };
          fieldChilren.push(fieldChild);
        }

        const subsidiaryChild = {
          target: "field",
          childrenTarget: "project",
          keys: [subsidiaryId.toString(), id.toString()],
          key: `${subsidiaryId.toString()}-${id.toString()}`,
          id: id.toString(),
          title,
          children: fieldChilren.sort((a, b) => (a.title < b.title ? -1 : 0)),
        };
        subsidiaryChildren.push(subsidiaryChild);
      }

      const item = {
        target: "subsidiary",
        childrenTarget: "field",
        keys: [id.toString()],
        key: id.toString(),
        id: id.toString(),
        title,
        children: subsidiaryChildren.sort((a, b) =>
          a.title < b.title ? -1 : 0
        ),
      };

      items.push(item);
    }

    return items;
  };
//FIXME: доделать возможность загрузки не только с ДО, но и с использованием таргета и id
  sendMany = async (descriptor: File, target?: string, id?: string, ): Promise<PositionTreeItem[]>  => {
    const data = this.excelService.convertExcelFileToJson(descriptor);
    for(let i = 0; i < data.length; i++) {
      const {
        subsidiary_title,
        subsidiary_code,
        subsidiary_description,
        field_title,
        field_code,
        field_description,
        project_title,
        project_code,
        project_design,
        project_contract,
        project_description,
        unit_position,
        unit_equipmentType,
        unit_supplier,
        unit_title,
        unit_code,
        unit_contract,
        unit_description,
        sub_unit_position,
        sub_unit_equipmentType,
        sub_unit_supplier,
        sub_unit_title,
        sub_unit_code,
        sub_unit_contract,
        sub_unit_description
      } = data[i];

      /** Ищем в БД ДО, если его нет - создаем и создаем директорию иначе получаем id и название директории */
      const subsidiaryItem = {title: subsidiary_title, code: subsidiary_code, description: subsidiary_description};
      const subsidiary = await this.subsidiaryRepository.findOne({where: {title: subsidiary_title}});
      const {id: subsidiaryId, code: subsidiaryCode} = !subsidiary ? await this.subsidiaryRepository.create(subsidiaryItem) : subsidiary;

      const subsidiaryFolder = this.newFileService.generateFolderName(subsidiaryCode, subsidiaryId);
      this.newFileService.createDirectory(subsidiaryFolder);

      /** Ищем в БД Месторождение, если его нет - создаем и создаем директорию иначе получаем id и название директории */
      const fieldItem = {subsidiaryId, title: field_title, code: field_code, description: field_description};
      const field = await this.fieldRepository.findOne({where: {title: field_title}});
      const {id: fieldId, code: fieldCode} = !field ? await this.fieldRepository.create(fieldItem) : field;

      const fieldFolder = this.newFileService.generateFolderName(fieldCode, fieldId);
      const subsidiaryFieldFolder = this.newFileService.getPath([subsidiaryFolder, fieldFolder])
      this.newFileService.createDirectory(subsidiaryFieldFolder);

      /**
       * Ищем в БД Проектный институт, если его нет - создаем, иначе получаем id
       * Ищем в БД Проект, если его нет - создаем и создаем директорию иначе получаем id и название директории
       */
      const design = await this.designRepository.findOne({where: {title: project_design}});
      const {id: designId} = !design ? await this.designRepository.create({
        title: project_design,
        code: "",
        description: ""
      }) : design;
      const projectItem = {
        fieldId, designId, title: project_title, code: project_code, description: project_description,
        contract: project_contract
      };
      const project = await this.projectRepository.findOne({where: {code: project_code}});
      const {id: projectId, code: projectCode, description: projectDescription} = !project ? await this.projectRepository.create(projectItem) : project;

      const projectFolder = this.newFileService.generateFolderName(`${projectCode}. ${projectDescription}`);
      const subsidiaryFieldProjectFolder = this.newFileService.getPath([subsidiaryFolder, fieldFolder, projectFolder])
      this.newFileService.createDirectory(subsidiaryFieldProjectFolder);

      /**
       * Ищем в БД Группу оборудования, если ее нет - создаем, иначе получаем id
       * Ищем в БД Поставщика, если его нет - создаем, иначе получаем id
       * Ищем в БД Объект строительства, если его нет - создаем и создаем директорию иначе получаем id и название директории
       */
      const unitEquipment = await this.equipmentRepository.findOne({where: {title: unit_equipmentType}});
      const {id: unitEquipmentId} = !unitEquipment ? await this.equipmentRepository.create({
        title: unit_equipmentType,
        code: unit_equipmentType.slice(0, 2).toUpperCase(),
        description: ""
      }) : unitEquipment;
      const unitSupplier = await this.counterpartyRepository.findOne({where: {title: unit_supplier}});
      const {id: unitSupplierId} = !unitSupplier ? await this.counterpartyRepository.create({
        title: unit_supplier,
        code: unit_supplier.slice(0, 2).toUpperCase(),
        description: ""
      }) : unitSupplier;
      const unitItem = {
        projectId,
        equipmentId: unitEquipmentId,
        supplierId: unitSupplierId,
        position: unit_position,
        title: unit_title,
        code: unit_code,
        contract: unit_contract,
        description: unit_description
      }
      const unit = await this.unitRepository.findOne({where: {title: unit_title}});
      const {id: unitId, position: unitPosition, code: unitCode} = !unit ? await this.unitRepository.create(unitItem) : unit;

      const unitFolder = this.newFileService.generateFolderName(`${unitPosition}. ${unitCode}`);
      const subsidiaryFieldProjectUnitFolder = this.newFileService.getPath([subsidiaryFolder, fieldFolder, projectFolder, "002. Объекты", unitFolder])
      this.newFileService.createDirectory(subsidiaryFieldProjectUnitFolder);

      /**
       * Ищем в БД Группу оборудования, если ее нет - создаем, иначе получаем id
       * Ищем в БД Поставщика, если его нет - создаем, иначе получаем id
       * Ищем в БД Объект/установку, если его/ее нет - создаем и создаем директорию иначе получаем id и название директории
       */
      const subUnitEquipment = await this.equipmentRepository.findOne({where: {title: sub_unit_equipmentType}});
      const {id: subUnitEquipmentId} = !subUnitEquipment ? await this.equipmentRepository.create({
        title: sub_unit_equipmentType,
        code: sub_unit_equipmentType.slice(0, 2).toUpperCase(),
        description: ""
      }) : subUnitEquipment;
      const subUnitSupplier = await this.counterpartyRepository.findOne({where: {title: sub_unit_supplier}});
      const {id: subUnitSupplierId} = !subUnitSupplier ? await this.counterpartyRepository.create({
        title: sub_unit_supplier,
        code: sub_unit_supplier.slice(0, 2).toUpperCase(),
        description: ""
      }) : subUnitSupplier;
      const subUnitItem = {
        unitId,
        equipmentId: subUnitEquipmentId,
        supplierId: subUnitSupplierId,
        position: sub_unit_position,
        title: sub_unit_title,
        code: sub_unit_code,
        contract: sub_unit_contract,
        description: sub_unit_description
      }
      const subUnit = await this.subUnitRepository.findOne({where: {title: sub_unit_title}});
      const {position: subUnitPosition, code: subUnitCode} = !subUnit ? await this.subUnitRepository.create(subUnitItem) : subUnit;
      // let uniqueSubsidiaryArr = [...new Set(subsidiaryArr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

      const subUnitFolder = this.newFileService.generateFolderName(`${subUnitPosition}. ${subUnitCode}`);
      const subsidiaryFieldProjectUnitSubUnitFolderFolder = this.newFileService.getPath([subsidiaryFolder, fieldFolder, projectFolder, "002. Объекты", unitFolder, "002. Объекты", subUnitFolder])
      this.newFileService.createDirectory(subsidiaryFieldProjectUnitSubUnitFolderFolder);
    }
    return await this.getPositionTree();
  }

  downloadTemplate = (template: string): string => {

    return this.newFileService.getCurrentPath(this.newFileService.getPath(["templates", template]))
  }

  createOne = async (
    target: string,
    dto: CreatePositionTreeDto,
    file?: any
  ): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;
    let folderName = "";

    try {
      switch (target) {
        case "subsidiary": {
          item = await this.subsidiaryRepository.create(dto);
          const {id, code} = item;
          folderName = this.fileService.generateFolderName(target, id, code);

          file &&
          (await this.fileService.createLogo(
            item.id.toString(),
            target,
            file
          ));
          item = await this.findOne(target, id.toString());
          break;
        }
        case "field": {
          item = await this.fieldRepository.create(dto);
          const {id, code, subsidiaryId} = item;
          const parrent = await this.subsidiaryRepository.findOne({
            where: {id: subsidiaryId},
            attributes: ["id", "code"],
          });
          const subsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.id,
            parrent.code
          );
          const fieldFolderName = this.fileService.generateFolderName(
            target,
            id,
            code
          );
          folderName = `${subsidiaryFolderName}/${fieldFolderName}`;
          item = await this.findOne(target, id.toString());
          break;
        }
        case "project": {
          item = await this.projectRepository.create(dto);
          const {id, code, description, fieldId} = item;
          const parrent = await this.fieldRepository.findOne({
            where: {id: fieldId},
            attributes: ["id", "code"],
            include: [
              {
                model: SubsidiaryEntity,
                attributes: ["id", "code"],
              },
            ],
          });
          const subsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.subsidiary.id,
            parrent.subsidiary.code
          );
          const fieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.id,
            parrent.code
          );
          const folder = this.fileService.generateFolderName(
            target,
            id,
            code,
            description
          );
          folderName = `${subsidiaryFolderName}/${fieldFolderName}/${folder}`;

          item = await this.findOne(target, id.toString());
          break;
        }

        case "unit": {
          item = await this.unitRepository.create(dto);
          const {id, code, position, projectId} = item;
          const parrent = await this.projectRepository.findOne({
            where: {id: projectId},
            attributes: ["id", "code", "description"],
            include: [
              {
                model: FieldEntity,
                attributes: ["id", "code"],
                include: [
                  {
                    model: SubsidiaryEntity,
                    attributes: ["id", "code"],
                  },
                ],
              },
            ],
          });
          const subsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.field.subsidiary.id,
            parrent.field.subsidiary.code
          );
          const fieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.field.id,
            parrent.field.code
          );
          const projectFolderName = this.fileService.generateFolderName(
            "project",
            parrent.id,
            parrent.code,
            parrent.description
          );
          const folder = this.fileService.generateFolderName(
            target,
            id,
            position,
            code
          );
          folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${folder}`;

          // const pathToFile = `${folderName}/ОЛ, ТТ, ТЗ`;
          // this.fileService.createDirectory(pathToFile);

          file &&
          (await this.fileService.createDesignDocument(
            item.id.toString(),
            target,
            folderName,
            file
          ));
          if (
            (dto as CreateUnitDto).subUnits &&
            (dto as CreateUnitDto).subUnits.length > 0
          ) {
            const items = (dto as CreateUnitDto).subUnits;
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              await this.createOne("sub-unit", {...item, unitId: id});
            }
          }
          item = await this.findOne(target, id.toString());
          break;
        }
        case "sub-unit": {
          item = await this.subUnitRepository.create(dto);
          const {id, code, position, unitId} = item;
          const parrent = await this.unitRepository.findOne({
            where: {id: unitId},
            attributes: ["id", "code", "position"],
            include: [
              {
                model: ProjectEntity,
                attributes: ["id", "code", "description"],
                include: [
                  {
                    model: FieldEntity,
                    attributes: ["id", "code"],
                    include: [
                      {
                        model: SubsidiaryEntity,
                        attributes: ["id", "code"],
                      },
                    ],
                  },
                ],
              },
            ],
          });
          const subsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.project.field.subsidiary.id,
            parrent.project.field.subsidiary.code
          );
          const fieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.project.field.id,
            parrent.project.field.code
          );
          const projectFolderName = this.fileService.generateFolderName(
            "project",
            parrent.project.id,
            parrent.project.code,
            parrent.project.description
          );
          const unitFolder = this.fileService.generateFolderName(
            "unit",
            parrent.id,
            parrent.position,
            parrent.code
          );
          const folder = this.fileService.generateFolderName(
            target,
            id,
            position,
            code
          );
          folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${unitFolder}/002. Объекты/${folder}`;
          // const pathToFile = `${folderName}/ОЛ, ТТ, ТЗ`;
          // this.fileService.createDirectory(pathToFile);

          file &&
          (await this.fileService.createDesignDocument(
            item.id.toString(),
            target,
            folderName,
            file
          ));
          item = await this.findOne(target, id.toString());
          break;
        }
        default:
          break;
      }

      this.fileService.createDirectory(folderName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return item;
  };

  createMany = async (
    target: string,
    dto: CreatePositionTreeDto[],
    files?: any[]
  ): Promise<PositionTreeView[]> => {
    const items: PositionTreeView[] = [];
    for (let i = 0; i < dto.length; i++) {
      const item = await this.createOne(target, dto[i]);
      items.push(item);
    }
    return items;
  };

  getReportRows = async (target: string, item: any, periodOfReport: string): Promise<{fields: string[], reportRows: ReportRow[] }> => {
    const rows: ReportRow[] = [];

    const month = periodOfReport.split(".")[0];
    const year = periodOfReport.split(".")[1];
    const period: string[] = [];
    for (let i = 1; i <= 31; i++) {
      const day = i < 9 ? `0${i}` : i;
      period.push(`${day}.${month}.${year}`);
    }
    const ft = [];

    switch (target) {
      case "subsidiary": {
        const {fields} = item as SubsidiaryEntity;
        if(fields && fields.length > 0) {


          for(let i = 0, len = fields.length; i < len; i++) {
            ft.push(fields[i].title)
            const {projects} = fields[i];
            if(projects && projects.length > 0) {
              for(let j = 0, len =  projects.length; j < len; j++) {
                const {id, units} = projects[j];
                const row = await this.reportService.getDocumentForReport("project", id.toString(), period);
                rows.push(...row);
                if(units && units.length > 0) {
                  for(let k = 0, len =  units.length; k < len; k++) {
                    const {id, subUnits} = units[k];
                    const row = await this.reportService.getDocumentForReport("unit", id.toString(), period);
                    rows.push(...row);
                    if(subUnits && subUnits.length > 0) {
                      for(let n = 0, len =  subUnits.length; n < len; n++) {
                        const {id} = subUnits[n];
                        const row = await this.reportService.getDocumentForReport("sub-unit", id.toString(), period);
                        rows.push(...row);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: break;
    }

    return {
    fields: ft, reportRows: rows
  };
  }

  getReport = async (target: string, id: string, params: ReportRequestParams): Promise<string> => {

    const {direction, period, costs, customerPosition, customerFio, executorPosition, executorFio} = params;
   let item = null;

    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.findOne({
          where: {id},
          include: [
            {
              model: FieldEntity,
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: SubUnitEntity,
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

    const customer: SignerData = {position: customerPosition, fio: customerFio}
    const executor: SignerData = {position: executorPosition, fio: executorFio}
    const {fields, reportRows} = await this.getReportRows(target, item, period);

    const reportTarget = item.title

    const report = await this.reportService.createReport(reportTarget, fields, reportRows, costs, direction, period, customer, executor);

    return report;
  }

  findOne = async (target: string, id: string): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;

    try {
      switch (target) {
        case "subsidiary": {
          item = await this.subsidiaryRepository.findOne({
            where: {id},
            include: [
              {
                model: LogoEntity,
                attributes: ["id", "fileType", "fileName", "filePath"],
              },
              {
                model: FieldEntity,
                attributes: [
                  "subsidiaryId",
                  "id",
                  "title",
                  "code",
                  "description",
                ],
              },
              {
                model: UserEntity,
              },
            ],
          });
          break;
        }
        case "field": {
          item = await this.fieldRepository.findOne({
            where: {id},
            include: [
              {
                model: SubsidiaryEntity,
              },
              {
                model: ProjectEntity,
                attributes: [
                  "fieldId",
                  "designId",
                  "id",
                  "title",
                  "code",
                  "contract",
                  "description",
                ],
              },
            ],
          });
          break;
        }
        case "project": {
          item = await this.projectRepository.findOne({
            where: {id},
            attributes: [
              "fieldId",
              "designId",
              "id",
              "title",
              "code",
              "contract",
              "description",
            ],
            include: [
              {
                model: FieldEntity,
                include: [
                  {
                    model: SubsidiaryEntity,
                  },
                ],
              },
              {
                model: UnitEntity,
                include: [
                  {
                    model: SubUnitEntity,
                  },
                ],
              },
              {
                model: DesignEntity,
              },
              {
                model: DesignDocumentEntity,
                as: "projectDocuments",
                attributes: [
                  "id",
                  "title",
                  "code",
                  "revision",
                  "fileType",
                  "fileName",
                  "filePath",
                ],
              },
            ],
          });
          break;
        }
        case "unit": {
          item = await this.unitRepository.findOne({
            where: {id},
            attributes: [
              "projectId",
              "equipmentId",
              "supplierId",

              "id",
              "title",
              "code",
              "position",
              "contract",
              "description",
            ],
            include: [
              {
                model: ProjectEntity,
                include: [
                  {
                    model: FieldEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: SubUnitEntity,
              },
              {
                model: EquipmentEntity,
                attributes: ["id", "title", "code", "description"],
              },
              {
                model: CounterpartyEntity,
                attributes: ["id", "title", "code", "description"],
              },
              {
                model: DesignDocumentEntity,
                as: "unitDocuments",
                attributes: [
                  "id",
                  "title",
                  "code",
                  "revision",
                  "fileType",
                  "fileName",
                  "filePath",
                ],
              },
              {
                model: DesignDocumentEntity,
                as: "unitQuestionare",
                attributes: [
                  "id",
                  "title",
                  "code",
                  "revision",
                  "fileType",
                  "fileName",
                  "filePath",
                ],
              },
            ],
          });
          break;
        }
        case "sub-unit": {
          item = await this.subUnitRepository.findOne({
            where: {id},
            attributes: [
              "unitId",
              "equipmentId",
              "supplierId",

              "id",
              "title",
              "code",
              "position",
              "contract",
              "description",
            ],
            include: [
              {
                model: UnitEntity,
                include: [
                  {
                    model: ProjectEntity,
                    include: [
                      {
                        model: FieldEntity,
                        include: [
                          {
                            model: SubsidiaryEntity,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                model: EquipmentEntity,
                attributes: ["id", "title", "code", "description"],
              },
              {
                model: CounterpartyEntity,
                attributes: ["id", "title", "code", "description"],
              },
              {
                model: DesignDocumentEntity,
                as: "subUnitDocuments",
                attributes: [
                  "id",
                  "title",
                  "code",
                  "revision",
                  "fileType",
                  "fileName",
                  "filePath",
                ],
              },
              {
                model: DesignDocumentEntity,
                as: "subUnitQuestionare",
                attributes: [
                  "id",
                  "title",
                  "code",
                  "revision",
                  "fileType",
                  "fileName",
                  "filePath",
                ],
              },
            ],
          });
          break;
        }

        default:
          break;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return item;
  };

  findAll = async (
    target: string,
    parrentId?: string
  ): Promise<PositionTreeView[]> => {
    let items: PositionTreeView[] = [];

    try {
      switch (target) {
        case "subsidiary": {
          items = await this.subsidiaryRepository.findAll({
            include: [
              {
                model: LogoEntity,
                attributes: ["id", "fileType", "fileName", "filePath"],
              },
              {
                model: FieldEntity,
                attributes: [
                  "subsidiaryId",
                  "id",
                  "title",
                  "code",
                  "description",
                ],
              },
              {
                model: UserEntity,
              },
            ],
          });
          break;
        }
        case "field": {
          items = parrentId
            ? await this.fieldRepository.findAll({
              where: {subsidiaryId: parrentId},
              include: [
                {
                  model: SubsidiaryEntity,
                },
                {
                  model: ProjectEntity,
                  attributes: [
                    "fieldId",
                    "designId",
                    "id",
                    "title",
                    "code",
                    "contract",
                    "description",
                  ],
                },
              ],
            })
            : await this.fieldRepository.findAll({
              include: [
                {
                  model: SubsidiaryEntity,
                },
                {
                  model: ProjectEntity,
                  attributes: [
                    "fieldId",
                    "designId",
                    "id",
                    "title",
                    "code",
                    "contract",
                    "description",
                  ],
                },
              ],
            });
          break;
        }
        case "project": {
          items = parrentId
            ? await this.projectRepository.findAll({
              where: {fieldId: parrentId},
              attributes: [
                "fieldId",
                "designId",
                "id",
                "title",
                "code",
                "contract",
                "description",
              ],
              include: [
                {
                  model: FieldEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: SubUnitEntity,
                    },
                  ],
                },
                {
                  model: DesignEntity,
                },
                {
                  model: DesignDocumentEntity,
                  as: "projectDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
            : await this.projectRepository.findAll({
              attributes: [
                "fieldId",
                "designId",
                "id",
                "title",
                "code",
                "contract",
                "description",
              ],
              include: [
                {
                  model: FieldEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: SubUnitEntity,
                    },
                  ],
                },
                {
                  model: DesignEntity,
                },
                {
                  model: DesignDocumentEntity,
                  as: "projectDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
          break;
        }
        case "unit": {
          items = parrentId
            ? await this.unitRepository.findAll({
              where: {projectId: parrentId},
              attributes: [
                "projectId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: FieldEntity,
                      include: [
                        {
                          model: SubsidiaryEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: SubUnitEntity,
                  attributes: [
                    "unitId",
                    "equipmentId",
                    "supplierId",

                    "id",
                    "title",
                    "code",
                    "position",
                    "contract",
                    "description",
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
            : await this.unitRepository.findAll({
              attributes: [
                "projectId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: FieldEntity,
                      include: [
                        {
                          model: SubsidiaryEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: SubUnitEntity,
                  attributes: [
                    "unitId",
                    "equipmentId",
                    "supplierId",

                    "id",
                    "title",
                    "code",
                    "position",
                    "contract",
                    "description",
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
          break;
        }
        case "sub-unit": {
          items = parrentId
            ? await this.subUnitRepository.findAll({
              where: {unitId: parrentId},
              attributes: [
                "unitId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
              include: [
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: ProjectEntity,
                      include: [
                        {
                          model: FieldEntity,
                          include: [
                            {
                              model: SubsidiaryEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
            : await this.subUnitRepository.findAll({
              attributes: [
                "unitId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
              include: [
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: ProjectEntity,
                      include: [
                        {
                          model: FieldEntity,
                          include: [
                            {
                              model: SubsidiaryEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
          break;
        }

        default:
          break;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return items;
  };

  update = async (
    id: string,
    target: string,
    dto: UpdatePositionTreeDto,
    file?: any
  ): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;

    let oldFolderName = "";
    let newFolderName = "";
    try {
      switch (target) {
        case "subsidiary": {
          item = await this.subsidiaryRepository.findOne({where: {id}});
          file &&
          (await this.fileService.updateLogo(
            item.id.toString(),
            target,
            file
          ));
          if (dto.code) {
            oldFolderName = this.fileService.generateFolderName(
              target,
              +id,
              item.code
            );
            newFolderName = this.fileService.generateFolderName(
              target,
              +id,
              dto.code
            );
          }
          await this.subsidiaryRepository.update(dto, {where: {id}});
          item = await this.subsidiaryRepository.findOne({where: {id}});
          break;
        }
        case "field": {
          item = await this.fieldRepository.findOne({where: {id}});
          const oldParrent = await this.subsidiaryRepository.findOne({
            where: {id: item.subsidiaryId},
            attributes: ["id", "code"],
          });

          const newParrent = (<UpdateFieldDto>dto).subsidiaryId
            ? await this.subsidiaryRepository.findOne({
              where: {id: (<UpdateFieldDto>dto).subsidiaryId},
              attributes: ["id", "code"],
            })
            : null;

          const oldSubsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            oldParrent.id,
            oldParrent.code
          );
          const newSubsidiaryFolderName = newParrent
            ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.id,
              newParrent.code
            )
            : "";
          const oldFieldFolderName = this.fileService.generateFolderName(
            target,
            +id,
            item.code
          );
          const newFieldFolderName = dto.code
            ? this.fileService.generateFolderName(target, +id, dto.code)
            : "";

          oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}`;

          newFolderName =
            newParrent && newFieldFolderName
              ? `${newSubsidiaryFolderName}/${newFieldFolderName}`
              : newParrent && !newFieldFolderName
                ? `${newSubsidiaryFolderName}/${oldFieldFolderName}`
                : !newParrent && newFieldFolderName
                  ? `${oldSubsidiaryFolderName}/${newFieldFolderName}`
                  : "";

          await this.fieldRepository.update(dto, {where: {id}});
          item = await this.fieldRepository.findOne({where: {id}});
          break;
        }
        case "project": {
          item = await this.projectRepository.findOne({where: {id}});
          const parrent = await this.fieldRepository.findOne({
            where: {id: item.fieldId},
            attributes: ["id", "code"],
            include: [
              {
                model: SubsidiaryEntity,
                attributes: ["id", "code"],
              },
            ],
          });
          const newParrent = (<CreateProjectDto>dto).fieldId
            ? await this.fieldRepository.findOne({
              where: {id: (<CreateProjectDto>dto).fieldId},
              attributes: ["id", "code"],
              include: [
                {
                  model: SubsidiaryEntity,
                  attributes: ["id", "code"],
                },
              ],
            })
            : null;

          const oldSubsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.subsidiary.id,
            parrent.subsidiary.code
          );

          const newSubsidiaryFolderName = newParrent
            ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.subsidiary.id,
              newParrent.subsidiary.code
            )
            : "";

          const oldFieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.id,
            parrent.code
          );

          const newFieldFolderName = newParrent
            ? this.fileService.generateFolderName(
              "field",
              newParrent.id,
              newParrent.code
            )
            : "";

          const parrentFolderName = newParrent
            ? `${newSubsidiaryFolderName}/${newFieldFolderName}`
            : `${oldSubsidiaryFolderName}/${oldFieldFolderName}`;

          const oldFolder = this.fileService.generateFolderName(
            target,
            +id,
            item.code,
            item.description
          );

          oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldFolder}`;

          const newFolder =
            dto.code && dto.description
              ? this.fileService.generateFolderName(
                target,
                +id,
                dto.code,
                dto.description
              )
              : dto.code && !dto.description
                ? this.fileService.generateFolderName(
                  target,
                  +id,
                  dto.code,
                  item.description
                )
                : !dto.code && dto.description
                  ? this.fileService.generateFolderName(
                    target,
                    +id,
                    item.code,
                    dto.description
                  )
                  : "";

          newFolderName =
            newFolder && newFieldFolderName
              ? `${parrentFolderName}/${newFolder}`
              : newFolder && !newFieldFolderName
                ? `${parrentFolderName}/${newFolder}`
                : !newFolder && newFieldFolderName
                  ? `${parrentFolderName}/${oldFolder}`
                  : "";

          await this.projectRepository.update(dto, {where: {id}});
          item = await this.projectRepository.findOne({where: {id}});
          break;
        }
        case "unit": {
          item = await this.unitRepository.findOne({where: {id}});
          const parrent = await this.projectRepository.findOne({
            where: {id: item.projectId},
            attributes: ["id", "code", "description"],
            include: [
              {
                model: FieldEntity,
                attributes: ["id", "code"],
                include: [
                  {
                    model: SubsidiaryEntity,
                    attributes: ["id", "code"],
                  },
                ],
              },
            ],
          });
          const newParrent = (<UpdateUnitDto>dto).projectId
            ? await this.projectRepository.findOne({
              where: {id: (<UpdateUnitDto>dto).projectId},
              attributes: ["id", "code", "description"],
              include: [
                {
                  model: FieldEntity,
                  attributes: ["id", "code"],
                  include: [
                    {
                      model: SubsidiaryEntity,
                      attributes: ["id", "code"],
                    },
                  ],
                },
              ],
            })
            : null;

          const oldSubsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.field.subsidiary.id,
            parrent.field.subsidiary.code
          );

          const newSubsidiaryFolderName = newParrent
            ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.field.subsidiary.id,
              newParrent.field.subsidiary.code
            )
            : "";

          const oldFieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.field.id,
            parrent.field.code
          );

          const newFieldFolderName = newParrent
            ? this.fileService.generateFolderName(
              "field",
              newParrent.field.id,
              newParrent.field.code
            )
            : "";

          const oldProjectFolderName = this.fileService.generateFolderName(
            "project",
            parrent.id,
            parrent.code,
            parrent.description
          );

          const newProjectFolderName = newParrent
            ? this.fileService.generateFolderName(
              "project",
              newParrent.id,
              newParrent.code,
              newParrent.description
            )
            : "";

          const parrentFolderName = newParrent
            ? `${newSubsidiaryFolderName}/${newFieldFolderName}/${newProjectFolderName}/002. Объекты`
            : `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты`;

          const oldFolder = this.fileService.generateFolderName(
            target,
            +id,
            item.position,
            item.code
          );

          oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldFolder}`;

          const newFolder =
            dto.code && (<UpdateUnitDto>dto).position
              ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateUnitDto>dto).position,
                dto.code
              )
              : dto.code && !(<UpdateUnitDto>dto).position
                ? this.fileService.generateFolderName(
                  target,
                  +id,
                  item.position,
                  dto.code
                )
                : !dto.code && (<UpdateUnitDto>dto).position
                  ? this.fileService.generateFolderName(
                    target,
                    +id,
                    (<UpdateUnitDto>dto).position,
                    item.code
                  )
                  : "";

          newFolderName =
            newFolder && newProjectFolderName
              ? `${parrentFolderName}/${newFolder}`
              : newFolder && !newProjectFolderName
                ? `${parrentFolderName}/${newFolder}`
                : !newFolder && newProjectFolderName
                  ? `${parrentFolderName}/${oldFolder}`
                  : "";

          // await this.unitRepository.update(dto, { where: { id } }); //TODO: вурнуть из коммента
          item = await this.unitRepository.findOne({where: {id}});

          break;
        }
        case "sub-unit": {
          item = await this.subUnitRepository.findOne({where: {id}});
          const parrent = await this.unitRepository.findOne({
            where: {id: item.unitId},
            attributes: ["id", "code", "position"],
            include: [
              {
                model: ProjectEntity,
                attributes: ["id", "code", "description"],
                include: [
                  {
                    model: FieldEntity,
                    attributes: ["id", "code"],
                    include: [
                      {
                        model: SubsidiaryEntity,
                        attributes: ["id", "code"],
                      },
                    ],
                  },
                ],
              },
            ],
          });
          const newParrent = (<UpdateSubUnitDto>dto).unitId
            ? await this.unitRepository.findOne({
              where: {id: (<UpdateSubUnitDto>dto).unitId},
              attributes: ["id", "code", "position"],
              include: [
                {
                  model: ProjectEntity,
                  attributes: ["id", "code", "description"],
                  include: [
                    {
                      model: FieldEntity,
                      attributes: ["id", "code"],
                      include: [
                        {
                          model: SubsidiaryEntity,
                          attributes: ["id", "code"],
                        },
                      ],
                    },
                  ],
                },
              ],
            })
            : null;

          const oldSubsidiaryFolderName = this.fileService.generateFolderName(
            "subsidiary",
            parrent.project.field.subsidiary.id,
            parrent.project.field.subsidiary.code
          );

          const newSubsidiaryFolderName = newParrent
            ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.project.field.subsidiary.id,
              newParrent.project.field.subsidiary.code
            )
            : "";

          const oldFieldFolderName = this.fileService.generateFolderName(
            "field",
            parrent.project.field.id,
            parrent.project.field.code
          );

          const newFieldFolderName = newParrent
            ? this.fileService.generateFolderName(
              "field",
              newParrent.project.field.id,
              newParrent.project.field.code
            )
            : "";

          const oldProjectFolderName = this.fileService.generateFolderName(
            "project",
            parrent.project.id,
            parrent.project.code,
            parrent.project.description
          );

          const newProjectFolderName = newParrent
            ? this.fileService.generateFolderName(
              "project",
              newParrent.project.id,
              newParrent.project.code,
              newParrent.project.description
            )
            : "";

          const oldUnitFolderName = this.fileService.generateFolderName(
            "project",
            parrent.id,
            parrent.position,
            parrent.code
          );

          const newUnitFolderName = newParrent
            ? this.fileService.generateFolderName(
              "project",
              newParrent.id,
              newParrent.position,
              newParrent.code
            )
            : "";

          const parrentFolderName = newParrent
            ? `${newSubsidiaryFolderName}/${newFieldFolderName}/${newProjectFolderName}/002. Объекты/${newUnitFolderName}/002. Объекты`
            : `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldUnitFolderName}/002. Объекты`;

          const oldFolder = this.fileService.generateFolderName(
            target,
            +id,
            item.position,
            item.code
          );

          oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldUnitFolderName}/002. Объекты/${oldFolder}`;

          const newFolder =
            dto.code && (<UpdateSubUnitDto>dto).position
              ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateSubUnitDto>dto).position,
                dto.code
              )
              : dto.code && !(<UpdateSubUnitDto>dto).position
                ? this.fileService.generateFolderName(
                  target,
                  +id,
                  item.position,
                  dto.code
                )
                : !dto.code && (<UpdateSubUnitDto>dto).position
                  ? this.fileService.generateFolderName(
                    target,
                    +id,
                    (<UpdateSubUnitDto>dto).position,
                    item.code
                  )
                  : "";

          newFolderName =
            newFolder && newUnitFolderName
              ? `${parrentFolderName}/${newFolder}`
              : newFolder && !newUnitFolderName
                ? `${parrentFolderName}/${newFolder}`
                : !newFolder && newUnitFolderName
                  ? `${parrentFolderName}/${oldFolder}`
                  : "";

          await this.subUnitRepository.update(dto, {where: {id}});
          item = await this.subUnitRepository.findOne({where: {id}});
          // file &&
          // (await this.fileService.updateDesignDocument(
          //   item.id.toString(),
          //   target,
          //   oldFolderName,
          //   file
          // ));
          break;
        }
        default:
          break;
      }

      newFolderName &&
      this.fileService.moveDirectoryOrFile(oldFolderName, newFolderName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return item;
  };

  remove = async (id: string, target: string): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;
    const folderName = await this.getItemFolderPath(target, id);
    try {
      switch (target) {
        case "subsidiary": {
          item = await this.subsidiaryRepository.findOne({where: {id}});
          await this.fileService.deleteLogo(id, target);
          await this.subsidiaryRepository.destroy({where: {id}});

          break;
        }
        case "field": {
          item = await this.fieldRepository.findOne({where: {id}});
          await this.fieldRepository.destroy({where: {id}});
          break;
        }
        case "project": {
          item = await this.projectRepository.findOne({where: {id}});
          await this.projectRepository.destroy({where: {id}});
          break;
        }
        case "unit": {
          item = await this.unitRepository.findOne({where: {id}});
          await this.unitRepository.destroy({where: {id}});
          break;
        }
        case "sub-unit": {
          item = await this.subUnitRepository.findOne({where: {id}});
          await this.subUnitRepository.destroy({where: {id}});
          break;
        }
        default:
          break;
      }

      this.fileService.removeDirectoryOrFile(folderName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return item;
  };

  download = async (
    data: PositionTreeView[] | PositionTreeView,
    folder: string,
    fileName: string,
    fileType: string
  ): Promise<string> => {
    const file = this.fileService.fileDownload(
      data,
      folder,
      fileName,
      fileType
    );

    return file;
  };

  getCheckList = async (
    target: string,
    id: string,
    settings: CheckListSets
  ) => {
    let item: ProjectEntity | UnitEntity | null = null;
    let checkList = null;
    try {
      switch (target) {
        case "project": {
          item = await this.projectRepository.findOne({
            where: {id},
            attributes: [
              "fieldId",
              "designId",
              "id",
              "title",
              "code",
              "contract",
              "description",
            ],
            include: [
              {
                model: FieldEntity,
                include: [
                  {
                    model: SubsidiaryEntity,
                  },
                ],
              },
              {
                model: UnitEntity,
                include: [
                  {
                    model: SubUnitEntity,
                    include: [
                      {
                        model: DesignDocumentEntity,
                        as: "subUnitDocuments",

                        include: [
                          {
                            model: DesignDocumentCommentEntity,
                            as: "sudc",
                            include: [
                              {
                                model: DesignDocumentSolutionEntity,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    model: DesignDocumentEntity,
                    as: "unitDocuments",

                    include: [
                      {
                        model: DesignDocumentCommentEntity,
                        as: "udc",
                        include: [
                          {
                            model: DesignDocumentSolutionEntity,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                model: DesignEntity,
              },
              {
                model: DesignDocumentEntity,
                as: "projectDocuments",

                include: [
                  {
                    model: DesignDocumentCommentEntity,
                    as: "pdc",
                    include: [
                      {
                        model: DesignDocumentSolutionEntity,
                      },
                    ],
                  },
                ],
              },
            ],
          });
          checkList = this.checkListService.projectChecklist(item, settings);
          break;
        }
        case "unit": {
          item = await this.unitRepository.findOne({
            where: {id},
            attributes: [
              "projectId",
              "equipmentId",
              "supplierId",
              "id",
              "position",
              "title",
              "code",
              "contract",
              "description",
            ],
            include: [
              {
                model: ProjectEntity,
                include: [
                  {
                    model: FieldEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: DesignDocumentEntity,
                    as: "subUnitDocuments",

                    include: [
                      {
                        model: DesignDocumentCommentEntity,
                        as: "sudc",
                        include: [
                          {
                            model: DesignDocumentSolutionEntity,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                model: DesignDocumentEntity,
                as: "unitDocuments",

                include: [
                  {
                    model: DesignDocumentCommentEntity,
                    as: "udc",
                    include: [
                      {
                        model: DesignDocumentSolutionEntity,
                      },
                    ],
                  },
                ],
              },

              {
                model: CounterpartyEntity,
                include: [
                  {
                    model: DesignDocumentEntity,
                    as: "supplierDocuments",

                    include: [
                      {
                        model: DesignDocumentCommentEntity,
                        as: "sdc",
                        include: [
                          {
                            model: DesignDocumentSolutionEntity,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          });
          checkList = this.checkListService.unitChecklist(item, settings);
          break;
        }
        // case "sub-unit": {
        //   item = await this.subUnitRepository.findOne({
        //     where: { id },
        //     attributes: [
        //       "projectId",
        //       "equipmentId",
        //       "supplierId",
        //       "id",
        //       "position",
        //       "title",
        //       "code",
        //       "contract",
        //       "description",
        //     ],
        //     include: [
        //       {
        //         model: UnitEntity,
        //         include: [
        //           {
        //             model: ProjectEntity,
        //             include: [
        //               {
        //                 model: FieldEntity,
        //                 include: [
        //                   {
        //                     model: SubsidiaryEntity
        //                   }
        //                 ]
        //               }
        //             ]
        //         }
        //         ]
        //       },

        //       {
        //         model: DesignDocumentEntity,
        //         as: "subUnitDocuments",

        //         include: [
        //           {
        //             model: DesignDocumentCommentEntity,
        //             as: "sudc",
        //             include: [
        //               {
        //                 model: DesignDocumentSolutionEntity,
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         model: CounterpartyEntity,
        //       },
        //       {
        //         model: DesignDocumentEntity,
        //         as: "supplierDocuments",

        //         include: [
        //           {
        //             model: DesignDocumentCommentEntity,
        //             as: "sdc",
        //             include: [
        //               {
        //                 model: DesignDocumentSolutionEntity,
        //               },
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   });
        //   checkList = this.checkListService.unitChecklist(item, settings);
        //   break;
        // }

        default:
          break;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return checkList;
  };

  getItemFolderPath = async (target: string, id: string): Promise<string> => {
    let folderPath = "";
    switch (target) {
      case "subsidiary": {
        const {code} = await this.subsidiaryRepository.findOne({
          where: {id},
          attributes: ["code"],
        });
        folderPath = this.fileService.generateFolderName(target, +id, code);
        break;
      }

      case "field": {
        const {code, subsidiary: parrent} =
          await this.fieldRepository.findOne({
            where: {id},
            attributes: ["code"],
            include: [
              {
                model: SubsidiaryEntity,
                attributes: ["id", "code"],
              },
            ],
          });

        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.id,
          parrent.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          target,
          +id,
          code
        );
        folderPath = `${subsidiaryFolderName}/${fieldFolderName}`;
        break;
      }

      case "project": {
        const {
          code,
          description,
          field: parrent,
        } = await this.projectRepository.findOne({
          where: {id},
          attributes: ["code", "description"],
          include: [
            {
              model: FieldEntity,
              attributes: ["id", "code"],
              include: [
                {
                  model: SubsidiaryEntity,
                  attributes: ["id", "code"],
                },
              ],
            },
          ],
        });

        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.subsidiary.id,
          parrent.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.id,
          parrent.code
        );
        const folder = this.fileService.generateFolderName(
          target,
          +id,
          code,
          description
        );
        folderPath = `${subsidiaryFolderName}/${fieldFolderName}/${folder}`;
        break;
      }

      case "unit": {
        const {
          code,
          position,
          project: parrent,
        } = await this.unitRepository.findOne({
          where: {id},
          attributes: ["code", "position"],
          include: [
            {
              model: ProjectEntity,
              attributes: ["id", "code", "description"],
              include: [
                {
                  model: FieldEntity,
                  attributes: ["id", "code"],
                  include: [
                    {
                      model: SubsidiaryEntity,
                      attributes: ["id", "code"],
                    },
                  ],
                },
              ],
            },
          ],
        });

        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.field.subsidiary.id,
          parrent.field.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.field.id,
          parrent.field.code
        );
        const projectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.id,
          parrent.code,
          parrent.description
        );
        const folder = this.fileService.generateFolderName(
          target,
          +id,
          position,
          code
        );
        folderPath = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${folder}`;
        break;
      }

      case "sub-unit": {
        const {
          code,
          position,
          unit: parrent,
        } = await this.subUnitRepository.findOne({
          where: {id},
          attributes: ["code", "position"],
          include: [
            {
              model: UnitEntity,
              attributes: ["id", "code", "position"],
              include: [
                {
                  model: ProjectEntity,
                  attributes: ["id", "code", "description"],
                  include: [
                    {
                      model: FieldEntity,
                      attributes: ["id", "code"],
                      include: [
                        {
                          model: SubsidiaryEntity,
                          attributes: ["id", "code"],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.project.field.subsidiary.id,
          parrent.project.field.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.project.field.id,
          parrent.project.field.code
        );
        const projectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.project.id,
          parrent.project.code,
          parrent.project.description
        );
        const unitFolder = this.fileService.generateFolderName(
          "unit",
          parrent.id,
          parrent.position,
          parrent.code
        );
        const folder = this.fileService.generateFolderName(
          target,
          +id,
          position,
          code
        );
        folderPath = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${unitFolder}/002. Объекты/${folder}`;

        break;
      }

      default:
        break;
    }

    return folderPath;
  };

  getStatistic = async (target: string, id: string): Promise<StatisticView> => {
    let statistic = null;

    switch (target) {
      case "subsidiary": {
        const item = await this.subsidiaryRepository.findOne({
          where: {id},
          include: [
            {
              model: FieldEntity,
              include: [
                {
                  model: ProjectEntity,
                  include: [
                    {
                      model: DesignDocumentEntity,
                      as: "projectDocuments",
                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "pdc",
                        },
                      ],
                    },
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: CounterpartyEntity,
                          include: [
                            {
                              model: DesignDocumentEntity,
                              as: "supplierDocuments",
                              include: [
                                {
                                  model: DesignDocumentCommentEntity,
                                  as: "sdc",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          model: DesignDocumentEntity,
                          as: "unitDocuments",
                          include: [
                            {
                              model: DesignDocumentCommentEntity,
                              as: "udc",
                            },
                          ],
                        },
                        {
                          model: SubUnitEntity,
                          include: [
                            // {
                            //   model: CounterpartyEntity,
                            //   include: [
                            //     {
                            //       model: DesignDocumentEntity,
                            //       as: "supplierDocuments",
                            //       include: [
                            //         {
                            //           model: DesignDocumentCommentEntity,
                            //           as: "sdc",
                            //           include: [
                            //             {
                            //               model: DesignDocumentSolutionEntity,
                            //             },
                            //           ],
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
                            {
                              model: DesignDocumentEntity,
                              as: "subUnitDocuments",
                              include: [
                                {
                                  model: DesignDocumentCommentEntity,
                                  as: "sudc",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });

        statistic = this.statisticService.getSubsidiaryStatistic(item);
        break;
      }
      case "field": {
        const item = await this.fieldRepository.findOne({
          where: {id},
          include: [
            {
              model: ProjectEntity,
              include: [
                {
                  model: DesignDocumentEntity,
                  as: "projectDocuments",
                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "pdc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: UnitEntity,
                  include: [
                    {
                      model: CounterpartyEntity,
                      include: [
                        {
                          model: DesignDocumentEntity,
                          as: "supplierDocuments",
                          include: [
                            {
                              model: DesignDocumentCommentEntity,
                              as: "sdc",
                              include: [
                                {
                                  model: DesignDocumentSolutionEntity,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      model: DesignDocumentEntity,
                      as: "unitDocuments",
                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "udc",
                          include: [
                            {
                              model: DesignDocumentSolutionEntity,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      model: SubUnitEntity,
                      include: [
                        {
                          model: CounterpartyEntity,
                          include: [
                            {
                              model: DesignDocumentEntity,
                              as: "supplierDocuments",
                              include: [
                                {
                                  model: DesignDocumentCommentEntity,
                                  as: "sdc",
                                  include: [
                                    {
                                      model: DesignDocumentSolutionEntity,
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          model: DesignDocumentEntity,
                          as: "subUnitDocuments",
                          include: [
                            {
                              model: DesignDocumentCommentEntity,
                              as: "sudc",
                              include: [
                                {
                                  model: DesignDocumentSolutionEntity,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });

        statistic = this.statisticService.getFieldStatistic(item);
        break;
      }
      case "project": {
        const item = await this.projectRepository.findOne({
          where: {id},

          include: [
            {
              model: DesignDocumentEntity,
              as: "projectDocuments",
              include: [
                {
                  model: DesignDocumentCommentEntity,
                  as: "pdc",
                  include: [
                    {
                      model: DesignDocumentSolutionEntity,
                    },
                  ],
                },
              ],
            },
            {
              model: UnitEntity,
              include: [
                {
                  model: CounterpartyEntity,
                  include: [
                    {
                      model: DesignDocumentEntity,
                      as: "supplierDocuments",
                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "sdc",
                          include: [
                            {
                              model: DesignDocumentSolutionEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",
                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "udc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: CounterpartyEntity,
                      include: [
                        {
                          model: DesignDocumentEntity,
                          as: "supplierDocuments",
                          include: [
                            {
                              model: DesignDocumentCommentEntity,
                              as: "sdc",
                              include: [
                                {
                                  model: DesignDocumentSolutionEntity,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      model: DesignDocumentEntity,
                      as: "subUnitDocuments",
                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "sudc",
                          include: [
                            {
                              model: DesignDocumentSolutionEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });

        statistic = this.statisticService.getProjectStatistic(item);
        break;
      }
      case "unit": {
        const item = await this.unitRepository.findOne({
          where: {id},
          include: [
            {
              model: CounterpartyEntity,
              include: [
                {
                  model: DesignDocumentEntity,
                  as: "supplierDocuments",
                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "sdc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "unitDocuments",
              include: [
                {
                  model: DesignDocumentCommentEntity,
                  as: "udc",
                  include: [
                    {
                      model: DesignDocumentSolutionEntity,
                    },
                  ],
                },
              ],
            },
            {
              model: SubUnitEntity,
              include: [
                {
                  model: CounterpartyEntity,
                  include: [
                    {
                      model: DesignDocumentEntity,
                      as: "supplierDocuments",
                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "sdc",
                          include: [
                            {
                              model: DesignDocumentSolutionEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",
                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "sudc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });

        statistic = this.statisticService.getUnitStatistic(item);
        break;
      }
      case "sub-unit": {
        const item = await this.subUnitRepository.findOne({
          where: {id},
          include: [
            {
              model: CounterpartyEntity,
              include: [
                {
                  model: DesignDocumentEntity,
                  as: "supplierDocuments",
                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "sdc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "subUnitDocuments",
              include: [
                {
                  model: DesignDocumentCommentEntity,
                  as: "sudc",
                  include: [
                    {
                      model: DesignDocumentSolutionEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });

        statistic = this.statisticService.getSubUnitStatistic(item);
        break;
      }
      default:
        break;
    }

    return statistic;
  };
}