import { DesignDocumentCommentView } from "../../../../../server/common/types/comments-accounting";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  currentItem: DesignDocumentCommentView | null;
  renderItems: DesignDocumentCommentView[];
}

export enum ActionTypes {
  POST_MANY_ITEMS = "POST_MANY_ITEMS",
  POST_MANY_ITEMS_SUCCESS = "POST_MANY_ITEMS_SUCCESS",
  POST_MANY_ITEMS_ERROR = "POST_MANY_ITEMS_ERROR",
  POST_ONE_ITEM = "POST_ONE_ITEM",
  POST_ONE_ITEM_SUCCESS = "POST_ONE_ITEM_SUCCESS",
  POST_ONE_ITEM_ERROR = "POST_ONE_ITEM_ERROR",
  UPDATE_ONE_ITEM = "UPDATE_ONE_ITEM",
  UPDATE_ONE_ITEM_SUCCESS = "UPDATE_ONE_ITEM_SUCCESS",
  UPDATE_ONE_ITEM_ERROR = "UPDATE_ONE_ITEM_ERROR",
  DELETE_ONE_ITEM = "DELETE_ONE_ITEM",
  DELETE_ONE_ITEM_SUCCESS = "DELETE_ONE_ITEM_SUCCESS",
  DELETE_ONE_ITEM_ERROR = "DELETE_ONE_ITEM_ERROR",
  GET_ONE_ITEM = "GET_ONE_ITEM",
  GET_ONE_ITEM_SUCCESS = "GET_ONE_ITEM_SUCCESS",
  GET_ONE_ITEM_ERROR = "GET_ONE_ITEM_ERROR",
  GET_MANY_ITEMS = "GET_MANY_ITEMS",
  GET_MANY_ITEMS_SUCCESS = "GET_MANY_ITEMS_SUCCESS",
  GET_MANY_ITEMS_ERROR = "GET_MANY_ITEMS_ERROR",
  SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
}

interface PostOneItemAction {
  type: ActionTypes.POST_ONE_ITEM;
}

interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_ITEM_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface PostOneItemErrorAction {
  type: ActionTypes.POST_ONE_ITEM_ERROR;
  payload: string;
}

interface PostManyItemsAction {
  type: ActionTypes.POST_MANY_ITEMS;
}

interface PostManyItemsSuccessAction {
  type: ActionTypes.POST_MANY_ITEMS_SUCCESS;
  payload: DesignDocumentCommentView[];
}

interface PostManyItemsErrorAction {
  type: ActionTypes.POST_MANY_ITEMS_ERROR;
  payload: string;
}

interface UpdateOneItemAction {
  type: ActionTypes.UPDATE_ONE_ITEM;
}

interface UpdateOneItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface UpdateOneItemErrorAction {
  type: ActionTypes.UPDATE_ONE_ITEM_ERROR;
  payload: string;
}

interface DeleteOneItemAction {
  type: ActionTypes.DELETE_ONE_ITEM;
}

interface DeleteOneItemSuccessAction {
  type: ActionTypes.DELETE_ONE_ITEM_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface DeleteOneItemErrorAction {
  type: ActionTypes.DELETE_ONE_ITEM_ERROR;
  payload: string;
}
interface GetOneItemAction {
  type: ActionTypes.GET_ONE_ITEM;
}

interface GetOneItemSuccessAction {
  type: ActionTypes.GET_ONE_ITEM_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface GetOneItemErrorAction {
  type: ActionTypes.GET_ONE_ITEM_ERROR;
  payload: string;
}

interface GetManyItemsAction {
  type: ActionTypes.GET_MANY_ITEMS;
}

interface GetManyItemsSuccessAction {
  type: ActionTypes.GET_MANY_ITEMS_SUCCESS;
  payload: DesignDocumentCommentView[];
}

interface GetManyItemsErrorAction {
  type: ActionTypes.GET_MANY_ITEMS_ERROR;
  payload: string;
}

interface SetCurrentItemAction {
  type: ActionTypes.SET_CURRENT_ITEM;
  payload: DesignDocumentCommentView;
}

export type EssenceAction =
  | SetCurrentItemAction
  | PostOneItemAction
  | PostOneItemSuccessAction
  | PostOneItemErrorAction
  | PostManyItemsAction
  | PostManyItemsSuccessAction
  | PostManyItemsErrorAction
  | UpdateOneItemAction
  | UpdateOneItemSuccessAction
  | UpdateOneItemErrorAction
  | DeleteOneItemAction
  | DeleteOneItemSuccessAction
  | DeleteOneItemErrorAction
  | GetOneItemAction
  | GetOneItemSuccessAction
  | GetOneItemErrorAction
  | GetManyItemsAction
  | GetManyItemsSuccessAction
  | GetManyItemsErrorAction;
