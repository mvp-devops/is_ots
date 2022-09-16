import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/file-storage.types";

const initialState: EssenceState = {
  loading: true,
  error: null,
  page: 1,
  limit: 10,
  designDocuments: [],
  currentDesignDocument: null,
  checkedDesignDocuments: [],
};

export const fileStorageReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.GET_ALL_ITEMS:
      return state;
    case ActionTypes.GET_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        designDocuments: action.payload,
      };
    case ActionTypes.GET_ALL_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case ActionTypes.GET_ONE_ITEM:
    //   return state;
    // case ActionTypes.GET_ONE_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     render: action.payload,
    //   };
    // case ActionTypes.GET_ONE_ITEM_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    case ActionTypes.UPDATE_ONE_ITEM:
      return state;
    case ActionTypes.UPDATE_ONE_ITEM_SUCCESS:
      return {
        ...state,

        designDocuments: [
          ...state.designDocuments.filter(
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

    case ActionTypes.POST_ONE_ITEM:
      return state;
    case ActionTypes.POST_ONE_ITEM_SUCCESS:
      return {
        ...state,

        designDocuments: [...state.designDocuments, action.payload],
      };
    case ActionTypes.POST_ONE_ITEM_ERROR:
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
        designDocuments: state.designDocuments.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case ActionTypes.DELETE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.SET_CURRENT_DOCUMENT:
      return {
        ...state,
        currentDesignDocument: action.payload,
      };

    case ActionTypes.SET_CHECKED_DOCUMENTS:
      return {
        ...state,
        checkedDesignDocuments: action.payload,
      };
    default:
      return state;
  }
};
