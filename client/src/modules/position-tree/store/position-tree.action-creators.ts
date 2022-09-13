import { notification } from "antd";
import { Dispatch } from "redux";
import { CheckListSets } from "../../../../../server/common/types/comments-accounting";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeItem,
  PositionTreeView,
} from "../../../../../server/common/types/position-tree";
import {
  getAllItems,
  getOneItem,
  getMenuItems,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
  getCheckList,
} from "../api";
import { ActionTypes, EssenceAction } from "../types";

export const setMenuItems = (roles: string[], id?: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_MENU_ITEMS });

      const data = await getMenuItems(roles, id);

      dispatch({
        type: ActionTypes.GET_MENU_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MENU_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: "Ошибка получения данных",
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
      notification["success"]({
        message: "ОК",
        description: "Данные успешно добавлены",
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: "Ошибка отправки данных",
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
      notification["success"]({
        message: "ОК",
        description: "Данные успешно добавлены",
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_MANY_ITEMS_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: "Ошибка отправки данных",
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
      notification["success"]({
        message: "ОК",
        description: "Данные успешно обновлены",
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
        payload: "Ошибка обновления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: "Ошибка обновления данных",
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
      notification["success"]({
        message: "ОК",
        description: "Данные успешно удалены",
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка удаления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: "Ошибка удаления данных",
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

export const setPositionTreeItem = (item: PositionTreeView) => {
  return {
    type: ActionTypes.SET_POSITION_TREE_ITEM,
    payload: item,
  };
};

export const setPositionTreeItems = (items: PositionTreeView[]) => {
  return {
    type: ActionTypes.SET_POSITION_TREE_ITEMS,
    payload: items,
  };
};

export const setCurrentItem = (item: PositionTreeItem) => {
  return {
    type: ActionTypes.SET_CURRENT_ITEM,
    payload: item,
  };
};

export const getCheckListData = (
  target: string,
  id: string,
  settings: CheckListSets
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_CHECK_LIST_DATA });
      const data = await getCheckList(target, id, settings);
      dispatch({
        type: ActionTypes.GET_CHECK_LIST_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CHECK_LIST_DATA_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};
