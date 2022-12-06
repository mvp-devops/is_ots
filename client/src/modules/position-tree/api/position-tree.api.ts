import axios from "axios";
import {
  CheckListSets,
  CheckListView,
  StatisticView,
} from "../../../../../server/common/types/comments-accounting";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeItem,
  PositionTreeView,
} from "../../../../../server/common/types/position-tree";
import {FormActions, setUrl} from "../../main";
import {Roles} from "../../main/utils/main.consts"
import download from "js-file-download";

const baseUrl = "api/position-tree";

const setFormData = (item: PositionTreeCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  item.title && data.append("title", item.title);
  item.code && data.append("code", item.code);

  item.description && data.append("description", item.description);

  "file" in item && item.file && data.append("file", item.file);

  "subsidiaryId" in item &&
    item.subsidiaryId &&
    data.append("subsidiaryId", item.subsidiaryId.toString());
  "fieldId" in item &&
    item.fieldId &&
    data.append("fieldId", item.fieldId.toString());
  "designId" in item &&
    item.designId &&
    data.append("designId", item.designId.toString());
  "contract" in item && item.contract && data.append("contract", item.contract);
  "projectId" in item &&
    item.projectId &&
    data.append("projectId", item.projectId.toString());
  "equipmentId" in item &&
    item.equipmentId &&
    data.append("equipmentId", item.equipmentId.toString());
  "supplierId" in item &&
    item.supplierId &&
    data.append("supplierId", item.supplierId.toString());

  "position" in item && item.position && data.append("position", item.position);
  "unitId" in item &&
    item.unitId &&
    data.append("unitId", item.unitId.toString());

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

//FIXME: доделать возможность загрузки не только с ДО, но и с использованием таргета и id
export const createStructureFromTemplate = async (
  descriptor: any,
  target?: string,
  id?: string,
): Promise<PositionTreeItem[]> => {
  const url = setUrl(`${baseUrl}/create/many`);
  const formData = new FormData();
 formData.append("descriptor", descriptor);

  const { data } = await axios.post(url,  formData, { params: { target, id } });
  return data;
};

export const getTemplate = () => {
  const url = setUrl(`${baseUrl}/download/template`);

  axios
    .get(url, {
      responseType: "blob",
    })
    .then((resp) => {
      download(
        resp.data,
        `position_tree_template.xlsx`
      );
    });
}

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
user: any
): Promise<PositionTreeItem[]> => {
  const url = setUrl(`${baseUrl}/tree`);
  const {roles, subsidiaryId, fieldId} = user;
  let items: PositionTreeItem[] = [];

  const { data } = await axios.get<PositionTreeItem[]>(url);

  if((roles.includes(Roles.CUSTOMER) || roles.includes(Roles.GUEST) )&& !fieldId) {
    items = data.filter(item => +item.id === +subsidiaryId);
  } else

  if((roles.includes(Roles.CUSTOMER) || roles.includes(Roles.GUEST)) && fieldId) {
    const ids = new Set(fieldId === 6 || fieldId === 9 ? [6,9] : [fieldId]);
    items = data
      .map(item => ({ ...item, children: item.children.filter(c => ids.has(+c.id)) })).filter(x => x.children.length)

  } else

  if(roles.includes(Roles.OTS) && fieldId) {
    const ids = new Set( [fieldId]);
    items = data
      .map(item => ({ ...item, children: item.children.filter(c => ids.has(+c.id)) })).filter(x => x.children.length)
  } else {
    items = data.filter(item => +item.id !== 4);
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

export const getStatistic = async (
  target: string,
  id: string
): Promise<StatisticView> => {
  const url = setUrl(`${baseUrl}/statistic/${id}`);
  const { data } = await axios.get(url, { params: { target } });
  return data;
};