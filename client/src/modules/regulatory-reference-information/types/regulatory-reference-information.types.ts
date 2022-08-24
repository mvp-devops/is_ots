import { NSIView } from "../../../../../server/common/types/regulatory-reference-information";

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

export type EssenceAction =
  | GetAllItemsAction
  | GetAllItemsSuccessAction
  | GetAllItemsErrorAction;
