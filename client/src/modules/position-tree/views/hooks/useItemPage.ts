import { useEffect, useState } from "react";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import { useActions, useTypedSelector } from "../../../../hooks";
import { ListItem, MenuItem, Roles } from "../../../main";
import { getAllItems } from "../..";

export const useItemPage = (items?: MenuItem[]) => {
  const { currentItem } = useTypedSelector((state) => state.positionTree);
  const [childrenList, setChildrenList] = useState<PositionTreeView[]>([]);
  const [listItems, setListItems] = useState<ListItem[]>([]);

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
  } = useTypedSelector((state) => state.main);

  const { checkListData, loading, renderItems } = useTypedSelector(
    (state) => state.positionTree
  );

  const {
    setFormVisible,
    setActionType,
    setCheckListView,
    setStatisticView,
    setCollectiveCheckSheetView,
    setSummaryListOfEquipmentView,
    getPositionTreeItems,
    setListItemsView,
    setDocumentationView,
  } = useActions();

  const renderMenuItems = (items: MenuItem[]): MenuItem[] => {
    const menuItems: MenuItem[] = [];
    const docMark =
      currentItem?.target === "project" ||
      currentItem?.target === "unit" ||
      currentItem?.target === "sub-unit"
        ? true
        : false;

    const facilityMark =
      currentItem?.target === "subsidiary" || currentItem?.target === "field"
        ? false
        : true;

    const checkListMark =
      currentItem?.target === "subsidiary" || currentItem?.target === "field"
        ? false
        : true;

    const children = facilityMark
      ? items[1].children
      : items[1].children?.filter(
          (item) => item.key !== "SUMMARY_LIST_OF_EQUIPMENT"
        );
    const firstItem = {
      ...items[1],
      children,
    };

    const statChildren = checkListMark
      ? items[3].children
      : items[3].children?.filter((item) => item.key !== "CHECK_LIST");

    const thirdItem = { ...items[3], children: statChildren };

    if (currentUser?.roles.includes(Roles.ADMINISTRATOR)) {
      menuItems.push(items[0]);
      menuItems.push(firstItem);
      docMark && menuItems.push(items[2]);
      menuItems.push(thirdItem);
      menuItems.push(items[5]);
      menuItems.push(items[4]);
      return menuItems;
    }

    if (
      currentUser?.roles.includes(Roles.EXPERT) ||
      currentUser?.roles.includes(Roles.CUSTOMER) ||
      currentUser?.roles.includes(Roles.OTS)
    ) {
      menuItems.push(firstItem);
      docMark && menuItems.push(items[2]);
      menuItems.push(thirdItem);
      return menuItems;
    }

    return menuItems;
  };

  const renderListItems = (items: PositionTreeView[]): ListItem[] => {
    const arr: any[] = [];
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        const elem = items[i];
        const { id, title, code, description } = elem;
        const file =
          "logo" in elem
            ? elem.logo
            : "unitQuestionare" in elem
            ? elem.unitQuestionare
            : "subUnitQuestionare" in elem
            ? elem.subUnitQuestionare
            : null;
        const item = {
          href: id,
          title,
          avatar: file ? file : null,
          description,
          content: code,
        };

        arr.push(item);
      }
    }
    return arr;
  };

  useEffect(() => {
    if (currentItem) {
      switch (currentItem.target) {
        case "subsidiary": {
          getPositionTreeItems("field", currentItem.id);
          setChildrenList(renderItems);

          // getAllItems("field", currentItem.id).then((data) =>
          //   setChildrenList(data)
          // );
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
  }, [currentItem, formVisible]);

  useEffect(() => {
    items && setMenuItems(renderMenuItems(items));
  }, [currentItem]);

  useEffect(() => {
    setListItems(renderListItems(childrenList));
  }, [childrenList]);

  return {
    formVisible,
    setFormVisible,
    actionType,
    checkListView,
    setCheckListView,
    setActionType,
    childrenList,
    childrenListHeader,
    menuItems,
    listItems,
    currentItem,
    loading,

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
  };
};
