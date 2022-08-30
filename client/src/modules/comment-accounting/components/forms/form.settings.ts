import { DesignDocumentCommentCreationAttrs } from "../../../../../../server/common/types/comments-accounting";

export const initCommentFormData = (
  target: string,
  currentId: string,
  data: DesignDocumentCommentCreationAttrs | null
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
