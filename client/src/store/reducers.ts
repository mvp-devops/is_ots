import { combineReducers } from "redux";
// import { subsidiaryReducer } from "../../models/position-tree/subsidiary/subsidiary.reducer";
// import { fieldReducer } from "../../models/position-tree/field/field.reducer";

// import { unitReducer } from "../../models/position-tree/unit/unit.reducer";
// import { mainReducer } from "../../models/main/main.reducer";
// import { projectReducer } from "../../models/position-tree/project/project.reducer";
// import { subUnitReducer } from "../../models/position-tree/sub-unit/sub-unit.reducer";
// import { designDocumentReducer } from "../../models/file-storage/design-document/design-document.reducer";
// import { designDocumentCommentReducer } from "../../models/comment-accounting/design-document-comments/design-document-comments.reducer";
// import { equipmentAccountingReducer } from "../../models/equipment-accounting/store/equipment-accounting.reducer";

export const rootReducer = combineReducers({
  //   field: fieldReducer,
  //   main: mainReducer,
  //   project: projectReducer,
  //   subsidiary: subsidiaryReducer,
  //   unit: unitReducer,
  //   subUnit: subUnitReducer,
  //   designDocument: designDocumentReducer,
  //   designDocumentComment: designDocumentCommentReducer,
  //   equipmentAccounting: equipmentAccountingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
