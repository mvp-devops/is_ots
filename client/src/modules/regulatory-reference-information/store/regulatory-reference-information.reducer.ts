import { ActionTypes, EssenceAction, EssenceState } from "..";

const initialState: EssenceState = {
  error: null,
  loading: true,
  renderNsiItems: [],
  currentNsiItem: null,
  dictionaryTarget: "",
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
        renderNsiItems: action.payload,
      };

    case ActionTypes.GET_ALL_ITEMS_ERROR:
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
        renderNsiItems: [...state.renderNsiItems, action.payload],
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
        renderNsiItems: [...state.renderNsiItems, ...action.payload],
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
        renderNsiItems: [
          ...state.renderNsiItems.filter(
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
        renderNsiItems: state.renderNsiItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case ActionTypes.DELETE_ONE_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.USER_REGISTRATION:
      return {
        ...state,
        loading: false,
      };

    case ActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentNsiItem: action.payload,
      };

    case ActionTypes.SET_DICTIONARY_TARGET:
      return {
        ...state,
        dictionaryTarget: action.payload,
      };

    default:
      return state;
  }
};
