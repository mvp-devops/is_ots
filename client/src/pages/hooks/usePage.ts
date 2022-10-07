import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions, useTypedSelector } from "../../hooks";
import { PositionTreeItem } from "../../modules/position-tree";

export const usePage = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    setMenuItems,
    setCurrentItem,
    logout,
    setTarget,
    setChildTarget,
    setBaseTarget,
  } = useActions();

  const { menuItems, currentItem } = useTypedSelector(
    (state) => state.positionTree
  );
  const { currentUser, baseTarget, formVisible } = useTypedSelector(
    (state) => state.main
  );

  const { renderNsiItems, dictionaryTarget } = useTypedSelector(
    (state) => state.nsi
  );

  useEffect(() => {
    currentUser &&
      currentUser.subsidiaryId &&
      setMenuItems(currentUser.roles, currentUser.subsidiaryId.toString());
  }, [formVisible]);

  const onMenuItemSelected = (item?: PositionTreeItem): void => {
    if (item) {
      setCurrentItem(item);
      setTarget(item.target);
      setChildTarget(item.childrenTarget);
    } else {
      setTarget("");
      setChildTarget("");
      setBaseTarget("POSITION_TREE");
    }
  };

  const onSelect = (selectedKeys: any, e: any) => {
    if (selectedKeys.length > 0) {
      onMenuItemSelected(e.node);
      setBaseTarget("POSITION_TREE");
    } else {
      onMenuItemSelected();
    }
  };

  return {
    dictionaryTarget,
    currentItem,
    renderNsiItems,
    setBaseTarget,
    baseTarget,
    navigate,
    logout,
    collapsed,
    setCollapsed,
    menuItems,
    onMenuItemSelected,
    onSelect,
  };
};
