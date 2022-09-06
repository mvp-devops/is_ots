import axios from "axios";
import { setUrl } from "../../main";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
} from "./../../../../../server/common/types/comments-accounting";
export const createOneItem = () => {};

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
  id: string
): Promise<DesignDocumentCommentView> => {
  const url = setUrl(`${baseUrl}/remove/${id}`);
  const { data } = await axios.delete<DesignDocumentCommentView>(url);

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
  target: string,
  parrentId?: string
): Promise<DesignDocumentCommentView[]> => {
  const url = setUrl(`${baseUrl}/find`);
  let data: DesignDocumentCommentView[] = [];

  try {
    data = (
      await axios.get<DesignDocumentCommentView[]>(url, {
        params: { target, parrentId },
      })
    ).data;

    return data;
  } catch (error) {
    alert(error);
  }

  return data;
};
