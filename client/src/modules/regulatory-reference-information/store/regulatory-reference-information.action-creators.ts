import { notification } from "antd";
import { Dispatch } from "redux";
import {
  userRegistration,
  getAllItems,
  createOneEssence,
  updateOneEssence,
  deleteOneEssense,
} from "../api";

import {NormativeCreateOrUpdateAttrs} from "../../../../../server/common/types/file-storage"

import {
  ActionTypes,
  EssenceAction,
  NsiCreateOrUpdateAttrs,
  NSIView,
  UserCreateOrUpdateAttrs,
} from "../types";
import {
  findAllNormative,
  createNormative,
  findOneNormative,
  deleteNormative,
  deleteManyNormative,
  editNormative
} from "../../file-storage/api/normative.api";
import {getAssets} from "../api/regulatory-reference-information.api";

export const setNsiItems = (target: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.GET_ALL_ITEMS });

      const data = target !== "glossary" ? await getAllItems(target) : await getAssets(target);

      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const createNewUser = (item: UserCreateOrUpdateAttrs) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      const data = await userRegistration(item);
      dispatch({ type: ActionTypes.USER_REGISTRATION, payload: data });
    } catch (error) {}
  };
};

export const setCurrentNsiItem = (item: NSIView) => {
  return { type: ActionTypes.SET_CURRENT_ITEM, payload: item };
};

export const setDictionaryTarget = (target: string) => {
  return { type: ActionTypes.SET_DICTIONARY_TARGET, payload: target };
};

export const createNsiItem = (target: string, item: NsiCreateOrUpdateAttrs) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.POST_ONE_ITEM });
      const data = await createOneEssence(target, item);
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно добавлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.POST_ONE_ITEM_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

// export const createManyNsiItems = (
//   target: string,
//   items: NsiCreateOrUpdateAttrs[]
// ) => {
//   return async (dispatch: Dispatch<EssenceAction>) => {
//     try {
//       dispatch({ type: ActionTypes.POST_MANY_ITEMS });
//       const data = await createManyEssences(target, items);
//       dispatch({
//         type: ActionTypes.POST_MANY_ITEMS_SUCCESS,
//         payload: data,
//       });
//       notification["success"]({
//         message: "ОК",
//         description: "Данные успешно добавлены",
//       });
//     } catch (error: any) {
//       dispatch({
//         type: ActionTypes.POST_MANY_ITEMS_ERROR,
//         payload: "Ошибка отправки данных",
//       });
//       notification["error"]({
//         message: "Ошибка",
//         description: error.message,
//       });
//     }
//   };
// };

export const updateNsiItem = (
  target: string,
  id: string,
  item: NsiCreateOrUpdateAttrs
) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_ITEM });
      const data = await updateOneEssence(target, id, item);
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно обновлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_ITEM_ERROR,
        payload: "Ошибка обновления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const deleteNsiItem = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.DELETE_ONE_ITEM });
      const data = await deleteOneEssense(target, id);
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно удалены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_ONE_ITEM_ERROR,
        payload: "Ошибка удаления данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error,
      });
    }
  };

};

export const setNormativeList = () => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({type: ActionTypes.GET_ALL_NORMATIVE});

      const data = await findAllNormative();

      dispatch({
        type: ActionTypes.GET_ALL_NORMATIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_NORMATIVE_ERROR,
        payload: "Ошибка получения данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const setCurrentNormative = (id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({type: ActionTypes.GET_ONE_NORMATIVE});

      const data = await findOneNormative(id);

      dispatch({
        type: ActionTypes.GET_ONE_NORMATIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_NORMATIVE_ERROR,
        payload: "Ошибка получения данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

  export const uploadNormative = ( item: any) => {
    return async (dispatch: Dispatch<EssenceAction>) => {
      try {
        dispatch({ type: ActionTypes.POST_ONE_NORMATIVE });
        const data = await createNormative(item);
        dispatch({
          type: ActionTypes.POST_ONE_NORMATIVE_SUCCESS,
          payload: data,
        });
        notification["success"]({
          message: "ОК",
          description: "Данные успешно добавлены",
        });
      } catch (error: any) {
        dispatch({
          type: ActionTypes.POST_ONE_NORMATIVE_ERROR,
          payload: "Ошибка отправки данных",
        });
        notification["error"]({
          message: "Ошибка",
          description: error.message,
        });
      }
    };
  };

export const updateNormative = ( item: any, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.UPDATE_ONE_NORMATIVE });
      const data = await editNormative(item, id);
      dispatch({
        type: ActionTypes.UPDATE_ONE_NORMATIVE_SUCCESS,
        payload: data,
      });
      notification["success"]({
        message: "ОК",
        description: "Данные успешно обновлены",
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_ONE_NORMATIVE_ERROR,
        payload: "Ошибка отправки данных",
      });
      notification["error"]({
        message: "Ошибка",
        description: error.message,
      });
    }
  };
};

export const removeNormative = (id?: string, ids?: string[]) => {
  if(id) {
    return async (dispatch: Dispatch<EssenceAction>) => {
      try {
        dispatch({type: ActionTypes.DELETE_ONE_NORMATIVE});

        const data = await deleteNormative(id);

        dispatch({
          type: ActionTypes.DELETE_ONE_NORMATIVE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ActionTypes.DELETE_ONE_NORMATIVE_ERROR,
          payload: "Ошибка удаления данных",
        });
        notification["error"]({
          message: "Ошибка",
          description: error.message,
        });
      }
    }
  }
    if(ids && ids.length > 0) {
      return async (dispatch: Dispatch<EssenceAction>) => {
        try {
          dispatch({type: ActionTypes.DELETE_MANY_NORMATIVE});

          const data = await deleteManyNormative(ids);

          dispatch({
            type: ActionTypes.DELETE_MANY_NORMATIVE_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: ActionTypes.DELETE_MANY_NORMATIVE_ERROR,
            payload: "Ошибка удаления данных",
          });
          notification["error"]({
            message: "Ошибка",
            description: error.message,
          });
        }
      }
  }

};