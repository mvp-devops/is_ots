// import { CommentFormProps } from "./components/forms/CommentForm";
// import { SolutionFormProps } from "./components/forms/SolutionForm";

// import { CommentTableProps } from "./components/tables/CommentTable";
// import { SolutionTableProps } from "./components/tables/SolutionTable";

import { commentAccountingReducer } from "./store/comment-accounting.reducer";
import * as commentAccountingActionCreators from "./store/comment-accounting.action-creators";

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
  // CommentTable,
  // SolutionTable,
  // useCommentAccountingTableData,
} from "./components";

// export type {
//   CommentFormProps,
//   CommentTableProps,
//   SolutionFormProps,
//   SolutionTableProps,
// };

export {
  CheckListForm,
  CheckList,
  CollectiveCheckSheet,
  CommentAccountingModalContainer,
  CommentForm,
  SolutionForm,
  useCommentAccountingFormData,
  commentAccountingReducer,
  commentAccountingActionCreators,
  useCommentAccounting,
};
