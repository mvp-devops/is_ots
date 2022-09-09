import axios from "axios";
import { DesignDocumentView } from "../../../../../server/common/types/file-storage";
import { setUrl } from "../../main";

const baseUrl = "api/file-storage";

// export const createOneEssence = async (
//     item: DesignDocumentCommentCreationAttrs
//   ): Promise<DesignDocumentCommentView> => {
//     const url = setUrl(`${baseUrl}/add`);

//     const { data } = await axios.post<DesignDocumentCommentView>(url, item);
//     return data;
//   };

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
