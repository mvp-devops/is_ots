import {
  ActionTypes,
  EssenceAction,
  EssenceState,
} from "../types/equipment-accounting.types";

//   const initialState: EssenceState = {
//     render: [],
//     currentFacility: null,
//     loading: true,
//     error: null,
// };

export const equipmentAccountingReducer = () => {};

//   export const equipmentAccountingReducer = (
//     state = initialState,
//     action: EssenceAction
//   ): EssenceState => {
//     switch (action.type) {
//       case ActionTypes.GET_ALL_ITEMS:
//         return state;
//       case ActionTypes.GET_ALL_ITEMS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           render: action.payload,
//         };
//       case ActionTypes.GET_ALL_ITEMS_ERROR:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case ActionTypes.POST_ONE_ITEM:
//         return state;
//       case ActionTypes.POST_ONE_ITEM_SUCCESS:
//         const newArr = [...state.render, action.payload];
//         return {
//           ...state,

//           render: newArr,
//         };
//       case ActionTypes.POST_ONE_ITEM_ERROR:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };

//       case ActionTypes.UPDATE_ONE_ITEM:
//         return state;

//       case ActionTypes.UPDATE_ONE_ITEM_SUCCESS:
//         const updatedArr = [
//           ...state.render.filter((item) => item.id !== action.payload.id),
//           action.payload,
//         ];
//         return {
//           ...state,
//           loading: false,
//           render: updatedArr,
//         };

//       case ActionTypes.UPDATE_ONE_ITEM_ERROR:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };

//       case ActionTypes.DELETE_ONE_ITEM:
//         return state;
//       case ActionTypes.DELETE_ONE_ITEM_SUCCESS:
//         const deletedArr = [
//           ...state.render.filter((item) => item.id !== action.payload.id),
//         ];

//         return {
//           ...state,
//           loading: false,
//           render: deletedArr,
//         };
//       case ActionTypes.DELETE_ONE_ITEM_ERROR:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case ActionTypes.SET_CURRENT_ITEM:
//         return {
//           ...state,
//           currentFacility: action.payload,
//         };

//       default:
//         return state;
//     }
//   };
