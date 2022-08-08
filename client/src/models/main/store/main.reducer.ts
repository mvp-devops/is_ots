import { Dispatch } from "redux";
import { TreeDataNode } from "../../components/menu/menu.types";
import { User } from "../../types/user.types";

import { getCurrentEssence, getMenuItems, getStatistic } from "./main.api";
import { users } from "./main.consts";

import { ActionTypes, EssenceAction, PositionTreeItem } from "./main.types";

export const onToggleMenuHandler = (flag: boolean): EssenceAction => {
  return {
    type: ActionTypes.TOGGLE_MENU,
    payload: !flag,
  };
};

export const onToggleAsideHandler = (flag: boolean): EssenceAction => {
  return {
    type: ActionTypes.TOGGLE_ASIDE_CARD,
    payload: !flag,
  };
};

export const onUserLogout = (): EssenceAction => {
  return {
    type: ActionTypes.USER_LOGOUT,
    payload: {
      isAuth: false,
      user: null,
    },
  };
};

export const onUserLogin = (data: {
  login: string;
  password: string;
}): EssenceAction => {
  let payload: { isAuth: boolean; user: User | null } = {
    isAuth: false,
    user: null,
  };

  if (data.login === "admin" && data.password === "admin") {
    payload = {
      isAuth: true,
      user: users[0],
    };
  } else if (data.login === "expert" && data.password === "expert") {
    payload = {
      isAuth: true,
      user: users[1],
    };
  } else if (data.login === "customer" && data.password === "customer") {
    payload = {
      isAuth: true,
      user: users[2],
    };
  } else if (data.login === "ots" && data.password === "ots") {
    payload = {
      isAuth: true,
      user: users[3],
    };
  }

  return {
    type: ActionTypes.USER_LOGIN,
    payload,
  };
};

// export const getMenuItems = (menuItems: Array<TreeDataNode>): EssenceAction => {
//   return {
//     type: ActionTypes.GET_MENU_ITEMS,
//     payload: menuItems,
//   };
// };

export const setModalVisible = (flag: boolean): EssenceAction => {
  return {
    type: ActionTypes.SET_MODAL_VISIBLE,
    payload: flag,
  };
};

export const setFormAction = (action: string): EssenceAction => {
  return {
    type: ActionTypes.SET_FORM_ACTION,
    payload: action,
  };
};

export const setTarget = (target: string): EssenceAction => {
  return {
    type: ActionTypes.SET_TARGET,
    payload: target,
  };
};

export const setChildTarget = (target: string): EssenceAction => {
  return {
    type: ActionTypes.SET_CHILD_TARGET,
    payload: target,
  };
};

export const setCurrentId = (id: string): EssenceAction => {
  return {
    type: ActionTypes.SET_CURRENT_ID,
    payload: id,
  };
};

export const setKeys = (key: string[]): EssenceAction => {
  return {
    type: ActionTypes.SET_KEYS,
    payload: key,
  };
};

export const setMenuItems = (role: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.SET_MENU_ITEMS });

      const data = await getMenuItems(role, id);

      dispatch({
        type: ActionTypes.SET_MENU_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_MENU_ITEMS_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const setStatistic = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.SET_STATISTIC });

      const data = await getStatistic(target, id);

      dispatch({
        type: ActionTypes.SET_STATISTIC_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_STATISTIC_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};

export const setListItems = (items: PositionTreeItem[], keys: string[]) => {
  const currentSubsidiary = items.filter((item) => item.keys[0] === keys[0])[0];

  let currentField: PositionTreeItem;
  let currentProject: PositionTreeItem;
  let currentUnit: PositionTreeItem;
  let listItems: PositionTreeItem[] = [];

  switch (keys.length) {
    case 1: {
      listItems = currentSubsidiary.children ? currentSubsidiary.children : [];
      break;
    }
    case 2: {
      if (currentSubsidiary.children) {
        currentField = currentSubsidiary.children?.filter(
          (item) => item.keys[1] === keys[1]
        )[0];
      } else break;

      listItems =
        currentField && currentField.children ? currentField.children : [];
      break;
    }
    case 3: {
      if (currentSubsidiary.children) {
        currentField = currentSubsidiary.children?.filter(
          (item) => item.keys[1] === keys[1]
        )[0];
      } else break;

      if (currentField.children) {
        currentProject = currentField.children?.filter(
          (item) => item.keys[2] === keys[2]
        )[0];
      } else break;

      listItems =
        currentProject && currentProject.children
          ? currentProject.children
          : [];
      break;
    }
    case 4: {
      if (currentSubsidiary.children) {
        currentField = currentSubsidiary.children?.filter(
          (item) => item.keys[1] === keys[1]
        )[0];
      } else break;

      if (currentField.children) {
        currentProject = currentField.children?.filter(
          (item) => item.keys[2] === keys[2]
        )[0];
      } else break;

      if (currentProject.children) {
        currentUnit = currentProject.children?.filter(
          (item) => item.keys[3] === keys[3]
        )[0];
      } else break;

      listItems =
        currentUnit && currentUnit.children ? currentUnit.children : [];
      break;
    }
    default:
      break;
  }

  return {
    type: ActionTypes.SET_LIST_ITEMS,
    payload: listItems,
  };
};

export const setCurrentItem = (target: string, id: string) => {
  return async (dispatch: Dispatch<EssenceAction>) => {
    try {
      dispatch({ type: ActionTypes.SET_CURRENT_ITEM });

      const data = await getCurrentEssence(target, id);

      dispatch({
        type: ActionTypes.SET_CURRENT_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_CURRENT_ITEM_ERROR,
        payload: "Ошибка получения данных",
      });
    }
  };
};
