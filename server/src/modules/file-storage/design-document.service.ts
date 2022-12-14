/*
** Шифр проектной документации по ГОСТ Р 21-101-2020. Основные требования к проектной и рабочей документации
** {шифр проекта/номер договора/код объекта}-
** {Шифр раздела (Приложение Б ГОСТ Р 21-101-2020} -
** {Раздел {Номер раздела}. {Наименование}}.
** [{Подраздел {Номер подраздела}. {Наименование}}].
** [{Часть {Номер части}}].
** [{Книга {Номер книги}}]
 */



import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {DesignDocumentEntity, NormativeEntity} from "./entities";
import {NewFileStorageService} from "./new-file-storage.service";
import {File, DesignDocumentView, DesignDocumentCreateOrUpdateAttrs} from "../../../common/types/file-storage";
import {formattedDate} from "../../../common/utils/formatDate.pipe";
import {ExcelService} from "./excel.service";
import {
  CommentAccountingService,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity
} from "../comment-accounting";
import {ProjectEntity, SubsidiaryEntity, SubUnitEntity, UnitEntity} from "../position-tree";
import {
  CounterpartyEntity,
  CriticalityEntity,
  DirectionEntity, RegulatoryReferenceInformationService,
  SectionEntity,
  StageEntity,
  UserEntity
} from "../regulatory-reference-information";

@Injectable()
export class DesignDocumentService {
  constructor(

    @Inject(forwardRef(() => NewFileStorageService))
    private fileStorageService: NewFileStorageService,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService,
    @Inject(forwardRef(() => RegulatoryReferenceInformationService))
    private nsiService: RegulatoryReferenceInformationService,
    @Inject(forwardRef(() => CommentAccountingService))
    private commentService: CommentAccountingService,
    @InjectModel(DesignDocumentEntity)
    private designDocumentRepository: typeof DesignDocumentEntity,
  ) {
  }


  private designDocumentView = (item: DesignDocumentEntity): DesignDocumentView => {
    const {
      id,
      projectId,
      project,
      unitId,
      unit,
      subUnitId,
      subUnit,
      supplierId,
      supplier,
      stageId,
      stage,
      sectionId,
      section,
      code,
      title,
      revision,
      description,
      filePath,
      fileName,
      fileType,
      createdAt,
      updatedAt,
      pdc,
      udc,
      sudc,
      sdc
    } = item;


    const documentSection = `${stage.code}/${section.code}`;

    const comments = pdc
      ? this.commentService.commentRender(pdc, documentSection, code, title)
      : udc
        ? this.commentService.commentRender(udc, documentSection, code, title)
        : sudc
          ? this.commentService.commentRender(sudc, documentSection, code, title)
          : sdc
            ? this.commentService.commentRender(sdc, documentSection, code, title)
            : [];

    return {
      id: id.toString(),
      projectId,
      projectTitle: projectId ? `${project.code}. ${project.title}` : null,
      unitId,
      unitTitle: unitId ? `${unit.title} (поз. ${unit.position})` : null,
      subUnitId,
      subUnitTitle: subUnitId ? `${subUnit.title} (поз. ${subUnit.position})` : null,
      stageId: stageId,
      stageTitle: stage.code,
      sectionId: sectionId,
      sectionTitle: section.code,
      supplierId: supplierId,
      supplierTitle: supplierId ? supplier.title : null,
      code,
      title,
      revision,
      description,
      filePath,
      fileName,
      fileType,
      comments,
      createdAt: formattedDate(createdAt, true),
      updatedAt: formattedDate(updatedAt, true)
    }
  };

  private setUploadedFolder = async (stageId: string, sectionId: string, supplierId?: string):Promise<string> => {
    let tkpFolder = "",
        fileFolder = "";
    /* Генерируем путь к файловому хранилищу (стадия + марка/раздел) */
    const {code: stageCode} = await this.nsiService.findOne("stage", stageId);
    const {code: sectionCode} = await this.nsiService.findOne("section", sectionId);

    const stageFolder = this.fileStorageService.generateFolderName(stageCode, +stageId);
    const sectionFolder = this.fileStorageService.generateFolderName(sectionCode, +sectionId);
    fileFolder = this.fileStorageService.getPath([stageFolder, sectionFolder])

    if (supplierId) {
      const {code: SupplierCode} = await this.nsiService.findOne("counterparty", supplierId);
      const supplierFolderPath = this.fileStorageService.generateFolderName(SupplierCode, +supplierId);
      tkpFolder = this.fileStorageService.getPath([stageFolder, supplierFolderPath])
    }
    return supplierId ? tkpFolder : fileFolder;
  }

