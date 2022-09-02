import { useEffect, useState } from "react";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import { useActions, useTypedSelector } from "../../../../hooks";
import { ListItem, MenuItem, Roles } from "../../../main";
import { getAllItems } from "../..";

export const useItemPage = (role?: string, items?: MenuItem[]) => {
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
  } = useTypedSelector((state) => state.main);

  const { checkListData, loading } = useTypedSelector(
    (state) => state.positionTree
  );

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

  const renderMenuItems = (role: string, items: MenuItem[]): MenuItem[] => {
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

    switch (role) {
      case Roles.ADMIN: {
        const firstItem = {
          ...items[1],
          children: items[1].children?.filter((item) => item.key !== "SLOE"),
        };
        const thirdItem = {
          ...items[2],
          children: items[2].children?.filter(
            (item) => item.key !== "CCHL" && item.key !== "REPORT"
          ),
        };
        menuItems.push(items[0]);
        menuItems.push(firstItem);
        docMark && menuItems.push(thirdItem);
        break;
      }
      case Roles.EXPERT:
      case Roles.CUSTOMER: {
        const children = facilityMark
          ? items[1].children?.filter((item) => item.key !== "CHILDREN-ADD")
          : items[1].children?.filter(
              (item) => item.key !== "CHILDREN-ADD" && item.key !== "SLOE"
            );
        const firstItem = {
          ...items[1],
          children,
        };

        menuItems.push(firstItem);
        docMark && menuItems.push(items[2]);
        menuItems.push(items[3]);
        break;
      }
      case Roles.OTS: {
        const firstItem = {
          ...items[1],
          children: items[1].children?.filter(
            (item) => item.key !== "CHILDREN-ADD"
          ),
        };
        const thirdItem = {
          ...items[3],
          children: items[3].children?.filter((item) => item.key !== "CHL"),
        };

        menuItems.push(firstItem);
        docMark && menuItems.push(items[2]);
        menuItems.push(thirdItem);
        break;
      }

      default:
        break;
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
            : "questionare" in elem
            ? elem.questionare
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
  }, [currentItem, formVisible]);

  useEffect(() => {
    items && role && setMenuItems(renderMenuItems(role, items));
  }, [role, currentItem]);

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
