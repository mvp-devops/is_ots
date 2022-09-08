import axios from "axios";

import {
  NSIView,
  UserCreateOrUpdateAttrs,
  UserView,
} from "../../../../../server/common/types/regulatory-reference-information";
import { setUrl } from "../../main";

const baseUrl = "api/regulatory-reference-information";

const setFormData = (item: UserCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

  item.file && data.append("file", item.file);

  item.subsidiaryId &&
    data.append("subsidiaryId", item.subsidiaryId.toString());

  item.fieldId && data.append("fieldId", item.fieldId.toString());

  item.designId && data.append("designId", item.designId.toString());

  item.counterpartyId &&
    data.append("counterpartyId", item.counterpartyId.toString());

  item.firstName && data.append("firstName", item.firstName);

  item.secondName && data.append("secondName", item.secondName);

  item.lastName && data.append("lastName", item.lastName);

  item.subdivision && data.append("subdivision", item.subdivision);

  item.position && data.append("position", item.position);

  item.email && data.append("email", item.email);

  item.phone && data.append("phone", item.phone);

  item.password && data.append("password", item.password);

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

// export const getOneItem = async (
//   target: string,
//   id: string
// ): Promise<PositionTreeView | null> => {
//   const url = setUrl(`${baseUrl}find/${id}`);
//   let data: PositionTreeView | null = null;

//   try {
//     data = await (await axios.get<any>(url, { params: { target } })).data;

//     return data;
//   } catch (error) {
//     alert(error);
//   }

//   return data;
// };
