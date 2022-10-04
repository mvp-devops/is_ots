import { MenuItem, FormActions, ListItem, Roles } from "./types/main.types";
import { setUrl, setFilePath } from "./api/main.api";
import { mainReducer } from "./store/main.reducer";
import * as mainActionCreators from "./store/main.action-creators";
import { tableLocale, userRoles } from "./utils/main.consts";

import { getUniqueAssetsOfArrayOfTheObjects } from "./utils";

export type { MenuItem, ListItem };

export {
  setUrl,
  FormActions,
  Roles,
  mainReducer,
  mainActionCreators,
  tableLocale,
  userRoles,
  setFilePath,
  getUniqueAssetsOfArrayOfTheObjects,
};
