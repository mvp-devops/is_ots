import { Dispatch } from "redux";
import { PositionTreeItem } from "../../../../../server/common/types/position-tree";
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

export const setCurrentItem = (item: PositionTreeItem) => {
  return {
    type: ActionTypes.SET_CURRENT_ITEM,
    payload: item,
  };
};
