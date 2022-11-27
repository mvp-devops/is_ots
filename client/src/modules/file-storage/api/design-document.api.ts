import {setUrl} from "../../main";
import axios from "axios";
import {
  NormativeView,
  NormativeCreateOrUpdateAttrs,
  DesignDocumentView
} from "../../../../../server/common/types/file-storage";

const baseUrl = "api/file-storage";
const extUrl = "design-document"

interface documentFormData {
  parentTarget: string;
  parentId: string;
  parentFolder: string;
  stageId: string;
  sectionId: string;
  multiple: boolean;
  code: string;
  title: string;
  revision: number;
  description: string;
  document: any;
  descriptor: any
  documents: any[]
}

const setFormData = (item: documentFormData, flag?: string): FormData => {

  const {parentTarget, parentId, parentFolder, stageId, sectionId, multiple, code, title, revision, description, document, descriptor, documents} = item;

  const formData = new FormData();
  flag && formData.append("flag", flag);
  formData.append("parentTarget", parentTarget);
  formData.append("parentId", parentId);
  formData.append("parentFolder", parentFolder);
  formData.append("stageId", stageId);
  formData.append("sectionId", sectionId);
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
export const findAllDesignDocuments = async (parentTarget: string, parentId: string): Promise<DesignDocumentView[]> => {
  const url = setUrl(`${baseUrl}/find/${extUrl}s`);
  const { data } = await axios.get<DesignDocumentView[]>(url, {params: {parentTarget, parentId}});
  return data;
};

export const findOneDesignDocument = async (id: string, parentTarget: string): Promise<DesignDocumentView> => {
  const url = setUrl(`${baseUrl}/find/${extUrl}/${id}`);
  const { data } = await axios.get<DesignDocumentView>(url, {params: {parentTarget}});
  return data;
};

export const createDesignDocuments = async (item: documentFormData): Promise<DesignDocumentView[]> => {
  const url = setUrl(`${baseUrl}/add/${extUrl}`);
  const formData = setFormData(item);
  const { data } = await axios.post<DesignDocumentView[]>(url, formData);
  return data;
};

export const editDesignDocument = async (item: documentFormData, id: string):Promise<DesignDocumentView> => {
  const url = setUrl(`${baseUrl}/edit/${extUrl}/${id}`);
  const formData = setFormData(item);
  const { data } = await axios.put<DesignDocumentView>(url, formData);
  return data;
}

export const deleteDesignDocument = async (id?: string, ids?: string[], parentTarget?: string): Promise<DesignDocumentView> => {
  const url = id ? setUrl(`${baseUrl}/remove/${extUrl}/${id}`) : setUrl(`${baseUrl}/remove/${extUrl}`);
  const { data } = await axios.delete<DesignDocumentView>(url, {params: {ids: JSON.stringify(ids), parentTarget}});
  return data;
};

export const deleteManyDesignDocuments = async (ids: string[], parentTarget?: string): Promise<DesignDocumentView[]> => {
  const url = setUrl(`${baseUrl}/remove/${extUrl}`);
  const { data } = await axios.delete<DesignDocumentView[]>(url, {params: {ids: JSON.stringify(ids), parentTarget}});
  return data;
};