  // private setUploadedData = async (data: any) => {
  //   const {parentId, parentTarget, description, stageId, sectionId, supplierId, flag} = data;
  //   const doc: DesignDocumentCreateOrUpdateAttrs = {
  //     projectId: null,
  //     unitId: null,
  //     subUnitId:  null,
  //     uqstId:  null,
  //     suqstId: null,
  //     sloeId: null,
  //     cableLogId:  null,
  //     monitoringId: null,
  //     supplierId: supplierId ? supplierId : null,
  //     stageId: stageId ? stageId : 3,
  //     sectionId: sectionId ? sectionId : 57,
  //     code: "",
  //     title: "",
  //     revision: "",
  //     description: description ? description : "",
  //     filePath: "",
  //     fileName: "",
  //     fileType: ""
  //   }
  //
  //   let fileFolder = "";
  //
  //   const uploadDesignDocumentFlag = flag === "design-document";
  //
  //   if (uploadDesignDocumentFlag) {
  //     /*Устанавливаем значение родительской сущности */
  //     switch (parentTarget) {
  //       case "project": {
  //         doc.projectId = parentId;
  //         break;
  //       }
  //       case "unit": {
  //         doc.unitId = parentId;
  //         break;
  //       }
  //       case "sun-unit": {
  //         doc.subUnitId = parentId;
  //         break;
  //       }
  //       default: break;
  //     }
  //     fileFolder = await this.setUploadedFolder(stageId, sectionId,supplierId);
  //   }
  //   else {
  //     switch (parentTarget) {
  //       case "unit": {
  //         doc.uqstId = parentId;
  //         fileFolder = "ОЛ, ТТ, ТЗ"
  //         break;
  //       }
  //       case "sub-unit": {
  //         doc.suqstId = parentId;
  //         fileFolder = "ОЛ, ТТ, ТЗ"
  //         break;
  //       }
  //       case "summary-list-of-equipment": {
  //         doc.sloeId = parentId;
  //         fileFolder = this.fileStorageService.getPath(["Оборудование", "ОЛ, ТЗ, ТТ"])
  //         break;
  //       }
  //       case "monitoring": {
  //         doc.monitoringId = parentId;
  //         fileFolder = this.fileStorageService.getPath(["Оборудование", "ФСА"])
  //         break;
  //       }
  //       case "cable-log": {
  //         doc.cableLogId = parentId;
  //         fileFolder = this.fileStorageService.getPath(["Оборудование", "C5"])
  //         break;
  //       }
  //       default:
  //         break;
  //     }
  //   }
  // }

