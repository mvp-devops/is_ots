import { ColumnFilterItem } from "antd/lib/table/interface";
import {
  CableLogView,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
  SummaryListOfEquipmentView,
} from "../../../../../../common/types/equipment-accounting";
import { setCurrentDate } from "../../../../utils/main.utils";

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

export const setGeneralInformationFilters = (
  target: string,
  items: GeneralInformationView[]
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
    case "installation-location": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].installationLocation;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "controlled-parameter": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].controlledParameter;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "equipment-type": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].equipmentType;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "country": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].country;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "vendor": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].vendor;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "facility-title": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].facilityTitle;
        if (item && !array.includes(item.toString())) {
          array.push(item.toString());
        }
      }
      break;
    }
    case "facility-modification": {
      for (let i = 0; i < items.length; i++) {
        const item = items[i].facilityModification;
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

export const getAllMetrology = (
  data: SummaryListOfEquipmentView[]
): MetrologyView[] => {
  const res: MetrologyView[] = [];

  for (let i = 0; i < data.length; i++) {
    const { metrology } = data[i];
    metrology && res.push(metrology);
  }
  return res;
};

export const getAllMonitoring = (
  data: SummaryListOfEquipmentView[]
): MonitoringView[] => {
  const res: MonitoringView[] = [];

  for (let i = 0; i < data.length; i++) {
    const { monitoring } = data[i];
    monitoring && res.push(monitoring);
  }
  return res;
};

export const getAllGeneralInformation = (
  data: SummaryListOfEquipmentView[]
): GeneralInformationView[] => {
  const res: GeneralInformationView[] = [];
  for (let i = 0; i < data.length; i++) {
    const {
      unit,
      unitId,
      subUnit,
      subUnitId,
      installationLocation,
      questionare,
      equipmentType,
      systemType,
      tag,
      controlledParameter,
      country,
      vendor,
      facilityTitle,
      facilityModification,
      factoryNumber,
      year,
      month,
      period,
      specification,
      description,
    } = data[i];
    const item: GeneralInformationView = {
      unit,
      unitId,
      subUnit,
      subUnitId,
      installationLocation,
      questionare,
      equipmentType,
      systemType,
      tag,
      controlledParameter,
      country,
      vendor,
      facilityTitle,
      facilityModification,
      factoryNumber,
      year,
      month,
      period,
      specification,
      description,
    };
    res.push(item);
  }

  return res;
};

export const getAllCableLog = (
  data: SummaryListOfEquipmentView[]
): CableLogView[] => {
  const res: CableLogView[] = [];

  for (let i = 0; i < data.length; i++) {
    const { cableLog } = data[i];
    if (cableLog && cableLog.length > 0) {
      for (let j = 0; j < cableLog?.length; j++) {
        res.push(cableLog[j]);
      }
    }
  }
  return res;
};

export const getAllImpulseLineLog = (
  data: SummaryListOfEquipmentView[]
): ImpulseLineLogView[] => {
  const res: ImpulseLineLogView[] = [];

  for (let i = 0; i < data.length; i++) {
    const { impulseLineLog } = data[i];
    if (impulseLineLog && impulseLineLog.length > 0) {
      for (let j = 0; j < impulseLineLog?.length; j++) {
        res.push(impulseLineLog[j]);
      }
    }
  }
  return res;
};

export const getAllSignal = (
  data: SummaryListOfEquipmentView[]
): SignalView[] => {
  const res: SignalView[] = [];

  for (let i = 0; i < data.length; i++) {
    const { signals } = data[i];
    if (signals && signals.length > 0) {
      for (let j = 0; j < signals?.length; j++) {
        res.push(signals[j]);
      }
    }
  }
  return res;
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

export const verificateDates = (toDate: string): string => {
  const td = new Date(
    +toDate.split(".")[2],
    +toDate.split(".")[1],
    +toDate.split(".")[0]
  );

  const today = setCurrentDate();

  const wd = new Date(
    +today.split(".")[2],
    +today.split(".")[1] + 2,
    +today.split(".")[0]
  );

  const currDate = new Date(
    +today.split(".")[2],
    +today.split(".")[1],
    +today.split(".")[0]
  );

  console.log("td < wd: ", td < wd);
  console.log("td > currDate: ", td > currDate);

  return td > currDate && td < wd ? "w" : td > currDate && td > wd ? "s" : "d";
};
