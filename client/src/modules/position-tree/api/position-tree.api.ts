import axios from "axios";
import {
  PositionTreeItem,
  PositionTreeView,
} from "../../../../../server/common/types/position-tree";
import { setUrl } from "../../main";

const baseUrl = "api/position-tree/";

export const getMenuItems = async (
  role: string,
  id?: string
): Promise<PositionTreeItem[]> => {
  const url = setUrl(`${baseUrl}tree`);

  let items: PositionTreeItem[] = [];

  try {
    const { data } = await axios.get<PositionTreeItem[]>(url);

    items =
      role === "Roles.ADMINISTRATOR" || "role === Roles.EXPERT"
        ? data
        : data.filter((item) => item.id === id);
  } catch (error) {
    alert(error);
  }

  return items;
};

export const getOneItem = async (
  target: string,
  id: string
): Promise<PositionTreeView | null> => {
  const url = setUrl(`${baseUrl}find/${id}`);
  let data: PositionTreeView | null = null;

  try {
    data = await (await axios.get<any>(url, { params: { target } })).data;

    return data;
  } catch (error) {
    alert(error);
  }

  return data;
};
