import { ColumnFilterItem } from "antd/lib/table/interface";
import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";

export const setTableColumnFilters = (
  target: string,
  items: DesignDocumentView[]
): ColumnFilterItem[] => {
  const array: string[] = [];
  const result: ColumnFilterItem[] = [];

  switch (target) {
    case "title": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].title;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "code": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].code;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "stage": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].stageTitle;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "supplier": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].supplierTitle;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "section": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].sectionTitle;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    default:
      break;
  }

  for (let j = 0; j < array.length; j++) {
    result.push({
      text: array[j],
      value: array[j],
    });
  }

  return result.sort((a, b) => (a.value < b.value ? -1 : 0));
};
