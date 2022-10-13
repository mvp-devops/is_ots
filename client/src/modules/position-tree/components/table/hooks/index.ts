import { ChangeEventHandler, useEffect, useState } from "react";
import { PositionTreeView } from "../../../../../../../server/common/types/position-tree";
import { usePositionTree } from "../../../hooks";

export const usePositionTreeTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataSource, setDataSource] = useState<PositionTreeView[]>([]);

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };
  const {
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
    renderFormFlag,
    setSummaryListOfEquipmentView,
    checkedItems,
  } = usePositionTree();

  useEffect(() => {
    setDataSource(
      renderItems.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
          item?.code?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
          ("design" in item &&
            item.design.title
              .toLocaleLowerCase()
              ?.includes(searchValue.toLocaleLowerCase())) ||
          ("contract" in item &&
            item.contract
              .toLocaleLowerCase()
              ?.includes(searchValue.toLocaleLowerCase())) ||
          ("position" in item &&
            item.position
              .toLocaleLowerCase()
              ?.includes(searchValue.toLocaleLowerCase())) ||
          ("equipment" in item &&
            item.equipment.title
              .toLocaleLowerCase()
              ?.includes(searchValue.toLocaleLowerCase())) ||
          ("supplier" in item &&
            item.supplier.title
              .toLocaleLowerCase()
              ?.includes(searchValue.toLocaleLowerCase()))
      )
    );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

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
    if (currentItem && target) {
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
    setSearchValue("");
    setActionType("");
    setFormVisible(false);
  }, [currentItem?.id, target]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => setDataSource(renderItems), [renderItems]);

  return {
    target,
    checkedItem,
    childTarget,
    dataSource,
    renderItems,
    loading,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    tableTitle,
    addChildButtonTitle,
    setPositionTreeItem,
    setPositionTreeItems,
    onSearch,
    searchValue,
    renderFormFlag,
    setSummaryListOfEquipmentView,
    checkedItems,
  };
};
