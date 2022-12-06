import { ReactNode } from "react";
import { UserView } from "../types";

// export type MenuItem = Required<MenuProps>["items"][number];
export type MenuItem = {
  label: ReactNode;
  key: React.Key;
  children?: MenuItem[];
};

export enum FormActions {
  CREATE_POSITION_TREE_ITEMS = "CREATE_POSITION_TREE_ITEMS",
  EDIT = "EDIT",
  ADD = "ADD",
  REMOVE = "REMOVE",

  ADD_CHILD = "ADD_CHILD",
  EDIT_CHILD = "EDIT_CHILD",
  REMOVE_CHILD = "REMOVE_CHILD",

  ADD_DOCUMENT = "ADD_DOCUMENT",
  EDIT_DOCUMENT = "EDIT_DOCUMENT",
  REMOVE_DOCUMENT = "REMOVE_DOCUMENT",

  ADD_EQUIPMENT = "ADD_EQUIPMENT",
  EDIT_EQUIPMENT = "EDIT_EQUIPMENT",
  REMOVE_EQUIPMENT = "REMOVE_EQUIPMENT",

  ADD_COMMENT = "ADD_COMMENT",
  EDIT_COMMENT = "EDIT_COMMENT",
  REMOVE_COMMENT = "REMOVE_COMMENT",
  VIEW_COMMENT = "VIEW_COMMENT",

  VIEW = "GET",
  CHECKLIST = "CHECKLIST",
  REPORT = "REPORT",
  SUMMARY_LIST_OF_EQUIPMENT = "SUMMARY_LIST_OF_EQUIPMENT",
  COLLECTIVE_CHECK_SHEET = "COLLECTIVE_CHECK_SHEET",

  ADD_USER = "ADD_USER",
  EDIT_USER = "EDIT_USER",
  REMOVE_USER = "REMOVE_USER",

  ADD_DICTIONARY_ITEM = "ADD_DICTIONARY_ITEM",
  EDIT_DICTIONARY_ITEM = "EDIT_DICTIONARY_ITEM",
  REMOVE_DICTIONARY_ITEM = "REMOVE_DICTIONARY_ITEM",

  ADD_NORMATIVE = "ADD_NORMATIVE",
  EDIT_NORMATIVE = "EDIT_NORMATIVE",
  REMOVE_NORMATIVE = "REMOVE_NORMATIVE",

  CREATE_NEW_QUESTIONNAIRE = "CREATE_NEW_QUESTIONNAIRE",
  CREATE_QUESTIONNAIRE = "CREATE_QUESTIONNAIRE",
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
  baseTarget: string;
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
  SET_BASE_TARGET = "SET_BASE_TARGET",
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

interface SetBaseTargetAction {
  type: ActionTypes.SET_BASE_TARGET;
  payload: string;
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
  | SetBaseTargetAction
  | UserLoginAction
  | UserLogoutAction;