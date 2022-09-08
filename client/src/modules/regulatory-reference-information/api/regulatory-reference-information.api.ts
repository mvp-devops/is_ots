import axios from "axios";

import {
  NSIView,
  UserCreateOrUpdateAttrs,
  UserView,
} from "../../../../../server/common/types/regulatory-reference-information";
import { setUrl } from "../../main";
import { userItem } from "../components/forms/form.settings";

const baseUrl = "api/regulatory-reference-information";

const setFormData = (item: UserCreateOrUpdateAttrs): FormData => {
  const data = new FormData();

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

  "counterpartyId" in item &&
    item.counterpartyId &&
    typeof item.counterpartyId === "string" &&
    data.append("counterpartyId", item.counterpartyId);

  "firstName" in item &&
    item.firstName &&
    typeof item.firstName === "string" &&
    data.append("firstName", item.firstName);

  "secondName" in item &&
    item.secondName &&
    typeof item.secondName === "string" &&
    data.append("secondName", item.secondName);

  "lastName" in item &&
    item.lastName &&
    typeof item.lastName === "string" &&
    data.append("lastName", item.lastName);

  "subdivision" in item &&
    item.subdivision &&
    typeof item.subdivision === "string" &&
    data.append("subdivision", item.subdivision);

  "position" in item &&
    item.position &&
    typeof item.position === "string" &&
    data.append("position", item.position);

  "email" in item &&
    item.email &&
    typeof item.email === "string" &&
    data.append("email", item.email);

  "phone" in item &&
    item.phone &&
    typeof item.phone === "string" &&
    data.append("phone", item.phone);

  "password" in item &&
    item.password &&
    typeof item.password === "string" &&
    data.append("password", item.password);

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
  let elem: UserView | null = null;

  try {
    const { data } = await axios.post<UserView>(url, formData);
    elem = data;
    return elem;
  } catch (error) {
    alert(error);
  }
  return elem;
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
