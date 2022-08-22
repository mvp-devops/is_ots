import { PositionTreeItem } from "../../../../../server/common/types/position-tree";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  menuItems: PositionTreeItem[];
  currentItem: PositionTreeItem | null;
}

export enum ActionTypes {
  GET_MENU_ITEMS = "GET_MENU_ITEMS",
  GET_MENU_ITEMS_SUCCESS = "GET_MENU_ITEMS_SUCCESS",
  GET_MENU_ITEMS_ERROR = "GET_MENU_ITEMS_ERROR",
  SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
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

interface SetCurrentItemAction {
  type: ActionTypes.SET_CURRENT_ITEM;
  payload: PositionTreeItem;
}

export type EssenceAction =
  | GetMenuItemsAction
  | GetMenuItemsSuccessAction
  | GetMenuItemsErrorAction
  | SetCurrentItemAction;
