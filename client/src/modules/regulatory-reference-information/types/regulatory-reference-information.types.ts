import { NSIView, UserView } from ".";
import type {NormativeView} from "../../../../../server/common/types/file-storage"

export interface EssenceState {
  error: string | null;
  loading: boolean;
  dictionaryTarget: string;
  renderNsiItems: NSIView[] ;
  currentNsiItem: NSIView |  null;
  normativeList: NormativeView[];
  currentNormative: NormativeView | null;
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
/* NORMATIVE */
  GET_ALL_NORMATIVE = "GET_ALL_NORMATIVE",
  GET_ALL_NORMATIVE_SUCCESS = "GET_ALL_NORMATIVE_SUCCESS",
  GET_ALL_NORMATIVE_ERROR = "GET_ALL_NORMATIVE_ERROR",
  GET_ONE_NORMATIVE = "GET_ONE_NORMATIVE",
  GET_ONE_NORMATIVE_SUCCESS = "GET_ONE_NORMATIVE_SUCCESS",
  GET_ONE_NORMATIVE_ERROR = "GET_ONE_NORMATIVE_ERROR",
  POST_MANY_NORMATIVE = "POST_MANY_NORMATIVE",
  POST_MANY_NORMATIVE_SUCCESS = "POST_MANY_NORMATIVE_SUCCESS",
  POST_MANY_NORMATIVE_ERROR = "POST_MANY_NORMATIVE_ERROR",
  POST_ONE_NORMATIVE = "POST_ONE_NORMATIVE",
  POST_ONE_NORMATIVE_SUCCESS = "POST_ONE_NORMATIVE_SUCCESS",
  POST_ONE_NORMATIVE_ERROR = "POST_ONE_NORMATIVE_ERROR",
  UPDATE_ONE_NORMATIVE = "UPDATE_ONE_NORMATIVE",
  UPDATE_ONE_NORMATIVE_SUCCESS = "UPDATE_ONE_NORMATIVE_SUCCESS",
  UPDATE_ONE_NORMATIVE_ERROR = "UPDATE_ONE_NORMATIVE_ERROR",
  DELETE_ONE_NORMATIVE = "DELETE_ONE_NORMATIVE",
  DELETE_ONE_NORMATIVE_SUCCESS = "DELETE_ONE_NORMATIVE_SUCCESS",
  DELETE_ONE_NORMATIVE_ERROR = "DELETE_ONE_NORMATIVE_ERROR",
  DELETE_MANY_NORMATIVE = "DELETE_MANY_NORMATIVE",
  DELETE_MANY_NORMATIVE_SUCCESS = "DELETE_MANY_NORMATIVE_SUCCESS",
  DELETE_MANY_NORMATIVE_ERROR = "DELETE_MANY_NORMATIVE_ERROR",
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
  payload: NSIView | NormativeView;
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
  payload: NSIView[] ;
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

/* NORMATIVE */

interface GetAllNormativeAction {
  type: ActionTypes.GET_ALL_NORMATIVE;
}
interface GetAllNormativeSuccessAction {
  type: ActionTypes.GET_ALL_NORMATIVE_SUCCESS;
  payload: NormativeView[];
}
interface GetAllNormativeErrorAction {
  type: ActionTypes.GET_ALL_NORMATIVE_ERROR;
  payload: string;
}

interface GetOneNormativeAction {
  type: ActionTypes.GET_ONE_NORMATIVE;
}
interface GetOneNormativeSuccessAction {
  type: ActionTypes.GET_ONE_NORMATIVE_SUCCESS;
  payload: NormativeView;
}
interface GetOneNormativeErrorAction {
  type: ActionTypes.GET_ONE_NORMATIVE_ERROR;
  payload: string;
}

interface PostOneNormativeAction {
  type: ActionTypes.POST_ONE_NORMATIVE;
}
interface PostOneNormativeSuccessAction {
  type: ActionTypes.POST_ONE_NORMATIVE_SUCCESS;
  payload: NormativeView[];
}
interface PostOneNormativeErrorAction {
  type: ActionTypes.POST_ONE_NORMATIVE_ERROR;
  payload: string;
}

interface PostManyNormativeAction {
  type: ActionTypes.POST_MANY_NORMATIVE;
}
interface PostManyNormativeSuccessAction {
  type: ActionTypes.POST_MANY_NORMATIVE_SUCCESS;
  payload: NormativeView[];
}
interface PostManyNormativeErrorAction {
  type: ActionTypes.POST_MANY_NORMATIVE_ERROR;
  payload: string;
}

interface UpdateOneNormativeAction {
  type: ActionTypes.UPDATE_ONE_NORMATIVE;
}
interface UpdateOneNormativeSuccessAction {
  type: ActionTypes.UPDATE_ONE_NORMATIVE_SUCCESS;
  payload: NormativeView;
}
interface UpdateOneNormativeErrorAction {
  type: ActionTypes.UPDATE_ONE_NORMATIVE_ERROR;
  payload: string;
}

interface DeleteOneNormativeAction {
  type: ActionTypes.DELETE_ONE_NORMATIVE;
}
interface DeleteOneNormativeSuccessAction {
  type: ActionTypes.DELETE_ONE_NORMATIVE_SUCCESS;
  payload: NormativeView;
}
interface DeleteOneNormativeErrorAction {
  type: ActionTypes.DELETE_ONE_NORMATIVE_ERROR;
  payload: string;
}

interface DeleteManyNormativeAction {
  type: ActionTypes.DELETE_MANY_NORMATIVE;
}
interface DeleteManyNormativeSuccessAction {
  type: ActionTypes.DELETE_MANY_NORMATIVE_SUCCESS;
  payload: NormativeView[];
}
interface DeleteManyNormativeErrorAction {
  type: ActionTypes.DELETE_MANY_NORMATIVE_ERROR;
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
  | UserRegistrationAction
  /* NORMATIVE */
| GetAllNormativeAction
| GetAllNormativeSuccessAction
| GetAllNormativeErrorAction
|GetOneNormativeAction
| GetOneNormativeSuccessAction
| GetOneNormativeErrorAction
| PostOneNormativeAction
| PostOneNormativeSuccessAction
| PostOneNormativeErrorAction
  | PostManyNormativeAction
  | PostManyNormativeSuccessAction
  | PostManyNormativeErrorAction
  | UpdateOneNormativeAction
  | UpdateOneNormativeSuccessAction
  | UpdateOneNormativeErrorAction
  | DeleteOneNormativeAction
  | DeleteOneNormativeSuccessAction
  | DeleteOneNormativeErrorAction
  | DeleteManyNormativeAction
  | DeleteManyNormativeSuccessAction
  | DeleteManyNormativeErrorAction