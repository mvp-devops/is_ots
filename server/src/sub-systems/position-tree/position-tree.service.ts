import { Injectable } from "@nestjs/common";
import { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";

@Injectable()
export class PositionTreeService {
  create(target: string, dto: CreatePositionTreeDto) {
    return "This action adds a new commentAccounting";
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: string) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(id: string, target: string, dto: UpdatePositionTreeDto) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: string) {
    return `This action removes a #${id} commentAccounting`;
  }
}
