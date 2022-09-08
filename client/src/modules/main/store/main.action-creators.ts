import { notification } from "antd";
import { Dispatch } from "redux";
import { userLogin } from "../../regulatory-reference-information/api/regulatory-reference-information.api";
import { ActionTypes, EssenceAction } from "../types/main.types";

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

export const setCheckListView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_CHECK_LIST_VIEW,
    payload: flag,
  };
};

export const setStatisticView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_STATISTIC_VIEW,
    payload: flag,
  };
};

export const setCollectiveCheckSheetView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_COLLECTIVE_CHECK_SHEET_VIEW,
    payload: flag,
  };
};

export const setSummaryListOfEquipmentView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_SUMMARY_LIST_OF_EQUIPMENT_VIEW,
    payload: flag,
  };
};

export const setListItemsView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_LIST_ITEMS_VIEW,
    payload: flag,
  };
};

export const setDocumentationView = (flag: boolean) => {
  return {
    type: ActionTypes.SET_DOCUMENTATION_VIEW,
    payload: flag,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      const data = await userLogin(email, password);

      dispatch({
        type: ActionTypes.USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      notification["error"]({
        message: "Ошибка",
        description: "Неверный E-mail или пароль. Повторите ввод",
      });
    }
  };
};
