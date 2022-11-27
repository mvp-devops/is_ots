import { notification } from "antd";
import { Dispatch } from "redux";
import {
  ActionTypes,
  EssenceAction,
  DesignDocumentCreateOrUpdateAttrs,
  DesignDocumentView,
} from "../types";
import {
  getAllEssences,
  createDesignDocument
} from "../api";

import {
  deleteManyDesignDocuments,
  editDesignDocument,
  findAllDesignDocuments,
  findOneDesignDocument,
  deleteDesignDocument, createDesignDocuments
} from "../api/design-document.api";

//FIXME: Удалить как неиспользуемый
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

//FIXME: Удалить как неиспользуемый
export const createOneDesignDocument = (
  parrentId: string,
  parrentTarget: string,
  parrentFolderPath: string,
  item: DesignDocumentCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
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

//FIXME: Удалить как неиспользуемый
export const createManyDesignDocuments = (
  data: DesignDocumentCreateOrUpdateAttrs[]
) => {};

//FIXME: Удалить как неиспользуемый
export const updateOneDesignDocument = () => {};

//FIXME: Удалить как неиспользуемый
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


/* DESIGN-DOCUMENTS */
export const setDesignDocuments = (parentTarget: string, parentId: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({type: ActionTypes.GET_ALL_DESIGN_DOCUMENT});

      const data = await findAllDesignDocuments(parentTarget, parentId);

      dispatch({
        type: ActionTypes.GET_ALL_DESIGN_DOCUMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_DESIGN_DOCUMENT_ERROR,
        payload: "Ошибка получения данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const setCurrentDesignDocument = (id: string, parentTarget: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({type: ActionTypes.GET_ONE_DESIGN_DOCUMENT});

      const data = await findOneDesignDocument(id, parentTarget);

      dispatch({
        type: ActionTypes.GET_ONE_DESIGN_DOCUMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_DESIGN_DOCUMENT_ERROR,
        payload: "Ошибка получения данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const uploadDesignDocument = ( item: any) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_DESIGN_DOCUMENT });
      const data = await createDesignDocuments(item);
      dispatch({
        type: ActionTypes.POST_ONE_DESIGN_DOCUMENT_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно добавлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.POST_ONE_DESIGN_DOCUMENT_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const updateDesignDocument = ( item: any, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT });
      const data = await editDesignDocument(item, id);
      dispatch({
        type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно обновлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const removeDesignDocument = (id?: string, ids?: string[], parentTarget?: string) => {
  if(id) {
    return async (dispatch: Dispatch<EssenceAction>) => {
      try {
        dispatch({type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT});

        const data = await deleteDesignDocument(id, undefined, parentTarget);

        dispatch({
          type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_ERROR,
          payload: "Ошибка удаления данных",
        });
        notification["error"]({
          message: "Ошибка",
          description: error.message,
        });
      }
    }
  }
  if(ids && ids.length > 0) {
    return async (dispatch: Dispatch<EssenceAction>) => {
      try {
        dispatch({type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT});

        const data = await deleteManyDesignDocuments(ids, parentTarget);

        dispatch({
          type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_ERROR,
          payload: "Ошибка удаления данных",
        });
        notification["error"]({
          message: "Ошибка",
          description: error.message,
        });
      }
    }
  }

};