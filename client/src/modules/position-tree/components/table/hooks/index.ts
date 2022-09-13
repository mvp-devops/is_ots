import { ColumnFilterItem } from "antd/lib/table/interface";
import { ChangeEventHandler, useEffect, useState } from "react";
import { PositionTreeView } from "../../../../../../../server/common/types/position-tree";
import { usePositionTree } from "../../../hooks";
import { setTableColumnFilters } from "../table.settings";

export const usePositionTreeTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataSource, setDataSource] = useState<PositionTreeView[]>([]);
  const [titleFilters, setTitleFilters] = useState<ColumnFilterItem[]>([]);

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };
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
    setPositionTreeItem,
    setPositionTreeItems,
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
  }, [searchValue]);

  useEffect(
    () => setTitleFilters(setTableColumnFilters("title", dataSource)),
    [dataSource]
  );

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

  useEffect(() => setDataSource(renderItems), [renderItems]);

  return {
    target,
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
    titleFilters,
  };
};
