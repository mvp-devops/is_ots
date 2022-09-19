import { ActionTypes, EssenceAction, EssenceState } from "../types/main.types";

const initialState: EssenceState = {
  baseTarget: "",
  formVisible: false,
  actionType: "",
  checkListView: false,
  statisticView: false,
  collectiveCheckSheetView: false,
  summaryListOfEquipmentView: false,
  listItemsView: false,
  documentationView: false,
  isAuth: true,
  // currentUser: null,
  currentUser: {
    id: 1,
    subsidiaryId: 4,
    subsidiaryTitle: "ООО «Газпромнефть-Автоматизация»",
    designId: null,
    designTitle: null,
    counterpartyId: null,
    counterpartyTitle: null,
    fieldId: null,
    fieldTitle: null,
    firstName: "Михаил",
    secondName: "Васильевич",
    lastName: "Поляруш",
    subdivision: "Управление перспективных технологий",
    position: "Главный специалист",
    email: "polyarush.mv@gazprom-neft.ru",
    phone: "+7(812) 449-03-90 (доб. 7963)",
    roles: ["ADMINISTRATOR"],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJwb2x5YXJ1c2gubXZAZ2F6cHJvbS1uZWZ0LnJ1ZSIsImlhdCI6MTY2MjYxNTk5MSwiZXhwIjoxNjYyNzAyMzkxfQ.ehlUhST0N8ReXIMKHD5V45DQzqcczq5g8gLqgRnTTnA",
    avatar: "logo/a6787605-f1a6-4be7-a238-e8e921fd3d6a.png",
  },
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

    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        currentUser: action.payload,
      };

    case ActionTypes.USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
        currentUser: null,
      };

    case ActionTypes.SET_BASE_TARGET:
      return {
        ...state,
        baseTarget: action.payload,
      };

    default:
      return state;
  }
};
