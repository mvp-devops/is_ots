import { useActions, useTypedSelector } from "../../../../../hooks";

export const usePositionTreeTableData = () => {
  const { renderItems, currentItem, loading } = useTypedSelector(
    (state) => state.positionTree
  );

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible, setActionType } = useActions();

  const childTarget = currentItem && currentItem.childrenTarget;
  const target = currentItem && currentItem.target;

  const tableTitle =
    currentItem?.childrenTarget === "field"
      ? "Месторождения"
      : currentItem?.childrenTarget === "project"
      ? "Проекты"
      : currentItem?.childrenTarget === "unit"
      ? "Объекты строительства"
      : "Объекты/установки";

  const addChildButtonTitle =
    currentItem?.childrenTarget === "field"
      ? "месторождение"
      : currentItem?.childrenTarget === "project"
      ? "проект"
      : currentItem?.childrenTarget === "unit"
      ? "объект строительства"
      : "объект/установку";

  return {
    loading,
    target,
    childTarget,
    renderItems,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    currentItem,
    tableTitle,
    addChildButtonTitle,
  };
};
