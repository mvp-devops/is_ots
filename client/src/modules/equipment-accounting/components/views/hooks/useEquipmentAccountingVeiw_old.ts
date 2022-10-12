import { useState } from "react";

import { SummaryListOfEquipmentView } from "../../../types";

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
  const [dataSource, setDataSource] = useState<SummaryListOfEquipmentView[]>(
    []
  );

  // useEffect(() => {
  //   checkedItem &&
  //     actionType === FormActions.SUMMARY_LIST_OF_EQUIPMENT &&
  //     getSummaryListOfEquipment(parrentTarget, checkedItem.id as string);
  // }, [checkedItem, actionType]);

  // useEffect(
  //   () => setDataSource(summaryListOfEquipment),
  //   [summaryListOfEquipment]
  // );

  // useEffect(() => {
  //   if (dataSource.length > 0) {
  //     const units: ListItems[] = [];
  //     const subUnits: ListItems[] = [];
  //     for (let i = 0; i < dataSource.length; i++) {
  //       const { projectId, unit, unitId, subUnit, subUnitId } = dataSource[i];
  //       const unitItem = { parrentId: projectId, id: unitId, title: unit };
  //       const subUnitItem = {
  //         parrentId: unitId,
  //         id: subUnitId,
  //         title: subUnit,
  //       };
  //       units.push(unitItem);
  //       subUnits.push(subUnitItem);
  //     }
  //     const unitsArr = getUniqueAssetsOfArrayOfTheObjects("id", units);
  //     const subUnitsArr = getUniqueAssetsOfArrayOfTheObjects("id", subUnits);
  //     setUnitsList(unitsArr);
  //     unitId === "0" || unitId === ""
  //       ? setSubUnitsList(subUnitsArr)
  //       : setSubUnitsList(
  //           subUnitsArr.filter((item) => item.parrentId === unitId)
  //         );
  //   }
  // }, [dataSource, unitId]);

  // useEffect(() => {
  //   if (unitId === "0" || unitId === "") {
  //     setDataSource(summaryListOfEquipment);
  //   } else {
  //     setDataSource(
  //       summaryListOfEquipment.filter((item) => item.unitId === unitId)
  //     );
  //   }
  // }, [unitId]);

  // useEffect(() => {
  //   if (subUnitId === "0" || subUnitId === "") {
  //     setDataSource(summaryListOfEquipment);
  //   } else {
  //     setDataSource(
  //       summaryListOfEquipment.filter((item) => item.subUnitId === subUnitId)
  //     );
  //   }
  // }, [subUnitId]);

  // useEffect(() => console.log(dataSource), [dataSource]);

  // useEffect(() => {
  //     unitId === "0" || unitId === "" ?
  //     setSubUnitsList(subUnitsList) : setSubUnitsList(subUnitsList.filter(item => item.parrentId === unitId))

  // }, [unitId]);

  // const renderFormFlag =
  //   formVisible && actionType === FormActions.ADD_EQUIPMENT;

  // return {
  //   dataSource,
  //   renderFormFlag,
  //   setSearchValue,
  //   summaryListOfEquipment,
  //   unitId,
  //   actionType,
  //   setUnitId,
  //   subUnitId,
  //   setSubUnitId,
  //   onSearch,
  //   searchValue,
  //   formVisible,
  //   setFormVisible,
  //   setActionType,
  //   unitsList,
  //   subUnitsList,
  // };
};
