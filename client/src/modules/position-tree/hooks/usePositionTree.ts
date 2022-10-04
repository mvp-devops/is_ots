import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { getAllItems, getOneItem } from "..";
import { FormActions } from "../../main";

export const usePositionTree = () => {
  const {
    target,
    childTarget,
    renderItems,
    currentItem,
    loading,
    checkedItem,
    currentItemFolderPath,
    renderOneItem,
    checkedItems,
  } = useTypedSelector((state) => state.positionTree);

  const { formVisible, actionType, baseTarget } = useTypedSelector(
    (state) => state.main
  );

  const {
    setFormVisible,
    setActionType,
    getPositionTreeItems,
    setPositionTreeItem,
    setPositionTreeItems,
    setTarget,
    setChildTarget,
    setFolderPath,
    getPositionTreeItem,
    setSummaryListOfEquipmentView,
  } = useActions();

  useEffect(() => {
    if (currentItem && baseTarget === "POSITION_TREE") {
      setTarget(currentItem.target);
      setChildTarget(currentItem.childrenTarget);
      formVisible &&
        (actionType === FormActions.ADD_DOCUMENT ||
          actionType === FormActions.EDIT_DOCUMENT ||
          actionType === FormActions.REMOVE_DOCUMENT) &&
        setFolderPath(currentItem.target, currentItem.id);
    }
  }, [currentItem]);

  useEffect(() => {
    if (currentItem && baseTarget === "POSITION_TREE") {
      getPositionTreeItem(target, currentItem.id);
    }
  }, [target]);

  const [renderFormFlag, setRenderFormFlag] = useState(false);

  useEffect(() => {
    baseTarget === "POSITION_TREE" &&
      setRenderFormFlag(
        formVisible &&
          (actionType === FormActions.ADD ||
            actionType === FormActions.ADD_CHILD ||
            actionType === FormActions.REMOVE ||
            actionType === FormActions.REMOVE_CHILD ||
            actionType === FormActions.EDIT ||
            actionType === FormActions.EDIT_CHILD)
      );
  }, [baseTarget, actionType, formVisible]);

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
    renderFormFlag,
    renderOneItem,
    setSummaryListOfEquipmentView,
    checkedItems,
  };
};
