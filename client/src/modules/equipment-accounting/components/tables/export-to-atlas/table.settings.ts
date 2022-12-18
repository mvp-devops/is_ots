import { ColumnFilterItem } from "antd/lib/table/interface";

export const setTableColumnFilters = (
  target: string,
  items: any[]
): ColumnFilterItem[] => {
  const array: string[] = [];
  const result: ColumnFilterItem[] = [];

  switch (target) {
    case "company": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.company;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "field": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.field;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "facility": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.facility;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "prod_area": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.prod_area;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "position_tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.tag;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }

    case "name": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]?.name;
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