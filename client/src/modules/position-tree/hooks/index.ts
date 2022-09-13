import { useLayoutEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";

export const usePositionTree = () => {
  const [target, setTarget] = useState("");
  const [childTarget, setChildTarget] = useState("");
  const { renderItems, currentItem, loading } = useTypedSelector(
    (state) => state.positionTree
  );

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible, setActionType, getPositionTreeItems } = useActions();

  useLayoutEffect(() => {
    if (currentItem) {
      setTarget(currentItem.target);
      setChildTarget(currentItem.childrenTarget);
    }
  }, [currentItem]);

  return {
    currentItem,
    target,
    childTarget,
    renderItems,
    loading,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    getPositionTreeItems,
  };
};
