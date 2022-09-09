import { ColumnFilterItem } from "antd/lib/table/interface";
import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";

export const setTableColumnFilters = (
  target: string,
  items: DesignDocumentView[]
): ColumnFilterItem[] => {
  const array: string[] = [];
  const result: ColumnFilterItem[] = [];

  switch (target) {
    case "stage": {
      for (let i = 0; i < items.length; i++) {
        const item = "stageTitle" in items[i] ? items[i].stageTitle : "";
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "supplier": {
      for (let i = 0; i < items.length; i++) {
        const item = "supplierTitle" in items[i] ? items[i].supplierTitle : "";
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "section": {
      for (let i = 0; i < items.length; i++) {
        const item = "sectionTitle" in items[i] ? items[i].sectionTitle : "";
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

  return result;
};
