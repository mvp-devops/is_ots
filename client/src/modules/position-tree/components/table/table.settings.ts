import { ColumnFilterItem } from "antd/lib/table/interface";
import {
  FieldView,
  PositionTreeView,
} from "../../../../../../server/common/types/position-tree";

export const setTableColumnFilters = (
  target: string,
  items: PositionTreeView[]
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
    case "subsidiary": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as FieldView).subsidiary.title;
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
