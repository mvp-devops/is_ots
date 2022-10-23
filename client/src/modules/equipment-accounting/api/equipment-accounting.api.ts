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
import { setUrl } from "../../main";

const equipmentAccountingUrl = `api/equipment-accounting`;

const setGeneralInformationFormData = (
  item: GeneralInformationCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  const {
    projectId,
    unitId,
    subUnitId,
    sloeId,
    facilityId,
    facilityModification,
    facility,
    technacalCardId,
    installationLocation,
    questionare,
    systemType,
    tag,
    controlledParameter,
    factoryNumber,
    year,
    month,
    period,
    specification,
    description,
  } = item;

  projectId && data.append("projectId", projectId.toString());

  unitId && data.append("unitId", unitId.toString());

  subUnitId && data.append("subUnitId", subUnitId.toString());

  sloeId && data.append("sloeId", sloeId.toString());

  facilityId && data.append("facilityId", facilityId.toString());

  facility && data.append("facility", JSON.stringify(facility));

  technacalCardId && data.append("technacalCardId", technacalCardId.toString());

  installationLocation &&
    data.append("installationLocation", installationLocation);

  questionare && data.append("questionare", questionare);

  if (systemType) {
    const arr = systemType;
    for (var i = 0; i < arr.length; i++) {
      data.append("systemType[]", arr[i]);
    }
  }
  tag && data.append("tag", tag);

  controlledParameter &&
    data.append("controlledParameter", controlledParameter);

  facilityModification &&
    data.append("facilityModification", facilityModification);

  factoryNumber && data.append("factoryNumber", factoryNumber);

  year && data.append("year", year);

  month && data.append("month", month);

  period && data.append("period", period);

  specification && data.append("specification", specification);

  description && data.append("description", description);
  return data;
};

const setMetrologyFormData = (item: MetrologyCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  const {
    sloeId,
    counterpartyId,
    sgroei,
    grsi,
    min,
    max,
    range,
    accuracy,
    mpi,
    metrologyType,
    documentType,
    documentNumber,
    fromDate,
    toDate,
    document,
    status,
    arshin,
    verificationProcedure,
    typeApprovalCertificate,
  } = item;

  counterpartyId && data.append("counterpartyId", counterpartyId.toString());

  sgroei && data.append("sgroei", sgroei);

  grsi && data.append("grsi", grsi);

  sloeId && data.append("sloeId", sloeId.toString());

  min && data.append("min", min);

  max && data.append("max", max);

  range && data.append("range", range);

  accuracy && data.append("accuracy", accuracy);

  mpi && data.append("mpi", mpi);

  metrologyType && data.append("metrologyType", metrologyType);

  documentType && data.append("documentType", documentType);

  documentNumber && data.append("documentNumber", documentNumber);

  fromDate && data.append("fromDate", fromDate);

  toDate && data.append("toDate", toDate);

  document && data.append("document", document);

  status && data.append("status", status);

  arshin && data.append("arshin", arshin);

  verificationProcedure &&
    data.append("verificationProcedure", verificationProcedure);

  typeApprovalCertificate &&
    data.append("typeApprovalCertificate", typeApprovalCertificate);

  return data;
};

const setSignalFormData = (item: SignalCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  const {
    sloeId,
    signalType,
    signalProtocol,
    signalTag,
    h,
    l,
    ll,
    hh,
    emergencyProtocol,
  } = item;

  sloeId && data.append("sloeId", sloeId.toString());
  signalType && data.append("signalType", signalType);
  signalProtocol && data.append("signalProtocol", signalProtocol);
  signalTag && data.append("signalTag", signalTag);
  h && data.append("h", h);
  l && data.append("l", l);
  ll && data.append("ll", ll);
  hh && data.append("hh", hh);
  emergencyProtocol && data.append("emergencyProtocol", emergencyProtocol);
  return data;
};

