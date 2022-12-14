import { Dispatch } from "redux";
import {
  ActionTypes,
  EssenceAction,
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentView,
  getAllItems,
  getOneItem,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
} from "..";
import {importCommentsFromLKP} from "../api/comment-accounting.api";

export const createComment = (item: DesignDocumentCommentCreationAttrs) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_COMMENT });
      const data = await createOneEssence(item);
      dispatch({
        type: ActionTypes.POST_ONE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_ONE_COMMENT_ERROR,
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
      dispatch({ type: ActionTypes.POST_MANY_COMMENTS });
      const data = await createManyEssences(items);
      dispatch({
        type: ActionTypes.POST_MANY_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_MANY_COMMENTS_ERROR,
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
      dispatch({ type: ActionTypes.UPDATE_ONE_COMMENT });
      const data = await updateOneEssence(id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_COMMENT_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const deleteComment = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_COMMENT });
      const data = await deleteOneEssence(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ONE_COMMENT_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const getOneComment = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ONE_COMMENT });
      const data = await getOneItem(target, id);
      dispatch({
        type: ActionTypes.GET_ONE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_COMMENT_ERROR,
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
      dispatch({ type: ActionTypes.GET_MANY_COMMENTS });
      const data = await getAllItems(parrentTarget, parrentId, parrentIds);
      dispatch({
        type: ActionTypes.GET_MANY_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MANY_COMMENTS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const setCurrentComment = (item: DesignDocumentCommentView) => {
  return {
    type: ActionTypes.SET_CURRENT_COMMENT,
    payload: item,
  };
};

export const uploadCommentsFromLkp = (req: any) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_MANY_COMMENTS });
      const data = await importCommentsFromLKP(req);
      dispatch({
        type: ActionTypes.POST_MANY_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.POST_MANY_COMMENTS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
}