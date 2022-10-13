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
  ExportEquipmentToAtlas,
  FacilityView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
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
      await this.cableLogRepository.update(dto, { where: { id } });
      if (wiringDiagram) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "cable-log",
          parrentFolderPath,
          wiringDiagram
        );
      }
      const item = await this.findOneCableLogAsset(+id);
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
      const { id } = await this.metrologyRepository.create(dto);

      if (document) {
        this.fileService.fileUpload(`${parrentFolderPath}/metrology`, document);
      }

      if (verificationProcedure) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/metrology`,
          verificationProcedure
        );
      }

      if (typeApprovalCertificate) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/metrology`,
          typeApprovalCertificate
        );
      }
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
      await this.metrologyRepository.update(dto, { where: { id } });
      const item = await this.findOneMetrologyAsset(+id);

      if (document) {
        if (!item.document) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            document
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/metrology/${item.document}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            document
          );
        }
      }

      if (verificationProcedure) {
        if (!item.verificationProcedure) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            verificationProcedure
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/metrology/${item.verificationProcedure}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            verificationProcedure
          );
        }
      }

      if (typeApprovalCertificate) {
        if (!item.typeApprovalCertificate) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            typeApprovalCertificate
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/metrology/${item.typeApprovalCertificate}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/metrology`,
            typeApprovalCertificate
          );
        }
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteMetrologyAsset = async (
    id: number,
    parrentFolderPath?: string
  ): Promise<MetrologyView> => {
    try {
      const item = await this.findOneMetrologyAsset(id);
      await this.metrologyRepository.destroy({ where: { id } });
      if (item.document) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/metrology/${item.document}`
        );
      }

      if (item.verificationProcedure) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/metrology/${item.verificationProcedure}`
        );
      }

      if (item.typeApprovalCertificate) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/metrology/${item.typeApprovalCertificate}`
        );
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
    signalType?: string,
    signalProtocol?: string,
    unitId?: string,
    subUnitId?: string
  ): Promise<SignalView[]> => {
    try {
      let items: SignalView[] = [];
      const data = await this.signalRepository.findAll({
        where: { signalType, signalProtocol },
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
      const { id } = await this.monitoringRepository.create(dto);
      const item = await this.findOneMonitoringAsset(id);

      if (functionalDiagram) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "monitoring",
          parrentFolderPath,
          functionalDiagram
        );
      }

      if (mountDocument) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
          mountDocument
        );
      }

      if (connectDocument) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
          connectDocument
        );
      }

      if (testDocument) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
          testDocument
        );
      }

      if (awpDocument) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
          awpDocument
        );
      }

      if (commisionDocument) {
        this.fileService.fileUpload(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
          commisionDocument
        );
      }

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
      await this.monitoringRepository.update(dto, { where: { id } });
      const item = await this.findOneMonitoringAsset(+id);

      if (functionalDiagram) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "monitoring",
          parrentFolderPath,
          functionalDiagram
        );
      }

      if (mountDocument) {
        if (!item.mountDocument) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            mountDocument
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.mountDocument}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            mountDocument
          );
        }
      }

      if (connectDocument) {
        if (!item.connectDocument) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            connectDocument
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.connectDocument}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            connectDocument
          );
        }
      }

      if (testDocument) {
        if (!item.testDocument) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            testDocument
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.testDocument}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            testDocument
          );
        }
      }

      if (awpDocument) {
        if (!item.awpDocument) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            awpDocument
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.awpDocument}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            awpDocument
          );
        }
      }

      if (commisionDocument) {
        if (!item.commisionDocument) {
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            commisionDocument
          );
        } else {
          this.fileService.removeDirectoryOrFile(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.commisionDocument}`
          );
          this.fileService.fileUpload(
            `${parrentFolderPath}/001. Иная документация/Мониторинг СМР`,
            commisionDocument
          );
        }
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  deleteMonitoringAsset = async (
    id: number,
    parrentFolderPath?: string
  ): Promise<MonitoringView> => {
    try {
      const item = await this.findOneMonitoringAsset(id);
      await this.monitoringRepository.destroy({ where: { id } });
      if (item.mountDocument) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.mountDocument}`
        );
      }

      if (item.connectDocument) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.connectDocument}`
        );
      }

      if (item.testDocument) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.testDocument}`
        );
      }

      if (item.awpDocument) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.awpDocument}`
        );
      }

      if (item.commisionDocument) {
        this.fileService.removeDirectoryOrFile(
          `${parrentFolderPath}/001. Иная документация/Мониторинг СМР/${item.commisionDocument}`
        );
      }

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createNewSummaryListOfEquipmentAsset = async (
    dto: CreateSummaryListOfEquipmentDto,
    questionare?: any,
    wiringDiagram?: any,
    document?: any,
    verificationProcedure?: any,
    typeApprovalCertificate?: any,
    functionalDiagram?: any,
    mountDocument?: any,
    connectDocument?: any,
    testDocument?: any,
    awpDocument?: any,
    commisionDocument?: any,
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

      if (generalInformation.facility) {
        facility = await this.createNewFacilityAsset(
          generalInformation.facility
        );
      }
      const { id } = await this.summaryListOfEquipmentRepository.create({
        ...generalInformation,
        facilityId: generalInformation.facilityId
          ? generalInformation.facilityId
          : facility.id,
      });

      if (questionare) {
        await this.fileService.createDesignDocument(
          id.toString(),
          "summary-list-of-equipment",
          parrentFolderPath,
          questionare
        );
      }

      if (metrology) {
        await this.createNewMetrologyAsset(
          { ...metrology, sloeId: id },
          document,
          verificationProcedure,
          typeApprovalCertificate,
          parrentFolderPath
        );
      }

      if (cableLog && cableLog.length > 0) {
        for (let i = 0; i < cableLog.length; i++) {
          const item = cableLog[i];

          await this.createNewCableLogAsset(
            { ...item, sloeId: id },
            wiringDiagram,
            parrentFolderPath
          );
        }
      }

      if (impulseLineLog && impulseLineLog.length > 0) {
        for (let i = 0; i < impulseLineLog.length; i++) {
          const item = impulseLineLog[i];
          await this.createNewImpulseLineLogAsset({ ...item, sloeId: id });
        }
      }

      if (signals && signals.length > 0) {
        for (let i = 0; i < signals.length; i++) {
          const item = signals[i];
          await this.createNewSignalAsset({ ...item, sloeId: id });
        }
      }

      if (monitoring) {
        await this.createNewMonitoringAsset(
          { ...monitoring, sloeId: id },
          functionalDiagram,
          mountDocument,
          connectDocument,
          testDocument,
          awpDocument,
          commisionDocument,
          parrentFolderPath
        );
      }

      const item = await this.findOneSummaryListOfEquipmentAsset(id);

      return item;
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
          metrology: await this.findOneMetrologyAsset(undefined, id),
          cableLog: await this.findAllCableLogAssets(id),
          impulseLineLog: await this.findAllImpulseLineLogAssets(id),
          imonitoring: await this.findOneMonitoringAsset(undefined, id),
        };

        items.push(item);
      }
      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateSummaryListOfEquipmentAsset = async (
    id: number,
    dto: UpdateSummaryListOfEquipmentDto,
    questionare?: File,
    wiringDiagram?: File,
    document?: File,
    verificationProcedure?: File,
    typeApprovalCertificate?: File,
    functionalDiagram?: File,
    mountDocument?: File,
    connectDocument?: File,
    testDocument?: File,
    awpDocument?: File,
    commisionDocument?: File,
    parrentFolderPath?: string
  ): Promise<SummaryListOfEquipmentView> => {
    try {
      const {
        generalInformation,
        metrology,
        monitoring,
        cableLog,
        impulseLineLog,
        signals,
      } = dto;

      if (generalInformation.facility) {
        await this.updateFacilityAsset(
          generalInformation.facility.id.toString(),
          generalInformation.facility
        );
      }

      //  await this.summaryListOfEquipmentRepository.update(generalInformation, {where: {id: +generalInformation.id}});

      if (questionare) {
        await this.fileService.createDesignDocument(
          generalInformation.id.toString(),
          "summary-list-of-equipment",
          parrentFolderPath,
          questionare
        );
      }

      if (metrology) {
        await this.updateMetrologyAsset(
          metrology.id.toString(),
          metrology,
          document,
          verificationProcedure,
          typeApprovalCertificate,
          parrentFolderPath
        );
      }

      if (cableLog.length > 0) {
        for (let i = 0; i < cableLog.length; i++) {
          const item = cableLog[i];

          await this.updateCableLogAsset(
            item.id.toString(),
            { ...item, sloeId: +item.sloeId },
            wiringDiagram,
            parrentFolderPath
          );
        }
      }

      if (impulseLineLog.length > 0) {
        for (let i = 0; i < impulseLineLog.length; i++) {
          const item = impulseLineLog[i];
          await this.updateImpulseLineLogAsset(item.id.toString(), {
            ...item,
            sloeId: +item.sloeId,
          });
        }
      }

      if (signals.length > 0) {
        for (let i = 0; i < signals.length; i++) {
          const item = signals[i];
          await this.updateSignalAsset(item.id.toString(), {
            ...item,
            sloeId: +item.sloeId,
          });
        }
      }

      if (monitoring) {
        await this.updateMonitoringAsset(
          monitoring.id.toString(),
          { ...monitoring, sloeId: +monitoring.sloeId },
          functionalDiagram,
          mountDocument,
          connectDocument,
          testDocument,
          awpDocument,
          commisionDocument,
          parrentFolderPath
        );
      }

      const item = await this.findOneSummaryListOfEquipmentAsset(id);

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
      await this.summaryListOfEquipmentRepository.destroy({ where: { id } });

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
      m_range: metrology.mpi,
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
      actual_tech_condition: description,
    };

    return dataItem;
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
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
}
