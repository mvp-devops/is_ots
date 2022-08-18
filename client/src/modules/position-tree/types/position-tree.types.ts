import { PositionTreeItem } from "../../../../../server/common/types/position-tree";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  menuItems: PositionTreeItem[];
  currentItem: any | null;
}

export enum ActionTypes {
  GET_MENU_ITEMS = "GET_MENU_ITEMS",
  GET_MENU_ITEMS_SUCCESS = "GET_MENU_ITEMS_SUCCESS",
  GET_MENU_ITEMS_ERROR = "GET_MENU_ITEMS_ERROR",
  GET_CURRENT_ITEM = "GET_CURRENT_ITEM",
  GET_CURRENT_ITEM_SUCCESS = "GET_CURRENT_ITEM_SUCCESS",
  GET_CURRENT_ITEM_ERROR = "GET_CURRENT_ITEM_ERROR",
}

interface GetMenuItemsAction {
  type: ActionTypes.GET_MENU_ITEMS;
}

interface GetMenuItemsSuccessAction {
  type: ActionTypes.GET_MENU_ITEMS_SUCCESS;
  payload: PositionTreeItem[];
}

interface GetMenuItemsErrorAction {
  type: ActionTypes.GET_MENU_ITEMS_ERROR;
  payload: string;
}

interface GetCurrentItemAction {
  type: ActionTypes.GET_CURRENT_ITEM;
}

interface GetCurrentItemSuccessAction {
  type: ActionTypes.GET_CURRENT_ITEM_SUCCESS;
  payload: any;
}

interface GetCurrentItemErrorAction {
  type: ActionTypes.GET_CURRENT_ITEM_ERROR;
  payload: string;
}

export type EssenceAction =
  | GetMenuItemsAction
  | GetMenuItemsSuccessAction
  | GetMenuItemsErrorAction
  | GetCurrentItemAction
  | GetCurrentItemSuccessAction
  | GetCurrentItemErrorAction;
