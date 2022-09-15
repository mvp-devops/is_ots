import { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { getAllItems, getOneItem } from "..";

export const usePositionTree = () => {
  const {
    target,
    childTarget,
    renderItems,
    currentItem,
    loading,
    checkedItem,
    currentItemFolderPath,
  } = useTypedSelector((state) => state.positionTree);

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const {
    setFormVisible,
    setActionType,
    getPositionTreeItems,
    setPositionTreeItem,
    setPositionTreeItems,
    setTarget,
    setChildTarget,
    setFolderPath,
  } = useActions();

  useEffect(() => {
    if (currentItem) {
      setTarget(currentItem.target);
      setChildTarget(currentItem.childrenTarget);
      setFolderPath(currentItem.target, currentItem.id);
    }
  }, [currentItem]);

  return {
    currentItem,
    checkedItem,
    target,
    childTarget,
    currentItemFolderPath,
    setFolderPath,
    renderItems,
    loading,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    getPositionTreeItems,
    setPositionTreeItem,
    setPositionTreeItems,
    getAllItems,
    getOneItem,
  };
};
