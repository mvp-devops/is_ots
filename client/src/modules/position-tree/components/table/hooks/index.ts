import { useEffect } from "react";
import { usePositionTree } from "../../../hooks";

export const usePositionTreeTable = () => {
  const {
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
  } = usePositionTree();

  const tableTitle =
    childTarget === "field"
      ? "Месторождения"
      : childTarget === "project"
      ? "Проекты"
      : childTarget === "unit"
      ? "Объекты строительства"
      : "Объекты/установки";

  const addChildButtonTitle =
    childTarget === "field"
      ? "месторождение"
      : childTarget === "project"
      ? "проект"
      : childTarget === "unit"
      ? "объект строительства"
      : "объект/установку";

  useEffect(() => {
    if (currentItem) {
      switch (target) {
        case "subsidiary": {
          getPositionTreeItems("field", currentItem.id);
          break;
        }
        case "field": {
          getPositionTreeItems("project", currentItem.id);
          break;
        }
        case "project": {
          getPositionTreeItems("unit", currentItem.id);
          break;
        }

        case "unit": {
          getPositionTreeItems("sub-unit", currentItem.id);
          break;
        }

        default:
          break;
      }
    }
  }, [currentItem, target, formVisible]);

  return {
    target,
    childTarget,
    renderItems,
    loading,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    tableTitle,
    addChildButtonTitle,
  };
};
