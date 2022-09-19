import {
  NSIView,
  UserView,
} from "../../../../../server/common/types/regulatory-reference-information";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  dictionaryTarget: string;
  renderNsiItems: NSIView[];
  currentNsiItem: NSIView | null;
}

export enum ActionTypes {
  GET_ALL_ITEMS = "GET_ALL_ITEMS",
  GET_ALL_ITEMS_SUCCESS = "GET_ALL_ITEMS_SUCCESS",
  GET_ALL_ITEMS_ERROR = "GET_ALL_ITEMS_ERROR",
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
  USER_REGISTRATION = "USER_REGISTRATION",
  SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
  SET_DICTIONARY_TARGET = "SET_DICTIONARY_TARGET",
}

interface GetAllItemsAction {
  type: ActionTypes.GET_ALL_ITEMS;
}

interface GetAllItemsSuccessAction {
  type: ActionTypes.GET_ALL_ITEMS_SUCCESS;
  payload: NSIView[];
}

interface GetAllItemsErrorAction {
  type: ActionTypes.GET_ALL_ITEMS_ERROR;
  payload: string;
}

interface UserRegistrationAction {
  type: ActionTypes.USER_REGISTRATION;
  payload: UserView | null;
}
interface SetCurrentItemAction {
  type: ActionTypes.SET_CURRENT_ITEM;
  payload: NSIView;
}
interface SetDictionaryTargetAction {
  type: ActionTypes.SET_DICTIONARY_TARGET;
  payload: string;
}

interface PostOneItemAction {
  type: ActionTypes.POST_ONE_ITEM;
}

interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_ITEM_SUCCESS;
  payload: NSIView;
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
  payload: NSIView[];
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
  payload: NSIView;
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
  payload: NSIView;
}

interface DeleteOneItemErrorAction {
  type: ActionTypes.DELETE_ONE_ITEM_ERROR;
  payload: string;
}

export type EssenceAction =
  | GetAllItemsAction
  | GetAllItemsSuccessAction
  | GetAllItemsErrorAction
  | SetCurrentItemAction
  | SetDictionaryTargetAction
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
  | UserRegistrationAction;
