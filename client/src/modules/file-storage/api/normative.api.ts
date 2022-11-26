import {setUrl} from "../../main";
import axios from "axios";
import {NormativeView, NormativeCreateOrUpdateAttrs} from "../../../../../server/common/types/file-storage";

const baseUrl = "api/file-storage";

interface documentFormData {
  multiple: boolean;
  code: string;
  title: string;
  revision: number;
  description: string;
  document: any;
  descriptor: any
  documents: any[]
}

const setFormData = (item: documentFormData): FormData => {

  const {multiple, code, title, revision, description, document, descriptor, documents} = item;

  const formData = new FormData();
  multiple ? formData.append("multiple", multiple.toString())
    : formData.append("multiple", "false")
  code && formData.append("code", code);
  title && formData.append("title", title);
  revision && formData.append("revision", revision.toString())
  description && formData.append("description", description)
  document && formData.append("document", document)
  descriptor && formData.append("descriptor", descriptor);

  if(documents) {
    for( let i = 0, len = documents.length; i < len; i++){
      const document = documents[i].originFileObj;
      formData.append('documents', document)
    }
  }

  return formData;

}

export const findAllNormative = async (): Promise<NormativeView[]> => {
  const url = setUrl(`${baseUrl}/find/normative/all`);
  const { data } = await axios.get<NormativeView[]>(url);
  return data;
};

export const findOneNormative = async (id: string): Promise<NormativeView> => {
  const url = setUrl(`${baseUrl}/find/normative/${id}`);
  const { data } = await axios.get<NormativeView>(url);
  return data;
};

export const createNormative = async (item: documentFormData): Promise<NormativeView[]> => {
  const url = setUrl(`${baseUrl}/add/normative`);
  const formData = setFormData(item);
  const { data } = await axios.post<NormativeView[]>(url, formData);
  return data;
};

export const editNormative = async (item: documentFormData, id: string):Promise<NormativeView> => {
  const url = setUrl(`${baseUrl}/edit/normative/${id}`);
const formData = setFormData(item);
  const { data } = await axios.put<NormativeView>(url, formData);
  return data;
}

export const deleteNormative = async (id?: string, ids?: string[]): Promise<NormativeView> => {
  const url = id ? setUrl(`${baseUrl}/remove/normative/${id}`) : setUrl(`${baseUrl}/remove/normative/many`);
  const { data } = await axios.delete<NormativeView>(url, {params: ids});
  return data;
};

export const deleteManyNormative = async (ids: string[]): Promise<NormativeView[]> => {
  const url = setUrl(`${baseUrl}/remove/normative`);
  const { data } = await axios.delete<NormativeView[]>(url, {params: {ids: JSON.stringify(ids)}});
  return data;
};