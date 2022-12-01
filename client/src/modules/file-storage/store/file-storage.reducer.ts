import { ActionTypes, EssenceAction, EssenceState } from "../types";

//TODO: Вынести в utils
export const compareArrays = <T>(target: T[], searched: T[], comparator: string): T[] => {
  const leastArr = target.length < searched.length ? target : searched;
  const biggestArr = target.length >= searched.length ? target : searched;

  return biggestArr.filter((item) => {
    return leastArr.some((item2) => item[comparator] !==item2[comparator])
  });
}

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

  let newDesignDocuments = []
  switch (action.type) {
    case ActionTypes.GET_ALL_ITEMS:
      return {
        ...state,
        loading: true,
        error: null
      };
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
          (item) => (item.id as string) !== (action.payload.id as string)
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

      /* DESIGN-DOCUMENT */

    case ActionTypes.GET_ALL_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.GET_ALL_DESIGN_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        designDocuments: action.payload,
      };

    case ActionTypes.GET_ALL_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.GET_ONE_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.GET_ONE_DESIGN_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentDesignDocument: action.payload,
      };

    case ActionTypes.GET_ONE_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_ONE_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.POST_ONE_DESIGN_DOCUMENT_SUCCESS:
      newDesignDocuments = [...action.payload, ...state.designDocuments ]
      return {
        ...state,
        loading: false,
        designDocuments: newDesignDocuments,
      };

    case ActionTypes.POST_ONE_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.POST_MANY_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.POST_MANY_DESIGN_DOCUMENT_SUCCESS:
      newDesignDocuments = [...action.payload, ...state.designDocuments]
      return {
        ...state,
        loading: false,
        designDocuments: newDesignDocuments,
      };

    case ActionTypes.POST_MANY_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_SUCCESS:
      newDesignDocuments = [action.payload, ...state.designDocuments.filter((item) => item.id !== action.payload.id)]
      return {
        ...state,
        loading: false,
        designDocuments: newDesignDocuments,
      };

    case ActionTypes.UPDATE_ONE_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_ONE_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_SUCCESS:
      newDesignDocuments = [...state.designDocuments.filter((item) => item.id !== action.payload.id)]
      return {
        ...state,
        loading: false,
        designDocuments: newDesignDocuments,
      };

    case ActionTypes.DELETE_ONE_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_MANY_DESIGN_DOCUMENT:
      return state;

    case ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_SUCCESS:
      newDesignDocuments = compareArrays(state.designDocuments, action.payload, "id");

      return {
        ...state,
        loading: false,
        designDocuments: newDesignDocuments,
      };

    case ActionTypes.DELETE_MANY_DESIGN_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};