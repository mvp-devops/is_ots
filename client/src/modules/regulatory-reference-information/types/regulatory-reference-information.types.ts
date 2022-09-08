import {
  NSIView,
  UserView,
} from "../../../../../server/common/types/regulatory-reference-information";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  items: NSIView[];
  currentItem: NSIView | null;
}

export enum ActionTypes {
  GET_ALL_ITEMS = "GET_ALL_ITEMS",
  GET_ALL_ITEMS_SUCCESS = "GET_ALL_ITEMS_SUCCESS",
  GET_ALL_ITEMS_ERROR = "GET_ALL_ITEMS_ERROR",
  USER_REGISTRATION = "USER_REGISTRATION",
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

export type EssenceAction =
  | GetAllItemsAction
  | GetAllItemsSuccessAction
  | GetAllItemsErrorAction
  | UserRegistrationAction;
