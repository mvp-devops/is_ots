import { Dispatch } from "redux";
import { getItems } from "../api/regulatory-reference-information.api";
import {
  ActionTypes,
  EssenceAction,
} from "../types/regulatory-reference-information.types";

export const setNsiItems = (target: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ALL_ITEMS });

      const data = await getItems(target);

      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};
