import { ActionTypes } from "../types/main.types";

export const setFormVisible = (flag: boolean) => {
  return {
    type: ActionTypes.SET_FORM_VISIBLE,
    payload: flag,
  };
};

export const setActionType = (actionType: string) => {
  return {
    type: ActionTypes.SET_ACTION_TYPE,
    payload: actionType,
  };
};
