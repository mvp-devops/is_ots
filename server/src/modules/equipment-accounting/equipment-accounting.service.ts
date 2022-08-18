import { Injectable } from "@nestjs/common";

@Injectable()
export class EquipmentAccountingService {
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
