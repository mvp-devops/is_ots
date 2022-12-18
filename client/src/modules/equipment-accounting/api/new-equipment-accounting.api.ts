import {setUrl} from "../../main";
import axios from "axios";
import impulseLineLog from "../components/forms/add-equipment-form/ImpulseLineLogFormFields";


const equipmentAccountingUrl = `api/equipment-accounting`;

const setFormData = (values): FormData => {

  const data = new FormData();

  const {parentFolderPath, generalInformation, metrology, signals, cableLog, impulseLineLog,  monitoring } = values;
  data.append("parentFolderPath", parentFolderPath);

  // setGeneralInformationFormData(generalInformation);
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
            data.append('modifications', modification)
          }
        }
      }
    } else if(key === "systemType" && value) {
      for(let s = 0; s < (value as string[])?.length; s++) {
        const systemType = value[s].toString();
        data.append('systemType', systemType)
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
      data.append("signals", JSON.stringify(signals[i]));
    }
  }


  if (cableLog && cableLog.length > 0) {
    for (let i = 0; i < cableLog.length; i++) {
      const cable = cableLog[i];
     cable.wiringDiagram && data.append("wiringDiagram", cable.wiringDiagram)
      data.append("cableLog", JSON.stringify(cable));
    }
  }

  if (impulseLineLog && impulseLineLog.length > 0) {
    for (let i = 0; i < impulseLineLog.length; i++) {
      data.append("impulseLineLog", JSON.stringify(impulseLineLog[i]));
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

export const createEquipmentAsset = async (data) => {
  const url = setUrl(
    `${equipmentAccountingUrl}/add/new-asset`
  );
  const body = setFormData(data);
  const { data: res } = await axios.post(url, body);
  return res;

}