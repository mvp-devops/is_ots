import {
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView,
} from "../../types";

export const designDocumentItem: DesignDocumentCreateOrUpdateAttrs = {
  projectId: null,
  unitId: null,
  subUnitId: null,
  supplierId: null,
  stageId: null,
  sectionId: null,
  uqstId: null,
  suqstId: null,
  sloeId: null,
  cableLogId: null,
  monitoringId: null,
  code: "",
  title: "",
  revision: "",
  description: "",
  filePath: "",
  fileType: "",
  fileName: "",
  file: null,
};

export const initData = (
  target: string,
  row?: DesignDocumentView,
  parrentTarget?: string,
  parrentId?: string
): DesignDocumentCreateOrUpdateAttrs | null => {
  let item: DesignDocumentCreateOrUpdateAttrs | null = null;

  switch (target) {
    case "design-document": {
      const projectId =
        !row && parrentTarget === "project" && parrentId ? parrentId : null;
      const unitId =
        !row && parrentTarget === "unit" && parrentId ? parrentId : null;
      const subUnitId =
        !row && parrentTarget === "sub-unit" && parrentId ? parrentId : null;

      item = row
        ? {
            projectId: (row as DesignDocumentView).projectId,
            unitId: (row as DesignDocumentView).unitId,
            subUnitId: (row as DesignDocumentView).subUnitId,
            supplierId: (row as DesignDocumentView).supplierId,
            stageId: (row as DesignDocumentView).stageId,
            sectionId: (row as DesignDocumentView).sectionId,
            uqstId: null,
            suqstId: null,
            sloeId: null,
            cableLogId: null,
            monitoringId: null,
            code: row.code,
            title: row.title,
            revision: row.revision,
            description: row.description,
            filePath: row.filePath,
            fileType: row.fileType,
            fileName: row.fileName,
            file: null,
          }
        : { ...designDocumentItem, projectId, unitId, subUnitId };
      break;
    }

    default:
      break;
  }

  return item;
};
