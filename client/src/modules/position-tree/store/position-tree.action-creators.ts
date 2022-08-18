import { Dispatch } from "redux";
import { getMenuItems, getOneItem } from "../api/position-tree.api";
import { ActionTypes, EssenceAction } from "../types/position-tree.types";

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

export const setCurrentItem = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_CURRENT_ITEM });

      const data = await getOneItem(target, id);

      dispatch({
        type: ActionTypes.GET_CURRENT_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CURRENT_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};
