import {
  PositionTreeItem,
  PositionTreeView,
} from "../../../../../server/common/types/position-tree";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  menuItems: PositionTreeItem[];
  currentItem: PositionTreeItem | null;
  renderItems: PositionTreeView[];
  renderOneItem: PositionTreeView | null;
}

export enum ActionTypes {
  GET_MENU_ITEMS = "GET_MENU_ITEMS",
  GET_MENU_ITEMS_SUCCESS = "GET_MENU_ITEMS_SUCCESS",
  GET_MENU_ITEMS_ERROR = "GET_MENU_ITEMS_ERROR",
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

interface PostOneItemAction {
  type: ActionTypes.POST_ONE_ITEM;
}

interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_ITEM_SUCCESS;
  payload: PositionTreeView;
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
  payload: PositionTreeView[];
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
  payload: PositionTreeView;
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
  payload: PositionTreeView;
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
  payload: PositionTreeView;
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
  payload: PositionTreeView[];
}

interface GetManyItemsErrorAction {
  type: ActionTypes.GET_MANY_ITEMS_ERROR;
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