const setCableLogFormData = (item: CableLogCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  const {
    sloeId,
    numberOfTrace,
    cableMark,
    cableSection,
    fromUnit,
    fromPlace,
    toUnit,
    toPlace,
    cableLenght,
    range,
    description,
    wiringDiagram,
  } = item;

  sloeId && data.append("sloeId", sloeId.toString());
  numberOfTrace && data.append("numberOfTrace", numberOfTrace);
  cableMark && data.append("cableMark", cableMark);
  cableSection && data.append("cableSection", cableSection);
  fromUnit && data.append("fromUnit", fromUnit);
  fromPlace && data.append("fromPlace", fromPlace);
  toUnit && data.append("toUnit", toUnit);
  toPlace && data.append("toPlace", toPlace);
  cableLenght && data.append("cableLenght", cableLenght);
  range && data.append("range", range);
  description && data.append("description", description);
  wiringDiagram && data.append("wiringDiagram", wiringDiagram);
  return data;
};

const setImpulseLineLogFormData = (
  item: ImpulseLineLogCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  const {
    sloeId,
    numberOfTrace,
    impulseLineType,
    fromPlace,
    toPlace,
    impulseLineLenght,
    range,
    description,
  } = item;

  sloeId && data.append("sloeId", sloeId.toString());
  numberOfTrace && data.append("numberOfTrace", numberOfTrace);
  impulseLineType && data.append("impulseLineType", impulseLineType);
  fromPlace && data.append("fromPlace", fromPlace);
  toPlace && data.append("toPlace", toPlace);
  impulseLineLenght && data.append("impulseLineLenght", impulseLineLenght);
  range && data.append("range", range);
  description && data.append("description", description);
  return data;
};

const setMonitoringFormData = (
  item: MonitoringCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  const {
    sloeId,
    mountDate,
    mountDocument,
    connectDate,
    connectDocument,
    testDate,
    testDocument,
    awpDate,
    awpDocument,
    commisionDate,
    commisionDocument,
  } = item;

  sloeId && data.append("sloeId", sloeId.toString());
  mountDate && data.append("mountDate", mountDate);
  mountDocument && data.append("mountDocument", mountDocument);
  connectDate && data.append("connectDate", connectDate);
  connectDocument && data.append("connectDocument", connectDocument);
  testDate && data.append("testDate", testDate);
  testDocument && data.append("testDocument", testDocument);
  awpDate && data.append("awpDate", awpDate);
  awpDocument && data.append("awpDocument", awpDocument);
  commisionDate && data.append("commisionDate", commisionDate);
  commisionDocument && data.append("commisionDocument", commisionDocument);
  return data;
};

const setFormData = (
  item: EquipmentAccountingAssetCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  const {
    generalInformation,
    metrology,
    signals,
    cableLog,
    impulseLineLog,
    monitoring,
  } = item as SummaryListOfEquipmentFormData;

  data.append("generalInformation", JSON.stringify(generalInformation));

  data.append("metrology", JSON.stringify(metrology));

  if (signals && signals.length > 0) {
    const arr = signals;
    for (let i = 0; i < arr.length; i++) {
      data.append("signals[]", JSON.stringify(arr[i]));
    }
  }

  if (cableLog && cableLog.length > 0) {
    const arr = cableLog;
    for (let i = 0; i < arr.length; i++) {
      data.append("cableLog[]", JSON.stringify(arr[i]));
      arr[i].wiringDiagram &&
        data.append("wiringDiagram", arr[i].wiringDiagram);
    }
  }

  if (impulseLineLog && impulseLineLog.length > 0) {
    const arr = impulseLineLog;
    for (let i = 0; i < arr.length; i++) {
      data.append("impulseLineLog[]", JSON.stringify(arr[i]));
    }
  }

  data.append("monitoring", JSON.stringify(monitoring));

  const { questionare } = generalInformation;
  questionare && data.append("questionare", questionare);

  const { document, verificationProcedure, typeApprovalCertificate } =
    metrology;
  document && data.append("document", document);
  verificationProcedure &&
    data.append("verificationProcedure", verificationProcedure);
  typeApprovalCertificate &&
    data.append("typeApprovalCertificate", typeApprovalCertificate);

  const {
    mountDocument,
    connectDocument,
    awpDocument,
    testDocument,
    commisionDocument,
  } = monitoring;

  mountDocument && data.append("mountDocument", mountDocument);
  connectDocument && data.append("connectDocument", connectDocument);
  awpDocument && data.append("awpDocument", awpDocument);
  testDocument && data.append("testDocument", testDocument);
  commisionDocument && data.append("commisionDocument", commisionDocument);

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
  const uploadedData = setFormData(item);
  const { data } = await axios.post(url, uploadedData);
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
