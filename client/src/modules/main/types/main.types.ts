import { ReactNode } from "react";

// export type MenuItem = Required<MenuProps>["items"][number];
export type MenuItem = {
  label: ReactNode;
  key: React.Key;
  children?: MenuItem[];
};

export enum FormActions {
  EDIT = "UPDATE",
  ADD = "POST",
  REMOVE = "DELETE",
  VIEW = "GET",
  CHECKLIST = "CHECKLIST",
}

export enum Roles {
  ADMIN = "ADMIN",
  EXPERT = "EXPERT",
  OTS = "OTS",
  CUSTOMER = "CUSTOMER",
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
}

export enum ActionTypes {
  SET_FORM_VISIBLE = "SET_FORM_VISIBLE",
  SET_ACTION_TYPE = "SET_ACTION_TYPE",
}

interface SetFormVisibleAction {
  type: ActionTypes.SET_FORM_VISIBLE;
  payload: boolean;
}
interface SetActionTypeAction {
  type: ActionTypes.SET_ACTION_TYPE;
  payload: string;
}

export type EssenceAction = SetFormVisibleAction | SetActionTypeAction;
