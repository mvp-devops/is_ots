import axios from "axios";
import {
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView,
} from "../../../../../server/common/types/file-storage";
import { setUrl } from "../../main";

const baseUrl = "api/file-storage";

const setFormData = (item: DesignDocumentCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  item.title && data.append("title", item.title);

  item.code && data.append("code", item.code);

  item.revision && data.append("revision", item.revision);

  item.description && data.append("description", item.description);

  "file" in item && item.file && data.append("file", item.file);

  "projectId" in item &&
    item.projectId &&
    typeof item.projectId === "string" &&
    data.append("projectId", item.projectId);

  "unitId" in item &&
    item.unitId &&
    typeof item.unitId === "string" &&
    data.append("unitId", item.unitId);

  "subUnitId" in item &&
    item.subUnitId &&
    typeof item.subUnitId === "string" &&
    data.append("subUnitId", item.subUnitId);

  "supplierId" in item &&
    item.supplierId &&
    typeof item.supplierId === "string" &&
    data.append("supplierId", item.supplierId);

  "stageId" in item &&
    item.stageId &&
    typeof item.stageId === "string" &&
    data.append("stageId", item.stageId);

  "sectionId" in item &&
    item.sectionId &&
    typeof item.sectionId === "string" &&
    data.append("sectionId", item.sectionId);

  "sectionId" in item &&
    item.sectionId &&
    typeof item.sectionId === "string" &&
    data.append("sectionId", item.sectionId);

  "uqstId" in item &&
    item.uqstId &&
    typeof item.uqstId === "string" &&
    data.append("uqstId", item.uqstId);

  "suqstId" in item &&
    item.suqstId &&
    typeof item.suqstId === "string" &&
    data.append("suqstId", item.suqstId);

  "cableLogId" in item &&
    item.cableLogId &&
    typeof item.cableLogId === "string" &&
    data.append("cableLogId", item.cableLogId);

  "monitoringId" in item &&
    item.monitoringId &&
    typeof item.monitoringId === "string" &&
    data.append("monitoringId", item.monitoringId);

  return data;
};

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
