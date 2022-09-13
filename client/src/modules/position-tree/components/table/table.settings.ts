import { ColumnFilterItem } from "antd/lib/table/interface";
import {
  FieldView,
  PositionTreeView,
  ProjectView,
  SubUnitView,
  UnitView,
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

    case "contract": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as ProjectView | UnitView | SubUnitView)
          .contract;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "position": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as UnitView | SubUnitView).position;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "design": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as ProjectView).design
          ? (items[i] as ProjectView).design.title
          : "";
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "equipment": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as UnitView | SubUnitView).equipment
          ? (items[i] as UnitView | SubUnitView).equipment.title
          : "";
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "supplier": {
      for (let i = 0; i < items.length; i++) {
        const item = (items[i] as UnitView | SubUnitView).supplier
          ? (items[i] as UnitView | SubUnitView).supplier.title
          : "";
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
