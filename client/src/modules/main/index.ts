import { MenuItem, FormActions, ListItem, Roles } from "./types/main.types";
import { setUrl, setFilePath } from "./api/main.api";
import { mainReducer } from "./store/main.reducer";
import * as mainActionCreators from "./store/main.action-creators";
import {
  tableLocale,
  userRoles,
  months,
  systemType,
} from "./utils/main.consts";

import { getUniqueAssetsOfArrayOfTheObjects, setCurrentDate } from "./utils";

export type { MenuItem, ListItem };

export {
  setUrl,
  systemType,
  months,
  FormActions,
  Roles,
  mainReducer,
  mainActionCreators,
  tableLocale,
  userRoles,
  setFilePath,
  setCurrentDate,
  getUniqueAssetsOfArrayOfTheObjects,
};
