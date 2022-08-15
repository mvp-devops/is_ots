import axios from "axios";
import { setUrl } from "../../main";

// export const getAllEssences = async (
//   target: string,
//   currentId: string
// ): Promise<ConsolidatedListView[]> => {
//   const url = setUrl("api/equipment-accounting");

//   const { data } = await axios.get<ConsolidatedListView[]>(url, {
//     params: { target, currentId },
//   });
//   return data;
// };

// export const getOneEssences = async (
//   id: string
// ): Promise<ConsolidatedListView> => {
//   const url = setUrl(`api/quipment-accounting/${id}`);

//   const { data } = await axios.get<ConsolidatedListView>(url, {
//     params: { id },
//   });
//   return data;
// };

// export const createOneEssence = async (
//   item: ConsolidatedListCreateOrUpdateFormData
// ): Promise<ConsolidatedListView> => {
//   const url = setUrl("api/equipment-accounting");
//   const { data } = await axios.post(url, item);
//   return data;
// };

// export const deleteOneEssence = async (
//   id: string
// ): Promise<ConsolidatedListView> => {
//   const url = setUrl(`api/equipment-accounting/${id}`);

//   const { data } = await axios.delete<ConsolidatedListView>(url, {
//     params: { id },
//   });
//   return data;
// };

// export const updateOneEssence = async (
//   target: string,
//   id: number,
//   item: FieldCreateOrUpdateAttrs
// ): Promise<FieldInfo> => {
//   const url = setUrl(target, id.toString());
//   const { data } = await axios.put(url, item);

//   console.log(item);
//   return data;
// };
