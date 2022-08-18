import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PositionTreeItem } from "../../../common/types/position-tree";
import { FileStorageService, LogoEntity } from "../file-storage";
import { CreatePositionTreeDto, UpdatePositionTreeDto } from "./dto";
import {
  FieldEntity,
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "./entities";

// export interface PositionTreeItem
//   extends FieldEntity,
//     ProjectEntity,
//     SubsidiaryEntity,
//     SubUnitEntity,
//     UnitEntity {}

@Injectable()
export class PositionTreeService {
  constructor(
    @InjectModel(SubsidiaryEntity)
    private subsidiaryRepository: typeof SubsidiaryEntity,
    @InjectModel(FieldEntity)
    private fieldRepository: typeof FieldEntity,
    @InjectModel(ProjectEntity)
    private projectRepository: typeof ProjectEntity,
    @InjectModel(UnitEntity)
    private unitRepository: typeof UnitEntity,
    @InjectModel(SubUnitEntity)
    private subUnitRepository: typeof SubUnitEntity,
    // @InjectModel(LogoEntity)
    // private logoRepository: typeof LogoEntity,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService
  ) {}

  getPositionTree = async (): Promise<PositionTreeItem[]> => {
    let items: PositionTreeItem[] = [];

    const subsidiaries: SubsidiaryEntity[] =
      await this.subsidiaryRepository.findAll({
        attributes: ["id", "title"],
        include: [
          {
            model: FieldEntity,
            attributes: ["subsidiaryId", "id", "title"],
            include: [
              {
                model: ProjectEntity,
                attributes: ["fieldId", "id", "title", "code"],
                include: [
                  {
                    model: UnitEntity,
                    attributes: ["projectId", "id", "position", "title"],
                    include: [
                      {
                        model: SubUnitEntity,
                        attributes: ["unitId", "id", "position", "title"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

    for (let i = 0; i < subsidiaries.length; i++) {
      const { id, title, fields } = subsidiaries[i];

      let subsidiaryChildren: PositionTreeItem[] = [];

      for (let j = 0; j < fields.length; j++) {
        const { subsidiaryId, id, title, projects } = fields[j];
        let fieldChilren: PositionTreeItem[] = [];

        for (let p = 0; p < projects.length; p++) {
          const { fieldId, id, title, code, units } = projects[p];
          let projectChildren: PositionTreeItem[] = [];

          for (let u = 0; u < units.length; u++) {
            const { projectId, id, position, title, subUnits } = units[u];
            let unitChildren: PositionTreeItem[] = [];

            for (let su = 0; su < subUnits.length; su++) {
              const { unitId, id, position, title } = subUnits[su];

              const unitChild = {
                target: "sub-unit",
                childrenTarget: "",
                keys: [
                  subsidiaryId.toString(),
                  fieldId.toString(),
                  projectId.toString(),
                  unitId.toString(),
                  id.toString(),
                ],
                key: `${subsidiaryId.toString()}-${fieldId.toString()}-${projectId.toString()}-${unitId.toString()}-${id.toString()}`,
                id: id.toString(),
                title: `${position}. ${title}`,
              };
              unitChildren.push(unitChild);
            }

            const projectChild = {
              target: "unit",
              childrenTarget: "sub-unit",
              keys: [
                subsidiaryId.toString(),
                fieldId.toString(),
                projectId.toString(),
                id.toString(),
              ],
              key: `${subsidiaryId.toString()}-${fieldId.toString()}-${projectId.toString()}-${id.toString()}`,
              id: id.toString(),
              title: `${position}. ${title}`,
              children: unitChildren,
            };
            projectChildren.push(projectChild);
          }

          const fieldChild = {
            target: "project",
            childrenTarget: "unit",
            keys: [subsidiaryId.toString(), fieldId.toString(), id.toString()],
            key: `${subsidiaryId.toString()}-${fieldId.toString()}-${id.toString()}`,
            id: id.toString(),
            title: `${code}. ${title}`,
            children: projectChildren,
          };
          fieldChilren.push(fieldChild);
        }

        const subsidiaryChild = {
          target: "field",
          childrenTarget: "project",
          keys: [subsidiaryId.toString(), id.toString()],
          key: `${subsidiaryId.toString()}-${id.toString()}`,
          id: id.toString(),
          title,
          children: fieldChilren,
        };
        subsidiaryChildren.push(subsidiaryChild);
      }

      const item = {
        target: "subsidiary",
        childrenTarget: "field",
        keys: [id.toString()],
        key: id.toString(),
        id: id.toString(),
        title,
        children: subsidiaryChildren,
      };

      items.push(item);
    }

    return items;
  };

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
        item = await this.fieldRepository.create(dto);
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
      target === "subsidiary" &&
      (await this.fileService.createLogo(item.id.toString(), target, file));

    return item;
  }

  async createMany(target: string, dto: any[], files?: any[]) {
    for (let i = 0; i < dto.length; i++) {
      await this.createOne(target, dto[i]);
    }
  }

  async findOne(target: string, id: string) {
    let item: any = {};
    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.findOne({
          where: { id },
          include: [
            {
              model: LogoEntity,
              attributes: ["filePath", "fileType", "fileName"],
            },
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
        break;
      }
      case "field": {
        item = await this.fieldRepository.findOne({
          where: { id },
          include: [
            // { model: LogoEntity, attributes: ["file"] },
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
        break;
      }
      case "project": {
        item = await this.projectRepository.findOne({
          where: { id },
          include: [
            // { model: LogoEntity, attributes: ["file"] },
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
        break;
      }
      case "unit": {
        item = await this.unitRepository.findOne({
          where: { id },
          include: [
            // { model: LogoEntity, attributes: ["file"] },
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
        break;
      }
      case "sub-unit": {
        item = await this.subUnitRepository.findOne({
          where: { id },
          include: [
            // { model: LogoEntity, attributes: ["file"] },
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
        break;
      }

      default:
        break;
    }

    return item;
  }

  findAll() {
    return `This action returns all commentAccounting`;
  }

  async update(
    id: string,
    target: string,
    dto: UpdatePositionTreeDto,
    file?: any
  ) {
    return `This action updates a #${id} commentAccounting`;
  }

  async remove(id: string, target: string) {
    const item = await this.findOne(id, target);
    // const { title, logo } = item.render[0];
    // const folderName: string = this.getFolderName(id, title);

    // if (logo) {
    //   this.fileService.removeDirectoryOrFile(logo);
    // }

    // await this.logoRepository.destroy({ where: { subsidiaryId: id } });

    // await this.repository.destroy({ where: { id } });
    // this.fileService.removeDirectoryOrFile(folderName);
  }
}
