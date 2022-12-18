import download from "js-file-download";
import axios from "axios";
import {  setUrl } from "../../main";
import {SummaryListOfEquipmentView} from "../types";



const baseUrl = `api/equipment-accounting/import`;

interface ImportData {
  parentTarget: string;
  parentId: string;
  parentFolderPath: string;
  descriptor: any;
  documents: any[];
}

const setFormData = (item: ImportData ): FormData => {
  const {parentTarget, parentId, parentFolderPath, descriptor, documents} = item;
  console.log("parentFolderPath: ", parentFolderPath);
  const formData = new FormData();
  formData.append("parentTarget", parentTarget);
  formData.append("parentId", parentId);
  formData.append("parentFolderPath", parentFolderPath);
  formData.append("descriptor", descriptor);

  for( let i = 0, len = documents.length; i < len; i++){
      const document = documents[i].originFileObj;
      formData.append('documents', document)
    }
  return formData;
};

export const importData = async (item: ImportData): Promise<SummaryListOfEquipmentView[]> => {
  const url = setUrl(baseUrl);
  console.log(item.documents);
  const formData = setFormData(item);
  const { data } = await axios.post<SummaryListOfEquipmentView[]>(url, formData);
  console.log("data: ", data);
  return data;
};