  findAllDesignDocuments = async (
    parentTarget: string,
    parentId: string
  ): Promise<DesignDocumentView[]> => {
    try {
      let data: DesignDocumentEntity[] = [];
      let items: DesignDocumentView[] = [];
      switch (parentTarget) {
        case "project": {
          data = await this.designDocumentRepository.findAll({
            where: { projectId: parentId },
            include: [
              {
                model: ProjectEntity,
                as: "project",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "pdc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "unit": {
          data = await this.designDocumentRepository.findAll({
            where: { unitId: parentId },
            include: [
              {
                model: UnitEntity,
                as: "unit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "udc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "sub-unit": {
          data = await this.designDocumentRepository.findAll({
            where: { subUnitId: parentId },
            include: [
              {
                model: SubUnitEntity,
                as: "subUnit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "sudc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "supplier": {
          data = await this.designDocumentRepository.findAll({
            where: { supplierId: parentId },
            include: [
              {
                model: UnitEntity,
                as: "unit",
              },
              {
                model: SubUnitEntity,
                as: "subUnit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "sudc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
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
      for (let i = 0; i < data.length; i++) {
        const item = this.designDocumentView(data[i]);
        items.push(item);
      }

      return items;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneDesignDocument = async (
    id: number,
    parentTarget?: string,
  ): Promise<DesignDocumentView> => {
    try {
       let data: DesignDocumentEntity = null;
      switch (parentTarget) {
        case "project": {
          data = await this.designDocumentRepository.findOne({
            where: { id},
            include: [
              {
                model: ProjectEntity,
                as: "project",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "pdc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "unit": {
          data = await this.designDocumentRepository.findOne({
            where: { id },
            include: [
              {
                model: UnitEntity,
                as: "unit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "udc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "sub-unit": {
          data = await this.designDocumentRepository.findOne({
            where: { id },
            include: [
              {
                model: SubUnitEntity,
                as: "subUnit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "sudc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
                  },
                ],
              },
            ],
          });
          break;
        }
        case "supplier": {
          data = await this.designDocumentRepository.findOne({
            where: { id},
            include: [
              {
                model: UnitEntity,
                as: "unit",
              },
              {
                model: SubUnitEntity,
                as: "subUnit",
              },
              {
                model: CounterpartyEntity,
                as: "supplier",
              },
              {
                model: StageEntity,
              },
              {
                model: SectionEntity,
              },
              {
                model: DesignDocumentCommentEntity,
                as: "sudc",
                include: [
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
                  {
                    model: UserEntity,
                    include: [
                      {
                        model: SubsidiaryEntity,
                      },
                    ],
                  },
                  {
                    model: NormativeEntity,
                  },
                  {
                    model: CriticalityEntity,
                  },
                  {
                    model: DirectionEntity,
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
      return this.designDocumentView(data);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  /* flag - переменная, которая определяет какой вид документа мы загружаем (из модуля дерево позиций, учет оборудования или файловое хранилище) */

  uploadOneDesignDocument = async (data: any, file: File): Promise<DesignDocumentView> => {
    try {
      const {parentTarget, parentId, parentFolder, stageId, sectionId, supplierId, flag} = data;

      const code = data ? data.code : undefined,
      title = data ? data.title : undefined,
      revision = data?.revision ? data.revision : "1",
      description = data ? data.description : "";




      let tkpFolder = "",
       fileFolder = "",
        pathToFile = "";

      const uploadDesignDocumentFlag = flag === "design-document";


      const doc: DesignDocumentCreateOrUpdateAttrs = {
        projectId: null,
        unitId: null,
        subUnitId:  null,
        uqstId:  null,
        suqstId: null,
        sloeId: null,
        cableLogId:  null,
        monitoringId: null,
        supplierId: supplierId ? supplierId : null,
        stageId: stageId ? stageId : 1,
        sectionId: sectionId ? sectionId : 57,
        code: "",
        title: "",
        revision: "",
        description: description ? description : "",
        filePath: "",
        fileName: "",
        fileType: ""
      }
//TODO: сделать переиспользуемой функцией
      if (uploadDesignDocumentFlag) {
        /*Устанавливаем значение родительской сущности */
        switch (parentTarget) {
          case "project": {
            doc.projectId = parentId;
            break;
          }
          case "unit": {
            doc.unitId = parentId;
            break;
          }
          case "sun-unit": {
            doc.subUnitId = parentId;
            break;
          }
          default: break;
        }
        fileFolder = await this.setUploadedFolder(stageId, sectionId, supplierId);
        console.log(parentFolder, fileFolder);
      }
      else {
          switch (parentTarget) {
          case "unit": {
            doc.uqstId = parentId;
            fileFolder = "ОЛ, ТТ, ТЗ"
            break;
          }
          case "sub-unit": {
            doc.suqstId = parentId;
            fileFolder = "ОЛ, ТТ, ТЗ"
            break;
          }
          case "summary-list-of-equipment": {
            doc.sloeId = parentId;
            fileFolder = this.fileStorageService.getPath(["Оборудование", "ОЛ, ТЗ, ТТ"]);
            console.log(parentFolder, fileFolder);
            break;
          }
          case "monitoring": {
            doc.monitoringId = parentId;
            fileFolder = this.fileStorageService.getPath(["Оборудование", "ФСА"])
            break;
          }
          case "cable-log": {
            doc.cableLogId = parentId;
            fileFolder = this.fileStorageService.getPath(["Оборудование", "C5"])
            break;
          }
          default:
            break;
        }
      }

      pathToFile = this.fileStorageService.getPath([parentFolder, fileFolder]);

      const {fileName, nameWithoutExt, extName} = this.fileStorageService.fileUpload(pathToFile, file);

      const nameSpace = nameWithoutExt.split(".")
      const docCode = code ? code : uploadDesignDocumentFlag ? nameSpace[0] : " ";
      const docTitle = title ? title : uploadDesignDocumentFlag ? nameSpace[1].slice(1) : fileName;
      const docRevision = revision ? revision : nameSpace[2].slice(1) ? nameSpace[2] : uploadDesignDocumentFlag ? "1" : " ";

      doc.code = docCode;
      doc.title = docTitle;
      doc.revision = docRevision
      doc.filePath = pathToFile;
      doc.fileName = fileName;
      doc.fileType = extName;



      const {id} = await this.designDocumentRepository.create(doc);

      return this.findOneDesignDocument(id, parentTarget)

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  uploadManyDesignDocument = async (data: any, files: {
    document?: File,
    descriptor?: File,
    documents?: File[]
  }): Promise<DesignDocumentView[]> => {
    try {
      const {multiple, parentTarget, parentId, parentFolder, stageId, sectionId, supplierId, flag} = data;
      const {descriptor, documents, document} = files;

      const multipleLoadFlag = multiple === "true" ? true : false



      const items: DesignDocumentView[] = [];
      if(multipleLoadFlag) {
        const filesDescription: any[] = this.excelService.convertExcelFileToJson(descriptor[0]);

        for(let i = 0, len = documents.length; i < len; i++) {
          const data = {parentTarget, parentId, parentFolder, stageId, sectionId, supplierId, flag, ...filesDescription[i], }
          const file = documents[i];
          const item = await this.uploadOneDesignDocument(data, file);
          items.push(item)
        }

      } else {

        const item = await this.uploadOneDesignDocument(data, document[0]);
        items.push(item)
      }
      return items

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeOneDesignDocument = async (id: number, parentTarget?: string): Promise<DesignDocumentView> => {
    try {
      const item = await this.findOneDesignDocument(id, parentTarget);
      if(item) {
        const {filePath, fileName} = item;
        const pathToFile = this.fileStorageService.getPath([filePath, fileName])
        await this.designDocumentRepository.destroy({where: {id}});
        this.fileStorageService.removeDirectoryOrFile(pathToFile)
      }
      return item;

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyDesignDocuments = async (ids: string, parentTarget: string): Promise<DesignDocumentView[]> => {
    try {
      const params = JSON.parse(ids)
      let items: DesignDocumentView[] = [];
      for(let i = 0, len = params.length; i < len; i++) {
        const id = +params[i];
        const item = await this.removeOneDesignDocument(id, parentTarget);
        items.push(item)
      }
      return items

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  /* Сервис обновления данных документа */
//TODO: доработать сервис для обновления данных ОЛ и документов модуля учет оборудования
  updateDesignDocument = async (data: any, id: number, document?: File): Promise<DesignDocumentView | DesignDocumentEntity > => {
    try {
      const {parentTarget, parentFolder} = data;
      let item: DesignDocumentView | DesignDocumentEntity = await this.designDocumentRepository.findOne({
        where: {id}
      });
      const {code, title,revision, description, stageId: newStageId, sectionId: newSectionId, supplierId: newSupplierId } = data;

      if(item) {
        const {
          cableLogId,
          monitoringId,
          projectId,
          unitId,
          sectionId,
          stageId,
          sloeId,
          subUnitId,
          supplierId,
          suqstId,
          uqstId,
          code: oldCode,
          title: oldTitle,
          revision: oldRevision,
          description: oldDescription,
          fileType: oldFileType,
          filePath: oldFilePath,
          fileName: oldFileName
        } = item;

        const doc = {
          cableLogId,
          monitoringId,
          projectId,
          sectionId,
          unitId,
          sloeId,
          stageId,
          subUnitId,
          supplierId,
          suqstId,
          uqstId,
          code: code ? code : oldCode,
          title: title ? title : oldTitle,
          revision: revision ? revision : oldRevision,
          description: description ? description : oldDescription,
          filePath: oldFilePath,
          fileName: oldFileName,
          fileType: oldFileType
        }

        const oldFile = this.fileStorageService.getPath([oldFilePath, oldFileName]);
        const newFilePath = await this.setUploadedFolder(newStageId ? newStageId : stageId, newSectionId ? newSectionId : sectionId, newSupplierId ? newSupplierId : supplierId)

        if(document) {
          this.fileStorageService.removeDirectoryOrFile(oldFile);
          const pathToFile = this.fileStorageService.getPath([parentFolder, newFilePath])
          const {fileName, extName} = this.fileStorageService.fileUpload(pathToFile, document);
          doc.fileName = fileName;
          doc.fileType = extName;
        }

        await this.designDocumentRepository.update(doc, {where: {id}});
        item = await this.findOneDesignDocument(id,parentTarget);
      }
      return item;

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}