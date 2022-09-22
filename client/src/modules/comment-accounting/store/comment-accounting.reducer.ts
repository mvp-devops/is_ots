import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/comment-accounting.types";

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
    case ActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentComment: action.payload,
      };

    case ActionTypes.GET_MANY_ITEMS:
      return state;

    case ActionTypes.GET_MANY_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: action.payload,
      };

    case ActionTypes.GET_MANY_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_ONE_ITEM:
      return state;

    case ActionTypes.GET_ONE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        currentComment: action.payload,
      };

    case ActionTypes.GET_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_ITEM:
      return state;

    case ActionTypes.POST_ONE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [...state.renderComments, action.payload],
      };

    case ActionTypes.POST_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MANY_ITEMS:
      return state;

    case ActionTypes.POST_MANY_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [...state.renderComments, ...action.payload],
      };

    case ActionTypes.POST_MANY_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_ITEM:
      return state;

    case ActionTypes.UPDATE_ONE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: [
          ...state.renderComments.filter(
            (item) => item.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case ActionTypes.UPDATE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_ITEM:
      return state;

    case ActionTypes.DELETE_ONE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        renderComments: state.renderComments.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case ActionTypes.DELETE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
