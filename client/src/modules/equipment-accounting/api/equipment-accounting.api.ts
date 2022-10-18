import axios from "axios";
import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
  EquipmentAccountingAssetCreateOrUpdateAttrs,
  EquipmentAccountingAssetView,
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
} from "../types";
import { setUrl } from "../../main";

const equipmentAccountingUrl = `api/equipment-accounting`;

const setFormData = (
  item: EquipmentAccountingAssetCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  if ((item as GeneralInformationCreateOrUpdateAttrs).projectId) {
    data.append(
      "projectId",
      (item as GeneralInformationCreateOrUpdateAttrs).projectId.toString()
    );
  }
  if ((item as GeneralInformationCreateOrUpdateAttrs).unitId) {
    data.append(
      "unitId",
      (item as GeneralInformationCreateOrUpdateAttrs).unitId.toString()
    );
  }
  if ((item as GeneralInformationCreateOrUpdateAttrs).subUnitId) {
    data.append(
      "subUnitId",
      (item as GeneralInformationCreateOrUpdateAttrs).subUnitId.toString()
    );
  }
  if ((item as GeneralInformationCreateOrUpdateAttrs).sloeId) {
    data.append(
      "sloeId",
      (item as GeneralInformationCreateOrUpdateAttrs).sloeId.toString()
    );
  }
  if ((item as GeneralInformationCreateOrUpdateAttrs).facilityId) {
    data.append(
      "facilityId",
      (item as GeneralInformationCreateOrUpdateAttrs).facilityId.toString()
    );
  }
  if ((item as GeneralInformationCreateOrUpdateAttrs).technacalCardId) {
    data.append(
      "technacalCardId",
      (item as GeneralInformationCreateOrUpdateAttrs).technacalCardId.toString()
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).installationLocation) {
    data.append(
      "installationLocation",
      (item as GeneralInformationCreateOrUpdateAttrs).installationLocation
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).questionare) {
    data.append(
      "questionare",
      (item as GeneralInformationCreateOrUpdateAttrs).questionare
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).systemType) {
    const arr = (item as GeneralInformationCreateOrUpdateAttrs).systemType;
    for (var i = 0; i < arr.length; i++) {
      data.append("systemType[]", arr[i]);
    }
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).tag) {
    data.append("tag", (item as GeneralInformationCreateOrUpdateAttrs).tag);
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).controlledParameter) {
    data.append(
      "controlledParameter",
      (item as GeneralInformationCreateOrUpdateAttrs).controlledParameter
    );
  }

  // if ((item as GeneralInformationCreateOrUpdateAttrs).facility)  {
  //   data.append("facility{}", (item as GeneralInformationCreateOrUpdateAttrs).facility)
  // }

  if ((item as GeneralInformationCreateOrUpdateAttrs).facilityModification) {
    data.append(
      "facilityModification",
      (item as GeneralInformationCreateOrUpdateAttrs).facilityModification
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).factoryNumber) {
    data.append(
      "factoryNumber",
      (item as GeneralInformationCreateOrUpdateAttrs).factoryNumber
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).year) {
    data.append("year", (item as GeneralInformationCreateOrUpdateAttrs).year);
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).month) {
    data.append("month", (item as GeneralInformationCreateOrUpdateAttrs).month);
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).period) {
    data.append(
      "period",
      (item as GeneralInformationCreateOrUpdateAttrs).period
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).specification) {
    data.append(
      "specification",
      (item as GeneralInformationCreateOrUpdateAttrs).specification
    );
  }

  if ((item as GeneralInformationCreateOrUpdateAttrs).description) {
    data.append(
      "description",
      (item as GeneralInformationCreateOrUpdateAttrs).description
    );
  }

  return data;
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
    `${equipmentAccountingUrl}/summary-list-of-equipment-assets/find`
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
  item: EquipmentAccountingAssetCreateOrUpdateAttrs,
  parrentFolderPath?: string
): Promise<GeneralInformationView> => {
  const formData = setFormData(item);
  const url = setUrl(
    `${equipmentAccountingUrl}/summary-list-of-equipment-asset/edit/${id}`
  );

  const requestedData =
    target === "general-information"
      ? {
          ...formData,
          facility: (item as GeneralInformationCreateOrUpdateAttrs).facility,
          systemType: (item as GeneralInformationCreateOrUpdateAttrs)
            .systemType,
        }
      : formData;

  const { data } = await axios.put<GeneralInformationView>(url, requestedData, {
    params: { target, parrentFolderPath },
  });

  return data;
};

export const deleteOneEssence = async (
  target: string,
  id: string | number,
  parrentFolderPath?: string
): Promise<GeneralInformationView> => {
  const url = setUrl(
    `${equipmentAccountingUrl}/summary-list-of-equipment-asset/remove/${id}`
  );
  const { data } = await axios.delete<GeneralInformationView>(url, {
    params: { target, parrentFolderPath },
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
