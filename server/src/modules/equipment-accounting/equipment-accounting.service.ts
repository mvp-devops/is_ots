import {
  CableLogCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
} from "./../../../common/types/equipment-accounting";
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  CableLogView,

  EquipmentAccountingAssetView,
  ExportEquipmentToAtlas,
  FacilityCreateOrUpdateAttrs,
  FacilityView,
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
  MonitoringView,
  SignalView,
  SummaryListOfEquipmentCreateOrUpdateFiles,

  SummaryListOfEquipmentView,
} from "../../../common/types/equipment-accounting";
import {
  CreateFacilityDto,
  CreateCableLogDto,
  CreateImpulseLineLogDto,
  CreateMetrologyDto,
  CreateMonitoringDto,
  CreateSignalDto,
  UpdateFacilityDto,
  UpdateCableLogDto,
  UpdateImpulseLineLogDto,
  UpdateMetrologyDto,
  UpdateMonitoringDto,
  UpdateSignalDto,
  CreateSummaryListOfEquipmentDto,
} from "./dto";
import {DesignDocumentEntity, FileStorageService, NewFileStorageService} from "../file-storage";
import {
  FieldEntity,
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
  SubsidiaryEntity, PositionTreeService,
} from "../position-tree";
import {
  CounterpartyEntity,
  RegulatoryReferenceInformationService,
} from "../regulatory-reference-information";
import {
  CableLogEntity,
  FacilityEntity,
  ImpulseLineLogEntity,
  MetrologyEntity,
  MonitoringEntity,
  SignalEntity,
  SummaryListOfEquipmentEntity,
} from "./entities";
import { UpdateGeneralInformationDto } from "./dto/update-equipment-accounting.dto";
import {createQuestionnaire as template} from "../../../common/templates/questionnaire/create-questionnaire";
import {ExcelService} from "../file-storage/excel.service";
import {File} from "../../../common/types/file-storage";
import {join} from "path";

const pdf =  require("html-pdf");



type UpdateEquipmentAccountingAssetDto =
  | UpdateGeneralInformationDto
  | UpdateMetrologyDto
  | UpdateSignalDto
  | UpdateCableLogDto
  | UpdateImpulseLineLogDto
  | UpdateMonitoringDto;

@Injectable()
export class EquipmentAccountingService {
  constructor(
    @InjectModel(CableLogEntity)
    private cableLogRepository: typeof CableLogEntity,
    @InjectModel(FacilityEntity)
    private facilityRepository: typeof FacilityEntity,
    @InjectModel(ImpulseLineLogEntity)
    private impulseLineLogRepository: typeof ImpulseLineLogEntity,
    @InjectModel(MetrologyEntity)
    private metrologyRepository: typeof MetrologyEntity,
    @InjectModel(MonitoringEntity)
    private monitoringRepository: typeof MonitoringEntity,
    @InjectModel(SignalEntity)
    private signalRepository: typeof SignalEntity,
    @InjectModel(SummaryListOfEquipmentEntity)
    private summaryListOfEquipmentRepository: typeof SummaryListOfEquipmentEntity,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService,
    @Inject(forwardRef(() => RegulatoryReferenceInformationService))
    private nsiService: RegulatoryReferenceInformationService,
    @Inject(forwardRef(() => NewFileStorageService))
    private newFileService: NewFileStorageService,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService,
    @Inject(forwardRef(() => PositionTreeService))
    private positionTreeService: PositionTreeService,
  ) {}

  /** Печать ОЛ в PDF */

