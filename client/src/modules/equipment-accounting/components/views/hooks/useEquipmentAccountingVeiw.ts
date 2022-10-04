import { ChangeEventHandler, useEffect, useState } from "react";

import { useActions, useTypedSelector } from "../../../../../hooks";
import {
  FormActions,
  getUniqueAssetsOfArrayOfTheObjects,
} from "../../../../main";
import { PositionTreeItem, PositionTreeView } from "../../../../position-tree";
import { Views } from "../../../types";

interface ListItems {
  parrentId?: string;
  id: string;
  title: string;
}

export const useEquipmentAccountingVeiw = () => {
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");
  const [unitsList, setUnitsList] = useState<ListItems[]>([]);
  const [subUnitsList, setSubUnitsList] = useState<ListItems[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );
  const { setActionType, setFormVisible, getSummaryListOfEquipment } =
    useActions();

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  const { childTarget: parrentTarget, checkedItem } = useTypedSelector(
    (state) => state.positionTree
  );

  useEffect(() => {
    checkedItem &&
      actionType === FormActions.SUMMARY_LIST_OF_EQUIPMENT &&
      getSummaryListOfEquipment(parrentTarget, checkedItem.id as string);
  }, [checkedItem, actionType]);

  useEffect(() => {
    if (summaryListOfEquipment.length > 0) {
      const units: ListItems[] = [];
      const subUnits: ListItems[] = [];
      for (let i = 0; i < summaryListOfEquipment.length; i++) {
        const { projectId, unit, unitId, subUnit, subUnitId } =
          summaryListOfEquipment[i];
        const unitItem = { parrentId: projectId, id: unitId, title: unit };
        const subUnitItem = {
          parrentId: unitId,
          id: subUnitId,
          title: subUnit,
        };
        units.push(unitItem);
        subUnits.push(subUnitItem);
      }
      const unitsArr = getUniqueAssetsOfArrayOfTheObjects("id", units);
      const subUnitsArr = getUniqueAssetsOfArrayOfTheObjects("id", subUnits);
      setUnitsList(unitsArr);

      // setSubUnitsList(subUnitsArr)
      unitId === "0" || unitId === ""
        ? setSubUnitsList(subUnitsArr)
        : setSubUnitsList(
            subUnitsArr.filter((item) => item.parrentId === unitId)
          );
    }
  }, [summaryListOfEquipment, unitId]);

  // useEffect(() => {
  //     unitId === "0" || unitId === "" ?
  //     setSubUnitsList(subUnitsList) : setSubUnitsList(subUnitsList.filter(item => item.parrentId === unitId))

  // }, [unitId]);

  const renderFormFlag =
    formVisible && actionType === FormActions.ADD_EQUIPMENT;

  return {
    renderFormFlag,
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
