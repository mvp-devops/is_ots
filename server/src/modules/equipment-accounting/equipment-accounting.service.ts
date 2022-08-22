import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FacilityView } from "common/types/equipment-accounting";
import { FacilityEntity } from "./entities";

@Injectable()
export class EquipmentAccountingService {
  constructor(
    @InjectModel(FacilityEntity)
    private facilityRepository: typeof FacilityEntity
  ) // @InjectModel(FieldEntity)
  // private fieldRepository: typeof FieldEntity,
  // @InjectModel(ProjectEntity)
  // private projectRepository: typeof ProjectEntity,
  // @InjectModel(UnitEntity)
  // private unitRepository: typeof UnitEntity,
  // @InjectModel(SubUnitEntity)
  // private subUnitRepository: typeof SubUnitEntity,

  // @Inject(forwardRef(() => FileStorageService))
  // private fileService: FileStorageService
  {}

  getFacilitiesList = async (): Promise<FacilityView[]> => {
    const items = this.facilityRepository.findAll();

    return items;
  };
  create(dto: any) {
    return "This action adds a new commentAccounting";
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(id: number, dto: any) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentAccounting`;
  }
}
