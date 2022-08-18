import { Injectable } from "@nestjs/common";
import {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
} from "./dto";

@Injectable()
export class RegulatoryReferenceInformationService {
  create(target: string, dto: CreateRegulatoryReferenceInformationDto) {
    return "This action adds a new commentAccounting";
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: string) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(
    id: string,
    target: string,
    dto: UpdateRegulatoryReferenceInformationDto
  ) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: string) {
    return `This action removes a #${id} commentAccounting`;
  }
}
