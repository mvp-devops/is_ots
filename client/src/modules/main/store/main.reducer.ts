import { ActionTypes, EssenceAction, EssenceState } from "../types/main.types";

const initialState: EssenceState = {
  formVisible: false,
  actionType: "",
  checkListView: false,
  statisticView: false,
  collectiveCheckSheetView: false,
  summaryListOfEquipmentView: false,
  listItemsView: false,
  documentationView: false,
};

export const mainReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.SET_FORM_VISIBLE:
      return {
        ...state,
        formVisible: action.payload,
      };
    case ActionTypes.SET_ACTION_TYPE:
      return {
        ...state,
        actionType: action.payload,
      };

    case ActionTypes.SET_CHECK_LIST_VIEW:
      return {
        ...state,
        checkListView: action.payload,
      };

    case ActionTypes.SET_STATISTIC_VIEW:
      return {
        ...state,
        statisticView: action.payload,
      };

    case ActionTypes.SET_SUMMARY_LIST_OF_EQUIPMENT_VIEW:
      return {
        ...state,
        summaryListOfEquipmentView: action.payload,
      };

    case ActionTypes.SET_COLLECTIVE_CHECK_SHEET_VIEW:
      return {
        ...state,
        collectiveCheckSheetView: action.payload,
      };
    case ActionTypes.SET_LIST_ITEMS_VIEW:
      return {
        ...state,
        listItemsView: action.payload,
      };

    case ActionTypes.SET_DOCUMENTATION_VIEW:
      return {
        ...state,
        documentationView: action.payload,
      };

    default:
      return state;
  }
};
