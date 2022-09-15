import axios from "axios";
import {
  CheckListSets,
  CheckListView,
} from "../../../../../server/common/types/comments-accounting";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeItem,
  PositionTreeView,
} from "../../../../../server/common/types/position-tree";
import { Roles, setUrl } from "../../main";

const baseUrl = "api/position-tree";

const setFormData = (item: PositionTreeCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  item.title && data.append("title", item.title);
  item.code && data.append("code", item.code);

  item.description && data.append("description", item.description);

  "file" in item && item.file && data.append("file", item.file);

  "subsidiaryId" in item &&
    item.subsidiaryId &&
    typeof item.subsidiaryId === "string" &&
    data.append("subsidiaryId", item.subsidiaryId);
  "fieldId" in item &&
    item.fieldId &&
    typeof item.fieldId === "string" &&
    data.append("fieldId", item.fieldId);
  "designId" in item &&
    item.designId &&
    typeof item.designId === "string" &&
    data.append("designId", item.designId);
  "contract" in item &&
    item.contract &&
    typeof item.contract === "string" &&
    data.append("contract", item.contract);
  "projectId" in item &&
    item.projectId &&
    typeof item.projectId === "string" &&
    data.append("projectId", item.projectId);
  "equipmentId" in item &&
    item.equipmentId &&
    typeof item.equipmentId === "string" &&
    data.append("equipmentId", item.equipmentId);
  "supplierId" in item &&
    item.supplierId &&
    typeof item.supplierId === "string" &&
    data.append("supplierId", item.supplierId);

  "position" in item &&
    item.position &&
    typeof item.position === "string" &&
    data.append("position", item.position);
  "unitId" in item &&
    item.unitId &&
    typeof item.unitId === "string" &&
    data.append("unitId", item.unitId);

  return data;
};

export const createOneEssence = async (
  target: string,
  item: PositionTreeCreateOrUpdateAttrs
): Promise<PositionTreeView> => {
  const url = setUrl(`${baseUrl}/add`);
  const formData = setFormData(item);
  const { data } = await axios.post(url, formData, { params: { target } });
  return data;
};

export const createManyEssences = async (
  target: string,
  items: PositionTreeCreateOrUpdateAttrs[]
): Promise<PositionTreeView[]> => {
  const url = setUrl(`${baseUrl}/add/many`);
  const elems: FormData[] = [];
  for (let i = 0; i < items.length; i++) {
    const formData = setFormData(items[i]);
    elems.push(formData);
  }

  const { data } = await axios.post(url, elems, { params: { target } });
  return data;
};

export const updateOneEssence = async (
  target: string,
  id: string,
  item: PositionTreeCreateOrUpdateAttrs
): Promise<PositionTreeView> => {
  const url = setUrl(`${baseUrl}/edit/${id}`);
  const formData = setFormData(item);
  const { data } = await axios.put(url, formData, { params: { target } });

  return data;
};

export const deleteOneEssence = async (
  target: string,
  id: string
): Promise<PositionTreeView> => {
  const url = setUrl(`${baseUrl}/remove/${id}`);
  const { data } = await axios.delete(url, { params: { target } });

  return data;
};

export const getMenuItems = async (
  roles: string[],
  id?: string
): Promise<PositionTreeItem[]> => {
  const url = setUrl(`${baseUrl}/tree`);

  let items: PositionTreeItem[] = [];

  try {
    const { data } = await axios.get<PositionTreeItem[]>(url);

    items =
      roles.includes(Roles.ADMINISTRATOR) || roles.includes(Roles.EXPERT)
        ? data
        : (!roles.includes(Roles.ADMINISTRATOR) ||
            !roles.includes(Roles.EXPERT)) &&
          roles.includes(Roles.OTS)
        ? data.filter((item) => item.id === id)
        : roles.includes(Roles.CUSTOMER)
        ? data.filter((item) => item.id === id)
        : [];
  } catch (error) {
    alert(error);
  }

  return items;
};

export const getOneItem = async (
  target: string,
  id: string
): Promise<PositionTreeView> => {
  const url = setUrl(`${baseUrl}/find/${id}`);

  const { data } = await axios.get<PositionTreeView>(url, {
    params: { target },
  });

  return data;
};

export const getAllItems = async (
  target: string,
  parrentId?: string
): Promise<PositionTreeView[]> => {
  const url = setUrl(`${baseUrl}/find`);
  let data: PositionTreeView[] = [];

  try {
    data = (
      await axios.get<PositionTreeView[]>(url, {
        params: { target, parrentId },
      })
    ).data;

    return data;
  } catch (error) {
    alert(error);
  }

  return data;
};

export const getCheckList = async (
  target: string,
  id: string,
  settings: CheckListSets
): Promise<CheckListView> => {
  const url = setUrl(`${baseUrl}/check-list/${target}/${id}`);
  const { data } = await axios.post(url, settings);

  return data;
};

export const getFolderPath = async (
  target: string,
  id: string
): Promise<string> => {
  const url = setUrl(`${baseUrl}/find/folder/${id}`);

  const { data } = await axios.get<string>(url, {
    params: { target },
  });

  return data;
};
