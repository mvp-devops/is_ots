import { ColumnFilterItem } from "antd/lib/table/interface";

import { formatDate } from "../../../../utils/main.utils";
import {
  CableLogView,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
  SummaryListOfEquipmentView,
  Views,
} from "../../types";

export const setTableColumnFilters = (
  target: string,
  items: Views[]
): ColumnFilterItem[] => {
  const array: string[] = [];
  const result: ColumnFilterItem[] = [];

  if (items.length > 0) {
    switch (target) {
      case "unit": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]?.unit;
          if (!array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "sub-unit": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]?.subUnit;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "tag": {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]?.tag;
          if (item && !array.includes(item)) {
            array.push(item);
          }
        }
        break;
      }
      case "installation-location": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]
            ?.installationLocation;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "controlled-parameter": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]
            ?.controlledParameter;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "equipment-type": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]?.facility
            ?.equipmentType;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "country": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]?.facility
            ?.country;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "vendor": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]?.facility?.vendor;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "facility-title": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]?.facility?.title;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "facility-modification": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as GeneralInformationView[])[i]
            ?.facilityModification;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }

      case "sgroei": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as MetrologyView[])[i]?.sgroei;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "area": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as MetrologyView[])[i]?.measurementArea;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "type": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as MetrologyView[])[i]?.meansurementType;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "group": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as MetrologyView[])[i]?.meansureGroup;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "grsi": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as MetrologyView[])[i]?.grsi;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }

        break;
      }
      case "date-to-verification": {
        for (let i = 0; i < items.length; i++) {
          const item = formatDate((items as MetrologyView[])[i]?.toDate);
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }

        break;
      }

      case "signal-type": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as SignalView[])[i]?.signalType;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "signal-protocol": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as SignalView[])[i]?.signalProtocol;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }

      case "impulse-line-type": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as ImpulseLineLogView[])[i]?.impulseLineType;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
          }
        }
        break;
      }
      case "cable-mark": {
        for (let i = 0; i < items.length; i++) {
          const item = (items as CableLogView[])[i]?.cableMark;
          if (item && !array.includes(item.toString())) {
            array.push(item.toString());
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
  }

  return result;
};

export const sum = (
  target: string,
  data: readonly Views[],
  tag?: string
): string => {
  let sum = 0;

  switch (target) {
    case "cable-log": {
      for (let i = 0; i < data.length; i++) {
        sum += +(data as CableLogView[])[i]?.cableLenght;
      }
      break;
    }
    case "impulse-line-log": {
      for (let i = 0; i < data.length; i++) {
        sum += +(data as ImpulseLineLogView[])[i]?.impulseLineLenght;
      }
      break;
    }
    case "signal": {
      if (tag === "type") {
        for (let i = 0; i < data.length; i++) {
          sum += +(data as SignalView[])[i]?.signalType;
        }
      }

      if (tag === "protocol") {
        for (let i = 0; i < data.length; i++) {
          sum += +(data as SignalView[])[i]?.signalProtocol;
        }
      }
      break;
    }
    default:
      break;
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
      id,
      projectId,
      project,
      unit,
      unitId,
      subUnit,
      subUnitId,
      installationLocation,
      questionare,
      facility,
      systemType,
      tag,
      controlledParameter,
      facilityModification,
      factoryNumber,
      year,
      month,
      period,
      facilityId,
      specification,
      description,
    } = data[i];
    const item: GeneralInformationView = {
      id,
      sloeId: id,
      projectId,
      project,
      unit,
      unitId,
      subUnit,
      subUnitId,
      installationLocation,
      questionare,
      facility,
      systemType,
      tag,
      controlledParameter,

      facilityId,

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
