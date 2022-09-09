import { notification } from "antd";
import { Dispatch } from "redux";
import { DesignDocumentView } from "../../../../../server/common/types/file-storage";
import { getAllEssences } from "../api";
import { ActionTypes, EssenceAction } from "../types/file-storage.types";

export const getAllDesignDocuments = (
  parrentTarget: string,
  parrentId: string
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ALL_ITEMS });
      const data = await getAllEssences(parrentTarget, parrentId);
      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });

      notification["error"]({
        message: "Ошибка",
        description: "Ошибка получения данных",
      });
    }
  };
};

// notification["success"]({
//     message: "ОК",
//     description: "Данные успешно удалены",
//   });

export const setCurrentDesignDocument = (item: DesignDocumentView) => {};
