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
    getPositionTreeItem,
    setSummaryListOfEquipmentView,
  } = useActions();

  useEffect(() => {
    if (currentItem) {
      setTarget(currentItem.target);
      setChildTarget(currentItem.childrenTarget);
      setFolderPath(currentItem.target, currentItem.id);
      getPositionTreeItem(currentItem.target, currentItem.id);
    }
  }, [currentItem]);

  const [renderFormFlag, setRenderFormFlag] = useState(false);

  useEffect(
    () =>
      setRenderFormFlag(
        formVisible &&
          (actionType === FormActions.ADD ||
            actionType === FormActions.ADD_CHILD ||
            actionType === FormActions.REMOVE ||
            actionType === FormActions.REMOVE_CHILD ||
            actionType === FormActions.EDIT ||
            actionType === FormActions.EDIT_CHILD)
      ),
    [actionType, formVisible]
  );

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
