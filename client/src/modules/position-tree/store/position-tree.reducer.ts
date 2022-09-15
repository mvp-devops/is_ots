import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/position-tree.types";

const initialState: EssenceState = {
  menuItems: [],
  currentItem: null,
  renderItems: [],
  renderOneItem: null,
  checkListData: null,
  checkedItem: null,
  checkedItems: [],
  error: null,
  loading: true,
  target: "",
  childTarget: "",
  currentItemFolderPath: "",
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
    case ActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case ActionTypes.GET_MANY_ITEMS:
      return state;

    case ActionTypes.GET_MANY_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        renderItems: action.payload,
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
        renderOneItem: action.payload,
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
      const addedOne = [...state.renderItems, action.payload];
      return {
        ...state,
        loading: false,
        // renderItems: addedOne,
        renderItems: [...state.renderItems, action.payload],
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
      const addedMany = [...state.renderItems, ...action.payload];
      return {
        ...state,
        loading: false,
        renderItems: addedMany,
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
      const editedOne = [
        ...state.renderItems.slice(0, +action.payload.id),
        action.payload,
        ...state.renderItems.slice(+action.payload.id + 1),
      ];

      return {
        ...state,
        loading: false,
        renderItems: editedOne,
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
      const deletedOne = [
        ...state.renderItems.filter((item) => item.id !== action.payload.id),
      ];
      return {
        ...state,
        loading: false,
        renderItems: deletedOne,
      };

    case ActionTypes.DELETE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_CHECK_LIST_DATA:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_CHECK_LIST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        checkListData: action.payload,
      };

    case ActionTypes.GET_CHECK_LIST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.SET_POSITION_TREE_ITEM:
      return {
        ...state,

        checkedItem: action.payload,
      };

    case ActionTypes.SET_POSITION_TREE_ITEMS:
      return {
        ...state,

        checkedItems: action.payload,
      };
    case ActionTypes.SET_TARGET:
      return {
        ...state,

        target: action.payload,
      };
    case ActionTypes.SET_CHILD_TARGET:
      return {
        ...state,

        childTarget: action.payload,
      };

    case ActionTypes.SET_CURRENT_ITEM_FOLDER_PATH:
      return {
        ...state,

        currentItemFolderPath: action.payload,
      };

    default:
      return state;
  }
};
