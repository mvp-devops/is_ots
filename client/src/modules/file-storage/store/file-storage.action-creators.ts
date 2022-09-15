import { notification } from "antd";
import { Dispatch } from "redux";
import {
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView,
} from "../../../../../server/common/types/file-storage";
import { getAllEssences } from "../api";
import {
  createDesignDocument,
  deleteDesignDocument,
} from "../api/file-storage.api";
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

export const createOneDesignDocument = (
  parrentId: string,
  parrentTarget: string,
  parrentFolderPath: string,
  item: DesignDocumentCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    console.log("FS_AC: ", item);
    try {
      dispatch({ type: ActionTypes.POST_ONE_ITEM });
      const data = await createDesignDocument(
        parrentId,
        parrentTarget,
        parrentFolderPath,
        item
      );
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно добавлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const createManyDesignDocuments = (
  data: DesignDocumentCreateOrUpdateAttrs[]
) => {};

export const updateOneDesignDocument = () => {};

export const deleteOneDesignDocument = (id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
      const data = await deleteDesignDocument(id);
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно удалены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка удаления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

// notification["success"]({
//     message: "ОК",
//     description: "Данные успешно удалены",
//   });

export const setCurrentDocument = (item: DesignDocumentView) => {
  return {
    type: ActionTypes.SET_CURRENT_DOCUMENT,
    payload: item,
  };
};

export const setCheckedDocuments = (items: DesignDocumentView[]) => {
  return {
    type: ActionTypes.SET_CHECKED_DOCUMENTS,
    payload: items,
  };
};
