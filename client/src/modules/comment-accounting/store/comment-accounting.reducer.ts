import { ActionTypes, EssenceAction, EssenceState } from "..";

const initialState: EssenceState = {
  currentComment: null,
  renderComments: [],
  error: null,
  loading: true,
};

export const commentAccountingReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_COMMENT:
      return {
        ...state,
        currentComment: action.payload,
      };

    case ActionTypes.GET_MANY_COMMENTS:
      return state;

    case ActionTypes.GET_MANY_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: action.payload,
      };

    case ActionTypes.GET_MANY_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_ONE_COMMENT:
      return state;

    case ActionTypes.GET_ONE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentComment: action.payload,
      };

    case ActionTypes.GET_ONE_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_COMMENT:
      return state;

    case ActionTypes.POST_ONE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [action.payload, ...state.renderComments].sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        ),
      };

    case ActionTypes.POST_ONE_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MANY_COMMENTS:
      return state;

    case ActionTypes.POST_MANY_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [...action.payload, ...state.renderComments].sort(
          (a, b) => (a.createdAt > b.createdAt ? -1 : 0)
        ),
      };

    case ActionTypes.POST_MANY_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_COMMENT:
      return state;

    case ActionTypes.UPDATE_ONE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [
          action.payload,
          ...state.renderComments
            .filter((item) => item.id !== action.payload.id)
            .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 0)),
        ],
      };

    case ActionTypes.UPDATE_ONE_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_COMMENT:
      return state;

    case ActionTypes.DELETE_ONE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: state.renderComments
          .filter((item) => item.id !== action.payload.id)
          .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 0)),
      };

    case ActionTypes.DELETE_ONE_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
