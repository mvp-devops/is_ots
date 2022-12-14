import axios from "axios";
import { setUrl } from "../../main";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
} from "./../types";
import download from "js-file-download";

const baseUrl = "api/comment-accounting";

export const createOneEssence = async (
  item: DesignDocumentCommentCreationAttrs
): Promise<DesignDocumentCommentView> => {
  const url = setUrl(`${baseUrl}/add`);

  const { data } = await axios.post<DesignDocumentCommentView>(url, item);
  return data;
};

export const createManyEssences = async (
  items: DesignDocumentCommentCreationAttrs[]
): Promise<DesignDocumentCommentView[]> => {
  const url = setUrl(`${baseUrl}/add/many`);
  const { data } = await axios.post<DesignDocumentCommentView[]>(url, items);
  return data;
};

export const updateOneEssence = async (
  id: string,
  item: DesignDocumentCommentCreationAttrs
): Promise<DesignDocumentCommentView> => {
  const url = setUrl(`${baseUrl}/edit/${id}`);
  const { data } = await axios.put<DesignDocumentCommentView>(url, item);

  return data;
};

export const deleteOneEssence = async (
  target: string,
  id: string
): Promise<DesignDocumentCommentView> => {
  const url = setUrl(`${baseUrl}/remove/${id}`);
  const { data } = await axios.delete<DesignDocumentCommentView>(url, {
    params: { target },
  });

  return data;
};

export const getOneItem = async (
  target: string,
  id: string
): Promise<DesignDocumentCommentView> => {
  const url = setUrl(`${baseUrl}/find/${id}`);

  const { data } = await axios.get<DesignDocumentCommentView>(url, {
    params: { target },
  });

  return data;
};

export const getAllItems = async (
  parrentTarget: string,
  parrentId?: string,
  parrentIds?: string[]
): Promise<DesignDocumentCommentView[]> => {
  const url = setUrl(`${baseUrl}/find`);
  const { data } = await axios.get<DesignDocumentCommentView[]>(url, {
    params: { parrentTarget, parrentId, parrentIds },
  });

  return data;
};

export const exportLKPData = async (
  target: string,
  parrentId?: string,
  parrentIds?: string[]
) => {
  const url = setUrl(`${baseUrl}/download`);

  axios
    .get(url, {
      responseType: "blob",
      params: { target, parrentId, parrentIds },
    })
    .then((resp) => {

      download(resp.data, `LKP_${Math.random()}.xlsx`);
    });
};

export const importCommentsFromLKP = async (req: any) => {
  const subUrl = "upload/comments";
  const url = setUrl(`${baseUrl}/${subUrl}`);
  const {descriptor} = req;
  const formData = new FormData();
  formData.append("descriptor", descriptor);
  const {data: res} = await axios.post(url, formData);

  return res;

}