import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";
import * as uuid from "uuid";
import { setCurrentDate, formatDate } from "../../../common/utils";
import {
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView,
  LogoCreationAttrs,
  NormativeCreateOrUpdateAttrs,
} from "../../../common/types/file-storage";

import { DesignDocumentEntity, LogoEntity, NormativeEntity } from "./entities";
import { InjectModel } from "@nestjs/sequelize";
import {
  CounterpartyEntity,
  CriticalityEntity,
  DirectionEntity,
  RegulatoryReferenceInformationService,
  SectionEntity,
  StageEntity,
  UserEntity,
} from "../regulatory-reference-information";
import { CreateDesignDocumentDto } from "./dto/create-file-storage.dto";
import {
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "../position-tree";
import {
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
  CommentAccountingService,
} from "../comment-accounting";

export enum FileType {
  PDF = "pdf",
  IMAGE = "image",
}

@Injectable()
export class FileStorageService {
  constructor(
    @InjectModel(LogoEntity)
    private logoRepository: typeof LogoEntity,
    @InjectModel(DesignDocumentEntity)
    private designDocumentRepository: typeof DesignDocumentEntity,
    @InjectModel(NormativeEntity)
    private normativeRepository: typeof NormativeEntity,
    @Inject(forwardRef(() => RegulatoryReferenceInformationService))
    private nsiService: RegulatoryReferenceInformationService,
    @Inject(forwardRef(() => CommentAccountingService))
    private commentService: CommentAccountingService
  ) {}

  createLogo = async (
    parrentId: string,
    target: string,
    file: any
  ): Promise<void> => {
    const logo: LogoCreationAttrs = {
      subsidiaryId: null,
      counterpartyId: null,
      designId: null,
      userId: null,
      filePath: "logo",
      fileName: "",
      fileType: "",
    };

    if (file) {
      const fileName = this.fileUpload("logo", file);

      logo.fileName = fileName;
      logo.fileType = this.getFileType(file);

      switch (target) {
        case "subsidiary": {
          logo.subsidiaryId = +parrentId;
          break;
        }
        case "counterparty": {
          logo.counterpartyId = +parrentId;
          break;
        }
        case "design": {
          logo.designId = +parrentId;
          break;
        }
        case "user": {
          logo.userId = +parrentId;
          break;
        }
        default:
          break;
      }

      await this.logoRepository.create(logo);
    }
  };

  updateLogo = async (
    parrentId: string,
    target: string,
    file: any
  ): Promise<void> => {
    let item: LogoEntity | null = null;

    if (file) {
      switch (target) {
        case "subsidiary": {
          item = await this.logoRepository.findOne({
            where: { subsidiaryId: +parrentId },
          });
          break;
        }
        case "counterparty": {
          item = await this.logoRepository.findOne({
            where: { counterpartyId: +parrentId },
          });
          break;
        }
        case "design": {
          item = await this.logoRepository.findOne({
            where: { designId: +parrentId },
          });
          break;
        }
        case "user": {
          item = await this.logoRepository.findOne({
            where: { userId: +parrentId },
          });
          break;
        }
        default:
          break;
      }

      if (item) {
        this.fileUpload("logo", file);
        this.removeDirectoryOrFile(`${item.filePath}/${item.fileName}`);
      } else this.createLogo(parrentId, target, file);
    }
  };

  deleteLogo = async (parrentId: string, target: string): Promise<void> => {
    let item: any = null;
    switch (target) {
      case "subsidiary": {
        item = await this.logoRepository.findOne({
          where: { subsidiaryId: parrentId },
        });
        break;
      }
      case "counterparty": {
        item = await this.logoRepository.findOne({
          where: { counterpartyId: parrentId },
        });
        break;
      }
      case "design": {
        item = await this.logoRepository.findOne({
          where: { designId: parrentId },
        });
        break;
      }
      case "user": {
        item = await this.logoRepository.findOne({
          where: { userId: parrentId },
        });
        break;
      }
      default:
        break;
    }

    if (item) {
      this.removeDirectoryOrFile(`${item.filePath}/${item.fileName}`);
    }
  };

  renderDesignDocument = (data: DesignDocumentEntity): DesignDocumentView => {
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
      sdc,
    } = data;

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

    const item: DesignDocumentView = {
      id: id.toString(),
      projectId,
      projectTitle: project ? `${project.code}.${project.title}` : null,
      unitId: unitId ? unitId : null,
      unitTitle: unit ? `${unit.title} (${unit.position})` : null,
      subUnitId: subUnitId ? subUnitId : null,
      subUnitTitle: subUnit ? `${subUnit.title} (${subUnit.position})` : null,
      stageId: stageId,
      stageTitle: stage.code,
      sectionId: sectionId,
      sectionTitle: section.code,
      supplierId: supplierId ? supplierId : null,
      supplierTitle: supplier ? supplier.title : null,
      code,
      title,
      revision,
      description,
      filePath,
      fileName,
      fileType,
      createdAt: formatDate(createdAt),
      updatedAt: formatDate(updatedAt),
      comments,
    };

    return item;
  };

  createDesignDocument = async (
    parrentId: string,
    parrentTarget: string,
    parrentFolderPath: string,
    file: any,
    data?: DesignDocumentCreateOrUpdateAttrs
  ): Promise<DesignDocumentView> => {
    console.log("FS_SERVICE: ", data);
    const document: DesignDocumentCreateOrUpdateAttrs = {
      projectId: data ? data.projectId : null,
      unitId: data ? data.unitId : null,
      subUnitId: data ? data.subUnitId : null,
      uqstId: data ? data.uqstId : null,
      suqstId: data ? data.suqstId : null,
      sloeId: data ? data.sloeId : null,
      cableLogId: data ? data.cableLogId : null,
      monitoringId: data ? data.monitoringId : null,
      supplierId: data ? data.supplierId : null,
      stageId: data ? data.stageId : 1,
      sectionId: data ? data.sectionId : 57,
      code: data ? data.code : "000",
      title: data ? data.title : "",
      revision: data ? data.revision : "1",
      description: data ? data.description : "",
      filePath: "",
      fileName: "",
      fileType: "",
      file: data ? data.file : null,
    };

    let tkpPath = "";
    let filePath = "";
    let fileName = "";

    if (data !== undefined) {
      const stage = await this.nsiService.findOne(
        "stage",
        document.stageId.toString()
      );
      const section = await this.nsiService.findOne(
        "section",
        document.sectionId.toString()
      );

      const stageFolderPath = this.generateFolderName(
        "stage",
        +document.stageId,
        stage.code,
        null
      );

      this.createDirectory(`${parrentFolderPath}/${stageFolderPath}`);

      const sectionFolderPath = this.generateFolderName(
        "section",
        +document.sectionId,
        section.code,
        null
      );

      filePath = `${parrentFolderPath}/${stageFolderPath}/${sectionFolderPath}`;
      this.createDirectory(filePath);

      if (document.supplierId) {
        const supplier = await this.nsiService.findOne(
          "counterparty",
          document.supplierId.toString()
        );
        const supplierFolder = this.generateFolderName(
          "counterparty",
          +document.supplierId,
          supplier.title
        );
        tkpPath = `${parrentFolderPath}/${stageFolderPath}/${supplierFolder}`;
        this.createDirectory(tkpPath);
      }

      const pathToFile = document.supplierId ? tkpPath : filePath;

      fileName = this.fileUpload(pathToFile, file);
      document.filePath = pathToFile;
      document.fileName = fileName;
    } else {
      document.title = this.getFileName(file);

      switch (parrentTarget) {
        case "unit": {
          document.uqstId = parrentId;
          document.fileName = this.fileUpload(parrentFolderPath, file);
          document.filePath = parrentFolderPath;
          break;
        }
        case "sub-unit": {
          document.suqstId = parrentId;

          document.fileName = this.fileUpload(parrentFolderPath, file);
          document.filePath = parrentFolderPath;
          break;
        }
        case "summary-list-of-equipment": {
          document.sloeId = +parrentId;
          this.createDirectory(`${parrentFolderPath}/Оборудование`);
          const pathToFile = `${parrentFolderPath}/Оборудование/ОЛ, ТТ, ТЗ`;
          this.createDirectory(pathToFile);

          fileName = this.fileUpload(pathToFile, file);
          document.filePath = pathToFile;
          document.fileName = fileName;
          break;
        }
        case "monitoring": {
          document.monitoringId = +parrentId;
          this.createDirectory(`${parrentFolderPath}/Оборудование`);
          const pathToFile = `${parrentFolderPath}/Оборудование`;
          fileName = this.fileUpload(pathToFile, file);
          document.filePath = pathToFile;
          document.fileName = fileName;

          break;
        }
        case "cable-log": {
          document.cableLogId = +parrentId;
          this.createDirectory(`${parrentFolderPath}/Оборудование`);
          const pathToFile = `${parrentFolderPath}/Оборудование/Схемы`;
          this.createDirectory(pathToFile);
          fileName = this.fileUpload(pathToFile, file);
          document.filePath = pathToFile;
          document.fileName = fileName;
          break;
        }
        default:
          break;
      }
    }

    document.fileType = this.getFileType(file);

    const item = await this.designDocumentRepository.create(document);
    const render = await this.findOneDesignDocument(item.id);

    return render;
  };

  deleteDesignDocument = async (id: string): Promise<DesignDocumentEntity> => {
    const item = await this.designDocumentRepository.findOne({ where: { id } });
    if (item) {
      this.removeDirectoryOrFile(`${item.filePath}/${item.fileName}`);
      this.designDocumentRepository.destroy({ where: { id } });
    }

    return item;
  };

  createNormative = async (
    data: NormativeCreateOrUpdateAttrs,
    file: File
  ): Promise<NormativeEntity> => {
    const document: NormativeCreateOrUpdateAttrs = {
      code: data.code,
      title: data.title,
      revision: data.revision,
      description: data.description,
      filePath: "normatives",
      fileName: "",
      fileType: this.getFileType(file),
    };

    this.createDirectory(document.filePath);

    try {
      document.fileName = this.fileUpload(document.filePath, file);
      const item = await this.normativeRepository.create(document);
      return item;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllDesignDocuments = async (
    parrentTarget: string,
    parrentId: string
  ): Promise<DesignDocumentView[]> => {
    let data: DesignDocumentEntity[] = [];
    let items: DesignDocumentView[] = [];

    try {
      switch (parrentTarget) {
        case "project": {
          data = await this.designDocumentRepository.findAll({
            where: { projectId: parrentId },
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
            where: { unitId: parrentId },
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
            where: { subUnitId: parrentId },
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
            where: { supplierId: parrentId },
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
        const item = this.renderDesignDocument(data[i]);
        items.push(item);
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return items;
  };

  findOneDesignDocument = async (
    id: number
  ): Promise<DesignDocumentView | null> => {
    let item: DesignDocumentView | null = null;
    try {
      const data = await this.designDocumentRepository.findOne({
        where: { id },
        include: [
          {
            model: ProjectEntity,
            as: "project",
          },
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

      item = this.renderDesignDocument(data);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return item;
  };

  //   updateDesignDocument = async (
  // id: string,

  //     data: DesignDocumentCreateOrUpdateAttrs,
  //     file?: File,
  //   ): Promise<DesignDocumentEntity> => {
  //     let filePath = "";

  //     const item = await this.designDocumentRepository.findOne({ where: { id } });

  //     const { projectId, unitId, uqstId, subUnitId, suqstId, sloeId, cableLogId, monitoringId, supplierId, stageId, sectionId } = data;

  //     const document: DesignDocumentCreateOrUpdateAttrs = {
  //       projectId: data.projectId,
  //       unitId:data.unitId,
  //       subUnitId: data.subUnitId,
  //       uqstId:  data.uqstId,
  //       suqstId:  data.uqstId,
  //       sloeId:  data.uqstId,
  //       cableLogId: data.cableLogId,
  //       monitoringId: data.monitoringId,
  //       supplierId: data.supplierId,
  //       stageId: data.stageId,
  //       sectionId: data.sectionId,
  //       code: data.code,
  //       title: data.title,
  //       revision:data.revision,
  //       description: data.description,
  //       filePath: item.filePath,
  //       fileName: !file ?  item.fileName : "",
  //       fileType: !file ? item.fileType : this.getFileType(file),
  //     };

  //     if (uqstId) {

  //     }

  //     if (file) {

  //     } else {

  //     }

  //     // let tkpPath = "";
  //     // let filePath = "";
  //     // let fileName = "";

  //     // if (data !== undefined) {
  //     //   const stage = await this.nsiService.findOne(
  //     //     "stage",
  //     //     document.stageId.toString()
  //     //   );
  //     //   const section = await this.nsiService.findOne(
  //     //     "section",
  //     //     document.sectionId.toString()
  //     //   );

  //     //   const stageFolderPath = this.generateFolderName(
  //     //     "stage",
  //     //     +document.stageId,
  //     //     stage.code,
  //     //     null
  //     //   );

  //     //   this.createDirectory(`${parrentFolderPath}/${stageFolderPath}`);

  //     //   if (document.supplierId) {
  //     //     const supplier = await this.nsiService.findOne(
  //     //       "counterparty",
  //     //       document.supplierId.toString()
  //     //     );
  //     //     const supplierFolder = this.generateFolderName(
  //     //       "counterparty",
  //     //       +document.supplierId,
  //     //       supplier.title
  //     //     );
  //     //     tkpPath = `${parrentFolderPath}/${stageFolderPath}/${supplierFolder}`;
  //     //     this.createDirectory(tkpPath);
  //     //   }

  //     //   const sectionFolderPath = this.generateFolderName(
  //     //     "section",
  //     //     +document.sectionId,
  //     //     section.code,
  //     //     null
  //     //   );

  //     //   filePath = `${parrentFolderPath}/${stageFolderPath}/${sectionFolderPath}`;
  //     //   this.createDirectory(filePath);

  //     //   const pathToFile = document.supplierId ? tkpPath : filePath;

  //     //   fileName = this.fileUpload(pathToFile, file);
  //     //   document.filePath = pathToFile;
  //     //   document.fileName = fileName;
  //     // } else {
  //     //   document.title = this.getFileName(file);

  //     //   switch (parrentTarget) {
  //     //     case "unit": {
  //     //       document.uqstId = +parrentId;
  //     //       const pathToFile = `${parrentFolderPath}/ОЛ, ТТ, ТЗ`;
  //     //       this.createDirectory(pathToFile);

  //     //       fileName = this.fileUpload(pathToFile, file);
  //     //       document.filePath = pathToFile;
  //     //       document.fileName = fileName;
  //     //       break;
  //     //     }
  //     //     case "sub-unit": {
  //     //       document.suqstId = +parrentId;
  //     //       const pathToFile = `${parrentFolderPath}/ОЛ, ТТ, ТЗ`;
  //     //       this.createDirectory(pathToFile);

  //     //       fileName = this.fileUpload(pathToFile, file);
  //     //       document.filePath = pathToFile;
  //     //       document.fileName = fileName;
  //     //       break;
  //     //     }
  //     //     case "summary-list-of-equipment": {
  //     //       document.sloeId = +parrentId;
  //     //       this.createDirectory(`${parrentFolderPath}/Оборудование`);
  //     //       const pathToFile = `${parrentFolderPath}/Оборудование/ОЛ, ТТ, ТЗ`;
  //     //       this.createDirectory(pathToFile);

  //     //       fileName = this.fileUpload(pathToFile, file);
  //     //       document.filePath = pathToFile;
  //     //       document.fileName = fileName;
  //     //       break;
  //     //     }
  //     //     case "monitoring": {
  //     //       document.monitoringId = +parrentId;
  //     //       this.createDirectory(`${parrentFolderPath}/Оборудование`);
  //     //       const pathToFile = `${parrentFolderPath}/Оборудование`;
  //     //       fileName = this.fileUpload(pathToFile, file);
  //     //       document.filePath = pathToFile;
  //     //       document.fileName = fileName;

  //     //       break;
  //     //     }
  //     //     case "cable-log": {
  //     //       document.cableLogId = +parrentId;
  //     //       this.createDirectory(`${parrentFolderPath}/Оборудование`);
  //     //       const pathToFile = `${parrentFolderPath}/Оборудование/Схемы`;
  //     //       this.createDirectory(pathToFile);
  //     //       fileName = this.fileUpload(pathToFile, file);
  //     //       document.filePath = pathToFile;
  //     //       document.fileName = fileName;
  //     //       break;
  //     //     }
  //     //     default:
  //     //       break;
  //     //   }
  //     // }

  //     // document.fileType = this.getFileType(file);

  //     await this.designDocumentRepository.update(document, {where: {id}});

  //     return item;
  //   };

  getFilePath = (folder: string): string => {
    try {
      const filePath: string = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "file-storage",
        folder
      );

      return filePath;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //получение пути к директории
  getPath = (arr: string[]): string => {
    try {
      return arr.join("/");
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //получить расширение файла
  getFileType = (file: any): string => {
    try {
      return path.extname(file.originalname);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  generateFileName(file: any): string {
    try {
      return `${uuid.v4()}${this.getFileType(file)}`;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  generateFolderName(
    target: string,
    num: number,
    prefix: string,
    postfix?: string
  ): string {
    try {
      let folderName: string;
      let regex: string = `/[&\/\\#,+()$~%.'":*?<>{}]/g`;
      switch (target) {
        case "subsidiary":
        case "field": {
          if (num < 10) {
            folderName = `00${num}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${num}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${num}. ${prefix.replace(regex, "")}`;
          }
          break;
        }
        case "stage": {
          if (num < 10) {
            folderName = `00${+num + 2}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${+num + 2}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${+num + 2}. ${prefix.replace(regex, "")}`;
          }
          break;
        }

        case "section": {
          if (num < 10) {
            folderName = `00${num}. ${prefix.replace(regex, "")}`;
          } else if (num >= 10 && num < 100) {
            folderName = `0${num}. ${prefix.replace(regex, "")}`;
          } else {
            folderName = `${num}. ${prefix.replace(regex, "")}`;
          }
          break;
        }
        case "project":
        case "unit":
        case "sub-unit": {
          folderName = `${prefix.replace(regex, "")}. ${postfix.replace(
            regex,
            ""
          )}`;
          break;
        }
        default:
          break;
      }
      return folderName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //получить имя файла
  getFileName = (file: any): string => {
    try {
      return path.basename(file.originalname);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //загрузка файла на сервер
  fileUpload = (folder: string, file: any): string => {
    const fileName = this.generateFileName(file);
    try {
      const fileFolder = this.getFilePath(folder);

      const filePath = this.getPath([fileFolder, fileName]);

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.writeFileSync(path.join(filePath), file.buffer);
      } else {
        fs.writeFileSync(path.join(filePath), file.buffer);

        return fileName;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return fileName;
  };

  fileDownload = async (
    data: any,
    folder: string,
    fileName: string,
    fileType: string
  ): Promise<string> => {
    const fileFolder = this.getFilePath(`${folder}/imports`);

    console.log(fileFolder);
    this.createDirectory(`${folder}/imports`);

    // console.log(fileFolder);
    const filePath = this.getPath([
      fileFolder,
      `${fileName}_${setCurrentDate()}.${fileType}`,
    ]);

    fse.writeJson(filePath, data, (err) => {
      if (err) return console.error(err);
    });

    return filePath;
  };

  // создание директории
  createDirectory = (dirName: string): string => {
    try {
      const dir: string = this.getFilePath(dirName);
      fse.ensureDir(dir).then(() => HttpStatus.OK);
      return dir;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //перемещение директории (или файла) со всеми вложениями по новому пути
  moveDirectoryOrFile = (oldPath: string, newPath: string): void => {
    try {
      const from: string = this.getFilePath(oldPath);
      const to: string = this.getFilePath(newPath);
      console.log("Paths: ", newPath === oldPath);
      newPath !== oldPath && fse.copy(from, to).then(() => fse.remove(from));
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //удаление файлов и директорий с вложениями
  removeDirectoryOrFile = (filePath: string): void => {
    try {
      const dir: string = this.getFilePath(filePath);
      if (fs.statSync(dir).isFile()) {
        fs.unlink(dir, (e) => {
          if (e)
            throw new HttpException(
              e.message,
              HttpStatus.INTERNAL_SERVER_ERROR
            );

          return HttpStatus.OK;
        });
      }
      if (fs.statSync(dir).isDirectory()) {
        fs.rm(dir, { recursive: true }, (e) => {
          if (e)
            throw new HttpException(
              e.message,
              HttpStatus.INTERNAL_SERVER_ERROR
            );

          return HttpStatus.OK;
        });
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  writeFile = (path: string, fileName: string, data: any): void => {
    const filePath = `${this.getFilePath(path)}/${fileName}.json`;

    const file = fs.createWriteStream(filePath);
    file.on("error", function (err) {
      /* error handling */
    });
    data.forEach(function (v) {
      file.write(v.join(", ") + "\n");
    });
    file.end();

    // fs.writeFileSync(filePath, data);
  };
}
