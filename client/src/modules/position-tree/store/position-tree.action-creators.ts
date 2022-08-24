import { Dispatch } from "redux";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeItem,
} from "../../../../../server/common/types/position-tree";
import {
  getAllItems,
  getOneItem,
  getMenuItems,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
} from "../api";
import { ActionTypes, EssenceAction } from "../types";

export const setMenuItems = (role: string, id?: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_MENU_ITEMS });

      const data = await getMenuItems(role, id);

      dispatch({
        type: ActionTypes.GET_MENU_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MENU_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const createPositionTreeItem = (
  target: string,
  item: PositionTreeCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_ITEM });
      const data = await createOneEssence(target, item);
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const createManyPositionTreeItems = (
  target: string,
  items: PositionTreeCreateOrUpdateAttrs[]
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_MANY_ITEMS });
      const data = await createManyEssences(target, items);
      dispatch({
        type: ActionTypes.POST_MANY_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_MANY_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const updatePositionTreeItem = (
  target: string,
  id: string,
  item: PositionTreeCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_ITEM });
      const data = await updateOneEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const deletePositionTreeItem = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
      const data = await deleteOneEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getPositionTreeItem = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ONE_ITEM });
      const data = await getOneItem(target, id);
      dispatch({
        type: ActionTypes.GET_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getPositionTreeItems = (target: string, parrentId?: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_MANY_ITEMS });
      const data = await getAllItems(target, parrentId);
      dispatch({
        type: ActionTypes.GET_MANY_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MANY_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const setCurrentItem = (item: PositionTreeItem) => {
  return {
    type: ActionTypes.SET_CURRENT_ITEM,
    payload: item,
  };
};
