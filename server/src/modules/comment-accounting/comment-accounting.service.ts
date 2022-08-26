import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  CreateDesignDocumentCommentDto,
  UpdateDesignDocumentCommentDto,
} from "./dto";
import { DesignDocumentCommentEntity } from "./entities";

@Injectable()
export class CommentAccountingService {
  constructor(
    @InjectModel(DesignDocumentCommentEntity)
    private commentRepository: typeof DesignDocumentCommentEntity
  ) // @Inject(forwardRef(() => RegulatoryReferenceInformationService))
  // private nsiService: RegulatoryReferenceInformationService
  {}

  create(dto: CreateDesignDocumentCommentDto) {
    return "This action adds a new commentAccounting";
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentAccounting`;
  }

  update(
    id: number,
    updateCommentAccountingDto: UpdateDesignDocumentCommentDto
  ) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentAccounting`;
  }
}
