import { ColumnFilterItem } from "antd/lib/table/interface";
import {
  CableLogView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
} from "../../../../../../common/types/equipment-accounting";

export const setCableLogFilters = (
  target: string,
  items: CableLogView[]
): ColumnFilterItem[] => {
  const array: string[] = [];

  switch (target) {
    case "unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].unit;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sub-unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].subUnit;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].tag;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "cable-mark": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].cableMark;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
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

export const setImpulseLineLogFilters = (
  target: string,
  items: ImpulseLineLogView[]
): ColumnFilterItem[] => {
  const array: string[] = [];

  switch (target) {
    case "unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].unit;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sub-unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].subUnit;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].tag;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "impulse-line-type": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].impulseLineType;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
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

export const setSignalFilters = (
  target: string,
  items: SignalView[]
): ColumnFilterItem[] => {
  const array: string[] = [];

  switch (target) {
    case "unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].unit;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sub-unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].subUnit;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].tag;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "signal-type": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].signalType;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "signal-protocol": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].signalProtocol;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
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

export const setMetrologyFilters = (
  target: string,
  items: MetrologyView[]
): ColumnFilterItem[] => {
  const array: string[] = [];

  switch (target) {
    case "unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].unit;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sub-unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].subUnit;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].tag;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sgroei": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].sgroei;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "area": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].measurementArea;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "type": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].meansurementType;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "group": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].meansureGroup;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "grsi": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].grsi;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }

      break;
    }
    case "date-to-verification": {
      for (let i = 0; i < items.length; i++) {
        const item = formatDate(items[i].toDate);
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
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

export const setMonitoringFilters = (
  target: string,
  items: MonitoringView[]
): ColumnFilterItem[] => {
  const array: string[] = [];

  switch (target) {
    case "unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].unit;
        if (!array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "sub-unit": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].subUnit;
        if (item && !array.includes(item)) {
          array.push(item);
        }
      }
      break;
    }
    case "tag": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].tag;
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

export const cableSum = (data: readonly CableLogView[]): string => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += +data[i].cableLenght;
  }

  return sum.toString();
};

export const signalSum = (data: readonly SignalView[], tag: string): string => {
  let sum = 0;

  if (tag === "type") {
    for (let i = 0; i < data.length; i++) {
      sum += +data[i].signalType;
    }
  }

  if (tag === "protocol") {
    for (let i = 0; i < data.length; i++) {
      sum += +data[i].signalProtocol;
    }
  }

  return sum.toString();
};

export const impulseLineSum = (data: readonly ImpulseLineLogView[]): string => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += +data[i].impulseLineLenght;
  }

  return sum.toString();
};

export const setDateToVerification = (
  fromDate: string,
  mpi: string
): string => {
  const d = new Date(fromDate);
  const renderDate = new Date(
    new Date(d.setMonth(d.getMonth() + Number(mpi))).setDate(d.getDate() - 1)
  ).toString();
  return formatDate(renderDate);
};

export const formatDate = (date: string): string => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(".");
};
