import { combineReducers } from "redux";
import { equipmentAccountingReducer } from "../modules/equipment-accounting";
import { mainReducer } from "../modules/main";
import { positionTreeReducer } from "../modules/position-tree";
import { nsiReducer } from "../modules/regulatory-reference-information";
import { commentAccountingReducer } from "../modules/comment-accounting";
import { fileStorageReducer } from "../modules/file-storage";

export const rootReducer = combineReducers({
  commentAccounting: commentAccountingReducer,
  equipmentAccounting: equipmentAccountingReducer,
  positionTree: positionTreeReducer,
  nsi: nsiReducer,
  main: mainReducer,
  fileStorage: fileStorageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
