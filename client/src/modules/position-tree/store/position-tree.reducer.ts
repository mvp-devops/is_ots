import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/position-tree.types";

const initialState: EssenceState = {
  menuItems: [],
  currentItem: null,

  error: null,
  loading: true,
};

export const positionTreeReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.GET_MENU_ITEMS:
      return state;

    case ActionTypes.GET_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
      };

    case ActionTypes.GET_MENU_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.GET_CURRENT_ITEM:
      return state;

    case ActionTypes.GET_CURRENT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
      };

    case ActionTypes.GET_CURRENT_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