  printQuestionnaire = async (delay: number, template: string, fileName: string, options?: Object, ) => {
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

  createQuestionnaire = async (data: any, target: string) => {
    const {cipher} = data;
    const questionnaireFolder = this.newFileService.getCurrentPath("questionnaire");
    this.newFileService.createDirectory(questionnaireFolder);
    const fileName = `${cipher}.pdf`
    const pathToFile = this.newFileService.getPath([questionnaireFolder, fileName]);
    const file = await this.printQuestionnaire(5000, template(data, target), pathToFile, {format: 'A4', orientation: "portrait"})
    return file
  }

  createNewFacilityAsset = async (
    dto: CreateFacilityDto
  ): Promise<FacilityView> => {
    try {
      const { id } = await this.facilityRepository.create(dto);

      const item = await this.findOneFacilityAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewFacilityAssets = async (
    dto: CreateFacilityDto[]
  ): Promise<FacilityView[]> => {
    const items: FacilityView[] = [];
    for (let i = 0; i < dto.length; i++) {
      const item = await this.facilityRepository.create(dto[i]);
      items.push(item);
    }
    return items;

    // try {
    //   for (let i = 0; i < dto.length; i++) {
    //     await this.facilityRepository.create(dto[i]);
    //   }
    //   const items = await this.findAllFacilityAssets();
    //   return items;
    // } catch (e: any) {
    //   throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  };

  findOneFacilityAsset = async (id: number): Promise<FacilityView> => {
    try {
      let item: FacilityView | null = null;
      const data = await this.facilityRepository.findOne({ where: { id } });

      item = {
        id: data.id,
        equipmentType: data.equipmentType,
        title: `${data.title} (${data.vendor})`,
        country: data.country,
        vendor: data.vendor,
        modifications: data.modifications,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllFacilityAssets = async (): Promise<FacilityView[]> => {
    try {
      let items: FacilityView[] = [];
      const data = await this.facilityRepository.findAll();

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];

        const item = await this.findOneFacilityAsset(id);

        items.push(item);
      }

      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateFacilityAsset = async (
    id: string,
    dto: UpdateFacilityDto
  ): Promise<FacilityView> => {
    try {
      await this.facilityRepository.update(dto, { where: { id } });
      const item = await this.findOneFacilityAsset(+id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteFacilityAsset = async (id: string): Promise<FacilityView> => {
    try {
      const item = await this.findOneFacilityAsset(+id);
      await this.facilityRepository.destroy({ where: { id } });

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewCableLogAsset = async (
    dto: CreateCableLogDto,
    wiringDiagram?: File,
    parrentFolderPath?: string
  ): Promise<CableLogView> => {
    try {
      // const data: CreateCableLogDto = {
      //   sloeId: +(dto.get("sloeId") as string),
      //   numberOfTrace: dto.get("numberOfTrace") as string,
      //   cableMark: dto.get("cableMark") as string,
      //   cableSection: dto.get("cableSection") as string,
      //   fromUnit: dto.get("fromUnit") as string,
      //   fromPlace: dto.get("fromPlace") as string,
      //   toUnit: dto.get("toUnit") as string,
      //   toPlace: dto.get("toPlace") as string,
      //   cableLenght: dto.get("cableLenght") as string,
      //   range: dto.get("range") as string,
      //   description: dto.get("description") as string,

      // }
      const { id } = await this.cableLogRepository.create(dto);
      const item = await this.findOneCableLogAsset(id);

      if (wiringDiagram) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "cable-log",
          parrentFolderPath,
          wiringDiagram
        );
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneCableLogAsset = async (id: number): Promise<CableLogView> => {
    try {
      let item: CableLogView | null = null;
      const data = await this.cableLogRepository.findOne({
        where: { id },
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
          {
            model: DesignDocumentEntity,
            as: "wiringDiagram",
          },
        ],
      });

      item = {
        id: data.id,
        sloeId: data.sloeId,
        unitId: data.sloe.subUnit.unit.id.toString(),
        unit: data.sloe.subUnit.unit.title,
        subUnitId: data.sloe.subUnit.id.toString(),
        subUnit: data.sloe.subUnit.title,
        tag: data.sloe.tag,
        numberOfTrace: data.numberOfTrace,
        cableMark: data.cableMark,
        cableSection: data.cableSection,
        fromUnit: data.fromUnit,
        fromPlace: data.fromPlace,
        toUnit: data.toUnit,
        toPlace: data.toPlace,
        cableLenght: data.cableLenght,
        range: data.range,
        description: data.description,
        wiringDiagram: data.wiringDiagram,
        createdAt: +new Date(data.sloe.createdAt),
        updatedAt: +new Date(data.sloe.updatedAt),
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllCableLogAssets = async (
    sloeId: number,
    cableMark?: string,
    cableSection?: string,
    unitId?: string,
    subUnitId?: string
  ): Promise<CableLogView[]> => {
    try {
      let items: CableLogView[] = [];
      let data: CableLogEntity[] = [];
      if (cableMark && cableSection) {
        data = await this.cableLogRepository.findAll({
          where: { sloeId, cableMark, cableSection },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "wiringDiagram",
            },
          ],
        });
      } else if (!cableMark && cableSection) {
        data = await this.cableLogRepository.findAll({
          where: { sloeId, cableSection },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "wiringDiagram",
            },
          ],
        });
      } else if (cableMark && !cableSection) {
        data = await this.cableLogRepository.findAll({
          where: { sloeId, cableMark },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "wiringDiagram",
            },
          ],
        });
      } else if (!cableMark && !cableSection) {
        data = await this.cableLogRepository.findAll({
          where: { sloeId },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "wiringDiagram",
            },
          ],
        });
      }

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        const item = await this.findOneCableLogAsset(id);
        items.push(item);
      }

      const render = unitId
        ? items.filter((item) => item.unitId === unitId)
        : subUnitId
        ? items.filter((item) => item.subUnitId === subUnitId)
        : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateCableLogAsset = async (
    id: string,
    dto: UpdateCableLogDto,
    wiringDiagram?: File,
    parrentFolderPath?: string
  ): Promise<CableLogView> => {
    try {
      let item = await this.findOneCableLogAsset(+id);

      if (wiringDiagram) {
        if (!item.wiringDiagram) {
          await this.fileService.createDesignDocument(
            id.toString(),
            "cable-log",
            parrentFolderPath,
            wiringDiagram
          );
        } else {
          await this.fileService.deleteDesignDocument(
            item.wiringDiagram.id.toString()
          );
          await this.fileService.createDesignDocument(
            id.toString(),
            "cable-log",
            parrentFolderPath,
            wiringDiagram
          );
        }
      }
      await this.cableLogRepository.update(dto, { where: { id } });
      item = await this.findOneCableLogAsset(+id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteCableLogAsset = async (id: number): Promise<CableLogView> => {
    try {
      const item = await this.findOneCableLogAsset(id);
      await this.cableLogRepository.destroy({ where: { id } });

      if (item.wiringDiagram) {
        await this.fileService.deleteDesignDocument(
          item.wiringDiagram.id.toString()
        );
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewImpulseLineLogAsset = async (
    dto: CreateImpulseLineLogDto
  ): Promise<ImpulseLineLogView> => {
    try {
      const { id } = await this.impulseLineLogRepository.create(dto);
      const item = await this.findOneImpulseLineLogAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneImpulseLineLogAsset = async (
    id?: number
  ): Promise<ImpulseLineLogView> => {
    try {
      let item: ImpulseLineLogView | null = null;
      const data = await this.impulseLineLogRepository.findOne({
        where: { id },
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
        ],
      });

      item = {
        id: data.id,
        sloeId: data.sloeId,
        unitId: data.sloe.subUnit.unit.id.toString(),
        unit: data.sloe.subUnit.unit.title,
        subUnitId: data.sloe.subUnit.id.toString(),
        subUnit: data.sloe.subUnit.title,
        tag: data.sloe.tag,
        numberOfTrace: data.numberOfTrace,
        impulseLineType: data.impulseLineType,
        fromPlace: data.fromPlace,
        toPlace: data.toPlace,
        impulseLineLenght: data.impulseLineLenght,
        range: data.range,
        description: data.description,
        createdAt: +new Date(data.sloe.createdAt),
        updatedAt: +new Date(data.sloe.updatedAt),
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllImpulseLineLogAssets = async (
    sloeId: number,
    impulseLineType?: string,
    unitId?: string,
    subUnitId?: string
  ): Promise<ImpulseLineLogView[]> => {
    try {
      let items: ImpulseLineLogView[] = [];
      let data: ImpulseLineLogEntity[] = [];

      if (impulseLineType) {
        data = await this.impulseLineLogRepository.findAll({
          where: { sloeId, impulseLineType },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
          ],
        });
      } else {
        data = await this.impulseLineLogRepository.findAll({
          where: { sloeId },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: UnitEntity,
                },
                {
                  model: SubUnitEntity,
                },
              ],
            },
          ],
        });
      }

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        const item = await this.findOneImpulseLineLogAsset(id);
        items.push(item);
      }

      const render = unitId
        ? items.filter((item) => item.unitId === unitId)
        : subUnitId
        ? items.filter((item) => item.subUnitId === subUnitId)
        : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateImpulseLineLogAsset = async (
    id: string,
    dto: UpdateImpulseLineLogDto
  ): Promise<ImpulseLineLogView> => {
    try {
      await this.impulseLineLogRepository.update(dto, { where: { id } });
      const item = await this.findOneImpulseLineLogAsset(+id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteImpulseLineLogAsset = async (
    id: number
  ): Promise<ImpulseLineLogView> => {
    try {
      const item = await this.findOneImpulseLineLogAsset(id);
      await this.impulseLineLogRepository.destroy({ where: { id } });
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewMetrologyAsset = async (
    dto: CreateMetrologyDto,
    document?: File,
    verificationProcedure?: File,
    typeApprovalCertificate?: File,
    parrentFolderPath?: string
  ): Promise<MetrologyView> => {
    try {
      let documentPath = "",
        verificationProcedurePath = "",
        typeApprovalCertificatePath = "";

      const docPath = `${parrentFolderPath}\\Оборудование\\Метрология`;

      if (document) {
        const documentName = this.fileService.fileUpload(
          docPath,
          document,
          true
        );
        documentPath = `${docPath}\\${documentName}`;
      }

      if (verificationProcedure) {
        const documentName = this.fileService.fileUpload(
          docPath,
          verificationProcedure,
          true
        );

        verificationProcedurePath = `${docPath}/${documentName}`;
      }

      if (typeApprovalCertificate) {
        const documentName = this.fileService.fileUpload(
          docPath,
          typeApprovalCertificate,
          true
        );
        typeApprovalCertificatePath = `${docPath}/${documentName}`;
      }

      const { newCounterParty } = dto;

      const counterpartyId = newCounterParty
        ? (await this.nsiService.createOne("counterparty", newCounterParty)).id
        : dto.counterpartyId;

      const { id } = await this.metrologyRepository.create({
        ...dto,
        counterpartyId,
        document: documentPath,
        verificationProcedure: verificationProcedurePath,
        typeApprovalCertificate: typeApprovalCertificatePath,
      });

      const item = await this.findOneMetrologyAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneMetrologyAsset = async (
    id?: number,
    sloeId?: number
  ): Promise<MetrologyView | null> => {
    try {
      let item: MetrologyView | null = null;
      let data: MetrologyEntity | null = null;

      if (id) {
        data = await this.metrologyRepository.findOne({
          where: { id },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: CounterpartyEntity,
            },
          ],
        });
      }
      if (sloeId) {
        data = await this.metrologyRepository.findOne({
          where: { sloeId },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: CounterpartyEntity,
            },
          ],
        });
      }

      if (data) {
        item = {
          id: data?.id,
          sloeId: data?.sloeId,
          unitId: data?.sloe.subUnit.unit.id.toString(),
          unit: data?.sloe.subUnit.unit.title,
          subUnitId: data?.sloe.subUnit.id.toString(),
          subUnit: data?.sloe.subUnit.title,
          counterpartyId: data?.counterpartyId,
          tag: data?.sloe.tag,
          sgroei: data?.sgroei,
          measurementArea: data?.sloe.facility.measurementArea,
          meansurementType: data?.sloe.facility.meansurementType,
          meansureGroup: data?.sloe.facility.meansureGroup,
          grsi: data?.grsi,
          min: data?.min,
          max: data?.max,
          range: data?.range,
          accuracy: data?.accuracy,
          mpi: data?.mpi,
          metrologyType: data?.metrologyType,
          documentType: data?.documentType,
          documentNumber: data?.documentNumber,
          document: data?.document,
          verificationProcedure: data?.verificationProcedure,
          typeApprovalCertificate: data?.typeApprovalCertificate,
          counterparty: data.counterpartyId ? data?.counterparty?.title : "н/д",
          fromDate: data.fromDate,
          toDate: data.toDate,
          status: data.status,
          arshin: data.arshin,
          createdAt: +new Date(data.sloe.createdAt),
          updatedAt: +new Date(data.sloe.updatedAt),
        };
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllMetrologyAssets = async (
    grsi?: string,
    toDate?: string,
    status?: string,
    unitId?: string,
    subUnitId?: string
  ): Promise<MetrologyView[]> => {
    try {
      let items: MetrologyView[] = [];
      const data = await this.metrologyRepository.findAll({
        where: { grsi, toDate, status },
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
          {
            model: CounterpartyEntity,
          },
        ],
      });

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        const item = await this.findOneMetrologyAsset(id);
        items.push(item);
      }

      const render = unitId
        ? items.filter((item) => item.unitId === unitId)
        : subUnitId
        ? items.filter((item) => item.subUnitId === subUnitId)
        : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateMetrologyAsset = async (
    id: string,
    dto: UpdateMetrologyDto,
    document?: File,
    verificationProcedure?: File,
    typeApprovalCertificate?: File,
    parrentFolderPath?: string
  ): Promise<MetrologyView> => {
    try {
      let item = await this.findOneMetrologyAsset(+id);

      let documentPath = item.document,
        verificationProcedurePath = item.verificationProcedure,
        typeApprovalCertificatePath = item.typeApprovalCertificate;

      const docPath = `${parrentFolderPath}\\Оборудование\\Метрология`;

      if (document) {
        if (!item.document) {
          const documentName = this.fileService.fileUpload(
            docPath,
            document,
            true
          );
          documentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.document);
          const documentName = this.fileService.fileUpload(
            docPath,
            document,
            true
          );
          documentPath = `${docPath}/${documentName}`;
        }
      }

      if (verificationProcedure) {
        if (!item.verificationProcedure) {
          const documentName = this.fileService.fileUpload(
            docPath,
            verificationProcedure,
            true
          );
          verificationProcedurePath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.verificationProcedure);
          const documentName = this.fileService.fileUpload(
            docPath,
            verificationProcedure,
            true
          );
          verificationProcedurePath = `${docPath}/${documentName}`;
        }
      }

      if (typeApprovalCertificate) {
        if (!item.typeApprovalCertificate) {
          const documentName = this.fileService.fileUpload(
            docPath,
            typeApprovalCertificate,
            true
          );
          typeApprovalCertificatePath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.typeApprovalCertificate);
          const documentName = this.fileService.fileUpload(
            docPath,
            typeApprovalCertificate,
            true
          );
          typeApprovalCertificatePath = `${docPath}/${documentName}`;
        }
      }

      await this.metrologyRepository.update(
        {
          ...dto,
          document: documentPath,
          verificationProcedure: verificationProcedurePath,
          typeApprovalCertificate: typeApprovalCertificatePath,
        },
        { where: { id } }
      );
      item = await this.findOneMetrologyAsset(+id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteMetrologyAsset = async (id: number): Promise<MetrologyView> => {
    try {
      const item = await this.findOneMetrologyAsset(id);
      await this.metrologyRepository.destroy({ where: { id } });
      if (item.document) {
        this.fileService.removeDirectoryOrFile(item.document);
      }

      if (item.verificationProcedure) {
        this.fileService.removeDirectoryOrFile(item.verificationProcedure);
      }

      if (item.typeApprovalCertificate) {
        this.fileService.removeDirectoryOrFile(item.typeApprovalCertificate);
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewSignalAsset = async (dto: CreateSignalDto): Promise<SignalView> => {
    try {
      const { id } = await this.signalRepository.create(dto);
      const item = await this.findOneSignalAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewSignalAssets = async (
    dto: CreateSignalDto[]
  ): Promise<SignalView[]> => {
    try {
      const signals: SignalView[] = [];
      for (let i = 0; i < dto.length; i++) {
        const { id } = await this.signalRepository.create(dto[i]);
        const item = await this.findOneSignalAsset(id);
        signals.push(item);
      }

      return signals;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneSignalAsset = async (id: number): Promise<SignalView> => {
    try {
      let item: SignalView | null = null;
      const data = await this.signalRepository.findOne({
        where: { id },
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
        ],
      });

      item = {
        id: data.id,
        sloeId: data.sloeId,
        unitId: data.sloe.subUnit.unit.id.toString(),
        unit: data.sloe.subUnit.unit.title,
        subUnitId: data.sloe.subUnit.id.toString(),
        subUnit: data.sloe.subUnit.title,
        tag: data.sloe.tag,
        signalTag: data.signalTag,
        signalType: data.signalType,
        signalProtocol: data.signalProtocol,
        signalParameter: data.signalParameter,
        h: data.h,
        l: data.l,
        ll: data.ll,
        hh: data.hh,
        emergencyProtocol: data.emergencyProtocol,
        createdAt: +new Date(data.sloe.createdAt),
        updatedAt: +new Date(data.sloe.updatedAt),
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllSignalAssets = async (
    sloeId?: number,
    signalType?: string,
    signalProtocol?: string,
    unitId?: string,
    subUnitId?: string
  ): Promise<SignalView[]> => {
    try {
      let items: SignalView[] = [];
      const data = await this.signalRepository.findAll({
        where: { sloeId },
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
        ],
      });

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        const item = await this.findOneSignalAsset(id);
        items.push(item);
      }

      const render = unitId
        ? items.filter((item) => item.unitId === unitId)
        : subUnitId
        ? items.filter((item) => item.subUnitId === subUnitId)
        : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateSignalAsset = async (
    id: string,
    dto: UpdateSignalDto
  ): Promise<SignalView> => {
    try {
      await this.signalRepository.update(dto, { where: { id } });
      const item = await this.findOneSignalAsset(+id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteSignalAsset = async (id: number): Promise<SignalView> => {
    try {
      const item = await this.findOneSignalAsset(id);
      await this.signalRepository.destroy({ where: { id } });

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewMonitoringAsset = async (
    dto: CreateMonitoringDto,
    functionalDiagram?: File,
    mountDocument?: File,
    connectDocument?: File,
    testDocument?: File,
    awpDocument?: File,
    commisionDocument?: File,
    parrentFolderPath?: string
  ): Promise<MonitoringView> => {
    try {
      let mountDocumentPath = "",
        connectDocumentPath = "",
        testDocumentPath = "",
        awpDocumentPath = "",
        commisionDocumentPath = "";

      const docPath = `${parrentFolderPath}/Оборудование/Мониторинг СМР`;

      if (mountDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          mountDocument,
          true
        );
        mountDocumentPath = `${docPath}/${documentName}`;
      }

      if (connectDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          connectDocument,
          true
        );

        connectDocumentPath = `${docPath}/${documentName}`;
      }

      if (testDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          testDocument,
          true
        );
        testDocumentPath = `${docPath}/${documentName}`;
      }

      if (awpDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          awpDocument,
          true
        );
        awpDocumentPath = `${docPath}/${documentName}`;
      }

      if (commisionDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          commisionDocument,
          true
        );

        commisionDocumentPath = `${docPath}/${documentName}`;
      }

      const { id } = await this.monitoringRepository.create({
        ...dto,
        mountDocument: mountDocumentPath,
        connectDocument: connectDocumentPath,
        testDocument: testDocumentPath,
        awpDocument: awpDocumentPath,
        commisionDocument: commisionDocumentPath,
      });

      if (functionalDiagram) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "monitoring",
          parrentFolderPath,
          functionalDiagram
        );
      }

      const item = await this.findOneMonitoringAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneMonitoringAsset = async (
    id?: number,
    sloeId?: number
  ): Promise<MonitoringView | null> => {
    try {
      let item: MonitoringView | null = null;
      let data: MonitoringEntity | null = null;

      if (id) {
        data = await this.monitoringRepository.findOne({
          where: { id },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "functionalDiagram",
            },
          ],
        });
      }

      if (sloeId) {
        data = await this.monitoringRepository.findOne({
          where: { sloeId },
          include: [
            {
              model: SummaryListOfEquipmentEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: UnitEntity,
                      include: [
                        {
                          model: ProjectEntity,
                        },
                      ],
                    },
                  ],
                },
                {
                  model: FacilityEntity,
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "functionalDiagram",
            },
          ],
        });
      }
      if (data) {
        item = {
          id: data.id,
          sloeId: data.sloeId,
          unitId: data.sloe.subUnit.unit.id.toString(),
          unit: data.sloe.subUnit.unit.title,
          subUnitId: data.sloe.subUnit.id.toString(),
          subUnit: data.sloe.subUnit.title,
          tag: data.sloe.tag,

          functionalDiagram: data.functionalDiagram,
          mountDate: data.mountDate,
          mountDocument: data.mountDocument,
          connectDate: data.connectDate,
          connectDocument: data.connectDocument,
          testDate: data.testDate,
          testDocument: data.testDocument,
          awpDate: data.awpDate,
          awpDocument: data.awpDocument,
          commisionDate: data.commisionDate,
          commisionDocument: data.commisionDocument,
          createdAt: +new Date(data.sloe.createdAt),
          updatedAt: +new Date(data.sloe.updatedAt),
        };
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllMonitoringAssets = async (
    unitId?: string,
    subUnitId?: string
  ): Promise<MonitoringView[]> => {
    try {
      let items: MonitoringView[] = [];
      const data = await this.monitoringRepository.findAll({
        include: [
          {
            model: SummaryListOfEquipmentEntity,
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
            ],
          },
          {
            model: DesignDocumentEntity,
            as: "functionalDiagram",
          },
        ],
      });

      for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        const item = await this.findOneMonitoringAsset(id);
        items.push(item);
      }

      const render = unitId
        ? items.filter((item) => item.unitId === unitId)
        : subUnitId
        ? items.filter((item) => item.subUnitId === subUnitId)
        : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateMonitoringAsset = async (
    id: string,
    dto: UpdateMonitoringDto,
    functionalDiagram?: File,
    mountDocument?: File,
    connectDocument?: File,
    testDocument?: File,
    awpDocument?: File,
    commisionDocument?: File,
    parrentFolderPath?: string
  ): Promise<MonitoringView> => {
    try {
      let item = await this.findOneMonitoringAsset(+id);

      let mountDocumentPath = item.mountDocument,
        connectDocumentPath = item.connectDocument,
        testDocumentPath = item.testDocument,
        awpDocumentPath = item.awpDocument,
        commisionDocumentPath = item.commisionDocument;

      const docPath = `${parrentFolderPath}\\Оборудование\\Мониторинг СМР`;

      if (functionalDiagram) {
        if (!item.functionalDiagram) {
          await this.fileService.createDesignDocument(
            id.toString(),
            "monitoring",
            parrentFolderPath,
            functionalDiagram
          );
        } else {
          await this.fileService.deleteDesignDocument(
            item.functionalDiagram.id.toString()
          );

          await this.fileService.createDesignDocument(
            id.toString(),
            "monitoring",
            parrentFolderPath,
            functionalDiagram
          );
        }
      }

      if (mountDocument) {
        if (!item.mountDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            mountDocument,
            true
          );
          mountDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.mountDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            mountDocument,
            true
          );
          mountDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (connectDocument) {
        if (!item.connectDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            connectDocument,
            true
          );
          connectDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.connectDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            connectDocument,
            true
          );
          connectDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (testDocument) {
        if (!item.testDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            testDocument,
            true
          );
          testDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.testDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            testDocument,
            true
          );
          testDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (awpDocument) {
        if (!item.awpDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            awpDocument,
            true
          );
          awpDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.awpDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            awpDocument,
            true
          );
          awpDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (commisionDocument) {
        if (!item.commisionDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            commisionDocument,
            true
          );
          commisionDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.commisionDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            commisionDocument,
            true
          );
          commisionDocumentPath = `${docPath}/${documentName}`;
        }
      }
      await this.monitoringRepository.update(
        {
          ...dto,
          mountDocument: mountDocumentPath,
          connectDocument: connectDocumentPath,
          testDocument: testDocumentPath,
          awpDocument: awpDocumentPath,
          commisionDocument: commisionDocumentPath,
        },
        { where: { id } }
      );
      item = await this.findOneMonitoringAsset(+id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteMonitoringAsset = async (id: number): Promise<MonitoringView> => {
    try {
      const item = await this.findOneMonitoringAsset(id);
      await this.monitoringRepository.destroy({ where: { id } });
      if (item.mountDocument) {
        this.fileService.removeDirectoryOrFile(item.mountDocument);
      }

      if (item.connectDocument) {
        this.fileService.removeDirectoryOrFile(item.connectDocument);
      }

      if (item.testDocument) {
        this.fileService.removeDirectoryOrFile(item.testDocument);
      }

      if (item.awpDocument) {
        this.fileService.removeDirectoryOrFile(item.awpDocument);
      }

      if (item.commisionDocument) {
        this.fileService.removeDirectoryOrFile(item.commisionDocument);
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  setFormData = (
    data: GeneralInformationCreateOrUpdateAttrs &
      FacilityCreateOrUpdateAttrs &
      MetrologyCreateOrUpdateAttrs &
      SignalCreateOrUpdateAttrs &
      CableLogCreateOrUpdateAttrs &
      ImpulseLineLogCreateOrUpdateAttrs &
      MonitoringCreateOrUpdateAttrs,
    files?: SummaryListOfEquipmentCreateOrUpdateFiles
  ): FormData => {
    const formData = new FormData();
    const facilityFormData = new FormData();
    const generalInformationFormData = new FormData();
    const metrologyFormData = new FormData();

    const {
      projectId,
      unitId,
      subUnitId,
      facilityId,
      technacalCardId,
      installationLocation,
      systemType,
      tag,
      controlledParameter,
      country,
      vendor,
      equipmentType,
      meansurementArea,
      metrologyType,
      meansureGroup,
      title,
      facilityModification,
      factoryNumber,
      year,
      month,
      period,
      specification,
      description,
      modifications,
    } = data;
    projectId &&
      generalInformationFormData.append("projectId", projectId.toString());
    unitId && generalInformationFormData.append("unitId", unitId.toString());
    subUnitId &&
      generalInformationFormData.append("subUnitId", subUnitId.toString());
    facilityId &&
      generalInformationFormData.append("facilityId", facilityId.toString());
    technacalCardId &&
      generalInformationFormData.append(
        "technacalCardId",
        technacalCardId.toString()
      );
    installationLocation &&
      generalInformationFormData.append(
        "installationLocation",
        installationLocation
      );
    if (files.questionare) {
      generalInformationFormData.append(
        "questionare",
        files.questionare[0] as any
      );
    }

    if (systemType) {
      const arr = systemType;
      for (var i = 0; i < arr.length; i++) {
        generalInformationFormData.append("systemType[]", arr[i]);
      }
    }

    country && facilityFormData.append("country", country);
    vendor && facilityFormData.append("vendor", vendor);
    equipmentType && facilityFormData.append("equipmentType", equipmentType);
    title && facilityFormData.append("title", title);
    meansurementArea &&
      facilityFormData.append("meansurementArea", meansurementArea);
    metrologyType && facilityFormData.append("metrologyType", metrologyType);
    meansureGroup && facilityFormData.append("meansureGroup", meansureGroup);

    if (modifications) {
      const arr = modifications;
      for (var i = 0; i < arr.length; i++) {
        generalInformationFormData.append("modifications[]", arr[i]);
      }
    }

    tag && generalInformationFormData.append("tag", tag);
    controlledParameter &&
      generalInformationFormData.append(
        "controlledParameter",
        controlledParameter
      );
    facilityModification &&
      generalInformationFormData.append(
        "facilityModification",
        facilityModification
      );
    factoryNumber &&
      generalInformationFormData.append("factoryNumber", factoryNumber);
    year && generalInformationFormData.append("year", year);
    month && generalInformationFormData.append("month", month);
    period && generalInformationFormData.append("period", period);
    specification &&
      generalInformationFormData.append("specification", specification);
    description &&
      generalInformationFormData.append("description", description);

    formData.append(
      "generalInformation",
      JSON.stringify(generalInformationFormData)
    );

    if (files.document) {
      metrologyFormData.append("document", files.document[0] as any);
    }
    if (files.verificationProcedure) {
      metrologyFormData.append(
        "verificationProcedure",
        files.verificationProcedure[0] as any
      );
    }
    if (files.typeApprovalCertificate) {
      metrologyFormData.append(
        "typeApprovalCertificate",
        files.typeApprovalCertificate[0] as any
      );
    }

    return formData;
  };

  getFormData = (formData: FormData): CreateSummaryListOfEquipmentDto => {
    let data: CreateSummaryListOfEquipmentDto | null = null;

    const systemType: string[] = [];
    const modifications: string[] = [];

    formData.forEach((value, key) => {
      if (key === "systemType[]") {
        systemType.push(value as string);
      }
    });
    formData.forEach((value, key) => {
      if (key === "modifications[]") {
        modifications.push(value as string);
      }
    });

    const generalInformationData: GeneralInformationCreateOrUpdateAttrs = {
      projectId: formData.get("projectId") as string,
      unitId: formData.get("unitId") as string,
      subUnitId: formData.get("subUnitId") as string,
      facilityId: formData.get("facilityId") as string,
      technacalCardId: formData.get("technacalCardId") as string,
      installationLocation: formData.get("installationLocation") as string,
      tag: formData.get("tag") as string,
      controlledParameter: formData.get("controlledParameter") as string,
      systemType,
      facility: {
        country: formData.get("country") as string,
        vendor: formData.get("vendor") as string,
        equipmentType: formData.get("equipmentType") as string,
        title: formData.get("title") as string,
        meansurementArea: formData.get("meansurementArea") as string,
        meansurementType: formData.get("meansurementType") as string,
        meansureGroup: formData.get("meansureGroup") as string,
        modifications,
      },
      facilityModification: formData.get("facilityModification") as string,
      factoryNumber: formData.get("factoryNumber") as string,
      year: formData.get("year") as string,
      month: formData.get("month") as string,
      period: formData.get("period") as string,
      specification: formData.get("specification") as string,
      description: formData.get("description") as string,
    };

    data.generalInformation = generalInformationData;

    return data;
  };

  createNewSummaryListOfEquipmentAsset = async (
    dto: CreateSummaryListOfEquipmentDto,
    files?: SummaryListOfEquipmentCreateOrUpdateFiles,
    parrentFolderPath?: string
  ): Promise<SummaryListOfEquipmentView> => {
    try {
      let facility: FacilityView | null = null;
      const {
        generalInformation,
        metrology,
        monitoring,
        cableLog,
        impulseLineLog,
        signals,
      } = dto;

      const generalInformationData: GeneralInformationCreateOrUpdateAttrs =
        typeof generalInformation === "string"
          ? JSON.parse(generalInformation)
          : generalInformation;

      //
      const metrologyData: MetrologyCreateOrUpdateAttrs =
        typeof metrology === "string" ? JSON.parse(metrology) : metrology;

      const signalsData: SignalCreateOrUpdateAttrs[] =
        typeof signals === "string" ? JSON.parse(signals) : signals;
      const cableLogData: CableLogCreateOrUpdateAttrs[] =
        typeof cableLog === "string" ? JSON.parse(cableLog) : cableLog;
      const impulseLineLogData: ImpulseLineLogCreateOrUpdateAttrs[] =
        typeof impulseLineLog === "string"
          ? JSON.parse(impulseLineLog)
          : impulseLineLog;
      const monitoringData: MonitoringCreateOrUpdateAttrs =
        typeof monitoring === "string" ? JSON.parse(monitoring) : monitoring;

      if (
        generalInformationData &&
        generalInformationData.facility &&
        !generalInformationData.facilityId
      ) {
        facility = await this.createNewFacilityAsset(
          generalInformationData.facility
        );
        generalInformationData.facilityId = facility.id;
      }

      const { id } = await this.summaryListOfEquipmentRepository.create(
        generalInformationData
      );

      if (files?.questionare) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "summary-list-of-equipment",
          parrentFolderPath,
          files.questionare
        );
      }

      if (metrologyData?.min) {
        await this.createNewMetrologyAsset(
          { ...metrologyData, sloeId: id },
          files?.document ? files?.document[0] : undefined,
          files?.verificationProcedure
            ? files?.verificationProcedure[0]
            : undefined,
          files?.typeApprovalCertificate
            ? files?.typeApprovalCertificate[0]
            : undefined,
          parrentFolderPath
        );
      }

      if (signalsData && signalsData.length > 0) {
        for (let i = 0; i < signalsData.length; i++) {
          const elem = signalsData[i];
          const item: SignalCreateOrUpdateAttrs =
            typeof elem === "string" ? JSON.parse(elem) : elem;
          item.id = null;
          await this.createNewSignalAsset({ ...item, sloeId: id });
        }
      }

      if (cableLogData && cableLogData.length > 0) {
        for (let i = 0; i < cableLogData.length; i++) {
          const elem = cableLogData[i];
          const item: CableLogCreateOrUpdateAttrs =
            typeof elem === "string" ? JSON.parse(elem) : elem;
          item.id = null;
          await this.createNewCableLogAsset(
            { ...item, sloeId: id },
            files?.wiringDiagram ? files?.wiringDiagram[i] : undefined,
            parrentFolderPath
          );
        }
      }

      if (impulseLineLogData && impulseLineLogData.length > 0) {
        for (let i = 0; i < impulseLineLogData.length; i++) {
          const elem = impulseLineLogData[i];
          const item: ImpulseLineLogCreateOrUpdateAttrs =
            typeof elem === "string" ? JSON.parse(elem) : elem;
          item.id = null;
          await this.createNewImpulseLineLogAsset({ ...item, sloeId: id });
        }
      }

      if (monitoringData?.mountDate) {
        await this.createNewMonitoringAsset(
          { ...monitoringData, sloeId: id },
          files?.functionalDiagram ? files?.functionalDiagram : undefined,
          files?.mountDocument ? files.mountDocument[0] : undefined,
          files?.connectDocument ? files.connectDocument[0] : undefined,
          files?.testDocument ? files.testDocument[0] : undefined,
          files?.awpDocument ? files.awpDocument[0] : undefined,
          files?.commisionDocument ? files.commisionDocument[0] : undefined,
          parrentFolderPath
        );
      }

      const item = await this.findOneSummaryListOfEquipmentAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewSummaryListOfEquipmentAssets = async (
    dto: CreateSummaryListOfEquipmentDto[], parrentFolderPath?: string
  ): Promise<SummaryListOfEquipmentView[]> => {
    try {
      let items: SummaryListOfEquipmentView[] = [];
      for (let i = 0; i < dto.length; i++) {
        const item = await this.createNewSummaryListOfEquipmentAsset(dto[i], {}, parrentFolderPath);
        items.push(item);
      }
      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneSummaryListOfEquipmentAsset = async (
    id: number
  ): Promise<SummaryListOfEquipmentView> => {
    try {
      const {
        facilityId,
        subUnitId,
        subUnit,
        tag,
        installationLocation,
        facilityModification,
        equipmentQuestionare,
        systemType,
        controlledParameter,
        factoryNumber,
        year,
        month,
        period,
        specification,
        description,
        createdAt,
        updatedAt,
        metrology,
      } = await this.summaryListOfEquipmentRepository.findOne({
        where: { id },
        include: [
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
                        model: FieldEntity,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            model: DesignDocumentEntity,
            as: "equipmentQuestionare",
          },
          {
            model: FacilityEntity,
          },
          {
            model: MetrologyEntity,
          },
          {
            model: CableLogEntity,
          },
          {
            model: ImpulseLineLogEntity,
          },
          {
            model: SignalEntity,
          },
          {
            model: MonitoringEntity,
          },
        ],
      });

      const item = {
        projectId: subUnit.unit.projectId.toString(),
        project: subUnit.unit.project.title,
        unitId: subUnit.unitId.toString(),
        unit: subUnit.unit.title,
        subUnitId: subUnitId.toString(),
        subUnit: subUnit.title,
        id: id.toString(),
        facilityId: facilityId,
        tag: tag,
        installationLocation: installationLocation,
        facilityModification: facilityModification,
        questionare: equipmentQuestionare,
        systemType: systemType,
        controlledParameter: controlledParameter,
        factoryNumber: factoryNumber,
        year: year,
        month: month,
        period: period,
        specification: specification,
        description: description,
        facility: await this.findOneFacilityAsset(facilityId),
        metrology: await this.findOneMetrologyAsset(undefined, id),
        signals: await this.findAllSignalAssets(id),

        cableLog: await this.findAllCableLogAssets(id),
        impulseLineLog: await this.findAllImpulseLineLogAssets(id),
        monitoring: await this.findOneMonitoringAsset(undefined, id),
        createdAt: +new Date(createdAt),
        updatedAt: +new Date(updatedAt),
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllSummaryListOfEquipmentAssets = async (
    parrentTarget: string,
    parrentId: string
  ): Promise<SummaryListOfEquipmentView[]> => {
    try {
      let items: SummaryListOfEquipmentView[] = [];
      let data: SummaryListOfEquipmentEntity[] = [];

      switch (parrentTarget) {
        case "project": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { projectId: parrentId },
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: DesignDocumentEntity,
                as: "equipmentQuestionare",
              },
            ],
          });

          break;
        }

        case "unit": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { unitId: parrentId },
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: DesignDocumentEntity,
                as: "equipmentQuestionare",
              },
            ],
          });

          break;
        }

        case "sub-unit": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { subUnitId: parrentId },
            include: [
              {
                model: SubUnitEntity,
                include: [
                  {
                    model: UnitEntity,
                    include: [
                      {
                        model: ProjectEntity,
                      },
                    ],
                  },
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: DesignDocumentEntity,
                as: "equipmentQuestionare",
              },
            ],
          });
          break;
        }

        default:
          break;
      }

      for (let i = 0; i < data.length; i++) {
        const {
          id,
          facilityId,
          subUnitId,
          subUnit,
          tag,
          installationLocation,
          facilityModification,
          equipmentQuestionare,
          systemType,
          controlledParameter,
          factoryNumber,
          year,
          month,
          period,
          specification,
          description,
          createdAt,
          updatedAt,
        } = data[i];

        const item = {
          projectId: subUnit.unit.projectId.toString(),
          project: subUnit.unit.project.title,
          unitId: subUnit.unitId.toString(),
          unit: subUnit.unit.title,
          subUnitId: subUnitId.toString(),
          subUnit: subUnit.title,
          id: id.toString(),
          facilityId,
          tag,
          installationLocation,
          facilityModification,
          questionare: equipmentQuestionare,
          systemType,
          controlledParameter,
          factoryNumber,
          year,
          month,
          period,
          specification,
          description,
          facility: await this.findOneFacilityAsset(facilityId),
          signals: await this.findAllSignalAssets(id),
          metrology: await this.findOneMetrologyAsset(undefined, id),
          cableLog: await this.findAllCableLogAssets(id),
          impulseLineLog: await this.findAllImpulseLineLogAssets(id),
          monitoring: await this.findOneMonitoringAsset(undefined, id),
          createdAt: +new Date(createdAt),
          updatedAt: +new Date(updatedAt),
        };

        items.push(item);
      }
      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneGeneralInformationAsset = async (
    id: string
  ): Promise<GeneralInformationView> => {
    try {
      const {
        facilityId,
        subUnitId,
        subUnit,
        tag,
        installationLocation,
        facilityModification,
        equipmentQuestionare,
        systemType,
        controlledParameter,
        factoryNumber,
        year,
        month,
        period,
        specification,
        description,
        createdAt,
        updatedAt,
      } = await this.summaryListOfEquipmentRepository.findOne({
        where: { id },
        include: [
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
                        model: FieldEntity,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            model: DesignDocumentEntity,
            as: "equipmentQuestionare",
          },
          {
            model: FacilityEntity,
          },
        ],
      });

      const item: GeneralInformationView = {
        id: id.toString(),
        sloeId: id.toString(),
        projectId: subUnit.unit.projectId.toString(),
        project: subUnit.unit.project.title,
        unitId: subUnit.unitId.toString(),
        unit: subUnit.unit.title,
        subUnitId: subUnitId.toString(),
        subUnit: subUnit.title,

        facilityId: facilityId,
        tag: tag,
        installationLocation: installationLocation,
        facilityModification: facilityModification,
        questionare: equipmentQuestionare,
        systemType: systemType,
        controlledParameter: controlledParameter,
        factoryNumber: factoryNumber,
        year: year,
        month: month,
        period: period,
        specification: specification,
        description: description,
        facility: await this.findOneFacilityAsset(facilityId),
        createdAt: +new Date(createdAt),
        updatedAt: +new Date(updatedAt),
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateGeneralInformationAsset = async (
    id: string,
    dto: UpdateGeneralInformationDto,
    questionare?: File,
    parrentFolderPath?: string
  ): Promise<GeneralInformationView> => {
    try {
      let newFacility: FacilityEntity | null = null;
      let facilityId = dto.facilityId;
      const { facility } = dto;

      if (facility) {
        newFacility = await this.facilityRepository.create(facility);
        facilityId = +newFacility.id;
      }

      if (questionare) {
        await this.fileService.createDesignDocument(
          id,
          "summary-list-of-equipment",
          parrentFolderPath,
          questionare
        );
      }
      await this.summaryListOfEquipmentRepository.update(
        { ...dto, facilityId },
        { where: { id } }
      );

      const item = await this.findOneGeneralInformationAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteGeneralInformationAsset = async (
    id: string
  ): Promise<GeneralInformationView> => {
    try {
      const item = await this.findOneGeneralInformationAsset(id);
      await this.summaryListOfEquipmentRepository.destroy({ where: { id } });

      if (item.questionare) {
        await this.fileService.deleteDesignDocument(
          item.questionare.id.toString()
        );
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteSummaryListOfEquipmentAsset = async (
    id: number
  ): Promise<SummaryListOfEquipmentView> => {
    try {
      const item = await this.findOneSummaryListOfEquipmentAsset(id);
      item.metrology && (await this.deleteMetrologyAsset(+item.metrology.id));

      if (item.cableLog && item.cableLog.length > 0) {
        for (let i = 0; i < item.cableLog.length; i++) {
          const { id } = item.cableLog[i];
          await this.deleteCableLogAsset(+id);
        }
      }

      item.impulseLineLog.length > 0 &&
        (await this.impulseLineLogRepository.destroy({
          where: { sloeId: id },
        }));
      item.signals.length > 0 &&
        (await this.signalRepository.destroy({ where: { sloeId: id } }));

      // if (item.impulseLineLog && item.impulseLineLog.length > 0) {
      //   for (let i = 0; i < item.impulseLineLog.length; i++) {
      //     const { id } = item.impulseLineLog[i];
      //     item.impulseLineLog && console.log("impulseLineLog id: ", id, i);
      //     await this.deleteImpulseLineLogAsset(+id);
      //   }
      // }

      // if (item.signals && item.signals.length > 0) {
      //   for (let i = 0; i < item.signals.length; i++) {
      //     const { id } = item.signals[i];
      //     console.log("signal item from sloe: ", item.signals[i].id);
      //     await this.deleteSignalAsset(+id);
      //   }
      // }

      item.monitoring &&
        (await this.deleteMonitoringAsset(+item.monitoring.id));

      await this.deleteGeneralInformationAsset(id.toString());

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  renderExportToAtlasData = (
    item: SummaryListOfEquipmentEntity
  ): ExportEquipmentToAtlas => {
    const {
      subUnit,
      installationLocation,
      tag,
      systemType,
      controlledParameter,
      facility,
      facilityModification,
      factoryNumber,
      month,
      year,
      period,
      metrology,
      description,
    } = item;

    const dataItem: ExportEquipmentToAtlas = {
      company: subUnit.unit.project.field.subsidiary.title,
      subdivision: "н/д",
      field: subUnit.unit.project.field.title,
      prod_area: subUnit.title,
      place_install: installationLocation ? installationLocation : "н/д",
      position_tag: tag ? tag : "н/д",
      partic_sbpaz: systemType.includes("ПАЗ") ? "да" : "н/д",
      phys_quantity: "н/д",
      clarification: controlledParameter ? controlledParameter : "н/д",
      category: facility.equipmentType,
      name: "н/д",
      type_eq: facility.title,
      model_eq: facilityModification ? facilityModification : "н/д",
      country: facility.country,
      factory: facility.vendor,
      sn: factoryNumber ? factoryNumber : "н/д",
      prod_dt:
        month && year
          ? new Date(+year, +month - 1)
          : year
          ? new Date(+year)
          : new Date(1900, 0, 1),
      life_time: period ? period : "н/д",
      set_type: "н/д",
      set_sn: "н/д",
      type_control: metrology ? metrology.metrologyType : "н/д",
      dt:
        metrology && metrology.fromDate
          ? new Date(
              +metrology.fromDate.split(".")[2],
              +metrology.fromDate.split(".")[1] - 1,
              +metrology.fromDate.split(".")[0]
            )
          : new Date(1900, 0, 1),
      m_range: metrology && metrology.mpi ? metrology.mpi : "н/д",
      dt_next:
        metrology && metrology.fromDate
          ? new Date(
              +metrology.fromDate.split(".")[2],
              +metrology.fromDate.split(".")[1] - 1,
              +metrology.fromDate.split(".")[0]
            )
          : new Date(1900, 0, 1),
      type_doc:
        metrology && metrology.documentType ? metrology.documentType : "н/д",
      number_doc:
        metrology && metrology.documentNumber
          ? metrology.documentNumber
          : "н/д",
      organization:
        metrology && metrology.counterparty
          ? metrology.counterparty.title
          : "н/д",
      low_limit: metrology && metrology.min ? metrology.min : "н/д",
      upper_limit: metrology && metrology.max ? metrology.max : "н/д",
      units: metrology && metrology.range ? metrology.range : "н/д",
      acc: metrology && metrology.accuracy ? metrology.accuracy : "н/д",
      num_registry: metrology && metrology.grsi ? metrology.grsi : "н/д",
      method_mc:
        metrology && metrology.verificationProcedure
          ? metrology.verificationProcedure
          : "н/д",
      meansur_area:
        facility.equipmentType === "СИ" ? facility.measurementArea : "н/д",
      type_meansur:
        facility.equipmentType === "СИ" ? facility.meansurementType : "н/д",
      group_eq:
        facility.equipmentType === "СИ" ? facility.meansureGroup : "н/д",
      sgroei: metrology ? metrology.sgroei : "н/д",
      remark: metrology ? metrology.status : "н/д",
      actual_tech_condition: description ? description : "н/д",
    };

    return dataItem;
  };

  updateSummaryListOfEquipmentAsset = async (
    target: string,
    id: string,
    dto: UpdateEquipmentAccountingAssetDto,
    files?: SummaryListOfEquipmentCreateOrUpdateFiles,
    parrentFolderPath?: string
  ): Promise<EquipmentAccountingAssetView> => {
    let item: EquipmentAccountingAssetView = null;

    switch (target) {
      case "general-information": {
        item = await this.updateGeneralInformationAsset(
          id,
          dto as UpdateGeneralInformationDto,
          files.questionare[0],
          parrentFolderPath
        );
        break;
      }

      case "metrology": {
        item = await this.updateMetrologyAsset(
          id,
          dto as UpdateMetrologyDto,
          files.document[0],
          files.verificationProcedure[0],
          files.typeApprovalCertificate[0],
          parrentFolderPath
        );
        break;
      }

      case "signal": {
        item = await this.updateSignalAsset(id, dto as UpdateSignalDto);
        break;
      }

      case "cable-log": {
        item = await this.updateCableLogAsset(
          id,
          dto as UpdateCableLogDto,
          files.wiringDiagram[0],
          parrentFolderPath
        );
        break;
      }

      case "impulse-line-log": {
        item = await this.updateImpulseLineLogAsset(
          id,
          dto as UpdateImpulseLineLogDto
        );
        break;
      }

      case "monitoring": {
        item = await this.updateMonitoringAsset(
          id,
          dto as UpdateMonitoringDto,
          files.functionalDiagram[0],
          files.mountDocument[0],
          files.connectDocument[0],
          files.testDocument[0],
          files.awpDocument[0],
          files.commisionDocument[0],
          parrentFolderPath
        );
        break;
      }
      default:
        break;
    }

    return item;
  };

  deleteSummaryListOfEquipmentSubAsset = async (
    target: string,
    id: number
  ): Promise<EquipmentAccountingAssetView> => {
    let item: EquipmentAccountingAssetView = null;

    switch (target) {
      case "general-information": {
        item = await this.deleteSummaryListOfEquipmentAsset(id);
        break;
      }

      case "metrology": {
        item = await this.deleteMetrologyAsset(id);
        break;
      }

      case "signal": {
        item = await this.deleteSignalAsset(id);
        break;
      }

      case "cable-log": {
        item = await this.deleteCableLogAsset(id);
        break;
      }

      case "impulse-line-log": {
        item = await this.deleteImpulseLineLogAsset(id);
        break;
      }

      case "monitoring": {
        item = await this.deleteMonitoringAsset(id);
        break;
      }
      default:
        break;
    }

    return item;
  };

  exportToAtlas = async (
    parrentTarget: string,
    parrentId: string,
    parrentTitle: string,
    parrentFolder: string
  ): Promise<string> => {
    try {
      let exportData: ExportEquipmentToAtlas[] = [];
      let data: SummaryListOfEquipmentEntity[] = [];
      switch (parrentTarget) {
        case "project": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { projectId: parrentId },
            include: [
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
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: MetrologyEntity,
              },
            ],
          });

          break;
        }
        case "unit": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { unitId: parrentId },
            include: [
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
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: MetrologyEntity,
              },
            ],
          });

          break;
        }
        case "sub-unit": {
          data = await this.summaryListOfEquipmentRepository.findAll({
            where: { subUnitId: parrentId },
            include: [
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
                ],
              },
              {
                model: FacilityEntity,
              },
              {
                model: MetrologyEntity,
              },
            ],
          });

          break;
        }
        default:
          break;
      }

      for (let i = 0; i < data.length; i++) {
        const item = this.renderExportToAtlasData(data[i]);

        exportData.push(item);
      }

      const filePath = this.fileService.createJsonFile(
        exportData,
        parrentFolder,
        parrentTitle
      );

      return filePath;
      // return exportData;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  /** Получаем единицу оборудования для формирования ОЛ */
  getEquipmentAsset = async (id: string) => {
    const item = await  this.summaryListOfEquipmentRepository.findOne({
      where: {id},
      include: [
        {
          model: FacilityEntity
        },
        {
          model: MetrologyEntity
        },
        {
          model: MonitoringEntity
        },
        {
          model: SubUnitEntity,
          attributes: ["position", "code", "title"],
          include: [
            {
              model: UnitEntity,
              attributes: ["position", "code", "title"],
              include: [
                {
                  model: ProjectEntity,
                  attributes: ["code", "title"],
                  include: [
                    {
                      model: FieldEntity,
                      attributes: ["code", "title"],
                      include: [
                        {
                          model: SubsidiaryEntity,
                          attributes: ["code", "title"],
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })

    return {
      subsidiary: item.subUnit.unit.project.field.subsidiary,
      field: item.subUnit.unit.project.field,
      project: item.subUnit.unit.project,
      unit: item.subUnit.unit,
      subUnit: item.subUnit,
      location: item?.installationLocation ?  item.installationLocation  : "",
      facilityType: item?.facility?.meansurementType ? item.facility.meansurementType : "",
      title: item?.facility?.title ? item.facility.title : "",
      tag: item?.tag ? item.tag : "",
      parameter: item?.controlledParameter ? item.controlledParameter : "",
      fda: item?.monitoring?.functionalDiagram ? item.monitoring.functionalDiagram  : "",
      lifeTime: item?.period ? +item.period : 0,
      range: item?.metrology?.range ? item.metrology.range : "",
      accuracy: item?.metrology?.accuracy ? item.metrology.accuracy : "",
      mpi: item?.metrology?.mpi ? +item.metrology.mpi : 0,
      measureRangeMin: item?.metrology?.min ? +item.metrology.min : 0,
      measureRangeMax: item?.metrology?.max ? +item.metrology.max : 0,

    }
  }


  /** Новый сервис по добавлению единицы оборудования */



  /** Импорт данных свода оборудования из файла xlsx */
  importDataFromConsolidatedList = async (data: any, files: {
    descriptor?: File,
    documents?: File[]
  }) => {

    /** Получаем имя файла без расширения */
    const getDocName = (file: File) => {
      const {nameWithoutExt} = this.newFileService.getFileProperties(file);
      return nameWithoutExt;
    }

    const {descriptor, documents} = files;

    const filesDescription = this.excelService.convertExcelFileToJsonFromConsolidatedList(descriptor[0]);
    const {parentId, parentTarget, parentFolderPath} = data;
    const items = [];
    let parent = null;
    const units = [];
    const subUnits = [];
    switch (parentTarget) {
      case "project": {
        parent = await this.positionTreeService.findOne("project", parentId);
        parent.units.map(item => {
          units.push(item);
          item.subUnits.map(item => subUnits.push(item))
        });
        break;
      }
      case "unit": {
        parent = await this.positionTreeService.findOne("unit", parentId);
        units.push(parent);
        parent.subUnits.map(item => subUnits.push(item));
        break;
      }
      default:
        break;
    }

    // return filesDescription

    for (let i = 0; i < filesDescription.length; i++) {
      const item = filesDescription[i]
      const keys = Object.keys(item);


      /** Собираем сигналы, кабельный журнал, журнал импульсных линий */
      const subRows = filesDescription.filter(elem => elem["8"] === item["8"] && elem["2"] === item["2"] && elem["4"] === item["4"]);
      const signals = [];
      const impulseLineLog = [];
      const cableLog = [];
      for (let j = 0; j < subRows.length; j++) {
        const item = subRows[j];
        if (item["23"]) {
          signals.push({
            signalType: item["23"],
            signalProtocol: item["24"],
            signalTag: item["25"],
            signalParameter: item["9"],
            ll: item["26"],
            l: item["27"],
            h: item["28"],
            hh: item["29"],
            emergencyProtocol: item["30"]
          })
        }
        ;
        if (item["54"]) {
          cableLog.push({
            numberOfTrace: item["54"],
            cableMark: item["55"],
            cableSection: item["57"],
            fromUnit: item["59"],
            fromPlace: item["58"],
            wiringDiagram: item["18"] ? documents.filter(document => getDocName(document).toLowerCase() === item["18"].toLowerCase())[0] : null,
            toUnit: item["61"],
            toPlace: item["60"],
            cableLenght: item["62"],
            range: "м",
            description: `Схема С5: ${item["18"] ? item["18"] : "н/д"}`
          })
        }
        if (item["63"]) {
          impulseLineLog.push({
            numberOfTrace: item["63"],
            impulseLineType: item["64"],
            fromPlace: item["66"],
            toPlace: item["67"],
            impulseLineLenght: item["65"],
            range: "м",
            description: ""
          })
        }
      }

      /**
       * В перечне объектов строительства ищем объект строительства по наименованию из свода оборудования.
       * Если такой объект не существует - создаем запись в БД и получаем id
       * Иначе получаем id
       */
      let newUnit = null;
      const findUnit = units.find(unit => unit.title === item["2"]);
      if (!findUnit) {
        const dto = {
          projectId: parentId,
          equipmentId: 1,
          supplierId: 1,
          position: "0",
          title: item["4"],
          code: item["4"],
          contract: "",
          description: "",
          file: null
        }

        newUnit = await this.positionTreeService.createNewUnitOrSubUnitByConditionalList("unit", dto);
      }
      const unitId = findUnit ? findUnit.id : newUnit.id;
      const unitCode = findUnit ? findUnit.code : newUnit.code;
      const unitPosition = findUnit ? findUnit.position : newUnit.position;
      /**
       * В перечне установок ищем установку по наименованию из свода оборудования.
       * Если такой установка не существует - создаем запись в БД и получаем id
       * Иначе получаем id
       */
      let newSubUnit = null
      const findSubUnit = subUnits.find(subUnit => +subUnit.unitId === +unitId && subUnit.title === item["4"]);
      if (!findSubUnit) {

        const dto = {
          unitId,
          equipmentId: 1,
          supplierId: 1,
          position: item["3"] ? item["3"] : "0",
          title: item["4"],
          code: item["4"],
          contract: "",
          description: "",
          file: null
        }
        newSubUnit = await this.positionTreeService.createNewUnitOrSubUnitByConditionalList("sub-unit", dto);
      }

      const subUnitId = findSubUnit ? findSubUnit.id : newSubUnit.id;
      const subUnitCode = findSubUnit ? findSubUnit.code : newSubUnit.code;
      const subUnitPosition = findSubUnit ? findSubUnit.position : newSubUnit.position;

      const subUnit = await this.positionTreeService.findOneAsset('sub-unit', subUnitId)
      /**
       * В справочнике единиц оборудования ищем запись по наименованию, вендору
       * Если запись найдена - проверяем, есть ли в модификациях запись значение из соотв. поля свода оборудования
       * Если модификация есть - возвращаем id записи
       * Если модификации нет - обновляем запись, добавляем модификацию и возвращаем id записи
       * Если запись не найдена - создаем ее и возвращаем id
       */
      let newFacility = null;
      const facility = await this.facilityRepository.findOne({
        where: {
          title: item["10"],
          vendor: item["20"] ? item["20"] : "Не определен"
        }
      });
      if (facility && !facility.modifications.includes(item["11"])) {
        newFacility = this.facilityRepository.update({
          ...facility,
          modifications: [...facility.modifications, item["11"]]
        }, {where: {id: facility.id}})
      }
      if (!facility) {
        const dto = {
          country: item["21"] ? item["21"] : "Российская Федерация",
          equipmentType: item["6"],
          meansurementType: item["6"] === "СИ" ? item["34"] : null,
          measurementArea: item["6"] === "СИ" ? item["33"] : null,
          meansureGroup: item["6"] === "СИ" ? item["31"] : null,
          modifications: item["11"] ? [`${item["11"]}`] : [],
          title: item["10"],
          vendor: item["20"] ? item["20"] : "Не определен",
          technicalCardId: item["75"]
        };

        newFacility = await this.createNewFacilityAsset(dto);
      }
      const facilityId = facility ? facility.id : newFacility.id;

      const systemType = item["13"] && !item["14"] && !item["15"] ? ["РСУ"]
        : item["13"] && item["14"] && !item["15"] ? ["РСУ", "ПАЗ"]
          : item["13"] && !item["14"] && item["15"] ? ["РСУ", "КИТСО"]
            : item["13"] && item["14"] && item["15"] ? ["РСУ", "ПАЗ", "КИТСО"]
              : !item["13"] && item["14"] && !item["15"] ? ["ПАЗ"]
                : !item["13"] && item["14"] && item["15"] ? ["ПАЗ", "КИТСО"]
                  : !item["13"] && !item["14"] && item["15"] ? ["КИТСО"] : []

      const counterparty = item["42"] ? await this.nsiService.findOrCreateCounterparty({
        title: item["42"],
        code: item["42"],
        description: ""
      }) : null;


      const equipmentAsset = {
        parentFolderPath: join(
          parentFolderPath,
          "002. Объекты",
          this.newFileService.generateFolderName(`${unitPosition}. ${unitCode}`),
        '002. Объекты',
        this.newFileService.generateFolderName(
          `${subUnitPosition}. ${subUnitCode}`) ),
        generalInformation: {
          projectId: parentId,
          unitId,
          subUnitId,
          installationLocation: item["5"],
          tag: item["8"],
          controlledParameter: item["9"],
          systemType,
          facilityModification: item["11"],
          factoryNumber: item["22"],
          year: item["51"],
          month: item["52"],
          period: item["53"],
          questionare: item["16"] ? documents.filter(document => getDocName(document).toLowerCase() === item["16"].toLowerCase())[0] : null,
          description: `Шифр схемы соединений внешних проводок из С5 схем АСУТП: ${item["18"] ? item["18"] : 'н/д'}\n\
            Шифр схемы P&ID: ${item["17"] ? item["17"] : "н/д"}\n\
            Шифр ОЛ: ${item["16"] ? item["16"] : "н/д"}
            `,
          facilityId
        },
        metrology: item["6"] !== "СИ" ? null : {
          counterpartyId: counterparty ? counterparty.id : null,
          sgroei: item["32"],
          grsi: item["39"],
          min: item["35"],
          max: item["36"],
          range: item["37"],
          accuracy: item["38"],
          mpi: item["43"],
          metrologyType: item["46"],
          documentType: item["40"],
          documentNumber: item["41"],
          fromDate: item["47"],
          toDate: item["48"],
          status: item["50"],
          arshin: item["49"],
          document: item["41"] ? documents.filter(document => getDocName(document) === item["41"])[0] : null,
          verificationProcedure: item["76"] ? documents.filter(document => getDocName(document) === item["76"])[0] : null,
          typeApprovalCertificate: item["77"] ? documents.filter(document => getDocName(document) === item["77"])[0] : null
          // newCounterParty?: { title: string; code: string; description: string };
        },
        signals,
        cableLog,
        impulseLineLog,
        monitoring: !item["17"] ? null : {
          functionalDiagram: item["17"] ? documents.filter(document => getDocName(document).toLowerCase() === item["17"].toLowerCase())[0] : null,
          mountDate: item["68"] ? item["68"] : "01.01.1970",
          connectDate: item["69"] ? item["69"] : "01.01.1970",
          testDate: item["70"] ? item["70"] : "01.01.1970",
          awpDate: item["71"] ? item["71"] : "01.01.1970",
          commisionDate: item["72"] ? item["72"] : "01.01.1970"
        },

        atlas: {
          company: subUnit.unit.project.field.subsidiary.title,
          subdivision: "н/д",
          field: subUnit.unit.project.field.title,
          facility: subUnit.unit.title,
          prod_area: subUnit.title,
          place_install: item["5"],
          position_tag: item["8"],
          partic_sbpaz: systemType?.includes("ПАЗ") ? "Да" : "Нет",
          phys_quantity: "", // измеряемый параметр в зависимости от вида измерений прописывать
          clarification: item["9"],
          category: item["6"],
          type_protection: "", //explosionMark - ручной ввод??
          sn: item["22"],
          prod_dt: item["51"] && item["52"] ? new Date(+item["51"], +item["52"] - 1)
          : item["51"] && !item["52"] ? new Date(+item["51"], 0) : null,
          life_time: item["53"] ? +item["53"]/12 : null,
          set_type: "н/д",
          set_sn: "н/д",
          actual_mc: item["46"],
          dt: item["47"],
          dt_next: item["48"],
          m_range: item["43"],
          type_doc: item["40"],
          number_doc: item["41"],
          num_registry: item["39"],
          name: facility ? facility.title : newFacility.title, // facility.title - например массовый расходомер
          type_eq: "", // нужно подумать конкретная модель оборудования
          model_eq: item["11"],
          method_mc: "", //название методики поверки + нужно вернуть путь к фалйлу metrology.verificationProcedure
          country: facility ? facility.country : newFacility.country,
          factory: facility ? facility.vendor : newFacility.vendor,
          measur_area: facility ? facility.measurementArea : newFacility.measurementArea,
          group_eq: facility ? facility.meansureGroup : newFacility.meansureGroup,
          organization: counterparty ? counterparty.title : "",
          low_limit: item["35"],
          upper_limit: item["36"],
          units: item["37"],
          acc: item["38"],
          type_measur: facility ? facility.meansurementType : newFacility.meansurementType,
          sgroei: item["32"],
          remark: "", // примечание запихнем аршин ?
          actual_tech_condition: item["50"],
          distance: "", //удаленность объекта у нас нет
          contract: "", //договор у нас нет
          opo: "",// ОПО у нас нет
          rpo: "", //0 или 1 Признак РПО
          flag_rtk: "", //0 или 1 Признак эксплуатации
          tko: "", //Тех карта МО/ТО
          path_to_doc: "", //путь к документу
          path_to_method_mc: "", // путь к методике поверки
          path_to_type_app_cert: "" // путь к СоП
        }

      }

      items.filter(elem => elem.generalInformation.tag === item["8"]).length === 0 && items.push(equipmentAsset)

    }

    const res = [];
    for (let i = 0; i < items.length; i++) {
      const {parentFolderPath, generalInformation, metrology, cableLog, impulseLineLog, monitoring, signals} = items[i];
      const dto: {
        projectId, unitId, subUnitId, installationLocation, tag, controlledParameter, systemType, facilityModification,
        factoryNumber, year, month, period
      } = generalInformation;
      const {id: sloeId} = await this.summaryListOfEquipmentRepository.create(
        dto
      );

      if (generalInformation.questionare) {
        const {filePath} = await this.fileService.createDesignDocument(
          sloeId.toString(),
          "summary-list-of-equipment",
          parentFolderPath,
          generalInformation.questionare
        );
        console.log(filePath);
      }
      if(cableLog.length > 0) {
        for(let i = 0; i < cableLog.length; i++) {
          const dto: { numberOfTrace, cableMark, cableSection, fromUnit, fromPlace, toUnit, toPlace, cableLenght, range, description } = cableLog[i];
          await this.createNewCableLogAsset({sloeId, ...dto},  cableLog[i].wiringDiagram,parentFolderPath)
        }
      }

      if(impulseLineLog.length > 0) {
        for(let i = 0; i < impulseLineLog.length; i++) {
          const dto: { numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description: ""} = impulseLineLog[i];
          await this.createNewImpulseLineLogAsset({sloeId, ...dto})
        }
      }

      if(signals.length > 0) {
        for(let i = 0; i < signals.length; i++) {
          const dto: {  signalType, signalProtocol, signalTag, signalParameter, ll, l, h, hh, emergencyProtocol } = signals[i];
          await this.createNewSignalAsset({sloeId, ...dto})
        }
      }

      if(monitoring) {
        const dto: { mountDate, connectDate, testDate, awpDate, commisionDate} = monitoring;

        await this.createNewMonitoringAsset({sloeId, ...dto}, monitoring.functionalDiagram, null,
          null, null, null, null, parentFolderPath)
      }

      if(metrology) {
        const dto: {
          counterpartyId, sgroei, grsi, min, max, range, accuracy, mpi, metrologyType, documentType,
          documentNumber, fromDate, toDate, status, arshin} = metrology;

        await this.createNewMetrologyAsset({sloeId, ...dto})
      }

      const item = await this.findOneSummaryListOfEquipmentAsset(sloeId);
      res.push(item)




    }
    return res;

  }


}