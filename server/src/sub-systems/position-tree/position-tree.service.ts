import { PartialType } from "@nestjs/mapped-types";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { LogoEntity } from "../file-storage";
import { FileStorageService } from "../file-storage/file-storage.service";
import { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";
import {
  FieldEntity,
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "./entities";

export interface PositionTreeItem
  extends FieldEntity,
    ProjectEntity,
    SubsidiaryEntity,
    SubUnitEntity,
    UnitEntity {}

@Injectable()
export class PositionTreeService {
  constructor(
    @InjectModel(SubsidiaryEntity)
    private subsidiaryRepository: typeof SubsidiaryEntity,
    private fieldRepository: typeof FieldEntity,
    private projectRepository: typeof ProjectEntity,
    private unitRepository: typeof UnitEntity,
    private subUnitRepository: typeof SubUnitEntity,
    private logoRepository: typeof LogoEntity,
    private fileService: FileStorageService
  ) {}

  async createOne(target: string, dto: any, file?: any) {
    let item: any = null;
    let folderName = "";

    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.create(dto);
        const { id, code } = item;
        folderName = this.fileService.generateFolderName(target, id, code);
        break;
      }
      case "field": {
        const item = await this.fieldRepository.create(dto);
        const { id, code, subsidiaryId } = item;
        const parrent = await this.subsidiaryRepository.findOne({
          where: { id: subsidiaryId },
          attributes: ["id", "code"],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.id,
          parrent.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          target,
          id,
          code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}`;
        break;
      }
      case "project": {
        item = await this.projectRepository.create(dto);
        const { id, code, description, fieldId } = item;
        const parrent = await this.fieldRepository.findOne({
          where: { id: fieldId },
          attributes: ["id", "code"],
          include: [
            {
              model: SubsidiaryEntity,
              attributes: ["id", "code"],
            },
          ],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.subsidiary.id,
          parrent.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.id,
          parrent.code
        );
        const folder = this.fileService.generateFolderName(
          target,
          id,
          code,
          description
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${folder}`;
        break;
      }
      case "unit": {
        item = await this.unitRepository.create(dto);
        const { id, code, position, projectId } = item;
        const parrent = await this.projectRepository.findOne({
          where: { id: projectId },
          attributes: ["id", "code", "description"],
          include: [
            {
              model: FieldEntity,
              attributes: ["id", "code"],
              include: [
                {
                  model: SubsidiaryEntity,
                  attributes: ["id", "code"],
                },
              ],
            },
          ],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.field.subsidiary.id,
          parrent.field.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.field.id,
          parrent.field.code
        );
        const projectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.id,
          parrent.code,
          parrent.description
        );
        const folder = this.fileService.generateFolderName(
          target,
          id,
          position,
          code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${folder}`;
        break;
      }
      case "sub-unit": {
        item = await this.subUnitRepository.create(dto);
        const { id, code, position, unitId } = item;
        const parrent = await this.unitRepository.findOne({
          where: { id: unitId },
          attributes: ["id", "code", "position"],
          include: [
            {
              model: ProjectEntity,
              attributes: ["id", "code", "description"],
              include: [
                {
                  model: FieldEntity,
                  attributes: ["id", "code"],
                  include: [
                    {
                      model: SubsidiaryEntity,
                      attributes: ["id", "code"],
                    },
                  ],
                },
              ],
            },
          ],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.project.field.subsidiary.id,
          parrent.project.field.subsidiary.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.project.field.id,
          parrent.project.field.code
        );
        const projectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.project.id,
          parrent.project.code,
          parrent.project.description
        );
        const unitFolder = this.fileService.generateFolderName(
          "unit",
          parrent.id,
          parrent.position,
          parrent.code
        );
        const folder = this.fileService.generateFolderName(
          target,
          id,
          position,
          code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${unitFolder}/002. Объекты/${folder}`;
        break;
      }
      default:
        break;
    }

    this.fileService.createDirectory(folderName);

    file &&
      (await this.fileService.createLogo(
        this.logoRepository,
        item.id.toString(),
        target,
        file
      ));

    return item;
  }

  async findOne(id: string, target: string) {
    const item = await this.subsidiaryRepository.findOne({
      where: { id },
      include: [
        { model: LogoEntity, attributes: ["file"] },
        // {
        //   model: FieldEntity,
        //   include: [
        //     {
        //       model: ProjectEntity,
        //       include: [
        //         {
        //           model: DesignDocumentEntity,
        //           as: "projectDocs",
        //           include: [
        //             {
        //               model: DesignDocsComment,
        //               as: "pdc",
        //             },
        //           ],
        //         },
        //         {
        //           model: Unit,
        //           include: [
        //             { model: Equipment },
        //             { model: Counterparty },
        //             {
        //               model: SubUnit,
        //             },
        //             {
        //               model: DesignDocument,
        //               as: "unitDocs",
        //               include: [
        //                 {
        //                   model: DesignDocsComment,
        //                   as: "udc",
        //                   include: [
        //                     {
        //                       model: DesignDocsSolution,
        //                     },
        //                   ],
        //                 },
        //               ],
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    });

    return item;
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  update(id: string, target: string, dto: UpdatePositionTreeDto) {
    return `This action updates a #${id} commentAccounting`;
  }

  remove(id: string) {
    return `This action removes a #${id} commentAccounting`;
  }
}
