import { ReactNode } from "react";
import { UserView } from "../../../../../server/common/types/regulatory-reference-information";

// export type MenuItem = Required<MenuProps>["items"][number];
export type MenuItem = {
  label: ReactNode;
  key: React.Key;
  children?: MenuItem[];
};

export enum FormActions {
  ADD_CHILD = "ADD_CHILD",
  EDIT_CHILD = "EDIT_CHILD",
  REMOVE_CHILD = "REMOVE_CHILD",
  ADD_DOCUMENT = "ADD_DOCUMENT",
  ADD_EQUIPMENT = "ADD_EQUIPMENT",
  EDIT_EQUIPMENT = "EDIT_EQUIPMENT",
  REMOVE_EQUIPMENT = "REMOVE_EQUIPMENT",
  EDIT_DOCUMENT = "EDIT_DOCUMENT",
  REMOVE_DOCUMENT = "REMOVE_DOCUMENT",
  ADD_COMMENT = "ADD_COMMENT",
  EDIT_COMMENT = "EDIT_COMMENT",
  REMOVE_COMMENT = "REMOVE_COMMENT",
  EDIT = "EDIT",
  ADD = "ADD",
  REMOVE = "REMOVE",
  VIEW = "GET",
  CHECKLIST = "CHECKLIST",
  SUMMARY_LIST_OF_EQUIPMENT = "SUMMARY_LIST_OF_EQUIPMENT",
  COLLECTIVE_CHECK_SHEET = "COLLECTIVE_CHECK_SHEET",
  USER = "USER",
}

export enum Roles {
  ADMINISTRATOR = "ADMINISTRATOR",
  EXPERT = "EXPERT",
  OTS = "OTS",
  CUSTOMER = "CUSTOMER",
  COUNTERPARTY = "COUNTERPARTY",
  DESIGN = "DESIGN",
}

export interface ListItem {
  href: string;
  title: string;
  description: string;
  content: string;
  avatar: string;
}

export interface EssenceState {
  formVisible: boolean;
  actionType: string;
  checkListView: boolean;
  summaryListOfEquipmentView: boolean;
  statisticView: boolean;
  collectiveCheckSheetView: boolean;
  listItemsView: boolean;
  documentationView: boolean;
  isAuth: boolean;
  currentUser: UserView | null;
}

export enum ActionTypes {
  SET_FORM_VISIBLE = "SET_FORM_VISIBLE",
  SET_ACTION_TYPE = "SET_ACTION_TYPE",
  SET_CHECK_LIST_VIEW = "SET_CHECK_LIST_VIEW",
  SET_SUMMARY_LIST_OF_EQUIPMENT_VIEW = "SET_SUMMARY_LIST_OF_EQUIPMENT_VIEW",
  SET_STATISTIC_VIEW = "SET_STATISTIC_VIEW",
  SET_COLLECTIVE_CHECK_SHEET_VIEW = "SET_COLLECTIVE_CHECK_SHEET_VIEW",
  SET_LIST_ITEMS_VIEW = "SET_LIST_ITEMS_VIEW",
  SET_DOCUMENTATION_VIEW = "SET_DOCUMENTATION_VIEW",
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
}

interface SetFormVisibleAction {
  type: ActionTypes.SET_FORM_VISIBLE;
  payload: boolean;
}
interface SetActionTypeAction {
  type: ActionTypes.SET_ACTION_TYPE;
  payload: string;
}
interface SetActionCheckListView {
  type: ActionTypes.SET_CHECK_LIST_VIEW;
  payload: boolean;
}

interface SetActionStatisticView {
  type: ActionTypes.SET_STATISTIC_VIEW;
  payload: boolean;
}

interface SetActionSummaryListOfEquipmentView {
  type: ActionTypes.SET_SUMMARY_LIST_OF_EQUIPMENT_VIEW;
  payload: boolean;
}

interface SetActionCollectiveCheckSheetView {
  type: ActionTypes.SET_COLLECTIVE_CHECK_SHEET_VIEW;
  payload: boolean;
}

interface SetActionListItemsView {
  type: ActionTypes.SET_LIST_ITEMS_VIEW;
  payload: boolean;
}

interface SetActionDocumentationView {
  type: ActionTypes.SET_DOCUMENTATION_VIEW;
  payload: boolean;
}

interface UserLoginAction {
  type: ActionTypes.USER_LOGIN;
  payload: UserView;
}

interface UserLogoutAction {
  type: ActionTypes.USER_LOGOUT;
}

export type EssenceAction =
  | SetFormVisibleAction
  | SetActionTypeAction
  | SetActionCheckListView
  | SetActionStatisticView
  | SetActionSummaryListOfEquipmentView
  | SetActionCollectiveCheckSheetView
  | SetActionListItemsView
  | SetActionDocumentationView
  | UserLoginAction
  | UserLogoutAction;
