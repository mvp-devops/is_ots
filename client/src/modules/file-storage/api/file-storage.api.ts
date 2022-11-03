import axios from "axios";
import {
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView, NormativeCreateOrUpdateAttrs, NormativeView,
} from "../../../../../server/common/types/file-storage";
import { setUrl } from "../../main";

const baseUrl = "api/file-storage";

const setFormData = (item: DesignDocumentCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  item.title && data.append("title", item.title);

  item.code && data.append("code", item.code);

  item.revision && data.append("revision", item.revision);

  item.description && data.append("description", item.description);

  item.file && data.append("file", item.file);

  item.projectId && data.append("projectId", item.projectId.toString());

  item.unitId && data.append("unitId", item.unitId.toString());

  item.subUnitId && data.append("subUnitId", item.subUnitId.toString());

  item.supplierId && data.append("supplierId", item.supplierId.toString());

  item.stageId && data.append("stageId", item.stageId.toString());

  item.sectionId && data.append("sectionId", item.sectionId.toString());

  item.uqstId && data.append("uqstId", item.uqstId.toString());

  item.suqstId && data.append("suqstId", item.suqstId.toString());

  item.cableLogId && data.append("cableLogId", item.cableLogId.toString());

  item.monitoringId &&
    data.append("monitoringId", item.monitoringId.toString());

  return data;
};

//TODO: создать сервис по загрузке нормативных документов

export const createNormative = async (
item: any
): Promise<NormativeView[]> => {
  const url = setUrl(`${baseUrl}/add/normative`);

  const {descriptor, documents} = item;

  const formData = new FormData();
  descriptor && formData.append("descriptor", descriptor.file);

  // for(let i =0; i < documents.files.length; i++) {
  //   formData.append("files", files.files[i]);
  // }

  console.log(documents.fileList.length)

  for( let i = 0, len = documents.fileList.length; i < len; i++){
    formData.append('documents', documents.fileList[i])
  }



  console.log("formData: ", formData);
  const { data } = await axios.post<NormativeView[]>(url, formData);
  return data;
};

// const createNormative = async (item: NormativeCreateOrUpdateAttrs): FormData => {
//   const data = new FormData();
//
//   item.title && data.append("title", item.title);
//
//   item.code && data.append("code", item.code);
//
//   item.revision && data.append("revision", item.revision);
//
//   item.description && data.append("description", item.description);
//
//   item. && data.append("files", item.files);
//   return data
// }

export const createDesignDocument = async (
  parrentId: string,
  parrentTarget: string,
  parrentFolderPath: string,
  item: DesignDocumentCreateOrUpdateAttrs
): Promise<DesignDocumentView> => {
  const url = setUrl(`${baseUrl}/add/design-document`);
  const formData = setFormData(item);

  const { data } = await axios.post<DesignDocumentView>(url, formData, {
    params: { parrentId, parrentTarget, parrentFolderPath },
  });
  return data;
};

export const deleteDesignDocument = async (
  id: string
): Promise<DesignDocumentView> => {
  const url = setUrl(`${baseUrl}/remove/design-document/${id}`);
  const { data } = await axios.delete<DesignDocumentView>(url);

  return data;
};

export const createDesignDocuments = async (
  data: DesignDocumentCreateOrUpdateAttrs[]
): Promise<DesignDocumentView[]> => {
  const items: DesignDocumentView[] = [];
  return items;
};

export const findAllNormatives = async () => {
  const url = setUrl(`${baseUrl}/find/normanives`);
  const { data } = await axios.get(url);
  return data;
};

//   export const createManyEssences = async (
//     items: DesignDocumentCommentCreationAttrs[]
//   ): Promise<DesignDocumentCommentView[]> => {
//     const url = setUrl(`${baseUrl}/add/many`);
//     const { data } = await axios.post<DesignDocumentCommentView[]>(url, items);
//     return data;
//   };

//   export const updateOneEssence = async (
//     id: string,
//     item: DesignDocumentCommentCreationAttrs
//   ): Promise<DesignDocumentCommentView> => {
//     const url = setUrl(`${baseUrl}/edit/${id}`);
//     const { data } = await axios.put<DesignDocumentCommentView>(url, item);

//     return data;
//   };

//   export const deleteOneEssence = async (
//     id: string
//   ): Promise<DesignDocumentCommentView> => {
//     const url = setUrl(`${baseUrl}/remove/${id}`);
//     const { data } = await axios.delete<DesignDocumentCommentView>(url);

//     return data;
//   };

//   export const getOneItem = async (
//     target: string,
//     id: string
//   ): Promise<DesignDocumentCommentView> => {
//     const url = setUrl(`${baseUrl}/find/${id}`);

//     const { data } = await axios.get<DesignDocumentCommentView>(url, {
//       params: { target },
//     });

//     return data;
//   };

export const getAllEssences = async (
  parrentTarget: string,
  parrentId: string
): Promise<DesignDocumentView[]> => {
  const url = setUrl(`${baseUrl}/find/design-documents`);
  const { data } = await axios.get<DesignDocumentView[]>(url, {
    params: { parrentTarget, parrentId },
  });

  return data;
};

export const getOneEssences = async (
  id: string
): Promise<DesignDocumentView> => {
  const url = setUrl(`${baseUrl}/find/design-document/${id}`);
  const { data } = await axios.get<DesignDocumentView>(url);

  return data;
};