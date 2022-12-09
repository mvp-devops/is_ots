import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  TechnicalCardCreateOrUpdateAttrs,
  TechnicalCardOperationCreateOrUpdateAttrs,
  UserView,
} from "../../../common/types/regulatory-reference-information";
import { FileStorageService, LogoEntity } from "../file-storage";
import { SubsidiaryEntity, FieldEntity } from "../position-tree";
import {
  CounterpartyEntity,
  CriticalityEntity,
  DesignEntity,
  DirectionEntity,
  EquipmentEntity,
  UserEntity,
  StageEntity,
  SectionEntity,
  TechnicalCardEntity,
  TechnicalCardOperationEntity,
} from "./entities";
import {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
} from "./dto";

import {CreateGlossaryDto, CreateUserDto} from "./dto/create-regulatory-reference-information.dto";

import {
  UpdateCriticalityDto,
  UpdateDesignOrCounterpartyDto,
  UpdateNSIDto,
} from "./dto/update-regulatory-reference-information.dto";
import { ExcelService } from "../file-storage/excel.service";
import { formattedDate } from "../../../common/utils/formatDate.pipe";
import {GlossaryEntity} from "./entities/schemas/glossary.entry";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id: number, email: string) => {
  return jwt.sign({ id, email }, "is_ots", { expiresIn: "24h" });
};

type RegulatoryReferenceInformationView =
  | CounterpartyEntity
  | CriticalityEntity
  | DesignEntity
  | DirectionEntity
  | EquipmentEntity
  | StageEntity
  | SectionEntity
  | TechnicalCardEntity
  | null;

type NsiEntity =
  | CounterpartyEntity
  | DesignEntity
  | EquipmentEntity
  | CriticalityEntity
  | SectionEntity
  | StageEntity
  | DirectionEntity
  | TechnicalCardEntity;

interface NsiView {
  id: number;
  title: string;
  code: string | number;
  description: string;
  threshold?: number;
  goal?: number;
  tenseGoal?: number;
  createdDate: string;
  updatedDate: string;
}

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
    @InjectModel(GlossaryEntity)
    private glossaryRepository: typeof GlossaryEntity,
    @InjectModel(TechnicalCardEntity)
    private technicalCardRepository: typeof TechnicalCardEntity,
    @InjectModel(TechnicalCardOperationEntity)
    private technicalCardOperationRepository: typeof TechnicalCardOperationEntity,

    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService
  ) {}

  createAsset = async (data: CreateGlossaryDto[], target: string): Promise<GlossaryEntity[]> => {
    const items:GlossaryEntity[] = [];
    for (let i = 0; i < data.length; i++) {
      const item = await this.glossaryRepository.create(data[i]);
      items.push(item);
    }
    return items;
}

