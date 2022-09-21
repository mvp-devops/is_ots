import { Dispatch } from "redux";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
} from "../../../../../server/common/types/comments-accounting";
import {
  getAllItems,
  getOneItem,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
} from "../api";
import { ActionTypes, EssenceAction } from "../types";

export const createComment = (item: DesignDocumentCommentCreationAttrs) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_ITEM });
      const data = await createOneEssence(item);
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const createManyComments = (
  items: DesignDocumentCommentCreationAttrs[]
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
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const updateComment = (
  id: string,
  item: DesignDocumentCommentCreationAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_ITEM });
      const data = await updateOneEssence(id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const deleteComment = (id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
      const data = await deleteOneEssence(id);
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getOneComment = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ONE_ITEM });
      const data = await getOneItem(target, id);
      dispatch({
        type: ActionTypes.GET_ONE_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getManyComments = (
  parrentTarget: string,
  parrentId?: string,
  parrentIds?: string[]
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_MANY_ITEMS });
      const data = await getAllItems(parrentTarget, parrentId, parrentIds);
      dispatch({
        type: ActionTypes.GET_MANY_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MANY_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const setCurrentComment = (item: DesignDocumentCommentView) => {
  return {
    type: ActionTypes.SET_CURRENT_ITEM,
    payload: item,
  };
};
