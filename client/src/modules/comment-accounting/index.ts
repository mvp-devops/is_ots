import { commentAccountingReducer } from "./store/comment-accounting.reducer";
import * as commentAccountingActionCreators from "./store/comment-accounting.action-creators";

import {
  ActionTypes,
  EssenceAction,
  EssenceState,
  DesignDocumentCommentView,
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
  CommentAccountingNSIView,
  DesignDocumentCommentSolutionView,
  CheckListCriticalityCriterions,
  CheckListStageCriterions,
  DesignDocumentView,
  CheckListSets,
  CheckListSettings,
} from "./types";

import {
  getAllItems,
  getOneItem,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
} from "./api";

import { useCommentAccounting } from "./hooks";

import {
  CheckList,
  CollectiveCheckSheet,
  CommentAccountingModalContainer,
} from "./views";

import {
  CommentForm,
  SolutionForm,
  useCommentAccountingFormData,
  CheckListForm,
} from "./components";

export { commentAccountingReducer, commentAccountingActionCreators };

export type {
  EssenceAction,
  EssenceState,
  DesignDocumentCommentView,
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
  CommentAccountingNSIView,
  DesignDocumentCommentSolutionView,
  CheckListCriticalityCriterions,
  CheckListStageCriterions,
  DesignDocumentView,
  CheckListSets,
  CheckListSettings,
};
export { ActionTypes };

export {
  getAllItems,
  getOneItem,
  createOneEssence,
  createManyEssences,
  updateOneEssence,
  deleteOneEssence,
};

export {
  CheckListForm,
  CheckList,
  CollectiveCheckSheet,
  CommentAccountingModalContainer,
  CommentForm,
  SolutionForm,
  useCommentAccountingFormData,
  useCommentAccounting,
};
