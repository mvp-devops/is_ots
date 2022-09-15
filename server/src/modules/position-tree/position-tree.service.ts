import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CheckListSets } from "../../../common/types/comments-accounting";
import { PositionTreeItem } from "../../../common/types/position-tree";
import {
  CheckListService,
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "../comment-accounting";
import {
  DesignDocumentEntity,
  FileStorageService,
  LogoEntity,
} from "../file-storage";
import {
  CounterpartyEntity,
  DesignEntity,
  EquipmentEntity,
  UserEntity,
} from "../regulatory-reference-information";
import {
  CreatePositionTreeDto,
  UpdatePositionTreeDto,
  UpdateFieldDto,
  CreateProjectDto,
  CreateUnitDto,
  UpdateUnitDto,
  UpdateSubUnitDto,
} from "./dto";
import {
  FieldEntity,
  ProjectEntity,
  SubsidiaryEntity,
  SubUnitEntity,
  UnitEntity,
} from "./entities";

type PositionTreeView =
  | SubsidiaryEntity
  | FieldEntity
  | ProjectEntity
  | UnitEntity
  | SubUnitEntity
  | null;

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

    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService,

    @Inject(forwardRef(() => CheckListService))
    private readonly checkListService: CheckListService
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

  createOne = async (
    target: string,
    dto: CreatePositionTreeDto,
    file?: any
  ): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;
    let folderName = "";

    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.create(dto);
        const { id, code } = item;
        folderName = this.fileService.generateFolderName(target, id, code);

        file &&
          (await this.fileService.createLogo(item.id.toString(), target, file));
        item = await this.findOne(target, id.toString());
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
        item = await this.findOne(target, id.toString());
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

        item = await this.findOne(target, id.toString());
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

        // const pathToFile = `${folderName}/ОЛ, ТТ, ТЗ`;
        // this.fileService.createDirectory(pathToFile);

        file &&
          (await this.fileService.createDesignDocument(
            item.id.toString(),
            target,
            folderName,
            file
          ));
        item = await this.findOne(target, id.toString());
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
        // const pathToFile = `${folderName}/ОЛ, ТТ, ТЗ`;
        // this.fileService.createDirectory(pathToFile);

        file &&
          (await this.fileService.createDesignDocument(
            item.id.toString(),
            target,
            folderName,
            file
          ));
        item = await this.findOne(target, id.toString());
        break;
      }
      default:
        break;
    }

    this.fileService.createDirectory(folderName);

    return item;
  };

  createMany = async (
    target: string,
    dto: CreatePositionTreeDto[],
    files?: any[]
  ): Promise<PositionTreeView[]> => {
    const items: PositionTreeView[] = [];
    for (let i = 0; i < dto.length; i++) {
      const item = await this.createOne(target, dto[i]);
      items.push(item);
    }
    return items;
  };

  findOne = async (target: string, id: string): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;
    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.findOne({
          where: { id },
          include: [
            {
              model: LogoEntity,
              attributes: ["id", "fileType", "fileName", "filePath"],
            },
            {
              model: FieldEntity,
              attributes: [
                "subsidiaryId",
                "id",
                "title",
                "code",
                "description",
              ],
            },
            {
              model: UserEntity,
            },
          ],
        });
        break;
      }
      case "field": {
        item = await this.fieldRepository.findOne({
          where: { id },
          include: [
            {
              model: SubsidiaryEntity,
            },
            {
              model: ProjectEntity,
              attributes: [
                "fieldId",
                "designId",
                "id",
                "title",
                "code",
                "contract",
                "description",
              ],
            },
          ],
        });
        break;
      }
      case "project": {
        item = await this.projectRepository.findOne({
          where: { id },
          attributes: [
            "fieldId",
            "designId",
            "id",
            "title",
            "code",
            "contract",
            "description",
          ],
          include: [
            {
              model: FieldEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: UnitEntity,
            },
            {
              model: DesignEntity,
            },
            {
              model: DesignDocumentEntity,
              as: "projectDocuments",
              attributes: [
                "id",
                "title",
                "code",
                "revision",
                "fileType",
                "fileName",
                "filePath",
              ],
            },
          ],
        });
        break;
      }
      case "unit": {
        item = await this.unitRepository.findOne({
          where: { id },
          attributes: [
            "projectId",
            "equipmentId",
            "supplierId",

            "id",
            "title",
            "code",
            "position",
            "contract",
            "description",
          ],
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
            {
              model: SubUnitEntity,
              attributes: [
                "unitId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
            },
            {
              model: EquipmentEntity,
              attributes: ["id", "title", "code", "description"],
            },
            {
              model: CounterpartyEntity,
              attributes: ["id", "title", "code", "description"],
            },
            {
              model: DesignDocumentEntity,
              as: "unitDocuments",
              attributes: [
                "id",
                "title",
                "code",
                "revision",
                "fileType",
                "fileName",
                "filePath",
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "unitQuestionare",
              attributes: [
                "id",
                "title",
                "code",
                "revision",
                "fileType",
                "fileName",
                "filePath",
              ],
            },
          ],
        });
        break;
      }
      case "sub-unit": {
        item = await this.subUnitRepository.findOne({
          where: { id },
          attributes: [
            "unitId",
            "equipmentId",
            "supplierId",

            "id",
            "title",
            "code",
            "position",
            "contract",
            "description",
          ],
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
            {
              model: EquipmentEntity,
              attributes: ["id", "title", "code", "description"],
            },
            {
              model: CounterpartyEntity,
              attributes: ["id", "title", "code", "description"],
            },
            {
              model: DesignDocumentEntity,
              as: "subUnitDocuments",
              attributes: [
                "id",
                "title",
                "code",
                "revision",
                "fileType",
                "fileName",
                "filePath",
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "subUnitQuestionare",
              attributes: [
                "id",
                "title",
                "code",
                "revision",
                "fileType",
                "fileName",
                "filePath",
              ],
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
    target: string,
    parrentId?: string
  ): Promise<PositionTreeView[]> => {
    let items: PositionTreeView[] = [];

    switch (target) {
      case "subsidiary": {
        items = await this.subsidiaryRepository.findAll({
          include: [
            {
              model: LogoEntity,
              attributes: ["id", "fileType", "fileName", "filePath"],
            },
            {
              model: FieldEntity,
              attributes: [
                "subsidiaryId",
                "id",
                "title",
                "code",
                "description",
              ],
            },
            {
              model: UserEntity,
            },
          ],
        });
        break;
      }
      case "field": {
        items = parrentId
          ? await this.fieldRepository.findAll({
              where: { subsidiaryId: parrentId },
              include: [
                {
                  model: SubsidiaryEntity,
                },
                {
                  model: ProjectEntity,
                  attributes: [
                    "fieldId",
                    "designId",
                    "id",
                    "title",
                    "code",
                    "contract",
                    "description",
                  ],
                },
              ],
            })
          : await this.fieldRepository.findAll({
              include: [
                {
                  model: SubsidiaryEntity,
                },
                {
                  model: ProjectEntity,
                  attributes: [
                    "fieldId",
                    "designId",
                    "id",
                    "title",
                    "code",
                    "contract",
                    "description",
                  ],
                },
              ],
            });
        break;
      }
      case "project": {
        items = parrentId
          ? await this.projectRepository.findAll({
              where: { fieldId: parrentId },
              attributes: [
                "fieldId",
                "designId",
                "id",
                "title",
                "code",
                "contract",
                "description",
              ],
              include: [
                {
                  model: FieldEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
                {
                  model: UnitEntity,
                },
                {
                  model: DesignEntity,
                },
                {
                  model: DesignDocumentEntity,
                  as: "projectDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
          : await this.projectRepository.findAll({
              attributes: [
                "fieldId",
                "designId",
                "id",
                "title",
                "code",
                "contract",
                "description",
              ],
              include: [
                {
                  model: FieldEntity,
                  include: [
                    {
                      model: SubsidiaryEntity,
                    },
                  ],
                },
                {
                  model: UnitEntity,
                },
                {
                  model: DesignEntity,
                },
                {
                  model: DesignDocumentEntity,
                  as: "projectDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
        break;
      }
      case "unit": {
        items = parrentId
          ? await this.unitRepository.findAll({
              where: { projectId: parrentId },
              attributes: [
                "projectId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
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
                {
                  model: SubUnitEntity,
                  attributes: [
                    "unitId",
                    "equipmentId",
                    "supplierId",

                    "id",
                    "title",
                    "code",
                    "position",
                    "contract",
                    "description",
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
          : await this.unitRepository.findAll({
              attributes: [
                "projectId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
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
                {
                  model: SubUnitEntity,
                  attributes: [
                    "unitId",
                    "equipmentId",
                    "supplierId",

                    "id",
                    "title",
                    "code",
                    "position",
                    "contract",
                    "description",
                  ],
                },
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
        break;
      }
      case "sub-unit": {
        items = parrentId
          ? await this.subUnitRepository.findAll({
              where: { unitId: parrentId },
              attributes: [
                "unitId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
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
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            })
          : await this.subUnitRepository.findAll({
              attributes: [
                "unitId",
                "equipmentId",
                "supplierId",

                "id",
                "title",
                "code",
                "position",
                "contract",
                "description",
              ],
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
                {
                  model: EquipmentEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: CounterpartyEntity,
                  attributes: ["id", "title", "code", "description"],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "subUnitQuestionare",
                  attributes: [
                    "id",
                    "title",
                    "code",
                    "revision",
                    "fileType",
                    "fileName",
                    "filePath",
                  ],
                },
              ],
            });
        break;
      }

      default:
        break;
    }
    return items;
  };

  update = async (
    id: string,
    target: string,
    dto: UpdatePositionTreeDto,
    file?: any
  ): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;

    let oldFolderName = "";
    let newFolderName = "";

    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.findOne({ where: { id } });
        file &&
          (await this.fileService.updateLogo(item.id.toString(), target, file));
        if (dto.code) {
          oldFolderName = this.fileService.generateFolderName(
            target,
            +id,
            item.code
          );
          newFolderName = this.fileService.generateFolderName(
            target,
            +id,
            dto.code
          );
        }
        await this.subsidiaryRepository.update(dto, { where: { id } });
        item = await this.subsidiaryRepository.findOne({ where: { id } });
        break;
      }
      case "field": {
        item = await this.fieldRepository.findOne({ where: { id } });
        const oldParrent = await this.subsidiaryRepository.findOne({
          where: { id: item.subsidiaryId },
          attributes: ["id", "code"],
        });

        const newParrent = (<UpdateFieldDto>dto).subsidiaryId
          ? await this.subsidiaryRepository.findOne({
              where: { id: (<UpdateFieldDto>dto).subsidiaryId },
              attributes: ["id", "code"],
            })
          : null;

        const oldSubsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          oldParrent.id,
          oldParrent.code
        );
        const newSubsidiaryFolderName = newParrent
          ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.id,
              newParrent.code
            )
          : "";
        const oldFieldFolderName = this.fileService.generateFolderName(
          target,
          +id,
          item.code
        );
        const newFieldFolderName = dto.code
          ? this.fileService.generateFolderName(target, +id, dto.code)
          : "";

        oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}`;

        newFolderName =
          newParrent && newFieldFolderName
            ? `${newSubsidiaryFolderName}/${newFieldFolderName}`
            : newParrent && !newFieldFolderName
            ? `${newSubsidiaryFolderName}/${oldFieldFolderName}`
            : !newParrent && newFieldFolderName
            ? `${oldSubsidiaryFolderName}/${newFieldFolderName}`
            : "";

        await this.fieldRepository.update(dto, { where: { id } });
        item = await this.fieldRepository.findOne({ where: { id } });
        break;
      }
      case "project": {
        item = await this.projectRepository.findOne({ where: { id } });
        const parrent = await this.fieldRepository.findOne({
          where: { id: item.fieldId },
          attributes: ["id", "code"],
          include: [
            {
              model: SubsidiaryEntity,
              attributes: ["id", "code"],
            },
          ],
        });
        const newParrent = (<CreateProjectDto>dto).fieldId
          ? await this.fieldRepository.findOne({
              where: { id: (<CreateProjectDto>dto).fieldId },
              attributes: ["id", "code"],
              include: [
                {
                  model: SubsidiaryEntity,
                  attributes: ["id", "code"],
                },
              ],
            })
          : null;

        const oldSubsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.subsidiary.id,
          parrent.subsidiary.code
        );

        const newSubsidiaryFolderName = newParrent
          ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.subsidiary.id,
              newParrent.subsidiary.code
            )
          : "";

        const oldFieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.id,
          parrent.code
        );

        const newFieldFolderName = newParrent
          ? this.fileService.generateFolderName(
              "field",
              newParrent.id,
              newParrent.code
            )
          : "";

        const parrentFolderName = newParrent
          ? `${newSubsidiaryFolderName}/${newFieldFolderName}`
          : `${oldSubsidiaryFolderName}/${oldFieldFolderName}`;

        const oldFolder = this.fileService.generateFolderName(
          target,
          +id,
          item.code,
          item.description
        );

        oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldFolder}`;

        const newFolder =
          dto.code && dto.description
            ? this.fileService.generateFolderName(
                target,
                +id,
                dto.code,
                dto.description
              )
            : dto.code && !dto.description
            ? this.fileService.generateFolderName(
                target,
                +id,
                dto.code,
                item.description
              )
            : !dto.code && dto.description
            ? this.fileService.generateFolderName(
                target,
                +id,
                item.code,
                dto.description
              )
            : "";

        newFolderName =
          newFolder && newFieldFolderName
            ? `${parrentFolderName}/${newFolder}`
            : newFolder && !newFieldFolderName
            ? `${parrentFolderName}/${newFolder}`
            : !newFolder && newFieldFolderName
            ? `${parrentFolderName}/${oldFolder}`
            : "";

        await this.projectRepository.update(dto, { where: { id } });
        item = await this.projectRepository.findOne({ where: { id } });
        break;
      }
      case "unit": {
        item = await this.unitRepository.findOne({ where: { id } });
        const parrent = await this.projectRepository.findOne({
          where: { id: item.projectId },
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
        const newParrent = (<UpdateUnitDto>dto).projectId
          ? await this.projectRepository.findOne({
              where: { id: (<UpdateUnitDto>dto).projectId },
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
            })
          : null;

        const oldSubsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.field.subsidiary.id,
          parrent.field.subsidiary.code
        );

        const newSubsidiaryFolderName = newParrent
          ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.field.subsidiary.id,
              newParrent.field.subsidiary.code
            )
          : "";

        const oldFieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.field.id,
          parrent.field.code
        );

        const newFieldFolderName = newParrent
          ? this.fileService.generateFolderName(
              "field",
              newParrent.field.id,
              newParrent.field.code
            )
          : "";

        const oldProjectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.id,
          parrent.code,
          parrent.description
        );

        const newProjectFolderName = newParrent
          ? this.fileService.generateFolderName(
              "project",
              newParrent.id,
              newParrent.code,
              newParrent.description
            )
          : "";

        const parrentFolderName = newParrent
          ? `${newSubsidiaryFolderName}/${newFieldFolderName}/${newProjectFolderName}/002. Объекты`
          : `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты`;

        const oldFolder = this.fileService.generateFolderName(
          target,
          +id,
          item.position,
          item.code
        );

        oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldFolder}`;

        const newFolder =
          dto.code && (<UpdateUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateUnitDto>dto).position,
                dto.code
              )
            : dto.code && !(<UpdateUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                item.position,
                dto.code
              )
            : !dto.code && (<UpdateUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateUnitDto>dto).position,
                item.code
              )
            : "";

        newFolderName =
          newFolder && newProjectFolderName
            ? `${parrentFolderName}/${newFolder}`
            : newFolder && !newProjectFolderName
            ? `${parrentFolderName}/${newFolder}`
            : !newFolder && newProjectFolderName
            ? `${parrentFolderName}/${oldFolder}`
            : "";

        await this.unitRepository.update(dto, { where: { id } });
        item = await this.unitRepository.findOne({ where: { id } });

        break;
      }
      case "sub-unit": {
        item = await this.subUnitRepository.findOne({ where: { id } });
        const parrent = await this.unitRepository.findOne({
          where: { id: item.unitId },
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
        const newParrent = (<UpdateSubUnitDto>dto).unitId
          ? await this.unitRepository.findOne({
              where: { id: (<UpdateSubUnitDto>dto).unitId },
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
            })
          : null;

        const oldSubsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.project.field.subsidiary.id,
          parrent.project.field.subsidiary.code
        );

        const newSubsidiaryFolderName = newParrent
          ? this.fileService.generateFolderName(
              "subsidiary",
              newParrent.project.field.subsidiary.id,
              newParrent.project.field.subsidiary.code
            )
          : "";

        const oldFieldFolderName = this.fileService.generateFolderName(
          "field",
          parrent.project.field.id,
          parrent.project.field.code
        );

        const newFieldFolderName = newParrent
          ? this.fileService.generateFolderName(
              "field",
              newParrent.project.field.id,
              newParrent.project.field.code
            )
          : "";

        const oldProjectFolderName = this.fileService.generateFolderName(
          "project",
          parrent.project.id,
          parrent.project.code,
          parrent.project.description
        );

        const newProjectFolderName = newParrent
          ? this.fileService.generateFolderName(
              "project",
              newParrent.project.id,
              newParrent.project.code,
              newParrent.project.description
            )
          : "";

        const oldUnitFolderName = this.fileService.generateFolderName(
          "project",
          parrent.id,
          parrent.position,
          parrent.code
        );

        const newUnitFolderName = newParrent
          ? this.fileService.generateFolderName(
              "project",
              newParrent.id,
              newParrent.position,
              newParrent.code
            )
          : "";

        const parrentFolderName = newParrent
          ? `${newSubsidiaryFolderName}/${newFieldFolderName}/${newProjectFolderName}/002. Объекты/${newUnitFolderName}/002. Объекты`
          : `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldUnitFolderName}/002. Объекты`;

        const oldFolder = this.fileService.generateFolderName(
          target,
          +id,
          item.position,
          item.code
        );

        oldFolderName = `${oldSubsidiaryFolderName}/${oldFieldFolderName}/${oldProjectFolderName}/002. Объекты/${oldUnitFolderName}/002. Объекты/${oldFolder}`;

        const newFolder =
          dto.code && (<UpdateSubUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateSubUnitDto>dto).position,
                dto.code
              )
            : dto.code && !(<UpdateSubUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                item.position,
                dto.code
              )
            : !dto.code && (<UpdateSubUnitDto>dto).position
            ? this.fileService.generateFolderName(
                target,
                +id,
                (<UpdateSubUnitDto>dto).position,
                item.code
              )
            : "";

        newFolderName =
          newFolder && newUnitFolderName
            ? `${parrentFolderName}/${newFolder}`
            : newFolder && !newUnitFolderName
            ? `${parrentFolderName}/${newFolder}`
            : !newFolder && newUnitFolderName
            ? `${parrentFolderName}/${oldFolder}`
            : "";

        await this.subUnitRepository.update(dto, { where: { id } });
        item = await this.subUnitRepository.findOne({ where: { id } });
        // file &&
        // (await this.fileService.updateDesignDocument(
        //   item.id.toString(),
        //   target,
        //   oldFolderName,
        //   file
        // ));
        break;
      }
      default:
        break;
    }

    newFolderName &&
      this.fileService.moveDirectoryOrFile(oldFolderName, newFolderName);

    return item;
  };

  remove = async (id: string, target: string): Promise<PositionTreeView> => {
    let item: PositionTreeView = null;
    let folderName = "";

    switch (target) {
      case "subsidiary": {
        item = await this.subsidiaryRepository.findOne({ where: { id } });
        folderName = this.fileService.generateFolderName(
          target,
          item.id,
          item.code
        );
        await this.fileService.deleteLogo(id, target);
        await this.subsidiaryRepository.destroy({ where: { id } });
        break;
      }
      case "field": {
        item = await this.fieldRepository.findOne({ where: { id } });
        const parrent = await this.subsidiaryRepository.findOne({
          where: { id: item.subsidiaryId },
          attributes: ["id", "code"],
        });
        const subsidiaryFolderName = this.fileService.generateFolderName(
          "subsidiary",
          parrent.id,
          parrent.code
        );
        const fieldFolderName = this.fileService.generateFolderName(
          target,
          item.id,
          item.code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}`;
        await this.fieldRepository.destroy({ where: { id } });
        break;
      }
      case "project": {
        item = await this.projectRepository.findOne({ where: { id } });
        const parrent = await this.fieldRepository.findOne({
          where: { id: item.fieldId },
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
          item.id,
          item.code,
          item.description
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${folder}`;
        break;
      }
      case "unit": {
        item = await this.unitRepository.findOne({ where: { id } });
        const parrent = await this.projectRepository.findOne({
          where: { id: item.projectId },
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
          item.id,
          item.position,
          item.code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${folder}`;
        break;
      }
      case "sub-unit": {
        item = await this.subUnitRepository.findOne({ where: { id } });
        const parrent = await this.unitRepository.findOne({
          where: { id: item.unitId },
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
          item.id,
          item.position,
          item.code
        );
        folderName = `${subsidiaryFolderName}/${fieldFolderName}/${projectFolderName}/002. Объекты/${unitFolder}/002. Объекты/${folder}`;
        break;
      }
      default:
        break;
    }

    this.fileService.removeDirectoryOrFile(folderName);

    return item;
  };

  download = async (
    data: PositionTreeView[] | PositionTreeView,
    folder: string,
    fileName: string,
    fileType: string
  ): Promise<string> => {
    const file = this.fileService.fileDownload(
      data,
      folder,
      fileName,
      fileType
    );

    return file;
  };

  getCheckList = async (
    target: string,
    id: string,
    settings: CheckListSets
  ) => {
    let item: ProjectEntity | UnitEntity | null = null;
    let checkList = null;

    switch (target) {
      case "project": {
        item = await this.projectRepository.findOne({
          where: { id },
          attributes: [
            "fieldId",
            "designId",
            "id",
            "title",
            "code",
            "contract",
            "description",
          ],
          include: [
            {
              model: FieldEntity,
              include: [
                {
                  model: SubsidiaryEntity,
                },
              ],
            },
            {
              model: UnitEntity,
              include: [
                {
                  model: SubUnitEntity,
                  include: [
                    {
                      model: DesignDocumentEntity,
                      as: "subUnitDocuments",

                      include: [
                        {
                          model: DesignDocumentCommentEntity,
                          as: "sudc",
                          include: [
                            {
                              model: DesignDocumentSolutionEntity,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: DesignDocumentEntity,
                  as: "unitDocuments",

                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "udc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              model: DesignEntity,
            },
            {
              model: DesignDocumentEntity,
              as: "projectDocuments",

              include: [
                {
                  model: DesignDocumentCommentEntity,
                  as: "pdc",
                  include: [
                    {
                      model: DesignDocumentSolutionEntity,
                    },
                  ],
                },
              ],
            },
          ],
        });
        checkList = this.checkListService.projectChecklist(item, settings);
        break;
      }
      case "unit": {
        item = await this.unitRepository.findOne({
          where: { id },
          attributes: [
            "projectId",
            "equipmentId",
            "supplierId",
            "id",
            "position",
            "title",
            "code",
            "contract",
            "description",
          ],
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
            {
              model: SubUnitEntity,
              include: [
                {
                  model: DesignDocumentEntity,
                  as: "subUnitDocuments",

                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "sudc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              model: DesignDocumentEntity,
              as: "unitDocuments",

              include: [
                {
                  model: DesignDocumentCommentEntity,
                  as: "udc",
                  include: [
                    {
                      model: DesignDocumentSolutionEntity,
                    },
                  ],
                },
              ],
            },

            {
              model: CounterpartyEntity,
              include: [
                {
                  model: DesignDocumentEntity,
                  as: "supplierDocuments",

                  include: [
                    {
                      model: DesignDocumentCommentEntity,
                      as: "sdc",
                      include: [
                        {
                          model: DesignDocumentSolutionEntity,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        });
        checkList = this.checkListService.unitChecklist(item, settings);
        break;
      }
      // case "sub-unit": {
      //   item = await this.subUnitRepository.findOne({
      //     where: { id },
      //     attributes: [
      //       "projectId",
      //       "equipmentId",
      //       "supplierId",
      //       "id",
      //       "position",
      //       "title",
      //       "code",
      //       "contract",
      //       "description",
      //     ],
      //     include: [
      //       {
      //         model: UnitEntity,
      //         include: [
      //           {
      //             model: ProjectEntity,
      //             include: [
      //               {
      //                 model: FieldEntity,
      //                 include: [
      //                   {
      //                     model: SubsidiaryEntity
      //                   }
      //                 ]
      //               }
      //             ]
      //         }
      //         ]
      //       },

      //       {
      //         model: DesignDocumentEntity,
      //         as: "subUnitDocuments",

      //         include: [
      //           {
      //             model: DesignDocumentCommentEntity,
      //             as: "sudc",
      //             include: [
      //               {
      //                 model: DesignDocumentSolutionEntity,
      //               },
      //             ],
      //           },
      //         ],
      //       },

      //       {
      //         model: CounterpartyEntity,
      //       },
      //       {
      //         model: DesignDocumentEntity,
      //         as: "supplierDocuments",

      //         include: [
      //           {
      //             model: DesignDocumentCommentEntity,
      //             as: "sdc",
      //             include: [
      //               {
      //                 model: DesignDocumentSolutionEntity,
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   });
      //   checkList = this.checkListService.unitChecklist(item, settings);
      //   break;
      // }

      default:
        break;
    }

    return checkList;
  };
}
