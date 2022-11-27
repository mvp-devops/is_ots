import {DesignDocumentView, NormativeView} from "../../../../../server/common/types/file-storage";

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

  /* DESIGN-DOCUMENT */
  GET_ALL_DESIGN_DOCUMENT = "GET_ALL_DESIGN_DOCUMENT",
  GET_ALL_DESIGN_DOCUMENT_SUCCESS = "GET_ALL_DESIGN_DOCUMENT_SUCCESS",
  GET_ALL_DESIGN_DOCUMENT_ERROR = "GET_ALL_DESIGN_DOCUMENT_ERROR",
  GET_ONE_DESIGN_DOCUMENT = "GET_ONE_DESIGN_DOCUMENT",
  GET_ONE_DESIGN_DOCUMENT_SUCCESS = "GET_ONE_DESIGN_DOCUMENT_SUCCESS",
  GET_ONE_DESIGN_DOCUMENT_ERROR = "GET_ONE_DESIGN_DOCUMENT_ERROR",
  POST_MANY_DESIGN_DOCUMENT = "POST_MANY_DESIGN_DOCUMENT",
  POST_MANY_DESIGN_DOCUMENT_SUCCESS = "POST_MANY_DESIGN_DOCUMENT_SUCCESS",
  POST_MANY_DESIGN_DOCUMENT_ERROR = "POST_MANY_DESIGN_DOCUMENT_ERROR",
  POST_ONE_DESIGN_DOCUMENT = "POST_ONE_DESIGN_DOCUMENT",
  POST_ONE_DESIGN_DOCUMENT_SUCCESS = "POST_ONE_DESIGN_DOCUMENT_SUCCESS",
  POST_ONE_DESIGN_DOCUMENT_ERROR = "POST_ONE_DESIGN_DOCUMENT_ERROR",
  UPDATE_ONE_DESIGN_DOCUMENT = "UPDATE_ONE_DESIGN_DOCUMENT",
  UPDATE_ONE_DESIGN_DOCUMENT_SUCCESS = "UPDATE_ONE_DESIGN_DOCUMENT_SUCCESS",
  UPDATE_ONE_DESIGN_DOCUMENT_ERROR = "UPDATE_ONE_DESIGN_DOCUMENT_ERROR",
  DELETE_ONE_DESIGN_DOCUMENT = "DELETE_ONE_DESIGN_DOCUMENT",
  DELETE_ONE_DESIGN_DOCUMENT_SUCCESS = "DELETE_ONE_DESIGN_DOCUMENT_SUCCESS",
  DELETE_ONE_DESIGN_DOCUMENT_ERROR = "DELETE_ONE_DESIGN_DOCUMENT_ERROR",
  DELETE_MANY_DESIGN_DOCUMENT = "DELETE_MANY_DESIGN_DOCUMENT",
  DELETE_MANY_DESIGN_DOCUMENT_SUCCESS = "DELETE_MANY_DESIGN_DOCUMENT_SUCCESS",
  DELETE_MANY_DESIGN_DOCUMENT_ERROR = "DELETE_MANY_DESIGN_DOCUMENT_ERROR",
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
  payload: DesignDocumentView[];
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
  payload: DesignDocumentView;
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
  payload: DesignDocumentView;
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
  payload: DesignDocumentView;
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

/* DESIGN-DOCUMENT */

interface GetAllDesignDocumentAction {
  type: ActionTypes.GET_ALL_DESIGN_DOCUMENT;
}
interface GetAllDesignDocumentSuccessAction {
  type: ActionTypes.GET_ALL_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView[];
}
interface GetAllDesignDocumentErrorAction {
  type: ActionTypes.GET_ALL_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface GetOneDesignDocumentAction {
  type: ActionTypes.GET_ONE_DESIGN_DOCUMENT;
}
interface GetOneDesignDocumentSuccessAction {
  type: ActionTypes.GET_ONE_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView;
}
interface GetOneDesignDocumentErrorAction {
  type: ActionTypes.GET_ONE_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface PostOneDesignDocumentAction {
  type: ActionTypes.POST_ONE_DESIGN_DOCUMENT;
}
interface PostOneDesignDocumentSuccessAction {
  type: ActionTypes.POST_ONE_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView[];
}
interface PostOneDesignDocumentErrorAction {
  type: ActionTypes.POST_ONE_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface PostManyDesignDocumentAction {
  type: ActionTypes.POST_MANY_DESIGN_DOCUMENT;
}
interface PostManyDesignDocumentSuccessAction {
  type: ActionTypes.POST_MANY_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView[];
}
interface PostManyDesignDocumentErrorAction {
  type: ActionTypes.POST_MANY_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface UpdateOneDesignDocumentAction {
  type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT;
}
interface UpdateOneDesignDocumentSuccessAction {
  type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView;
}
interface UpdateOneDesignDocumentErrorAction {
  type: ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface DeleteOneDesignDocumentAction {
  type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT;
}
interface DeleteOneDesignDocumentSuccessAction {
  type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView;
}
interface DeleteOneDesignDocumentErrorAction {
  type: ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_ERROR;
  payload: string;
}

interface DeleteManyDesignDocumentAction {
  type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT;
}
interface DeleteManyDesignDocumentSuccessAction {
  type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_SUCCESS;
  payload: DesignDocumentView[];
}
interface DeleteManyDesignDocumentErrorAction {
  type: ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_ERROR;
  payload: string;
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
  | SetCheckedDocumentsAction
/* DESIGN-DOCUMENT */
  /* NORMATIVE */
  | GetAllDesignDocumentAction
  | GetAllDesignDocumentSuccessAction
  | GetAllDesignDocumentErrorAction
  |GetOneDesignDocumentAction
  | GetOneDesignDocumentSuccessAction
  | GetOneDesignDocumentErrorAction
  | PostOneDesignDocumentAction
  | PostOneDesignDocumentSuccessAction
  | PostOneDesignDocumentErrorAction
  | PostManyDesignDocumentAction
  | PostManyDesignDocumentSuccessAction
  | PostManyDesignDocumentErrorAction
  | UpdateOneDesignDocumentAction
  | UpdateOneDesignDocumentSuccessAction
  | UpdateOneDesignDocumentErrorAction
  | DeleteOneDesignDocumentAction
  | DeleteOneDesignDocumentSuccessAction
  | DeleteOneDesignDocumentErrorAction
  | DeleteManyDesignDocumentAction
  | DeleteManyDesignDocumentSuccessAction
  | DeleteManyDesignDocumentErrorAction