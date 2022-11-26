import { ActionTypes, EssenceAction, EssenceState } from "../types";

export const compareArrays = <T>(target: T[], searched: T[], comparator: string): T[] => {
  const leastArr = target.length < searched.length ? target : searched;
  const biggestArr = target.length >= searched.length ? target : searched;

  return biggestArr.filter((item) => {
    return leastArr.some((item2) => item[comparator] !==item2[comparator])
  });
}

const initialState: EssenceState = {
  error: null,
  loading: true,
  renderNsiItems: [],
  currentNsiItem: null,
  dictionaryTarget: "",
  normativeList: [],
  currentNormative: null
};

export const nsiReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {

  let newNormativeList = state.normativeList;

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

      //NORMATIVE

    case ActionTypes.GET_ALL_NORMATIVE:
      return state;

    case ActionTypes.GET_ALL_NORMATIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        normativeList: action.payload,
      };

    case ActionTypes.GET_ALL_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.GET_ONE_NORMATIVE:
      return state;

    case ActionTypes.GET_ONE_NORMATIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentNormative: action.payload,
      };

    case ActionTypes.GET_ONE_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_NORMATIVE:
      return state;

    case ActionTypes.POST_ONE_NORMATIVE_SUCCESS:
      newNormativeList = [...action.payload, ...state.normativeList ]
      return {
        ...state,
        loading: false,
        normativeList: newNormativeList,
      };

    case ActionTypes.POST_ONE_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MANY_NORMATIVE:
      return state;

    case ActionTypes.POST_MANY_NORMATIVE_SUCCESS:
      newNormativeList = [...action.payload, ...state.normativeList]
      return {
        ...state,
        loading: false,
        normativeList: newNormativeList,
      };

    case ActionTypes.POST_MANY_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_NORMATIVE:
      return state;

    case ActionTypes.UPDATE_ONE_NORMATIVE_SUCCESS:
      newNormativeList = [action.payload, ...state.normativeList.filter((item) => item.id !== action.payload.id)]
      return {
        ...state,
        loading: false,
        normativeList: newNormativeList,
      };

    case ActionTypes.UPDATE_ONE_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_NORMATIVE:
      return state;

    case ActionTypes.DELETE_ONE_NORMATIVE_SUCCESS:
      newNormativeList = [...state.normativeList.filter((item) => item.id !== action.payload.id)]
      return {
        ...state,
        loading: false,
        normativeList: newNormativeList,
      };

    case ActionTypes.DELETE_ONE_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_MANY_NORMATIVE:
      return state;

    case ActionTypes.DELETE_MANY_NORMATIVE_SUCCESS:
      newNormativeList = compareArrays(state.normativeList, action.payload, "id");

      return {
        ...state,
        loading: false,
        normativeList: newNormativeList,
      };

    case ActionTypes.DELETE_MANY_NORMATIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};