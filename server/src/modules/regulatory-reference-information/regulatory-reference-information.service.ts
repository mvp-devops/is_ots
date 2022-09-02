import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FileStorageService, LogoEntity } from "../file-storage";
import { SubsidiaryEntity } from "../position-tree";
import {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
} from "./dto";
import {
  UpdateCriticalityDto,
  UpdateDesignOrCounterpartyDto,
  UpdateNSIDto,
} from "./dto/update-regulatory-reference-information.dto";
import {
  CounterpartyEntity,
  CriticalityEntity,
  DesignEntity,
  DirectionEntity,
  EquipmentEntity,
  UserEntity,
  StageEntity,
  SectionEntity,
} from "./entities";

type RegulatoryReferenceInformationView =
  | CounterpartyEntity
  | CriticalityEntity
  | DesignEntity
  | DirectionEntity
  | EquipmentEntity
  | StageEntity
  | SectionEntity
  | null;

@Injectable()
export class RegulatoryReferenceInformationService {
  constructor(
    @InjectModel(CounterpartyEntity)
    private counterpartyRepository: typeof CounterpartyEntity,
    @InjectModel(CriticalityEntity)
    private criticalityRepository: typeof CriticalityEntity,
    @InjectModel(DesignEntity) private designRepository: typeof DesignEntity,
    @InjectModel(DirectionEntity)
    private directionRepository: typeof DirectionEntity,
    @InjectModel(EquipmentEntity)
    private equipmentRepository: typeof EquipmentEntity,
    @InjectModel(UserEntity) private userRepository: typeof UserEntity,
    @InjectModel(StageEntity)
    private stageRepository: typeof StageEntity,
    @InjectModel(SectionEntity)
    private sectionRepository: typeof SectionEntity,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService
  ) {}

  createOne = async (
    target: string,
    dto: CreateRegulatoryReferenceInformationDto,
    file?: any
  ): Promise<RegulatoryReferenceInformationView> => {
    let item: RegulatoryReferenceInformationView = null;

    switch (target) {
      case "counterparty": {
        item = await this.counterpartyRepository.create(dto);
        break;
      }
      case "criticality": {
        item = await this.criticalityRepository.create(dto);
        break;
      }
      case "design": {
        item = await this.designRepository.create(dto);
        break;
      }
      case "direction": {
        item = await this.directionRepository.create(dto);
        break;
      }
      case "equipment": {
        item = await this.equipmentRepository.create(dto);
        break;
      }
      case "stage": {
        item = await this.stageRepository.create(dto);
        break;
      }
      case "section": {
        item = await this.sectionRepository.create(dto);
        break;
      }
      // case "user": {
      //   item = await this.userRepository.create(dto);
      //   break;
      // }
      default:
        break;
    }

    file &&
      (target === "design" || target === "counterparty" || target === "user") &&
      (await this.fileService.createLogo(item.id.toString(), target, file));

    return item;
  };

  createMany = async (
    target: string,
    dto: CreateRegulatoryReferenceInformationDto[]
  ): Promise<RegulatoryReferenceInformationView[]> => {
    const items: RegulatoryReferenceInformationView[] = [];
    for (let i = 0; i < dto.length; i++) {
      const item = await this.createOne(target, dto[i]);
      items.push(item);
    }
    return items;
  };

  update = async (
    id: string,
    target: string,
    dto: UpdateRegulatoryReferenceInformationDto,
    file?: any
  ): Promise<RegulatoryReferenceInformationView> => {
    let item: RegulatoryReferenceInformationView = null;

    switch (target) {
      case "counterparty": {
        await this.counterpartyRepository.update(
          <UpdateDesignOrCounterpartyDto>dto,
          { where: { id } }
        );
        item = await this.counterpartyRepository.findOne({ where: { id } });
        break;
      }
      case "criticality": {
        await this.criticalityRepository.update(<UpdateCriticalityDto>dto, {
          where: { id },
        });
        item = await this.criticalityRepository.findOne({ where: { id } });
        break;
      }
      case "design": {
        await this.designRepository.update(<UpdateNSIDto>dto, {
          where: { id },
        });
        item = await this.designRepository.findOne({ where: { id } });
        break;
      }
      case "direction": {
        await this.directionRepository.update(<UpdateNSIDto>dto, {
          where: { id },
        });
        item = await this.directionRepository.findOne({ where: { id } });
        break;
      }
      case "equipment": {
        await this.equipmentRepository.update(<UpdateNSIDto>dto, {
          where: { id },
        });
        item = await this.equipmentRepository.findOne({ where: { id } });
        break;
      }
      case "stage": {
        await this.stageRepository.update(<UpdateNSIDto>dto, { where: { id } });
        item = await this.stageRepository.findOne({ where: { id } });
        break;
      }
      case "section": {
        await this.sectionRepository.update(<UpdateNSIDto>dto, {
          where: { id },
        });
        item = await this.sectionRepository.findOne({ where: { id } });
        break;
      }

      // case "user": {

      //   await this.userRepository.update((<UpdateUserDto>)dto, { where: { id } });
      //   item = await this.userRepository.findOne( { where: { id } });
      //   break;
      // }
      default:
        break;
    }

    file &&
      (target === "design" || target === "counterparty" || target === "user") &&
      (await this.fileService.updateLogo(id, target, file));

    return item;
  };

