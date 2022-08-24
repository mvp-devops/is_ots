import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/regulatory-reference-information.types";

const initialState: EssenceState = {
  error: null,
  loading: true,
  items: [],
  currentItem: null,
};

export const nsiReducer = (
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
        items: action.payload,
      };

    case ActionTypes.GET_ALL_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case ActionTypes.SET_CURRENT_ITEM:
    //   return {
    //     ...state,
    //     currentItem: action.payload,
    //   };

    default:
      return state;
  }
};
