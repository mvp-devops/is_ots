import download from "js-file-download";
import axios from "axios";
import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
  EquipmentAccountingAssetCreateOrUpdateAttrs,
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
import { setCurrentDate, setUrl } from "../../main";
import {
  ExportEquipmentToAtlas,
  SummaryListOfEquipmentCreateOrUpdateFiles,
} from "../../../../../server/common/types/equipment-accounting";

const equipmentAccountingUrl = `api/equipment-accounting`;

/** Создание ОЛ */

export const createQuestionnaire = async (data: any) => {
  const {target, cipher} = data;
  const subUrl = "create-questionnaire"
  const url = setUrl(`${equipmentAccountingUrl}/${subUrl}/${target}`);

  const fileName = `${cipher}.pdf`;

  const flag = await axios.post<string>(url, data)
    .then(({data: fileLocation}) => questionnaireDownload(fileLocation, fileName)).then(res => res)

  return flag;
}

export const  questionnaireDownload = async (fileLocation: string, fileName: string) => {

  const url = setUrl(`${equipmentAccountingUrl}/questionnaire/download`);

  axios
    .get(url, {
      responseType: "blob",
      params: { 0: fileLocation},
    })
    .then((resp) => {
      download(resp.data, fileName);
    })

  return false

};

export const getEquipmentAsset = async (id: string): Promise<any> => {
  const url = setUrl(`${equipmentAccountingUrl}/equipment-asset/${id}`);
  const { data } = await axios.get<any>(url);
  return data;
};

const setFormData = (values): FormData => {

  const data = new FormData();

  const {parentFolderPath, generalInformation, metrology, signals, cableLog, impulseLineLog,  monitoring } = values;
  data.append("parentFolderPath", parentFolderPath);

  const generalInformationEntries = Object.entries(generalInformation);
  for (let g = 0; g < generalInformationEntries.length; g++) {
    const item = generalInformationEntries[g];
    const key = item[0];
    const value: string | number | string[] | Blob = item[1] as string | number | string[] | Blob;
    if (key === "questionnaire") {
      value && data.append(key, value as Blob)
    }  else  if (key === "facility" && value) {
      const facilityEntries = Object.entries(value);
      for(let f = 0; f < facilityEntries.length; f++) {
        const item = facilityEntries[f];
        const facilityKey = item[0];
        const facilityValue = item[1];
        if (facilityKey !== "modifications") {
          facilityValue && data.append(facilityKey, facilityValue.toString())
        } else {
          for (let m = 0; m < facilityValue?.length; m++) {
            const modification = facilityValue[m].toString();
            data.append('modifications[]', modification)
          }
        }
      }
    } else if(key === "systemType" && value) {
      for(let s = 0; s < (value as string[])?.length; s++) {
        const systemType = value[s].toString();
        data.append('systemType[]', systemType)
      }
    }
    else {
      value && data.append(key, value.toString())
    }
  }
  // metrology && setMetrologyFormData(metrology);

  if(metrology) {
    const metrologyEntries = Object.entries(metrology);
    for (let m = 0; m < metrologyEntries.length; m++) {
      const item = metrologyEntries[m];
      const key = item[0];
      const value = item[1];
      if (key === "document" || key === "verificationProcedure" || key === "typeApprovalCertificate") {
        value && data.append(key, value as Blob)
      } else  {
        value && data.append(key, value.toString())
      }
    }
  }

  if (signals && signals.length > 0) {
    for (let i = 0; i < signals.length; i++) {
      data.append("signals[]", JSON.stringify(signals[i]));
    }
  }


  if (cableLog && cableLog.length > 0) {
    for (let i = 0; i < cableLog.length; i++) {
      const cable = cableLog[i];
      cable.wiringDiagram && data.append("wiringDiagram", cable.wiringDiagram)
      data.append("cableLog[]", JSON.stringify(cable));
    }
  }

  if (impulseLineLog && impulseLineLog.length > 0) {
    for (let i = 0; i < impulseLineLog.length; i++) {
      data.append("impulseLineLog[]", JSON.stringify(impulseLineLog[i]));
    }
  }

  if(monitoring) {
    const monitoringEntries = Object.entries(monitoring);
    for (let m = 0; m < monitoringEntries.length; m++) {
      const item = monitoringEntries[m];
      const key = item[0];
      const value = item[1];
      if (
        key === "functionalDiagram" ||  key === "mountDocument" || key === "connectDocument" ||
        key === "testDocument" || key === "awpDocument" || key === "commissionDocument"
      ) {
        value && data.append(key, value as Blob)
      } else  {
        value && data.append(key, value.toString())
      }
    }
  }
  return data;
}

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
  data: any,
  parentFolderPath?: string
): Promise<SummaryListOfEquipmentView> => {
  const url = setUrl(
    `${equipmentAccountingUrl}/add/new-asset`
  );
  const body = setFormData(data);
  const { data: res } = await axios.post(url, body);
  return res;
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

export const exportToAtlas = async (
  e: any,
  parrentTarget: string,
  parrentId: string,
  parrentTitle: string,
  parrentFolder: string
) => {
  const url = setUrl(`${equipmentAccountingUrl}/export-to-atlas`);
  const fileName = `${parrentTitle}_export_to_atlas_${setCurrentDate()}.json`;

  const { data } = await axios.get<ExportEquipmentToAtlas[]>(url, {
    params: { parrentTarget, parrentId, parrentTitle, parrentFolder },
  });

  e.preventDefault();

  downloadFile({
    data: JSON.stringify(data),
    fileName,
    fileType: "text/json",
  });

  // axios
  //   .get(url, {
  //     responseType: "blob",
  //     params: { parrentTarget, parrentId, parrentTitle, parrentFolder },
  //   })
  //   .then((resp) => {
  //     download(
  //       resp.data,
  //       `${parrentTitle}_export_to_atlas_${setCurrentDate()}.json`
  //     );
  //   });
};

export const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: "text/json" });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const findAtlasAssets = async (
  parentTarget: string,
  parentId: string
): Promise<any[]> => {
  const url = setUrl(
    `${equipmentAccountingUrl}/atlas`
  );
    const { data } = await axios.get<any[]>(url, {
      params: { parentTarget, parentId },
    });
  return data;
};