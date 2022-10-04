import { ChangeEventHandler, useEffect, useState } from "react";

import { useActions, useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { PositionTreeItem } from "../../../../position-tree";

export const useEquipmentAccountingVeiw = () => {
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");
  const [unitsList, setUnitsList] = useState<PositionTreeItem[]>([]);
  const [subUnitsList, setSubUnitsList] = useState<PositionTreeItem[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );
  const { setActionType, setFormVisible, getSummaryListOfEquipment } =
    useActions();

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  const {
    target: parrentTarget,
    childTarget: parrTarget,
    checkedItem,
    currentItem,
  } = useTypedSelector((state) => state.positionTree);

  useEffect(() => {
    checkedItem &&
      actionType === FormActions.SUMMARY_LIST_OF_EQUIPMENT &&
      getSummaryListOfEquipment(parrTarget, checkedItem.id as string);
  }, [checkedItem, actionType]);

  useEffect(() => console.log("useEAV searchValue: ", searchValue));

  useEffect(() => {
    if (currentItem && checkedItem) {
      switch (parrentTarget) {
        case "field": {
          setUnitsList(
            currentItem?.children?.filter(
              (item) => item.id === (checkedItem.id as string)
            )[0]?.children || []
          );
          unitsList.length > 0 &&
            unitsList.map((item) => setSubUnitsList(item.children || []));
          break;
        }
        case "project": {
          setUnitsList(currentItem?.children || []);
          unitsList.length > 0 &&
            unitsList.map((item) => setSubUnitsList(item.children || []));
          break;
        }
        case "unit": {
          setUnitsList([currentItem]);
          setSubUnitsList(
            currentItem?.children?.filter(
              (item) => item.id === (checkedItem.id as string)
            )[0]?.children || []
          );
          break;
        }
        case "sub-unit": {
          setUnitsList([]);
          setSubUnitsList([currentItem]);
          break;
        }
        default:
          break;
      }
    }
  }, [currentItem, checkedItem]);

  useEffect(() => {
    unitId !== "0" &&
      unitId !== "" &&
      setSubUnitsList(
        unitsList.filter((item) => item.id === unitId)[0].children || []
      );
  }, [unitId]);

  // console.log("unitsList: ", unitsList);
  // console.log("subUnitsList: ", subUnitsList);

  return {
    setSearchValue,
    summaryListOfEquipment,
    unitId,
    actionType,
    setUnitId,
    subUnitId,
    setSubUnitId,
    onSearch,
    searchValue,
    formVisible,
    setFormVisible,
    setActionType,
    unitsList,
    subUnitsList,
  };
};
