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
  EquipmentAccountingAssetCreateOrUpdateAttrs,
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
  SummaryListOfEquipmentCreateOrUpdateAttrs,
  SummaryListOfEquipmentCreateOrUpdateFiles,
  SummaryListOfEquipmentFormData,
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
  UpdateSummaryListOfEquipmentDto,
} from "./dto";
import { DesignDocumentEntity, FileStorageService } from "../file-storage";
import {
  FieldEntity,
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
  SubsidiaryEntity,
} from "../position-tree";
import { CounterpartyEntity } from "../regulatory-reference-information";
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
    private fileService: FileStorageService
  ) {}

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
        title: data.title,
        country: data.country,
        vendor: data.vendor,
        modifications: data.modifications,
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
        const documentName = this.fileService.fileUpload(docPath, document);
        documentPath = `${docPath}/${documentName}`;
      }

      if (verificationProcedure) {
        const documentName = this.fileService.fileUpload(
          docPath,
          verificationProcedure
        );

        verificationProcedurePath = `${docPath}/${documentName}`;
      }

      if (typeApprovalCertificate) {
        const documentName = this.fileService.fileUpload(
          docPath,
          typeApprovalCertificate
        );
        typeApprovalCertificatePath = `${docPath}/${documentName}`;
      }

      const { id } = await this.metrologyRepository.create({
        ...dto,
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
          id: data.id,
          sloeId: data.sloeId,
          unitId: data.sloe.subUnit.unit.id.toString(),
          unit: data.sloe.subUnit.unit.title,
          subUnitId: data.sloe.subUnit.id.toString(),
          subUnit: data.sloe.subUnit.title,
          counterpartyId: data.counterpartyId,
          tag: data.sloe.tag,
          sgroei: data.sgroei,
          measurementArea: data.sloe.facility.measurementArea,
          meansurementType: data.sloe.facility.meansurementType,
          meansureGroup: data.sloe.facility.meansureGroup,
          grsi: data.grsi,
          min: data.min,
          max: data.max,
          range: data.range,
          accuracy: data.accuracy,
          mpi: data.mpi,
          metrologyType: data.metrologyType,
          documentType: data.documentType,
          documentNumber: data.documentNumber,
          document: data.document,
          verificationProcedure: data.verificationProcedure,
          typeApprovalCertificate: data.typeApprovalCertificate,
          counterparty: data.counterparty.title,
          fromDate: data.fromDate,
          toDate: data.toDate,
          status: data.status,
          arshin: data.arshin,
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
          const documentName = this.fileService.fileUpload(docPath, document);
          documentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.document);
          const documentName = this.fileService.fileUpload(docPath, document);
          documentPath = `${docPath}/${documentName}`;
        }
      }

      if (verificationProcedure) {
        if (!item.verificationProcedure) {
          const documentName = this.fileService.fileUpload(
            docPath,
            verificationProcedure
          );
          verificationProcedurePath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.verificationProcedure);
          const documentName = this.fileService.fileUpload(
            docPath,
            verificationProcedure
          );
          verificationProcedurePath = `${docPath}/${documentName}`;
        }
      }

      if (typeApprovalCertificate) {
        if (!item.typeApprovalCertificate) {
          const documentName = this.fileService.fileUpload(
            docPath,
            typeApprovalCertificate
          );
          typeApprovalCertificatePath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.typeApprovalCertificate);
          const documentName = this.fileService.fileUpload(
            docPath,
            typeApprovalCertificate
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
          mountDocument
        );
        mountDocumentPath = `${docPath}/${documentName}`;
      }

      if (connectDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          connectDocument
        );

        connectDocumentPath = `${docPath}/${documentName}`;
      }

      if (testDocument) {
        const documentName = this.fileService.fileUpload(docPath, testDocument);
        testDocumentPath = `${docPath}/${documentName}`;
      }

      if (awpDocument) {
        const documentName = this.fileService.fileUpload(docPath, awpDocument);
        awpDocumentPath = `${docPath}/${documentName}`;
      }

      if (commisionDocument) {
        const documentName = this.fileService.fileUpload(
          docPath,
          commisionDocument
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
            mountDocument
          );
          mountDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.mountDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            mountDocument
          );
          mountDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (connectDocument) {
        if (!item.connectDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            connectDocument
          );
          connectDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.connectDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            connectDocument
          );
          connectDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (testDocument) {
        if (!item.testDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            testDocument
          );
          testDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.testDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            testDocument
          );
          testDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (awpDocument) {
        if (!item.awpDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            awpDocument
          );
          awpDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.awpDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            awpDocument
          );
          awpDocumentPath = `${docPath}/${documentName}`;
        }
      }

      if (commisionDocument) {
        if (!item.commisionDocument) {
          const documentName = this.fileService.fileUpload(
            docPath,
            commisionDocument
          );
          commisionDocumentPath = `${docPath}/${documentName}`;
        } else {
          this.fileService.removeDirectoryOrFile(item.commisionDocument);
          const documentName = this.fileService.fileUpload(
            docPath,
            commisionDocument
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
        typeof generalInformation === "string" &&
        JSON.parse(generalInformation);
      const metrologyData: MetrologyCreateOrUpdateAttrs =
        typeof metrology === "string" && JSON.parse(metrology);
      const signalsData: SignalCreateOrUpdateAttrs[] =
        typeof signals === "string" && JSON.parse(signals);
      const cableLogData: CableLogCreateOrUpdateAttrs[] =
        typeof cableLog === "string" && JSON.parse(cableLog);
      const impulseLineLogData: ImpulseLineLogCreateOrUpdateAttrs[] =
        typeof impulseLineLog === "string" && JSON.parse(impulseLineLog);
      const monitoringData: MonitoringCreateOrUpdateAttrs =
        typeof monitoring === "string" && JSON.parse(monitoring);

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
          files.questionare[0]
        );
      }

      if (metrologyData.min) {
        await this.createNewMetrologyAsset(
          { ...metrologyData, sloeId: id },
          files?.document[0] ? files?.document : undefined,
          files?.verificationProcedure
            ? files?.verificationProcedure[0]
            : undefined,
          files?.typeApprovalCertificate
            ? files?.typeApprovalCertificate[0]
            : undefined,
          parrentFolderPath
        );
      }

      if (signals && signals.length > 0) {
        for (let i = 0; i < signals.length; i++) {
          const elem = signals[i];
          const item: SignalCreateOrUpdateAttrs =
            typeof elem === "string" && JSON.parse(elem);
          item.id = null;
          await this.createNewSignalAsset({ ...item, sloeId: id });
        }
      }

      if (cableLog && cableLog.length > 0) {
        for (let i = 0; i < cableLog.length; i++) {
          const elem = cableLog[i];
          const item: CableLogCreateOrUpdateAttrs =
            typeof elem === "string" && JSON.parse(elem);
          item.id = null;
          await this.createNewCableLogAsset(
            { ...item, sloeId: id },
            files?.wiringDiagram ? files?.wiringDiagram[i] : undefined,
            parrentFolderPath
          );
        }
      }

      if (impulseLineLog && impulseLineLog.length > 0) {
        for (let i = 0; i < impulseLineLog.length; i++) {
          const elem = impulseLineLog[i];
          const item: ImpulseLineLogCreateOrUpdateAttrs =
            typeof elem === "string" && JSON.parse(elem);
          item.id = null;
          await this.createNewImpulseLineLogAsset({ ...item, sloeId: id });
        }
      }

      if (monitoringData.mountDate) {
        await this.createNewMonitoringAsset(
          { ...monitoringData, sloeId: id },
          files?.functionalDiagram ? files?.functionalDiagram[0] : undefined,
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
    dto: CreateSummaryListOfEquipmentDto[]
  ): Promise<SummaryListOfEquipmentView[]> => {
    try {
      let items: SummaryListOfEquipmentView[] = [];
      for (let i = 0; i < dto.length; i++) {
        const item = await this.createNewSummaryListOfEquipmentAsset(dto[i]);
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
        cableLog: await this.findAllCableLogAssets(id),
        impulseLineLog: await this.findAllImpulseLineLogAssets(id),
        monitoring: await this.findOneMonitoringAsset(undefined, id),
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
      await this.deleteGeneralInformationAsset(id.toString());

      item.metrology && (await this.deleteMetrologyAsset(+item.metrology.id));

      if (item.cableLog && item.cableLog.length > 0) {
        for (let i = 0; i < item.cableLog.length; i++) {
          const { id } = item.cableLog[i];
          await this.deleteCableLogAsset(+id);
        }
      }

      if (item.impulseLineLog && item.impulseLineLog.length > 0) {
        for (let i = 0; i < item.impulseLineLog.length; i++) {
          const { id } = item.impulseLineLog[i];
          await this.deleteImpulseLineLogAsset(+id);
        }
      }

      if (item.signals && item.signals.length > 0) {
        for (let i = 0; i < item.signals.length; i++) {
          const { id } = item.signals[i];
          await this.deleteSignalAsset(+id);
        }
      }

      item.monitoring &&
        (await this.deleteMonitoringAsset(+item.monitoring.id));

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
  ): Promise<ExportEquipmentToAtlas[]> => {
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

      // return filePath;
      return exportData;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
}
