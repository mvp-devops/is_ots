import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
} from "../../../../../common/types/comments-accounting";

import { ColumnFilterItem } from "antd/lib/table/interface";

export class CommentAccounting {
  setCommentFilters = (
    target: string,
    items: DesignDocumentCommentView[]
  ): ColumnFilterItem[] => {
    const array: string[] = [];

    switch (target) {
      case "document-section": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i].documentSection;
          if (!array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "normative": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i].normative;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "criticality": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i].criticalityId;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "expert-subdivision": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i].expertSubdivision;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "expert-contacts": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i].expertContacts;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      default:
        break;
    }
    const result: ColumnFilterItem[] = [];

    for (let j = 0; j < array.length; j++) {
      result.push({
        text: array[j],
        value: array[j],
      });
    }

    return result;
  };

  setSolutionFilters = (
    target: string,
    record: DesignDocumentCommentView
  ): ColumnFilterItem[] => {
    const array: Array<string | number> = [];

    switch (target) {
      case "status": {
        for (let i = 0; i < record.solutions.length; i++) {
          const item = record.solutions[i].statusId;
          if (!array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "solution": {
        for (let i = 0; i < record.solutions.length; i++) {
          const item = record.solutions[i].solutionId;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }

      default:
        break;
    }
    const result: ColumnFilterItem[] = [];

    for (let j = 0; j < array.length; j++) {
      result.push({
        text: array[j],
        value: array[j],
      });
    }

    return result;
  };

  initCommentFormData = (
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
}
