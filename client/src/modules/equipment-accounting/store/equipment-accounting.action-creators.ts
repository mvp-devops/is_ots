import { Dispatch } from "redux";
import {
  CableLogCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  SummaryListOfEquipmentFormData,
  SummaryListOfEquipmentView,
  ActionTypes,
  EssenceAction,
} from "../types";

import {
  createManyEssences,
  createOneEssence,
  deleteOneCableLogEssence,
  deleteOneEssence,
  deleteOneImpulseLineLogEssence,
  deleteOneMetrologyEssence,
  deleteOneMonitoringEssence,
  deleteOneSignalEssence,
  getAllCableLog,
  getAllEssences,
  getAllFacilities,
  getAllGeneralInformation,
  getAllImpulseLineLog,
  getAllMetrology,
  getAllMonitoring,
  getAllSignal,
  updateOneCableLogEssence,
  updateOneEssence,
  updateOneImpulseLineLogEssence,
  updateOneMetrologyEssence,
  updateOneMonitoringEssence,
  updateOneSignalEssence,
} from "../api";
import { notification } from "antd";

export const getSummaryListOfEquipment = (
  parrentTarget: string,
  parrentId: string
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ALL_ITEMS });
      const data = await getAllEssences(parrentTarget, parrentId);

      const metrologiesList = getAllMetrology(data);
      console.log(metrologiesList);
      const monitoringsList = getAllMonitoring(data);
      const cableLogList = getAllCableLog(data);
      const impulseLineLogList = getAllImpulseLineLog(data);
      const signalsList = getAllSignal(data);
      const generalInformationList = getAllGeneralInformation(data);

      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionTypes.SET_METROLOGIES_LIST,
        payload: metrologiesList,
      });
      dispatch({
        type: ActionTypes.SET_MONITORINGS_LIST,
        payload: monitoringsList,
      });
      dispatch({
        type: ActionTypes.SET_CABLE_LOG_LIST,
        payload: cableLogList,
      });
      dispatch({
        type: ActionTypes.SET_IMPULSE_LINE_LOG_LIST,
        payload: impulseLineLogList,
      });
      dispatch({
        type: ActionTypes.SET_SIGNALS_LIST,
        payload: signalsList,
      });
      dispatch({
        type: ActionTypes.SET_GENERAL_INFORMATIONS_LIST,
        payload: generalInformationList,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getFacilitiesList = () => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_FACILITIES_LIST });
      const data = await getAllFacilities();
      dispatch({
        type: ActionTypes.GET_FACILITIES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_FACILITIES_LIST_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const createOneEquipment = (
  item: SummaryListOfEquipmentFormData,
  parrentFolderPath?: string
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_ITEM });
      const data = await createOneEssence(item, parrentFolderPath);
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Единица оборудования успешно добавлена",
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
        // description: "Ошибка добавления данных",
      });
    }
  };
};

export const createManyEquipments = (
  items: SummaryListOfEquipmentFormData[]
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_MANY_ITEMS });
      const data = await createManyEssences(items);
      dispatch({
        type: ActionTypes.POST_MANY_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_MANY_ITEMS_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};

export const updateOneGeneralInformation = (
  target: string,
  id: string | number,
  item: GeneralInformationCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_ITEM });
      const data = await updateOneEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const updateOneMetrology = (
  target: string,
  id: string | number,
  item: MetrologyCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM });
      const data = await updateOneMetrologyEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const updateOneMonitoring = (
  target: string,
  id: string | number,
  item: MonitoringCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_MONITORING_ITEM });
      const data = await updateOneMonitoringEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_MONITORING_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_MONITORING_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const updateOneCableLog = (
  target: string,
  id: string | number,
  item: CableLogCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM });
      const data = await updateOneCableLogEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const updateOneImpulseLineLog = (
  target: string,
  id: string | number,
  item: ImpulseLineLogCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM });
      const data = await updateOneImpulseLineLogEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const updateOneSignal = (
  target: string,
  id: string | number,
  item: SignalCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM });
      const data = await updateOneSignalEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};

export const deleteOneGeneralInformation = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
      const data = await deleteOneEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка удаления данных",
      });
    }
  };
};

export const deleteOneMetrology = (target: string, id: string | number) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_METROLOGY_ITEM });
      const data = await deleteOneMetrologyEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_METROLOGY_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_METROLOGY_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const deleteOneMonitoring = (target: string, id: string | number) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_MONITORING_ITEM });
      const data = await deleteOneMonitoringEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_MONITORING_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_MONITORING_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const deleteOneCableLog = (target: string, id: string | number) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM });
      const data = await deleteOneCableLogEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const deleteOneImpulseLineLog = (
  target: string,
  id: string | number
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM });
      const data = await deleteOneImpulseLineLogEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};
export const deleteOneSignal = (target: string, id: string | number) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_SIGNAL_ITEM });
      const data = await deleteOneSignalEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_SIGNAL_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_SIGNAL_ITEM_ERROR,
        payload: "Ошибка добавления данных",
      });
    }
  };
};

export const setCurrentEquipment = (
  currentItem: SummaryListOfEquipmentView
): EssenceAction => {
  return {
    type: ActionTypes.SET_CURRENT_ITEM,
    payload: currentItem,
  };
};