getAssets = async (target: string): Promise<GlossaryEntity[]> => {
    const items = await this.glossaryRepository.findAll();

    return items
}

  renderItem = (item: NsiEntity): NsiView => {
    const { id, title, code, description, createdAt, updatedAt } = item;

    if (item instanceof CriticalityEntity) {
      return {
        id,
        title,
        code,
        description,
        threshold: +item.threshold,
        goal: +item.goal,
        tenseGoal: +item.tenseGoal,
        createdDate: formattedDate(createdAt, true),
        updatedDate: formattedDate(updatedAt, true),
      };
    } else {
      return {
        id,
        title,
        code,
        description,
        createdDate: formattedDate(createdAt, true),
        updatedDate: formattedDate(updatedAt, true),
      };
    }
  };

  userRegistration = async (
    dto: CreateUserDto,
    file?: any
  ): Promise<UserView> => {
    let item: UserEntity | null = null;
    let token = "";

    try {
      const candidate = await this.userRepository.findOne({
        where: { email: dto.email.toLocaleLowerCase() },
      });
      if (!candidate) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        item = await this.userRepository.create({
          ...dto,
          email: dto.email.toLocaleLowerCase(),
          password: hashPassword,
        });

        file &&
          (await this.fileService.createLogo(item.id.toString(), "user", file));

        token = item && generateJwt(item.id, item.email);
      }
      const {
        id,
        subsidiaryId,
        designId,
        counterpartyId,
        fieldId,
        firstName,
        secondName,
        lastName,
        subdivision,
        position,
        email,
        phone,
        roles,
        subsidiary,
        design,
        counterparty,
        field,
        avatar,
      } = await this.userRepository.findOne({
        where: { id: item.id },
        include: [
          {
            model: SubsidiaryEntity,
          },
          {
            model: CounterpartyEntity,
          },
          {
            model: DesignEntity,
          },
          {
            model: FieldEntity,
          },
          {
            model: LogoEntity,
          },
        ],
      });

      return {
        id,
        subsidiaryId,
        subsidiaryTitle: subsidiary ? subsidiary.title : null,
        designId,
        designTitle: design ? design.title : null,
        counterpartyId,
        counterpartyTitle: counterparty ? counterparty.title : null,
        fieldId,
        fieldTitle: field ? field.title : null,
        firstName,
        secondName,
        lastName,
        subdivision,
        position,
        email,
        phone,
        roles,
        token,
        avatar: avatar ? `logo/${avatar.fileName}` : null,
      };
    } catch (e) {
      throw new HttpException(
        "Пользователь с таким e-mail уже существует",
        HttpStatus.CONFLICT
      );
    }
  };

  userLogin = async (email: string, password: string): Promise<UserEntity> => {
    try {
      const item = await this.userRepository.findOne({
        where: { email: email.toLocaleLowerCase() },
      });
      if (!item) {
        throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
      } else {
        const comparePassword = bcrypt.compareSync(password, item.password);
        if (!comparePassword) {
          throw new HttpException("Не верный пароль", HttpStatus.UNAUTHORIZED);
        }
        const token = generateJwt(item.id, item.email);
      }

      return item;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

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
      case "technical-card": {
        const { id } = await this.technicalCardRepository.create(
          dto as TechnicalCardCreateOrUpdateAttrs
        );
        const { operations } = dto as TechnicalCardCreateOrUpdateAttrs;
        if (operations.length > 0) {
          for (let i = 0; i < operations.length; i++) {
            const technicalCardId = id;
            const elem = { ...operations[i], technicalCardId };
            await this.technicalCardOperationRepository.create(elem);
          }
          item = await this.findOne(target, id.toString());
        }
        break;
      }
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
      case "technical-card": {
        await this.technicalCardRepository.update(<UpdateNSIDto>dto, {
          where: { id },
        });
        item = await this.findOne(target, id);
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
      case "technical-card": {
        item = await this.technicalCardRepository.findOne({ where: { id } });
        await this.technicalCardRepository.destroy({ where: { id } });
        await this.technicalCardOperationRepository.destroy({
          where: { technicalCardId: id },
        });
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
      case "technical-card": {
        item = await this.technicalCardRepository.findOne({
          where: { id },
          include: [
            {
              model: TechnicalCardOperationEntity,
            },
          ],
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
    let items: RegulatoryReferenceInformationView[] | NsiEntity[] = [];

    const renderData: NsiView[] = [];

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

      case "technical-card": {
        items = await this.technicalCardRepository.findAll({
          include: [
            {
              model: TechnicalCardOperationEntity,
            },
          ],
        });

        break;
      }
      default:
        break;
    }

    items.map((item) => renderData.push(this.renderItem(item)));

    return items;
  };

  downdoad = async (target: string) => {
    const items = await this.findAll(target);
    const file = await this.excelService.exportNsiToExcel(target, items);

    return file;
  };

  downdoadTechCards = (): string => {
    const fileName = "fd548fff-b961-4f70-81bd-c371d92a32aqq.xlsx";
    const filePath = this.fileService.getFilePath("normative");
    const fileLocation = `${filePath}\\${fileName}`;
    return fileLocation;
  };
}