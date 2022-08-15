// import { Dispatch } from "redux";
// import {
//   ActionTypes,
//   ConsolidatedListCreateOrUpdateFormData,
//   ConsolidatedListView,
//   EssenceAction,
// } from "../types/equipment-accounting.types";
// import {
//   createOneEssence,
//   deleteOneEssence,
//   getAllEssences,
// } from "../api/equipment-accounting.api";

// export const getConsolidatedList = (target: string, parrentId: string) => {
//   return async (dispatch: Dispatch<EssenceAction>) => {
//     try {
//       dispatch({ type: ActionTypes.GET_ALL_ITEMS });
//       const data = await getAllEssences(target, parrentId);
//       dispatch({
//         type: ActionTypes.GET_ALL_ITEMS_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.GET_ALL_ITEMS_ERROR,
//         payload: "Ошибка получения данных",
//       });
//     }
//   };
// };

export const createOneFacility = () => {};

// export const createOneFacility = (
//   item: ConsolidatedListCreateOrUpdateFormData
// ) => {
//   return async (dispatch: Dispatch<EssenceAction>) => {
//     try {
//       dispatch({ type: ActionTypes.POST_ONE_ITEM });
//       const data = await createOneEssence(item);
//       dispatch({
//         type: ActionTypes.POST_ONE_ITEM_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.POST_ONE_ITEM_ERROR,
//         payload: "Ошибка добавления данных",
//       });
//     }
//   };
// };

// export const updateneFacility = (
//   id: string,
//   item: ConsolidatedListCreateOrUpdateFormData
// ) => {
//   return async (dispatch: Dispatch<EssenceAction>) => {
//     try {
//       dispatch({ type: ActionTypes.UPDATE_ONE_ITEM });
//       const data = await updateOneEssence(id, item);
//       dispatch({
//         type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
//         payload: "Ошибка обновления записи",
//       });
//     }
//   };
// };

// export const deleteOneFacility = (id: string) => {
//   return async (dispatch: Dispatch<EssenceAction>) => {
//     try {
//       dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
//       const data = await deleteOneEssence(id);
//       dispatch({
//         type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.DELETE_ONE_ITEM_ERROR,
//         payload: "Ошибка удаления данных",
//       });
//     }
//   };
// };

// export const setCurrentFacility = (
//   currentItem: ConsolidatedListView
// ): EssenceAction => {
//   return {
//     type: ActionTypes.SET_CURRENT_ITEM,
//     payload: currentItem,
//   };
// };
