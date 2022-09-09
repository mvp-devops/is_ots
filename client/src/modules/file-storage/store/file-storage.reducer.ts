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
    //   case ActionTypes.POST_ONE_ITEM:
    //     return state;
    //   case ActionTypes.POST_ONE_ITEM_SUCCESS:
    //     const newArr = [...state.render, action.payload];
    //     return {
    //       ...state,

    //       render: newArr,
    //     };
    //   case ActionTypes.POST_ONE_ITEM_ERROR:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: action.payload,
    //     };
    default:
      return state;
  }
};
