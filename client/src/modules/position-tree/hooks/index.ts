import { useEffect, useState } from "react";
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
  } = useActions();

  useEffect(() => {
    if (currentItem) {
      setTarget(currentItem.target);
      setChildTarget(currentItem.childrenTarget);
    }
  }, [currentItem]);

  useEffect(() => {
    console.log("Target: ", target);
    console.log("childTarget: ", childTarget);
  }, [target]);

  return {
    currentItem,
    checkedItem,
    target,
    childTarget,
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
