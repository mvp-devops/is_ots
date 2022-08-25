import { ActionTypes, EssenceAction, EssenceState } from "../types/main.types";

const initialState: EssenceState = {
  formVisible: false,
  actionType: "",
};

export const mainReducer = (
  state = initialState,
  action: EssenceAction
): EssenceState => {
  switch (action.type) {
    case ActionTypes.SET_FORM_VISIBLE:
      return {
        ...state,
        formVisible: action.payload,
      };
    case ActionTypes.SET_ACTION_TYPE:
      return {
        ...state,
        actionType: action.payload,
      };

    default:
      return state;
  }
};
