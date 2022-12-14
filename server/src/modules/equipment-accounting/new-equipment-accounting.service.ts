import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  CableLogView, ExportEquipmentToAtlas,
  FacilityView,
  GeneralInformationView,
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
import {DesignDocumentService} from "../file-storage/design-document.service";
import { UpdateGeneralInformationDto } from "./dto/update-equipment-accounting.dto";
import {createQuestionnaire as template} from "../../../common/templates/questionnaire/create-questionnaire";
import {ExcelService} from "../file-storage/excel.service";
import type {File} from "../../../common/types/file-storage";


const pdf =  require("html-pdf");

@Injectable()
export class NewEquipmentAccountingService {
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
    private nsiService: RegulatoryReferenceInformationService,
    @Inject(forwardRef(() => NewFileStorageService))
    private newFileService: NewFileStorageService,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService,
    @Inject(forwardRef(() => PositionTreeService))
    private positionTreeService: PositionTreeService,
    @Inject(forwardRef(() => DesignDocumentService))
    private designDocumentService: DesignDocumentService,
  ) {
  }



  /** Получаем единицу оборудования для формирования ОЛ */
  getEquipmentAsset = async (id: string) => {
    const item = await this.summaryListOfEquipmentRepository.findOne({
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
      location: item?.installationLocation ? item.installationLocation : "",
      facilityType: item?.facility?.meansurementType ? item.facility.meansurementType : "",
      title: item?.facility?.title ? item.facility.title : "",
      tag: item?.tag ? item.tag : "",
      parameter: item?.controlledParameter ? item.controlledParameter : "",
      fda: item?.monitoring?.functionalDiagram ? item.monitoring.functionalDiagram : "",
      lifeTime: item?.period ? +item.period : 0,
      range: item?.metrology?.range ? item.metrology.range : "",
      accuracy: item?.metrology?.accuracy ? item.metrology.accuracy : "",
      mpi: item?.metrology?.mpi ? +item.metrology.mpi : 0,
      measureRangeMin: item?.metrology?.min ? +item.metrology.min : 0,
      measureRangeMax: item?.metrology?.max ? +item.metrology.max : 0,

    }
  }


  /** Новый сервис по добавлению единицы оборудования */

  /** Справочник единиц оборудования */

  renderFacilityAsset = (facility: FacilityEntity): FacilityView => {
    const {id, equipmentType, vendor, country, title, createdAt, updatedAt, modifications} = facility;
    return {
      id,
      equipmentType,
      title: `${title} (${vendor})`,
      country: country,
      vendor: vendor,
      modifications,
      createdAt,
      updatedAt,
    }
  }

  findOneFacilityAsset = async (id: number): Promise<FacilityView> => {
    try {
      const data = await this.facilityRepository.findOne({ where: { id } });
      return this.renderFacilityAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllFacilityAssets = async (): Promise<FacilityView[]> => {
    try {
      let items = [];
      const data = await this.facilityRepository.findAll();
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        items.push(this.renderFacilityAsset(item));
      }
      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateFacilityAsset = async (id: number, data: UpdateFacilityDto): Promise<FacilityView> => {
    try {
      await this.facilityRepository.update(data, { where: { id } });
      const item = await this.findOneFacilityAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeFacilityAsset = async (id: number): Promise<FacilityView> => {
    try {
      const item = await this.findOneFacilityAsset(id);
      await this.facilityRepository.destroy( { where: { id } });
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyFacilityAssets = async (ids: number[],): Promise<FacilityView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeFacilityAsset(ids[i]);
      items.push(item)
    }
   return items
  };

  createNewFacilityAsset = async (data: CreateFacilityDto): Promise<FacilityView> => {
    try {
      const {id} = await this.facilityRepository.create(data);

      const item = await this.findOneFacilityAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createManyFacilityAssets = async (data: CreateFacilityDto[]): Promise<FacilityView[]> => {
    let items = []
    for(let i = 0; i < data.length; i++) {
      const item = await this.createNewFacilityAsset(data[i]);
      items.push(item)
    };
    return items;
  };

  /** Основная информация */

  private renderGeneralInformationAsset = async (equipment: SummaryListOfEquipmentEntity): Promise<GeneralInformationView> => {
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
    } = equipment;

    return {
      id,
      sloeId: id,
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
    }
  };

  findOneGeneralInformationAsset = async (id: number): Promise<GeneralInformationView> => {
    try {
      const includes = [
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
      ];
      const data = await this.summaryListOfEquipmentRepository.findOne({where: {id}, include: includes});
      return await  this.renderGeneralInformationAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllGeneralInformationAssets = async (projectId?: number, unitId?: number, subUnitId?: number): Promise<GeneralInformationView[]> => {
    try {
      let items = [];
      const includes = [
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
      ];;
      const data = await this.summaryListOfEquipmentRepository.findAll({include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push(await this.renderGeneralInformationAsset(data[i]));
      }

      const render = projectId ? items.filter((item) => +item.unitId === +projectId)
        : unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateGeneralInformationAsset = async (id: number, data: any): Promise<GeneralInformationView> => {
    try {
      const {questionare, parentFolder} = data;

      let item = await this.findOneGeneralInformationAsset(id);
      if (questionare) {
        if (!item.questionare) {
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "summary-list-of-equipment",
            parentFolder
          }, questionare);
        } else {
          const {id: docId} = item.questionare;
          await this.designDocumentService.removeOneDesignDocument(docId);
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "summary-list-of-equipment",
            parentFolder
          }, questionare);
        }
      }

      let facilityId = data.facilityId;
      const { facility } = data;

      if (facility) {
        const {id} = await this.createNewFacilityAsset(facility);
        facilityId = id;
      }

      const {
        projectId,
        unitId,
        subUnitId,
        installationLocation,
        tag,
        controlledParameter,
        systemType,
        facilityModification,
        factoryNumber,
        year,
        month,
        period,
        description,
        specification,
      } = data;

      const dto: UpdateGeneralInformationDto = {
        projectId,
        unitId,
        subUnitId,
        installationLocation,
        tag,
        controlledParameter,
        systemType,
        facilityModification,
        factoryNumber,
        year,
        month,
        period,
        specification,
        description,
        facilityId
      };
      await this.summaryListOfEquipmentRepository.update(dto, { where: { id } });
      item = await this.findOneGeneralInformationAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeGeneralInformationAsset = async (id: number): Promise<GeneralInformationView> => {
    try {
      const item = await this.findOneGeneralInformationAsset(id);
      await this.summaryListOfEquipmentRepository.destroy( { where: { id } });
      if (item.questionare) {
        const {id: docId} = item.questionare;
        await this.designDocumentService.removeOneDesignDocument(docId)
      }
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyGeneralInformationAssets = async (ids: number[]): Promise<GeneralInformationView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeGeneralInformationAsset(ids[i]);
      items.push(item)
    }
    return items
  };
//TODO: сделать интерфейс с файлом на добавление данных
  createNewGeneralInformationAsset = async (data: any): Promise<GeneralInformationView> => {
    try {
      const {questionare, parentFolder, facility} = data;

      let facilityId = data.facilityId;

      if (facility) {
        const {id} = await this.createNewFacilityAsset(facility);
        facilityId = id;
      }

      const {
        projectId,
        unitId,
        subUnitId,
        installationLocation,
        tag,
        controlledParameter,
        systemType,
        facilityModification,
        factoryNumber,
        year,
        month,
        period,
        description,
        specification,
      } = data;

      const dto = {
        projectId,
        unitId,
        subUnitId,
        installationLocation,
        tag,
        controlledParameter,
        systemType,
        facilityModification,
        factoryNumber,
        year,
        month,
        period,
        specification,
        description,
        facilityId
      };
      const {id} = await this.summaryListOfEquipmentRepository.create(dto);

      if (questionare) {
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "summary-list-of-equipment",
            parentFolder
          }, questionare);
      }

      const item = await this.findOneGeneralInformationAsset(id);

      return item;

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createManyGeneralInformationAssets = async (data: any[]): Promise<GeneralInformationView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewGeneralInformationAsset(data[i]);
      items.push(item)
    }
    return items;
  };

  /** Сигналы */

  private renderSignalAsset = async (signal: SignalEntity): Promise<SignalView> => {
    const {
      id,
      sloeId,
      sloe,
      signalTag,
      signalType,
      signalProtocol,
      signalParameter,
      emergencyProtocol,
      h,
      l,
      ll,
      hh
    } = signal;
    return {
      id,
      sloeId,
      unitId: sloe.subUnit.unit.id.toString(),
      unit: sloe.subUnit.unit.title,
      subUnitId: sloe.subUnit.id.toString(),
      subUnit: sloe.subUnit.title,
      tag: sloe.tag,
      signalTag,
      signalType,
      signalProtocol,
      signalParameter,
      h,
      l,
      ll,
      hh,
      emergencyProtocol,
      createdAt: +new Date(sloe.createdAt),
      updatedAt: +new Date(sloe.updatedAt),
    }
  };

  findOneSignalAsset = async (id: number): Promise<SignalView> => {
    try {
      const data = await this.signalRepository.findOne({
        where: {id},
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

      return this.renderSignalAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllSignalAssets = async (sloeId?: number, signalType?: string, signalProtocol?: string, unitId?: number, subUnitId?: number): Promise<SignalView[]> => {
    try {
      let items = [];
      const includes = [
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
      ];
      const data = sloeId || signalType || signalProtocol
      ? await this.signalRepository.findAll({where: sloeId ? {sloeId} : signalType ? {signalType} : {signalProtocol}, include: includes})
      : await this.signalRepository.findAll({ include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push(this.renderSignalAsset(data[i]));
      }

      const render = unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateSignalAsset = async (id: number, data: UpdateSignalDto): Promise<SignalView> => {
    try {
      const {sloeId, signalTag, signalType, signalProtocol, signalParameter, h, l, ll, hh, emergencyProtocol} = data;
      const dto: UpdateSignalDto = {sloeId, signalTag, signalType, signalProtocol, signalParameter, h, l, ll, hh, emergencyProtocol};
      await this.signalRepository.update(dto, { where: { id } });
      const item = await this.findOneSignalAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeSignalAsset = async (id: number): Promise<SignalView> => {
    try {
      const item = await this.findOneSignalAsset(id);
      await this.signalRepository.destroy( { where: { id } });
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManySignalAssets = async (ids: number[]): Promise<SignalView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeSignalAsset(ids[i]);
      items.push(item)
    }
    return items
  };

  createNewSignalAsset = async (data: CreateSignalDto): Promise<SignalView> => {
    try {
      const {sloeId, signalTag, signalType, signalProtocol, signalParameter, h, l, ll, hh, emergencyProtocol} = data;
      const dto: CreateSignalDto = {sloeId, signalTag, signalType, signalProtocol, signalParameter, h, l, ll, hh, emergencyProtocol}
      const {id} = await this.signalRepository.create(dto);
      const item = await this.findOneSignalAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  createManySignalAssets = async (data: CreateSignalDto[]): Promise<SignalView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewSignalAsset(data[i]);
      items.push(item)
    }
    return items;
  }

  /** Журнал импульсных линий */
  private renderImpulseLineLogAsset = (impulseLine: ImpulseLineLogEntity): ImpulseLineLogView => {
    const {id, sloeId, sloe, numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description} = impulseLine;
    return {
      id,
      sloeId,
      unitId: sloe.subUnit.unit.id.toString(),
      unit: sloe.subUnit.unit.title,
      subUnitId: sloe.subUnit.id.toString(),
      subUnit: sloe.subUnit.title,
      tag: sloe.tag,
      numberOfTrace,
      impulseLineType,
      fromPlace,
      toPlace,
      impulseLineLenght,
      range,
      description,
      createdAt: +new Date(sloe.createdAt),
      updatedAt: +new Date(sloe.updatedAt),
    }
  };

  findOneImpulseLineLogAsset = async (id: number): Promise<ImpulseLineLogView> => {
    try {
      const includes = [
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
      ];
      const data = await this.impulseLineLogRepository.findOne({where: {id}, include: includes});
      return this.renderImpulseLineLogAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllImpulseLineLogAssets = async (sloeId?: number, unitId?: number, subUnitId?: number): Promise<ImpulseLineLogView[]> => {
    try {
      let items = [];
      const includes =  [
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
      ];
      const data = sloeId ?  await this.impulseLineLogRepository.findAll({where: {sloeId} , include: includes})
        :  await this.impulseLineLogRepository.findAll({include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push( this.renderImpulseLineLogAsset(data[i]));
      }

      const render = unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateImpulseLineLogAsset = async (id: number, data: UpdateImpulseLineLogDto): Promise<ImpulseLineLogView> => {
    try {
      const {sloeId, numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description} = data;
      const dto: UpdateImpulseLineLogDto = {sloeId, numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description};
      await this.impulseLineLogRepository.update(dto, { where: { id } });
      const item = await this.findOneImpulseLineLogAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeImpulseLineLogAsset = async (id: number): Promise<ImpulseLineLogView> => {
    try {
      const item = await this.findOneImpulseLineLogAsset(id);
      await this.impulseLineLogRepository.destroy( { where: { id } });
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyImpulseLineLogAssets = async (ids: number[]): Promise<ImpulseLineLogView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeImpulseLineLogAsset(ids[i]);
      items.push(item)
    }
    return items
  };

  createNewImpulseLineLogAsset = async (data: CreateImpulseLineLogDto): Promise<ImpulseLineLogView> => {
    try {
      const {sloeId, numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description} = data;
      const dto: CreateImpulseLineLogDto = {sloeId, numberOfTrace, impulseLineType, fromPlace, toPlace, impulseLineLenght, range, description};
      const {id} = await this.impulseLineLogRepository.create(dto);
      const item = await this.findOneImpulseLineLogAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  createManyImpulseLineLogAssets = async (data: CreateImpulseLineLogDto[]): Promise<ImpulseLineLogView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewImpulseLineLogAsset(data[i]);
      items.push(item)
    }
    return items;
  }

  /** Кабельный журнал */
  private renderCableLogAsset = (cable: CableLogEntity): CableLogView => {
    const {id, sloeId, sloe, numberOfTrace, cableMark,  cableSection, fromUnit,
      fromPlace, toUnit, toPlace, cableLenght, wiringDiagram, range, description} = cable;
    return {
      id,
      sloeId,
      unitId: sloe.subUnit.unit.id.toString(),
      unit: sloe.subUnit.unit.title,
      subUnitId: sloe.subUnit.id.toString(),
      subUnit: sloe.subUnit.title,
      tag: sloe.tag,
      numberOfTrace,
      cableMark,
      cableSection,
      fromUnit,
      fromPlace,
      toUnit,
      toPlace,
      cableLenght,
      range,
      description,
      wiringDiagram,
      createdAt: +new Date(sloe.createdAt),
      updatedAt: +new Date(sloe.updatedAt),
    }
  };

  findOneCableLogAsset = async (id: number): Promise<CableLogView> => {
    try {
      const includes = [
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
      ];
      const data = await this.cableLogRepository.findOne({where: {id}, include: includes});
      return this.renderCableLogAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllCableLogAssets = async (sloeId?: number, unitId?: number, subUnitId?: number): Promise<CableLogView[]> => {
    try {
      let items = [];
      const includes = [
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
      ];
      const data = sloeId ?  await this.cableLogRepository.findAll({where: {sloeId} , include: includes})
        :  await this.cableLogRepository.findAll({include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push(this.renderCableLogAsset(data[i]));
      }

      const render = unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateCableLogAsset = async (id: number, data: any): Promise<CableLogView> => {
    try {
      const {wiringDiagram, parentFolder} = data;
      let item = await this.findOneCableLogAsset(id);
      if (wiringDiagram) {
        if (!item.wiringDiagram) {
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "cable-log",
            parentFolder
          }, wiringDiagram);
        } else {
          const {id: docId} = item.wiringDiagram;
          await this.designDocumentService.removeOneDesignDocument(docId);
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "cable-log",
            parentFolder
          }, wiringDiagram);
        }
      }
      const {sloeId, numberOfTrace, cableMark, cableSection, fromUnit, fromPlace, toUnit, toPlace, cableLenght, range, description} = data;
      const dto: UpdateCableLogDto = {sloeId, numberOfTrace, cableMark, cableSection, fromUnit, fromPlace, toUnit, toPlace, cableLenght, range, description};
      await this.cableLogRepository.update(dto, { where: { id } });
      item = await this.findOneCableLogAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeCableLogAsset = async (id: number): Promise<CableLogView> => {
    try {
      const item = await this.findOneCableLogAsset(id);
      await this.cableLogRepository.destroy( { where: { id } });
      if (item.wiringDiagram) {
        const {id: docId} = item.wiringDiagram;
        await this.designDocumentService.removeOneDesignDocument(docId)
      }
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyCableLogAssets = async (ids: number[]): Promise<CableLogView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeCableLogAsset(ids[i]);
      items.push(item)
    }
    return items
  };
//TODO: сделать интерфейс с файлом на добавление данных
  createNewCableLogAsset = async (data: any): Promise<CableLogView> => {
    try {
      const {wiringDiagram, parentFolder} = data;
      const {sloeId, numberOfTrace, cableMark, cableSection, fromUnit, fromPlace, toUnit, toPlace, cableLenght, range, description} = data;
      const dto: CreateCableLogDto =  {sloeId, numberOfTrace, cableMark, cableSection, fromUnit, fromPlace, toUnit, toPlace, cableLenght, range, description};
      const {id} = await this.cableLogRepository.create(dto);
      if (wiringDiagram) {
        await this.designDocumentService.uploadOneDesignDocument({parentId: id, parentTarget: "cable-log", parentFolder}, wiringDiagram);
      }
      const item = await this.findOneCableLogAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createManyCableLogAssets = async (data: any[]): Promise<CableLogView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewCableLogAsset(data[i]);
      items.push(item)
    }
    return items;
  };

  /** Мониторинг СРМ/ПНР */
  private renderMonitoringAsset = (monitoring: MonitoringEntity): MonitoringView => {
    const {id, sloeId, sloe, functionalDiagram, mountDate,  mountDocument, connectDate,
      connectDocument, testDate, testDocument, awpDate, awpDocument, commisionDate, commisionDocument} = monitoring;
    return {
      id,
      sloeId,
      unitId: sloe.subUnit.unit.id.toString(),
      unit: sloe.subUnit.unit.title,
      subUnitId: sloe.subUnit.id.toString(),
      subUnit: sloe.subUnit.title,
      tag: sloe.tag,
      functionalDiagram,
      mountDate,
      mountDocument,
      connectDate,
      connectDocument,
      testDate,
      testDocument,
      awpDate,
      awpDocument,
      commisionDate,
      commisionDocument,
      createdAt: +new Date(sloe.createdAt),
      updatedAt: +new Date(sloe.updatedAt),
    }
  };

  findOneMonitoringAsset = async (id?: number): Promise<MonitoringView> => {
    try {
      const includes = [
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
      ];
      const data = await this.monitoringRepository.findOne({where: {id}, include: includes});
      return this.renderMonitoringAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllMonitoringAssets = async (sloeId?: number, unitId?: number, subUnitId?: number): Promise<MonitoringView[]> => {
    try {
      let items = [];
      const includes = [
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
      ];
      const data = sloeId ?  await this.monitoringRepository.findAll({where: {sloeId} , include: includes})
        :  await this.monitoringRepository.findAll({include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push(this.renderMonitoringAsset(data[i]));
      }

      const render = unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateMonitoringAsset = async (id: number, data: any): Promise<MonitoringView> => {
    try {
      const {
        functionalDiagram : newFunctionalDiagram,
        mountDocument: newMountDocument,
        connectDocument: newConnectDocument,
        testDocument: newTestDocument,
        awpDocument: newAwpDocument,
        commisionDocument: newCommisionDocument,
        parentFolder
      } = data;

      let item = await this.findOneMonitoringAsset(id);

      if (newFunctionalDiagram) {
        if (!item.functionalDiagram) {
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "monitoring",
            parentFolder
          }, newFunctionalDiagram);
        } else {
          const {id: docId} = item.functionalDiagram;
          await this.designDocumentService.removeOneDesignDocument(docId);
          await this.designDocumentService.uploadOneDesignDocument({
            parentId: id,
            parentTarget: "monitoring",
            parentFolder
          }, newFunctionalDiagram);
        }
      };

      const fileFolder = this.newFileService.getPath([parentFolder, "Оборудование", "ФСА"]);
      let mountDocumentPath = "",
      connectDocumentPath = "",
      testDocumentPath ="",
      awpDocumentPath = "",
      commisionDocumentPath = "";

      if (newMountDocument) {
        if (!item.mountDocument) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newMountDocument, true);
          mountDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.mountDocument);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newMountDocument, true);
          mountDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newConnectDocument) {
        if (!item.connectDocument) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newConnectDocument, true);
          connectDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.connectDocument);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newConnectDocument, true);
          connectDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newTestDocument) {
        if (!item.testDocument) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTestDocument, true);
          testDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.testDocument);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTestDocument, true);
          testDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newAwpDocument) {
        if (!item.awpDocument) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newAwpDocument, true);
          awpDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.awpDocument);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newAwpDocument, true);
          awpDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newCommisionDocument) {
        if (!item.commisionDocument) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newCommisionDocument, true);
          commisionDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.commisionDocument);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newCommisionDocument, true);
          commisionDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }

      const {sloeId,  mountDate,  connectDate, testDate, awpDate, commisionDate} = data;
      const dto: UpdateMonitoringDto = {sloeId, mountDate,  connectDate, testDate,  awpDate, commisionDate}
      await this.monitoringRepository.update({
        ...dto,
        mountDocument: mountDocumentPath,
        connectDocument: connectDocumentPath,
        testDocument: testDocumentPath,
        awpDocument: awpDocumentPath,
        commisionDocument: commisionDocumentPath,
      }, { where: { id } });

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeMonitoringAsset = async (id: number): Promise<MonitoringView> => {
    try {
      const item = await this.findOneMonitoringAsset(id);
      const {functionalDiagram, mountDocument, connectDocument, testDocument, awpDocument, commisionDocument} = item;
      await this.monitoringRepository.destroy( { where: { id } });

      if (functionalDiagram) {
          const {id: docId} = item.functionalDiagram;
          await this.designDocumentService.removeOneDesignDocument(docId);
      };
      if (mountDocument) {
          this.newFileService.removeDirectoryOrFile(item.mountDocument);
      };
      if (connectDocument) {
          this.newFileService.removeDirectoryOrFile(item.connectDocument);
      };
      if (testDocument) {
          this.newFileService.removeDirectoryOrFile(item.testDocument);
      };
      if (awpDocument) {
          this.newFileService.removeDirectoryOrFile(item.awpDocument);
      };
      if (commisionDocument) {
          this.newFileService.removeDirectoryOrFile(item.commisionDocument);
      };

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyMonitoringAssets = async (ids: number[]): Promise<MonitoringView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeMonitoringAsset(ids[i]);
      items.push(item)
    }
    return items
  };
//TODO: сделать интерфейс с файлом на добавление данных
  createNewMonitoringAsset = async (data: any): Promise<MonitoringView> => {
    try {
      const {wiringDiagram, mountDocument, connectDocument, testDocument, awpDocument, commisionDocument, parentFolder} = data;

      const fileFolder = this.newFileService.getPath([parentFolder, "Оборудование", "ФСА"]);
      let mountDocumentPath = "",
        connectDocumentPath = "",
        testDocumentPath ="",
        awpDocumentPath = "",
        commisionDocumentPath = "";

      if (mountDocument) {
        const {fileName} = this.newFileService.fileUpload(fileFolder, mountDocument, true);
        mountDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
      }
      if (connectDocument) {
        const {fileName} = this.newFileService.fileUpload(fileFolder, connectDocument, true);
        connectDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
      }
      if (testDocument) {
        const {fileName} = this.newFileService.fileUpload(fileFolder, testDocument, true);
        testDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
      }
      if (awpDocument) {
        const {fileName} = this.newFileService.fileUpload(fileFolder, awpDocument, true);
        awpDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
      }
      if (commisionDocument) {
        const {fileName} = this.newFileService.fileUpload(fileFolder, commisionDocument, true);
        commisionDocumentPath = this.newFileService.getPath([fileFolder, fileName]);
      }

      const {sloeId,  mountDate,  connectDate, testDate, awpDate, commisionDate } = data;
      const dto: CreateMonitoringDto = {sloeId, mountDate,  connectDate, testDate,  awpDate, commisionDate};
      await this.monitoringRepository.create({...dto,
        mountDocument: mountDocumentPath,
        connectDocument: connectDocumentPath,
        testDocument: testDocumentPath,
        awpDocument: awpDocumentPath,
        commisionDocument: commisionDocumentPath});

      const {id} = await this.cableLogRepository.create(data);

      if (wiringDiagram) {
        await this.designDocumentService.uploadOneDesignDocument({parentId: id, parentTarget: "monitoring", parentFolder}, wiringDiagram);
      }

      const item = await this.findOneMonitoringAsset(id);
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  createManyMonitoringAssets = async (data: any[]): Promise<MonitoringView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewMonitoringAsset(data[i]);
      items.push(item)
    }
    return items;
  };

  /** Метрология */
  private renderMetrologyAsset = (metrology: MetrologyEntity): MetrologyView => {
    const {id, sloeId, sloe,  grsi, min, max, range, accuracy, mpi, metrologyType, documentType,
      documentNumber, document, counterpartyId, counterparty, verificationProcedure, typeApprovalCertificate,
      fromDate, toDate, status, arshin, sgroei} = metrology;
    return {
      id,
      sloeId,
      unitId: sloe.subUnit.unit.id.toString(),
      unit: sloe.subUnit.unit.title,
      subUnitId: sloe.subUnit.id.toString(),
      subUnit: sloe.subUnit.title,
      counterpartyId: counterpartyId,
      tag: sloe.tag,
      sgroei,
      measurementArea: sloe.facility.measurementArea,
      meansurementType: sloe.facility.meansurementType,
      meansureGroup: sloe.facility.meansureGroup,
      grsi,
      min,
      max,
      range,
      accuracy,
      mpi,
      metrologyType,
      documentType,
      documentNumber,
      document,
      verificationProcedure,
      typeApprovalCertificate,
      counterparty: counterpartyId ? counterparty?.title : "н/д",
      fromDate,
      toDate,
      status,
      arshin,
      createdAt: +new Date(sloe.createdAt),
      updatedAt: +new Date(sloe.updatedAt),
    }
  };

  findOneMetrologyAsset = async (id: number): Promise<MetrologyView> => {
    try {
      const includes = [
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
      ];
      const data = await this.metrologyRepository.findOne({where: {id}, include: includes});
      return this.renderMetrologyAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllMetrologyAssets = async (sloeId?: number, unitId?: number, subUnitId?: number): Promise<MetrologyView[]> => {
    try {
      let items = [];
      const includes = [
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
      ];
      const data = sloeId ?  await this.metrologyRepository.findAll({where: {sloeId} , include: includes})
        :  await this.metrologyRepository.findAll({include: includes});

      for (let i = 0; i < data.length; i++) {
        items.push(this.renderMetrologyAsset(data[i]));
      }

      const render = unitId
        ? items.filter((item) => +item.unitId === +unitId)
        : subUnitId
          ? items.filter((item) => +item.subUnitId === +subUnitId)
          : items;

      return render;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  updateMetrologyAsset = async (id: number, data: any): Promise<MetrologyView> => {
    try {
      const {
        document : newDocument,
        verificationProcedure: newVerificationProcedure,
        typeApprovalCertificate: newTypeApprovalCertificate,

        parentFolder
      } = data;

      let item = await this.findOneMetrologyAsset(id);


      const fileFolder = this.newFileService.getPath([parentFolder, "Оборудование", "Метрология"]);
      let documentPath = "",
        verificationProcedurePath = "",
        typeApprovalCertificatePath = "";


      if (newDocument) {
        if (!item.document) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newDocument, true);
          documentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.document);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newDocument, true);
          documentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newVerificationProcedure) {
        if (!item.verificationProcedure) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newVerificationProcedure, true);
          verificationProcedurePath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.verificationProcedure);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newVerificationProcedure, true);
          verificationProcedurePath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newTypeApprovalCertificate) {
        if (!item.typeApprovalCertificate) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTypeApprovalCertificate, true);
          typeApprovalCertificatePath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.typeApprovalCertificate);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTypeApprovalCertificate, true);
          typeApprovalCertificatePath = this.newFileService.getPath([fileFolder, fileName]);
        }
      };

      const { newCounterParty } = data;

      const counterpartyId = newCounterParty
        ? (await this.nsiService.createOne("counterparty", newCounterParty)).id
        : data.counterpartyId;

      const {sloeId, sgroei, grsi, min, max, range, accuracy, mpi,
        metrologyType, documentType, documentNumber, fromDate, toDate, status, arshin} = data;

      const dto: UpdateMetrologyDto = {sloeId, grsi, min, max, range, accuracy, mpi, metrologyType, documentType,
        documentNumber, counterpartyId, fromDate, toDate, status, arshin, sgroei}
      await this.metrologyRepository.update({
        ...dto,
        document: documentPath,
        verificationProcedure: verificationProcedurePath,
        typeApprovalCertificate: typeApprovalCertificatePath,
      }, { where: { id } });

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeMetrologyAsset = async (id: number): Promise<MetrologyView> => {
    try {
      const item = await this.findOneMetrologyAsset(id);
      const {document, verificationProcedure, typeApprovalCertificate} = item;
      await this.metrologyRepository.destroy( { where: { id } });
      if (document) {
        this.newFileService.removeDirectoryOrFile(item.document);
      };
      if (verificationProcedure) {
        this.newFileService.removeDirectoryOrFile(item.verificationProcedure);
      };
      if (typeApprovalCertificate) {
        this.newFileService.removeDirectoryOrFile(item.typeApprovalCertificate);
      };
      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyMetrologyAssets = async (ids: number[]): Promise<MetrologyView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeMetrologyAsset(ids[i]);
      items.push(item)
    }
    return items
  };
//TODO: сделать интерфейс с файлом на добавление данных
  createNewMetrologyAsset = async (data: any): Promise<MetrologyView> => {
    try {
      const {
        document,
        verificationProcedure,
        typeApprovalCertificate,
        parentFolder
      } = data;
      const fileFolder = this.newFileService.getPath([parentFolder, "Оборудование", "Метрология"]);
      let documentPath = "",
        verificationProcedurePath = "",
        typeApprovalCertificatePath = "";
        if (document) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, document, true);
          documentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
        if (verificationProcedure) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, verificationProcedure, true);
          verificationProcedurePath = this.newFileService.getPath([fileFolder, fileName]);
        }
        if (typeApprovalCertificate) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, typeApprovalCertificate, true);
          typeApprovalCertificatePath = this.newFileService.getPath([fileFolder, fileName]);
        }

      const { newCounterParty } = data;
      const counterpartyId = newCounterParty
        ? (await this.nsiService.createOne("counterparty", newCounterParty)).id
        : data.counterpartyId;

      const {sloeId, sgroei, grsi, min, max, range, accuracy, mpi,
        metrologyType, documentType, documentNumber, fromDate, toDate, status, arshin} = data;

      const dto: CreateMetrologyDto = {sloeId, grsi, min, max, range, accuracy, mpi, metrologyType, documentType,
        documentNumber, counterpartyId, fromDate, toDate, status, arshin, sgroei};

     const {id} = await this.metrologyRepository.create({
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

  createManyMetrologyAssets = async (data: any[]): Promise<MetrologyView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewMetrologyAsset(data[i]);
      items.push(item)
    }
    return items;
  };

  /** создание единицы оборудования */
  private renderSummaryListOfEquipmentAsset = async (equipment: SummaryListOfEquipmentEntity): Promise<SummaryListOfEquipmentView> => {
    const { id, facilityId, subUnitId, subUnit, tag, installationLocation, facilityModification,
      equipmentQuestionare, systemType, controlledParameter, factoryNumber,
      year, month, period, specification, description, createdAt, updatedAt} = equipment;

    return {
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
      metrology: (await this.findAllMetrologyAssets( id))[0],
      signals: await this.findAllSignalAssets(id),
      cableLog: await this.findAllCableLogAssets( id),
      impulseLineLog: await this.findAllImpulseLineLogAssets(id),
      monitoring: (await this.findAllMonitoringAssets(id))[0],
      createdAt: +new Date(createdAt),
      updatedAt: +new Date(updatedAt)
    }
  }

  findOneSummaryListOfEquipmentAsset = async (id: number): Promise<SummaryListOfEquipmentView> => {

    try {
      const includes =  [
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
      ];
      const data = await this.summaryListOfEquipmentRepository.findOne({where: {id}, include: includes});
      return await this.renderSummaryListOfEquipmentAsset(data);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findAllSummaryListOfEquipmentAssets = async (parentTarget: string, parentId: number): Promise<SummaryListOfEquipmentView[]> => {
    try {
      let items = [];
      const includes =  [
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
      ];

      const data = parentTarget === "project" ?  await this.summaryListOfEquipmentRepository.findAll({where: {projectId: parentId} , include: includes})
        :  parentTarget === "unit" ? await this.summaryListOfEquipmentRepository.findAll({where: {unitId: parentId} , include: includes})
          : await this.summaryListOfEquipmentRepository.findAll({where: {subUnitId: parentId} , include: includes})

      for (let i = 0; i < data.length; i++) {
        items.push(await this.renderSummaryListOfEquipmentAsset(data[i]));
      }

      return items;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  //FIXME: сделать сервис обновления всей записи
  updateSummaryListOfEquipmentAsset= async (id: number, data: any): Promise<MetrologyView> => {
    try {
      const {
        document : newDocument,
        verificationProcedure: newVerificationProcedure,
        typeApprovalCertificate: newTypeApprovalCertificate,

        parentFolder
      } = data;

      let item = await this.findOneMetrologyAsset(id);


      const fileFolder = this.newFileService.getPath([parentFolder, "Оборудование", "Метрология"]);
      let documentPath = "",
        verificationProcedurePath = "",
        typeApprovalCertificatePath = "";


      if (newDocument) {
        if (!item.document) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newDocument, true);
          documentPath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.document);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newDocument, true);
          documentPath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newVerificationProcedure) {
        if (!item.verificationProcedure) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newVerificationProcedure, true);
          verificationProcedurePath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.verificationProcedure);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newVerificationProcedure, true);
          verificationProcedurePath = this.newFileService.getPath([fileFolder, fileName]);
        }
      }
      if (newTypeApprovalCertificate) {
        if (!item.typeApprovalCertificate) {
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTypeApprovalCertificate, true);
          typeApprovalCertificatePath = this.newFileService.getPath([fileFolder, fileName]);
        } else {
          this.newFileService.removeDirectoryOrFile(item.typeApprovalCertificate);
          const {fileName} = this.newFileService.fileUpload(fileFolder, newTypeApprovalCertificate, true);
          typeApprovalCertificatePath = this.newFileService.getPath([fileFolder, fileName]);
        }
      };

      const { newCounterParty } = data;

      const counterpartyId = newCounterParty
        ? (await this.nsiService.createOne("counterparty", newCounterParty)).id
        : data.counterpartyId;

      const {sloeId, sgroei, grsi, min, max, range, accuracy, mpi,
        metrologyType, documentType, documentNumber, fromDate, toDate, status, arshin} = data;

      const dto: UpdateMetrologyDto = {sloeId, grsi, min, max, range, accuracy, mpi, metrologyType, documentType,
        documentNumber, counterpartyId, fromDate, toDate, status, arshin, sgroei}
      await this.metrologyRepository.update({
        ...dto,
        document: documentPath,
        verificationProcedure: verificationProcedurePath,
        typeApprovalCertificate: typeApprovalCertificatePath,
      }, { where: { id } });

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeSummaryListOfEquipmentAsset = async (id: number): Promise<SummaryListOfEquipmentView> => {
    try {
      const item = await this.findOneSummaryListOfEquipmentAsset(id);
      const {metrology: {id: metrologyId}, cableLog, impulseLineLog, signals, monitoring: {id: monitoringId}} = item;

      await this.removeMonitoringAsset(+monitoringId);
      await this.removeMetrologyAsset(+metrologyId);

      for(let c = 0; c < cableLog.length; c++) {
        const {id} = cableLog[c]
        await this.removeCableLogAsset(+id)
      }
      for(let s = 0; s < signals.length; s++) {
        const {id} = signals[s]
        await this.removeSignalAsset(+id)
      }
      for(let i = 0; i < impulseLineLog.length; i++) {
        const {id} = impulseLineLog[i]
        await this.removeImpulseLineLogAsset(+id)
      }

      await this.removeGeneralInformationAsset(id);

      return item;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManySummaryListOfEquipmentAssets = async (ids: number[]): Promise<SummaryListOfEquipmentView[]> => {
    const items = [];
    for(let i = 0; i < ids.length; i++) {
      const item = await this.removeSummaryListOfEquipmentAsset(ids[i]);
      items.push(item)
    }
    return items
  };

    //TODO: доделать с вариантом подгрузки из формы (добавить документы), добавить создание записей в таблицах ТОРО и Атлас
  createNewEquipmentAsset = async (data: any): Promise<SummaryListOfEquipmentView> => {

    const {parentFolder, generalInformation, signals, cableLog, impulseLineLog, monitoring, metrology} = data;

    const {id: sloeId} = await this.createNewGeneralInformationAsset({parentFolder, ...generalInformation});
    if (signals.length > 0) {
      for (let s = 0; s < signals.length; s++) {
        const signal = signals[s];
        await this.createNewSignalAsset({sloeId, ...signal})
      }
    }
    if (cableLog.length > 0) {
      for (let c = 0; c < cableLog.length; c++) {
        const cable = cableLog[c];
        await this.createNewCableLogAsset({sloeId, parentFolder, ...cable})
      }
    }
    if (impulseLineLog.length > 0) {
      for (let i = 0; i < impulseLineLog.length; i++) {
        const impulseLine = impulseLineLog[i];
        await this.createNewImpulseLineLogAsset({sloeId, ...impulseLine})
      }
    }
    if(monitoring) {
      await this.createNewMonitoringAsset({sloeId, parentFolder, ...monitoring});
    }
    if(metrology) {
      await this.createNewMetrologyAsset({sloeId, parentFolder, ...metrology});
    }

    return await this.findOneSummaryListOfEquipmentAsset(+sloeId);

  };

  createManyEquipmentAssets = async (data: any[]): Promise<SummaryListOfEquipmentView[]> => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.createNewEquipmentAsset(data[i]);
      items.push(item)
    }
    return items;
  };

  /** Импорт данных свода оборудования из файла xlsx */
    //TODO: добавить объект с полями для таблицы ТОРО и АТЛАС
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

      // if(item["17"]) {
      //   return documents.filter(doc => getDocName(doc).toLowerCase() === item["17"].toLowerCase())[0].originalname
      // }


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

      const parentFolder =this.newFileService.getPath([
        parentFolderPath,
        "002. Объекты",
        this.newFileService.generateFolderName(unitCode, unitId),
        "002. Объекты",
          this.newFileService.generateFolderName(subUnitCode, subUnitId)
      ]);


      const equipmentAsset = {
        parentFolder,
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
        monitoring: !item["68"] && !item["69"] && !item["70"] && !item["71"] && !item["72"] && !item["17"] ? null : {
          functionalDiagram: item["17"] ? documents.filter(document => getDocName(document).toLowerCase() === item["17"].toLowerCase())[0] : null,
          mountDate: item["68"] ? item["68"] : "01.01.1970",
          connectDate: item["69"] ? item["69"] : "",
          testDate: item["70"] ? item["70"] : "",
          awpDate: item["71"] ? item["71"] : "",
          commisionDate: item["72"] ? item["72"] : ""
        }

      }

      items.filter(elem => elem.generalInformation.tag === item["8"]).length === 0 && items.push(equipmentAsset)

    }

    const res = [];

    for(let i = 0; i < items.length; i++) {
      const item = items[i];
      res.push(await this.createNewEquipmentAsset(item))

    }

    return res;


    //
    // return res;
  }


  /** Печать ОЛ в PDF */

  printQuestionnaire = async (delay: number, template: string, fileName: string, options?: Object,) => {
    function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
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
    const file = await this.printQuestionnaire(5000, template(data, target), pathToFile, {
      format: 'A4',
      orientation: "portrait"
    })
    return file
  }


  /** To ATLAS */

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


}