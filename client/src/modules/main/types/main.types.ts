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
