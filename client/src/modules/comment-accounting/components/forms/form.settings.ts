import {
  CheckListSets,
  CheckListSettings,
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
  DesignDocumentView,
} from "../../types";

export const commentItem: DesignDocumentCommentCreationAttrs = {
  id: null,
  pdcId: null,
  udcId: null,
  sudcId: null,
  sdcId: null,
  directionId: 1,
  normativeId: 1,
  criticalityId: 1,
  userId: null,
  comment: "",
  solutions: [],
};

export const solutionItem = {
  key: "",
  commentId: "",
  userId: "",
  statusId: 1,
  answer: "",
  designContacts: "н/д",
  solutionId: 1,
  solution: "",
};

export const initFormData = (
  document: DesignDocumentView,
  userId: string,
  row?: DesignDocumentCommentView
): DesignDocumentCommentCreationAttrs => {
  let item: DesignDocumentCommentCreationAttrs | null = null;

  const pdcId = document.projectId !== null ? document.id : null;
  const udcId = document.unitId !== null ? document.id : null;
  const sudcId = document.subUnitId !== null ? document.id : null;
  const sdcId = document.supplierId !== null ? document.id : null;

  item = row
    ? {
        pdcId: row.pdcId,
        udcId: row.udcId,
        sudcId: row.sudcId,
        sdcId: row.sdcId,
        directionId: row.directionId,
        criticalityId: row.criticalityId,
        normativeId: row.normativeId,
        userId: row.userId,
        comment: row.comment,
        solutions: [],
      }
    : { ...commentItem, pdcId, udcId, sudcId, sdcId, userId };

  return item;
};

export const initCheckListSets: CheckListSets = {
  satisfactorily: 95,
  okay: 96,
  great: 98,
  settings: [],
};

export const initCheckListSettingsItem: CheckListSettings = {
  key: null,
  stage: null,
  stageFactor: "",
  criticalities: [],
};
