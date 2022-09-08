import { Dispatch } from "redux";
import { UserCreateOrUpdateAttrs } from "../../../../../server/common/types/regulatory-reference-information";
import {
  getItems,
  userRegistration,
} from "../api/regulatory-reference-information.api";
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

export const createNewUser = (item: UserCreateOrUpdateAttrs) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      const data = await userRegistration(item);
      dispatch({ type: ActionTypes.USER_REGISTRATION, payload: data });
    } catch (error) {}
  };
};
