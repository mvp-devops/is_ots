import axios from "axios";

import { NSIView } from "../../../../../server/common/types/regulatory-reference-information";
import { setUrl } from "../../main";

const baseUrl = "api/regulatory-reference-information/";

export const getItems = async (target: string): Promise<NSIView[]> => {
  const url = setUrl(`${baseUrl}find`);

  let items: NSIView[] = [];

  try {
    const { data } = await axios.get<NSIView[]>(url, { params: { target } });

    items = data;
  } catch (error) {
    alert(error);
  }

  return items;
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
