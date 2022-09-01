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
