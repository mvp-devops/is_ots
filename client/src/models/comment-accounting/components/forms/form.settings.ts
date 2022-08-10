import { DesignDocumentCommentCreationAttrs } from "../../../../../../common/types/comments-accounting";

export const initCommentFormData = (
  target: string,
  currentId: string,
  data: DesignDocumentCommentCreationAttrs | null
): DesignDocumentCommentCreationAttrs => {
  return {
    projectDocumentId:
      data && data.projectDocumentId
        ? data.projectDocumentId
        : !data && target === "project"
        ? currentId
        : null,
    unitDocumentId:
      data && data.unitDocumentId
        ? data.unitDocumentId
        : !data && target === "unit"
        ? currentId
        : null,
    subUnitDocumentId:
      data && data.subUnitDocumentId
        ? data.subUnitDocumentId
        : !data && target === "sub-unit"
        ? currentId
        : null,
    supplierDocumentId:
      data && data.supplierDocumentId ? data.supplierDocumentId : null,
    directionId: data && data.directionId ? data.directionId : null,
    normativeId: data && data.normativeId ? data.normativeId : null,
    userId: data && data.userId ? data.userId : null,
    criticalityId: data && data.criticalityId ? data.criticalityId : null,
    comment: data && data.comment ? data.comment : "",
    solutions: data && data.solutions ? data.solutions : [],
  };
};
