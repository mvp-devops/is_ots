import { ActionTypes, EssenceAction, EssenceState } from "../types";

const initialState: EssenceState = {
  loading: true,
  error: null,
  summaryListOfEquipment: [],
  currentEquipment: null,
  facilitiesList: [],
  metrologiesList: [],
  monitoringsList: [],
  cableLogList: [],
  impulseLineLogList: [],
  signalsList: [],
  generalInformationList: [],
};

export const equipmentAccountingReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.GET_ALL_ITEMS:
      return state;
    case ActionTypes.GET_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        summaryListOfEquipment: action.payload,
      };
    case ActionTypes.GET_ALL_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_ONE_ITEM:
      return state;
    case ActionTypes.GET_ONE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        currentEquipment: action.payload,
      };
    case ActionTypes.GET_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_FACILITIES_LIST:
      return state;
    case ActionTypes.GET_FACILITIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        facilitiesList: action.payload,
      };
    case ActionTypes.GET_FACILITIES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_ITEM:
      return state;
    case ActionTypes.POST_ONE_ITEM_SUCCESS:
      const newArr = [...state.summaryListOfEquipment, action.payload];
      return {
        ...state,

        summaryListOfEquipment: newArr,
      };
    case ActionTypes.POST_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MANY_ITEMS:
      return state;
    case ActionTypes.POST_MANY_ITEMS_SUCCESS:
      const newSummaryListOfEquipment = [
        ...state.summaryListOfEquipment,
        ...action.payload,
      ];
      return {
        ...state,

        summaryListOfEquipment: newSummaryListOfEquipment,
      };
    case ActionTypes.POST_MANY_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_FACILITY:
      return state;
    case ActionTypes.POST_ONE_FACILITY_SUCCESS:
      const newFacilitiesList = [...state.facilitiesList, action.payload];
      return {
        ...state,

        facilitiesList: newFacilitiesList,
      };
    case ActionTypes.POST_ONE_FACILITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_ITEM_SUCCESS:
      const editedOne = [
        ...state.generalInformationList.slice(0, +action.payload.id),
        action.payload,
        ...state.generalInformationList.slice(+action.payload.id + 1),
      ];
      return {
        ...state,
        loading: false,
        generalInformationList: editedOne,
      };
    case ActionTypes.UPDATE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_ITEM_SUCCESS:
      const deletedArr = [
        ...state.summaryListOfEquipment.filter(
          (item) => item.id !== action.payload.id
        ),
      ];

      return {
        ...state,
        loading: false,
        summaryListOfEquipment: deletedArr,
      };
    case ActionTypes.DELETE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_METROLOGY_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_METROLOGY_ITEM_SUCCESS:
      const updatedMeArr = [
        ...state.metrologiesList.filter(
          (item) => item.id !== action.payload.id
        ),
        action.payload,
      ];
      return {
        ...state,
        loading: false,
        metrologiesList: updatedMeArr,
      };
    case ActionTypes.UPDATE_ONE_METROLOGY_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_METROLOGY_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_METROLOGY_ITEM_SUCCESS:
      const deletedMeArr = [
        ...state.metrologiesList.filter(
          (item) => item.id !== action.payload.id
        ),
      ];

      return {
        ...state,
        loading: false,
        metrologiesList: deletedMeArr,
      };
    case ActionTypes.DELETE_ONE_METROLOGY_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_MONITORING_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_MONITORING_ITEM_SUCCESS:
      const updatedMoArr = [
        ...state.monitoringsList.filter(
          (item) => item.id !== action.payload.id
        ),
        action.payload,
      ];
      return {
        ...state,
        loading: false,
        monitoringsList: updatedMoArr,
      };
    case ActionTypes.UPDATE_ONE_MONITORING_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_MONITORING_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_MONITORING_ITEM_SUCCESS:
      const deletedMoArr = [
        ...state.monitoringsList.filter(
          (item) => item.id !== action.payload.id
        ),
      ];

      return {
        ...state,
        loading: false,
        monitoringsList: deletedMoArr,
      };
    case ActionTypes.DELETE_ONE_MONITORING_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_SUCCESS:
      const updatedCLArr = [
        ...state.cableLogList.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
      return {
        ...state,
        loading: false,
        cableLogList: updatedCLArr,
      };
    case ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_CABLE_LOG_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_SUCCESS:
      const deletedCLArr = [
        ...state.cableLogList.filter((item) => item.id !== action.payload.id),
      ];

      return {
        ...state,
        loading: false,
        cableLogList: deletedCLArr,
      };
    case ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS:
      const updatedILLArr = [
        ...state.impulseLineLogList.filter(
          (item) => item.id !== action.payload.id
        ),
        action.payload,
      ];
      return {
        ...state,
        loading: false,
        impulseLineLogList: updatedILLArr,
      };
    case ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS:
      const deletedILLArr = [
        ...state.impulseLineLogList.filter(
          (item) => item.id !== action.payload.id
        ),
      ];

      return {
        ...state,
        loading: false,
        impulseLineLogList: deletedILLArr,
      };
    case ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_SIGNAL_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_SIGNAL_ITEM_SUCCESS:
      const updatedSArr = [
        ...state.signalsList.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
      return {
        ...state,
        loading: false,
        signalsList: updatedSArr,
      };
    case ActionTypes.UPDATE_ONE_SIGNAL_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_SIGNAL_ITEM:
      return state;
    case ActionTypes.DELETE_ONE_SIGNAL_ITEM_SUCCESS:
      const deletedSArr = [
        ...state.signalsList.filter((item) => item.id !== action.payload.id),
      ];

      return {
        ...state,
        loading: false,
        signalsList: deletedSArr,
      };
    case ActionTypes.DELETE_ONE_SIGNAL_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentEquipment: action.payload,
      };

    default:
      return state;
  }
};
