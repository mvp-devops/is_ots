import axios from "axios";
import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
  FacilityView,
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
  ImpulseLineLogCreateOrUpdateAttrs,
  ImpulseLineLogView,
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
  SignalCreateOrUpdateAttrs,
  SignalView,
  SummaryListOfEquipmentFormData,
  SummaryListOfEquipmentView,
} from "../../../../../server/common/types/equipment-accounting";
import { setUrl } from "../../main";

const equipmentAccountingUrl = `api/equipment-accounting`;

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
      unit,
      projectId,
      project,
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

export const getAllEssences = async (
  parrentTarget: string,
  parrentId: string
): Promise<SummaryListOfEquipmentView[]> => {
  const url = setUrl(
    `${equipmentAccountingUrl}/summary-list-of-equipment-asset/find`
  );

  const { data } = await axios.get<SummaryListOfEquipmentView[]>(url, {
    params: { parrentTarget, parrentId },
  });
  return data;
};

export const getAllFacilities = async (): Promise<FacilityView[]> => {
  const url = setUrl(`${equipmentAccountingUrl}/facilities/find`);

  const { data } = await axios.get<FacilityView[]>(url);
  return data;
};

export const getOneEssences = async (
  id: string
): Promise<SummaryListOfEquipmentView> => {
  const url = setUrl(`${equipmentAccountingUrl}:${id}`);

  const { data } = await axios.get<SummaryListOfEquipmentView>(url, {
    params: { id },
  });
  return data;
};

export const createOneEssence = async (
  item: SummaryListOfEquipmentFormData
): Promise<SummaryListOfEquipmentView> => {
  const url = setUrl(equipmentAccountingUrl);
  const { data } = await axios.post(url, item);
  return data;
};

export const createManyEssences = async (
  items: SummaryListOfEquipmentFormData[]
): Promise<SummaryListOfEquipmentView[]> => {
  const url = setUrl(`${equipmentAccountingUrl}/many`);
  const { data } = await axios.post(url, items);
  return data;
};

export const updateOneEssence = async (
  target: string,
  id: string | number,
  item: GeneralInformationCreateOrUpdateAttrs
): Promise<GeneralInformationView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<GeneralInformationView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneEssence = async (
  target: string,
  id: string | number
): Promise<GeneralInformationView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<GeneralInformationView>(url, {
    params: { target, id },
  });

  return data;
};

export const updateOneMetrologyEssence = async (
  target: string,
  id: string | number,
  item: MetrologyCreateOrUpdateAttrs
): Promise<MetrologyView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<MetrologyView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneMetrologyEssence = async (
  target: string,
  id: string | number
): Promise<MetrologyView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<MetrologyView>(url, {
    params: { target, id },
  });

  return data;
};

export const updateOneMonitoringEssence = async (
  target: string,
  id: string | number,
  item: MonitoringCreateOrUpdateAttrs
): Promise<MonitoringView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<MonitoringView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneMonitoringEssence = async (
  target: string,
  id: string | number
): Promise<MonitoringView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<MonitoringView>(url, {
    params: { target, id },
  });

  return data;
};

export const updateOneCableLogEssence = async (
  target: string,
  id: string | number,
  item: CableLogCreateOrUpdateAttrs
): Promise<CableLogView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<CableLogView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneCableLogEssence = async (
  target: string,
  id: string | number
): Promise<CableLogView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<CableLogView>(url, {
    params: { target, id },
  });

  return data;
};

export const updateOneImpulseLineLogEssence = async (
  target: string,
  id: string | number,
  item: ImpulseLineLogCreateOrUpdateAttrs
): Promise<ImpulseLineLogView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<ImpulseLineLogView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneImpulseLineLogEssence = async (
  target: string,
  id: string | number
): Promise<ImpulseLineLogView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<ImpulseLineLogView>(url, {
    params: { target, id },
  });

  return data;
};

export const updateOneSignalEssence = async (
  target: string,
  id: string | number,
  item: SignalCreateOrUpdateAttrs
): Promise<SignalView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.put<SignalView>(url, item, {
    params: { target, id },
  });

  return data;
};

export const deleteOneSignalEssence = async (
  target: string,
  id: string | number
): Promise<SignalView> => {
  const url = setUrl(`${equipmentAccountingUrl}/${id}`);
  const { data } = await axios.delete<SignalView>(url, {
    params: { target, id },
  });

  return data;
};
