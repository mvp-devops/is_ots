import {
  CheckListSets,
  CheckListSettings,
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
} from "../../../../../../server/common/types/comments-accounting";
import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";

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
  designContacts: "",
  solutionId: 1,
  solution: "",
};

export const initFormData = (
  document: DesignDocumentView,
  userId: string,
  data?: DesignDocumentCommentView | null
): DesignDocumentCommentCreationAttrs => {
  const item = commentItem;
  item.id = data && data.id ? data.id : null;
  item.pdcId = data && data.pdcId ? data.pdcId : document.id;
  item.udcId = data && data.udcId ? data.udcId : document.id;
  item.sudcId = data && data.sudcId ? data.sudcId : document.id;
  item.sdcId = data && data.sdcId ? data.sdcId : document.id;
  item.directionId =
    data && data.directionId ? data.directionId : item.directionId;
  item.criticalityId =
    data && data.criticalityId ? data.criticalityId : item.criticalityId;
  item.normativeId =
    data && data.normativeId ? data.normativeId : item.normativeId;
  item.userId = data && data.userId ? data.userId : userId;
  item.comment = data && data.comment ? data.comment : item.comment;

  return item;
};

export const initCommentFormData = (
  target: string,
  currentId: string,
  data?: DesignDocumentCommentCreationAttrs | null
): DesignDocumentCommentCreationAttrs => {
  return {
    pdcId:
      data && data.pdcId
        ? data.pdcId
        : !data && target === "project"
        ? currentId
        : null,
    udcId:
      data && data.udcId
        ? data.udcId
        : !data && target === "unit"
        ? currentId
        : null,
    sudcId:
      data && data.sudcId
        ? data.sudcId
        : !data && target === "sub-unit"
        ? currentId
        : null,
    sdcId: data && data.sdcId ? data.sdcId : null,
    directionId: data && data.directionId ? data.directionId : null,
    normativeId: data && data.normativeId ? data.normativeId : null,
    userId: data && data.userId ? data.userId : null,
    criticalityId: data && data.criticalityId ? data.criticalityId : null,
    comment: data && data.comment ? data.comment : "",
    solutions: data && data.solutions ? data.solutions : [],
  };
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
