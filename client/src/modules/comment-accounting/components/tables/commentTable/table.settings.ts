import { ColumnFilterItem } from "antd/lib/table/interface";
import { DesignDocumentCommentView } from "../../..";

export const setTableColumnFilters = (
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
