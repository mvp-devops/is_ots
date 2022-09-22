import { DesignDocumentCommentView } from "../../../../../server/common/types/comments-accounting";

export interface EssenceState {
  error: string | null;
  loading: boolean;
  currentComment: DesignDocumentCommentView | null;
  renderComments: DesignDocumentCommentView[];
}

export enum ActionTypes {
  POST_MANY_COMMENTS = "POST_MANY_COMMENTS",
  POST_MANY_COMMENTS_SUCCESS = "POST_MANY_COMMENTS_SUCCESS",
  POST_MANY_COMMENTS_ERROR = "POST_MANY_COMMENTS_ERROR",
  POST_ONE_COMMENT = "POST_ONE_COMMENT",
  POST_ONE_COMMENT_SUCCESS = "POST_ONE_COMMENT_SUCCESS",
  POST_ONE_COMMENT_ERROR = "POST_ONE_COMMENT_ERROR",
  UPDATE_ONE_COMMENT = "UPDATE_ONE_COMMENT",
  UPDATE_ONE_COMMENT_SUCCESS = "UPDATE_ONE_COMMENT_SUCCESS",
  UPDATE_ONE_COMMENT_ERROR = "UPDATE_ONE_COMMENT_ERROR",
  DELETE_ONE_COMMENT = "DELETE_ONE_COMMENT",
  DELETE_ONE_COMMENT_SUCCESS = "DELETE_ONE_COMMENT_SUCCESS",
  DELETE_ONE_COMMENT_ERROR = "DELETE_ONE_COMMENT_ERROR",
  GET_ONE_COMMENT = "GET_ONE_COMMENT",
  GET_ONE_COMMENT_SUCCESS = "GET_ONE_COMMENT_SUCCESS",
  GET_ONE_COMMENT_ERROR = "GET_ONE_COMMENT_ERROR",
  GET_MANY_COMMENTS = "GET_MANY_COMMENTS",
  GET_MANY_COMMENTS_SUCCESS = "GET_MANY_COMMENTS_SUCCESS",
  GET_MANY_COMMENTS_ERROR = "GET_MANY_COMMENTS_ERROR",
  SET_CURRENT_COMMENT = "SET_CURRENT_COMMENT",
  SET_RENDER_COMMENTS = "SET_RENDER_COMMENTS",
}

interface PostOneItemAction {
  type: ActionTypes.POST_ONE_COMMENT;
}

interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_COMMENT_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface PostOneItemErrorAction {
  type: ActionTypes.POST_ONE_COMMENT_ERROR;
  payload: string;
}

interface PostManyItemsAction {
  type: ActionTypes.POST_MANY_COMMENTS;
}

interface PostManyItemsSuccessAction {
  type: ActionTypes.POST_MANY_COMMENTS_SUCCESS;
  payload: DesignDocumentCommentView[];
}

interface PostManyItemsErrorAction {
  type: ActionTypes.POST_MANY_COMMENTS_ERROR;
  payload: string;
}

interface UpdateOneItemAction {
  type: ActionTypes.UPDATE_ONE_COMMENT;
}

interface UpdateOneItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_COMMENT_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface UpdateOneItemErrorAction {
  type: ActionTypes.UPDATE_ONE_COMMENT_ERROR;
  payload: string;
}

interface DeleteOneItemAction {
  type: ActionTypes.DELETE_ONE_COMMENT;
}

interface DeleteOneItemSuccessAction {
  type: ActionTypes.DELETE_ONE_COMMENT_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface DeleteOneItemErrorAction {
  type: ActionTypes.DELETE_ONE_COMMENT_ERROR;
  payload: string;
}
interface GetOneItemAction {
  type: ActionTypes.GET_ONE_COMMENT;
}

interface GetOneItemSuccessAction {
  type: ActionTypes.GET_ONE_COMMENT_SUCCESS;
  payload: DesignDocumentCommentView;
}

interface GetOneItemErrorAction {
  type: ActionTypes.GET_ONE_COMMENT_ERROR;
  payload: string;
}

interface GetManyItemsAction {
  type: ActionTypes.GET_MANY_COMMENTS;
}

interface GetManyItemsSuccessAction {
  type: ActionTypes.GET_MANY_COMMENTS_SUCCESS;
  payload: DesignDocumentCommentView[];
}

interface GetManyItemsErrorAction {
  type: ActionTypes.GET_MANY_COMMENTS_ERROR;
  payload: string;
}

interface SetCurrentItemAction {
  type: ActionTypes.SET_CURRENT_COMMENT;
  payload: DesignDocumentCommentView;
}

export type EssenceAction =
  | SetCurrentItemAction
  | PostOneItemAction
  | PostOneItemSuccessAction
  | PostOneItemErrorAction
  | PostManyItemsAction
  | PostManyItemsSuccessAction
  | PostManyItemsErrorAction
  | UpdateOneItemAction
  | UpdateOneItemSuccessAction
  | UpdateOneItemErrorAction
  | DeleteOneItemAction
  | DeleteOneItemSuccessAction
  | DeleteOneItemErrorAction
  | GetOneItemAction
  | GetOneItemSuccessAction
  | GetOneItemErrorAction
  | GetManyItemsAction
  | GetManyItemsSuccessAction
  | GetManyItemsErrorAction;
