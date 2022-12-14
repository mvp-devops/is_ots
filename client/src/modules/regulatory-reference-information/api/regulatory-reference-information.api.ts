import axios from "axios";

import {
  NsiCreateOrUpdateAttrs,
  NSIView,
  UserCreateOrUpdateAttrs,
  UserView,
} from "../types";
import { setUrl } from "../../main";
import download from "js-file-download";

const baseUrl = "api/regulatory-reference-information";

const setFormData = (
  item: UserCreateOrUpdateAttrs | NsiCreateOrUpdateAttrs
): FormData => {
  const data = new FormData();

  item && "file" in item && item.file && data.append("file", item.file);

  item &&
    "subsidiaryId" in item &&
    item.subsidiaryId &&
    data.append("subsidiaryId", item.subsidiaryId.toString());

  item &&
    "fieldId" in item &&
    item.fieldId &&
    data.append("fieldId", item.fieldId.toString());

  item &&
    "designId" in item &&
    item.designId &&
    data.append("designId", item.designId.toString());

  item &&
    "counterpartyId" in item &&
    item.counterpartyId &&
    data.append("counterpartyId", item.counterpartyId.toString());

  item &&
    "firstName" in item &&
    item.firstName &&
    data.append("firstName", item.firstName);

  item &&
    "secondName" in item &&
    item.secondName &&
    data.append("secondName", item.secondName);

  item &&
    "lastName" in item &&
    item.lastName &&
    data.append("lastName", item.lastName);

  item &&
    "subdivision" in item &&
    item.subdivision &&
    data.append("subdivision", item.subdivision);

  item &&
    "position" in item &&
    item.position &&
    data.append("position", item.position);

  item && "email" in item && item.email && data.append("email", item.email);

  item && "phone" in item && item.phone && data.append("phone", item.phone);

  item &&
    "password" in item &&
    item.password &&
    data.append("password", item.password);

  item && "title" in item && item.title && data.append("title", item.title);
  item &&
    "code" in item &&
    item.code &&
    data.append("code", item.code as string);
  item &&
    "description" in item &&
    item.description &&
    data.append("description", item.description);
  item &&
    "goal" in item &&
    item.goal &&
    data.append("goal", item.goal as string);
  item &&
    "tenseGoal" in item &&
    item.tenseGoal &&
    data.append("tenseGoal", item.tenseGoal as string);
  item &&
    "threshold" in item &&
    item.threshold &&
    data.append("threshold", item.threshold as string);

  return data;
};


export const getItems = async (target: string): Promise<NSIView[]> => {
  const url = setUrl(`${baseUrl}/find`);

  let items: NSIView[] = [];

  try {
    const { data } = await axios.get<NSIView[]>(url, { params: { target } });

    items = data;
  } catch (error) {
    alert(error);
  }

  return items;
};

export const getAssets = async (target: string): Promise<any[]> => {
  const url = setUrl(`${baseUrl}/get/${target}`);
  try {
    const { data } = await axios.get<any[]>(url);

    return data;
  } catch (error) {
    alert(error);
  }
}

export const getAllItems = async (target: string): Promise<NSIView[]> => {
  const url = setUrl(`${baseUrl}/find`);
  const { data } = await axios.get<NSIView[]>(url, { params: { target } });
  return data;
};

export const getOneItem = async (
  target: string,
  id: string
): Promise<NSIView> => {
  const url = setUrl(`${baseUrl}/find${id}`);
  const { data } = await axios.get<NSIView>(url, { params: { target } });
  return data;
};

export const createOneEssence = async (
  target: string,
  item: NsiCreateOrUpdateAttrs
): Promise<NSIView> => {
  const url = setUrl(`${baseUrl}/add`);
  const formData = setFormData(item);
  const { data } = await axios.post<NSIView>(url, formData, {
    params: { target },
  });
  return data;
};

export const updateOneEssence = async (
  target: string,
  id: string,
  item: NsiCreateOrUpdateAttrs
): Promise<NSIView> => {
  const url = setUrl(`${baseUrl}/edit/${id}`);
  const formData = setFormData(item);
  const { data } = await axios.put<NSIView>(url, formData, {
    params: { target },
  });
  return data;
};

export const deleteOneEssense = async (
  target: string,
  id: string
): Promise<NSIView> => {
  const url = setUrl(`${baseUrl}/remove/${id}`);
  const { data } = await axios.delete<NSIView>(url, {
    params: { target },
  });
  return data;
};

export const userRegistration = async (
  item: UserCreateOrUpdateAttrs
): Promise<UserView | null> => {
  const formData = setFormData(item);
  const url = setUrl(`${baseUrl}/add/user`);
  const { data } = await axios.post<UserView>(url, formData);

  return data;
};

export const userLogin = async (
  email: string,
  password: string
): Promise<UserView> => {
  const url = setUrl(`${baseUrl}/auth`);

  const { data } = await axios.get<UserView>(url, {
    params: { email, password },
  });

  return data;
};

export const exportData = async (target: string) => {
  const url = setUrl(`${baseUrl}/download`);

  axios
    .get(url, {
      responseType: "blob",
      params: { target },
    })
    .then((resp) => {

      download(resp.data, `${target}.xlsx`);
    });
};

export const exportTechCards = async () => {
  const url = setUrl(`${baseUrl}/download/tech-cards`);

  axios
    .get(url, {
      responseType: "blob",
    })
    .then((resp) => {
      download(
        resp.data,
        `КТ-339. Технологические карты на проведение пуско-наладочных работ КИПиА, ОПС, среднего уровня АСУТП (ЛСУ) (v. 1.0).xlsx`
      );
    });
};