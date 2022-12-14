// import { Roles } from "../../types/user.types";
// import {
//   CheckListSettings,
//   ProjectCheckListView,
// } from "../comment-accounting/components/form/CheckListForm";
// import { CurrentItemType, Items, PositionTreeItem } from "./main.types";
// import { StatisticRender } from "./types/statistic.types";

export const BASENAME = window.location.pathname.slice(0, -1);

// export const site = window.location.origin + BASENAME;

export const site = "http://localhost:7000";

export const setUrl = (target: string, id?: string): string => {
  const url = id ? `${site}/${target}/${id}` : `${site}/${target}`;
  return url;
};

export const setFilePath = (filePath: string): string => {
  return setUrl(filePath);
};

// export const getCurrentEssence = async (
//   target: string,
//   id: string
// ): Promise<ItemsType> => {
//   const url = setUrl(target, id);

//   const { data } = await axios.get(url);

//   let item: Object = {};

//   switch (target) {
//     case "subsidiary": {
//       item = {
//         id: data.render[0].id,
//         title: data.render[0].title,
//         code: data.render[0].code,
//         description: data.render[0].description,
//         file: data.render[0].logo,
//       };
//       break;
//     }
//     case "field": {
//       item = {
//         subsidiaryId: data.render[0].subsidiaryId,
//         id: data.render[0].id,
//         title: data.render[0].title,
//         code: data.render[0].code,
//         description: data.render[0].description,
//       };
//       break;
//     }
//     case "project": {
//       item = {
//         subsidiaryId: data.render[0].subsidiaryId,
//         fieldId: data.render[0].fieldId,
//         designId: data.render[0].designId,
//         id: data.render[0].id,
//         position: data.render[0].position,
//         title: data.render[0].title,
//         code: data.render[0].code,
//         contract: data.render[0].contract,
//         description: data.render[0].description,
//       };
//       break;
//     }
//     case "unit": {
//       item = {
//         subsidiaryId: data.render[0].subsidiaryId,
//         fieldId: data.render[0].fieldId,
//         projectId: data.render[0].projectId,
//         supplierId: data.render[0].supplierId,
//         equipmentId: data.render[0].equipmentId,
//         id: data.render[0].id,
//         position: data.render[0].position,
//         title: data.render[0].title,
//         code: data.render[0].code,
//         contract: data.render[0].contract,
//         description: data.render[0].description,
//       };
//       break;
//     }
//     case "sub-unit": {
//       item = {
//         subsidiaryId: data.render[0].subsidiaryId,
//         fieldId: data.render[0].fieldId,
//         projectId: data.render[0].projectId,
//         unitId: data.render[0].unitId,
//         supplierId: data.render[0].supplierId,
//         equipmentId: data.render[0].equipmentId,
//         id: data.render[0].id,
//         position: data.render[0].position,
//         title: data.render[0].title,
//         code: data.render[0].code,
//         contract: data.render[0].contract,
//         description: data.render[0].description,
//       };
//       break;
//     }
//     default:
//       break;
//   }

//   return item;
// };

// export const getCurrentEssence = async (
//   target: string,
//   currentId: string
// ): Promise<CurrentItemType> => {
//   const url = setUrl("api/current-item");
//   const { data } = await axios.get<CurrentItemType>(url, {
//     params: { target, currentId },
//   });

//   return data;
// };

// export const getMenuItems = async (
//   role: string,
//   id?: string
// ): Promise<PositionTreeItem[]> => {
//   const url = setUrl("api");

//   let items: PositionTreeItem[] = [];

//   try {
//     const { data } = await axios.get<PositionTreeItem[]>(url);

//     items =
//       role === Roles.ADMINISTRATOR || role === Roles.EXPERT
//         ? data
//         : data.filter((item) => item.id === id);
//   } catch (error) {
//     alert(error);
//   }

//   return items;
// };

// export const getListItems = async (
//   target: string,
//   parrentId?: string
// ): Promise<Items> => {
//   const url = setUrl(target);

//   try {
//     if (!parrentId) {
//       const { data } = await axios.get<Items>(url);
//       return data;
//     }

//     switch (target) {
//       case "field": {
//         const { data } = await axios.get<Items>(url, {
//           params: { subsidiaryId: parrentId },
//         });
//         return data;
//       }

//       case "project": {
//         const { data } = await axios.get<Items>(url, {
//           params: { fieldId: parrentId },
//         });
//         return data;
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     alert(error);
//   }

//   return null;
// };

// export const getStatistic = async (
//   target: string,
//   id: string
// ): Promise<StatisticRender> => {
//   const url = setUrl("api/statistic");
//   const { data } = await axios.get<StatisticRender>(url, {
//     params: { target, id },
//   });

//   return data;
// };

// export const getAllEssences = async (
//   target: string,
//   parrentId?: string
// ): Promise<Items> => {
//   const url = setUrl(target);

//   try {
//     if (!parrentId) {
//       const { data } = await axios.get<Items>(url);
//       return data;
//     }

//     switch (target) {
//       case "field": {
//         const { data } = await axios.get<Items>(url, {
//           params: { subsidiaryId: parrentId },
//         });
//         return data;
//       }

//       case "project": {
//         const { data } = await axios.get<Items>(url, {
//           params: { fieldId: parrentId },
//         });
//         return data;
//       }
//       case "unit": {
//         const { data } = await axios.get<Items>(url, {
//           params: { projectId: parrentId },
//         });
//         return data;
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     alert(error);
//   }

//   return null;
// };

// export const getCheckList = async (
//   target: string,
//   currentId: string,
//   settings: CheckListSettings
// ): Promise<ProjectCheckListView | null> => {
//   const url = setUrl("api/check-list");
//   try {
//     const { data } = await axios.post<ProjectCheckListView>(url, settings, {
//       params: { target, currentId },
//     });
//     return data;
//   } catch (error) {
//     alert(error);
//   }

//   return null;
// };