  remove = async (
    id: string,
    target: string
  ): Promise<RegulatoryReferenceInformationView> => {
    let item: any = null;

    switch (target) {
      case "counterparty": {
        item = await this.counterpartyRepository.findOne({ where: { id } });
        await this.fileService.deleteLogo(id, target);
        await this.counterpartyRepository.destroy({ where: { id } });
        break;
      }
      case "criticality": {
        item = await this.criticalityRepository.findOne({ where: { id } });
        await this.criticalityRepository.destroy({ where: { id } });
        break;
      }
      case "design": {
        item = await this.designRepository.findOne({ where: { id } });
        await this.fileService.deleteLogo(id, target);
        await this.designRepository.destroy({ where: { id } });
        break;
      }
      case "direction": {
        item = await this.directionRepository.findOne({ where: { id } });
        await this.directionRepository.destroy({ where: { id } });
        break;
      }
      case "equipment": {
        item = await this.equipmentRepository.findOne({ where: { id } });
        await this.equipmentRepository.destroy({ where: { id } });
        break;
      }
      case "stage": {
        item = await this.stageRepository.findOne({ where: { id } });
        await this.stageRepository.destroy({ where: { id } });
        break;
      }
      case "section": {
        item = await this.sectionRepository.findOne({ where: { id } });
        await this.sectionRepository.destroy({ where: { id } });
        break;
      }
      // case "user": {
      //   item = await this.userRepository.findOne( { where: { id } });
      // await this.fileService.deleteLogo(id, target);
      //   await this.userRepository.destroy( { where: { id } });
      //   break;
      // }
      default:
        break;
    }

    return item;
  };

  findOne = async (
    target: string,
    id: string
  ): Promise<RegulatoryReferenceInformationView> => {
    let item: RegulatoryReferenceInformationView = null;

    switch (target) {
      case "counterparty": {
        item = await this.counterpartyRepository.findOne({
          where: { id },
          include: [
            {
              model: LogoEntity,
            },
          ],
        });
        break;
      }
      case "criticality": {
        item = await this.criticalityRepository.findOne({
          where: { id },
        });
        break;
      }
      case "design": {
        item = await this.designRepository.findOne({
          where: { id },
          include: [
            {
              model: LogoEntity,
            },
          ],
        });
        break;
      }
      case "direction": {
        item = await this.directionRepository.findOne({
          where: { id },
        });
        break;
      }
      case "equipment": {
        item = await this.equipmentRepository.findOne({
          where: { id },
          include: [],
        });
        break;
      }
      // case "user": {
      //   item = await this.userRepository.findOne({
      //     where: { id },
      //     include: [
      //       {
      //         model: LogoEntity,
      //       },
      //       {
      //         model: SubsidiaryEntity,
      //       },
      //     ],
      //   });
      //   break;
      // }
      case "stage": {
        item = await this.stageRepository.findOne({
          where: { id },
          include: [],
        });
        break;
      }
      case "section": {
        item = await this.sectionRepository.findOne({
          where: { id },
          include: [],
        });
        break;
      }
      default:
        break;
    }

    return item;
  };

  findAll = async (
    target: string
  ): Promise<RegulatoryReferenceInformationView[]> => {
    let items: RegulatoryReferenceInformationView[] = [];

    switch (target) {
      case "counterparty": {
        items = await this.counterpartyRepository.findAll({
          include: [
            {
              model: LogoEntity,
            },
          ],
        });
        break;
      }
      case "criticality": {
        items = await this.criticalityRepository.findAll({});
        break;
      }
      case "design": {
        items = await this.designRepository.findAll({
          include: [
            {
              model: LogoEntity,
            },
          ],
        });
        break;
      }
      case "direction": {
        items = await this.directionRepository.findAll({});
        break;
      }
      case "equipment": {
        items = await this.equipmentRepository.findAll({
          include: [],
        });
        break;
      }
      // case "user": {
      //   items = await this.userRepository.findAll({
      //     include: [
      //       {
      //         model: LogoEntity,
      //       },
      //       {
      //         model: SubsidiaryEntity,
      //       },
      //     ],
      //   });
      //   break;
      // }
      case "stage": {
        items = await this.stageRepository.findAll({
          include: [],
        });
        break;
      }
      case "section": {
        items = await this.sectionRepository.findAll({
          include: [],
        });
        break;
      }
      default:
        break;
    }

    return items;
  };
}
