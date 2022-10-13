import { useEffect, useState } from "react";

import { usePositionTree } from "./../../hooks";

import { PositionTreeView } from "../..";
import { useActions, useTypedSelector } from "../../../../hooks";
import { MenuItem, Roles } from "../../../main";
import { getAllItems } from "../..";

export const useItemPage = (items?: MenuItem[]) => {
  const { currentItem } = useTypedSelector((state) => state.positionTree);
  const [childrenList, setChildrenList] = useState<PositionTreeView[]>([]);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [childrenListHeader, setChidrenListHeader] = useState("");

  const {
    formVisible,
    actionType,
    checkListView,
    statisticView,
    collectiveCheckSheetView,
    summaryListOfEquipmentView,
    listItemsView,
    documentationView,
    currentUser,
    baseTarget,
  } = useTypedSelector((state) => state.main);

  const { checkListData, loading, statistic } = useTypedSelector(
    (state) => state.positionTree
  );

  useEffect(() => {
    currentItem && getPositionTreeStatistic(currentItem.target, currentItem.id);
  }, [currentItem]); // eslint-disable-line react-hooks/exhaustive-deps

  const { getPositionTreeStatistic } = useActions();

  const { renderFormFlag, renderUserFormFlag } = usePositionTree();

  const {
    setFormVisible,
    setActionType,
    setCheckListView,
    setStatisticView,
    setCollectiveCheckSheetView,
    setSummaryListOfEquipmentView,
    setListItemsView,
    setDocumentationView,
  } = useActions();

  const renderMenuItems = (items: MenuItem[]): MenuItem[] => {
    const menuItems: MenuItem[] = [];

    if (currentUser?.roles.includes(Roles.ADMINISTRATOR)) {
      menuItems.push(items[0]);
      return menuItems;
    }

    return menuItems;
  };

  useEffect(() => {
    if (currentItem && baseTarget === "POSITION_TREE") {
      switch (currentItem.target) {
        case "subsidiary": {
          getAllItems("field", currentItem.id).then((data) =>
            setChildrenList(data)
          );
          setChidrenListHeader("месторождений");

          break;
        }
        case "field": {
          getAllItems("project", currentItem.id).then((data) =>
            setChildrenList(data)
          );
          setChidrenListHeader("проектов");
          break;
        }
        case "project": {
          getAllItems("unit", currentItem.id).then((data) =>
            setChildrenList(data)
          );
          setChidrenListHeader("объектов капитального строительства");
          break;
        }

        case "unit": {
          getAllItems("sub-unit", currentItem.id).then((data) =>
            setChildrenList(data)
          );
          setChidrenListHeader("объектов и установок");
          break;
        }

        default:
          break;
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    items && setMenuItems(renderMenuItems(items));
  }, [currentItem]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    formVisible,
    setFormVisible,
    actionType,
    checkListView,
    setCheckListView,
    setActionType,
    childrenList,
    childrenListHeader,
    renderUserFormFlag,
    menuItems,
    currentItem,
    loading,
    statistic,
    setStatisticView,
    setCollectiveCheckSheetView,
    setSummaryListOfEquipmentView,
    statisticView,
    collectiveCheckSheetView,
    summaryListOfEquipmentView,
    listItemsView,
    documentationView,
    setListItemsView,
    setDocumentationView,
    checkListData,
    renderFormFlag,
  };
};
