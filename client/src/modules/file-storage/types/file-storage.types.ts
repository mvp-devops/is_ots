import { DesignDocumentView } from "../../../../../server/common/types/file-storage";

export enum ActionTypes {
  GET_ALL_ITEMS_SUCCESS = "GET_ALL_ITEMS_SUCCESS",
  GET_ALL_ITEMS_ERROR = "GET_ALL_ITEMS_ERROR",
  GET_ALL_ITEMS = "GET_ALL_ITEMS",

  GET_ONE_ITEM = "GET_ONE_ITEM",
  GET_ONE_ITEM_SUCCESS = "GET_ONE_ITEM_SUCCESS",
  GET_ONE_ITEM_ERROR = "GET_ONE_ITEM_ERROR",

  POST_ONE_ITEM = "POST_ONE_ITEM",
  POST_ONE_ITEM_SUCCESS = "POST_ONE_ITEM_SUCCESS",
  POST_ONE_ITEM_ERROR = "POST_ONE_ITEM_ERROR",

  UPDATE_ONE_ITEM = "UPDATE_ONE_ITEM",
  UPDATE_ONE_ITEM_SUCCESS = "UPDATE_ONE_ITEM_SUCCESS",
  UPDATE_ONE_ITEM_ERROR = "UPDATE_ONE_ITEM_ERROR",

  DELETE_ONE_ITEM = "DELETE_ONE_ITEM",
  DELETE_ONE_ITEM_SUCCESS = "DELETE_ONE_ITEM_SUCCESS",
  DELETE_ONE_ITEM_ERROR = "DELETE_ONE_ITEM_ERROR",

  SET_PAGE = "SET_PAGE",
  SET_LIMIT = "SET_LIMIT",

  SET_CURRENT_DOCUMENT = "SET_CURRENT_DOCUMENT",
  SET_CHECKED_DOCUMENTS = "SET_CHECKED_DOCUMENTS",
}

export interface EssenceState {
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  designDocuments: DesignDocumentView[];
  currentDesignDocument: DesignDocumentView | null;
  checkedDesignDocuments: DesignDocumentView[];
}

interface GetAllItemsAction {
  type: ActionTypes.GET_ALL_ITEMS;
}
interface GetAllItemsSuccessAction {
  type: ActionTypes.GET_ALL_ITEMS_SUCCESS;
  payload: Array<DesignDocumentView>;
}
interface GetAllItemsErrorAction {
  type: ActionTypes.GET_ALL_ITEMS_ERROR;
  payload: string;
}
interface GetOneItemAction {
  type: ActionTypes.GET_ONE_ITEM;
}
interface GetOneItemSuccessAction {
  type: ActionTypes.GET_ONE_ITEM_SUCCESS;
  payload: DesignDocumentView[];
}
interface GetOneItemErrorAction {
  type: ActionTypes.GET_ONE_ITEM_ERROR;
  payload: string;
}
interface PostOneItemAction {
  type: ActionTypes.POST_ONE_ITEM;
}
interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_ITEM_SUCCESS;
  payload: DesignDocumentView;
}
interface PostOneItemErrorAction {
  type: ActionTypes.POST_ONE_ITEM_ERROR;
  payload: string;
}
interface UpdateOneItemAction {
  type: ActionTypes.UPDATE_ONE_ITEM;
}
interface UpdateOneItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS;
  payload: DesignDocumentView[];
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
  payload: DesignDocumentView[];
}
interface DeleteOneItemErrorAction {
  type: ActionTypes.DELETE_ONE_ITEM_ERROR;
  payload: string;
}

interface SetLimitAction {
  type: ActionTypes.SET_LIMIT;
  payload: number;
}
interface SetPageAction {
  type: ActionTypes.SET_PAGE;
  payload: number;
}

interface SetCurrentDocumentAction {
  type: ActionTypes.SET_CURRENT_DOCUMENT;
  payload: DesignDocumentView;
}

interface SetCheckedDocumentsAction {
  type: ActionTypes.SET_CHECKED_DOCUMENTS;
  payload: DesignDocumentView[];
}

export type EssenceAction =
  | GetAllItemsAction
  | GetAllItemsSuccessAction
  | GetAllItemsErrorAction
  | GetOneItemAction
  | GetOneItemSuccessAction
  | GetOneItemErrorAction
  | PostOneItemAction
  | PostOneItemSuccessAction
  | PostOneItemErrorAction
  | UpdateOneItemAction
  | UpdateOneItemSuccessAction
  | UpdateOneItemErrorAction
  | DeleteOneItemAction
  | DeleteOneItemSuccessAction
  | DeleteOneItemErrorAction
  | SetPageAction
  | SetLimitAction
  | SetCurrentDocumentAction
  | SetCheckedDocumentsAction;
