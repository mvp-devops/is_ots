import { useEquipmentAccountingVeiw } from "../../views/hooks/useEquipmentAccountingVeiw_old";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../../../hooks";
import {
  SummaryListOfEquipmentView,
  CableLogView,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
  Views,
} from "../../../types";

import {
  getAllMetrology,
  getAllGeneralInformation,
  // getAllMetrology,
  getAllCableLog,
  getAllImpulseLineLog,
  getAllSignal,
  getAllMonitoring,
} from "../../../api/equipment-accounting.api";
import {
  FormActions,
  getUniqueAssetsOfArrayOfTheObjects,
} from "../../../../main";

interface ListItems {
  parrentId?: string;
  id: string;
  title: string;
}

export const useEquipmentAccountingTable = (target?: string) => {
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");

  const [unitsList, setUnitsList] = useState<ListItems[]>([]);
  const [subUnitsList, setSubUnitsList] = useState<ListItems[]>([]);

  const [requestedData, setRequestedData] = useState<
    SummaryListOfEquipmentView[]
  >([]);
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { childTarget: parrentTarget, checkedItem } = useTypedSelector(
    (state) => state.positionTree
  );

  const { getSummaryListOfEquipment } = useActions();

  const { loading, summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  useEffect(() => {
    checkedItem &&
      actionType === FormActions.SUMMARY_LIST_OF_EQUIPMENT &&
      getSummaryListOfEquipment(parrentTarget, checkedItem.id as string);
  }, [checkedItem, actionType]);

  useEffect(
    () => setRequestedData(summaryListOfEquipment),
    [summaryListOfEquipment]
  );

  useEffect(() => {
    if (requestedData.length > 0) {
      const units: ListItems[] = [];
      const subUnits: ListItems[] = [];
      for (let i = 0; i < requestedData.length; i++) {
        const { projectId, unit, unitId, subUnit, subUnitId } =
          requestedData[i];
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
      unitId === "0" || unitId === ""
        ? setSubUnitsList(subUnitsArr)
        : setSubUnitsList(
            subUnitsArr.filter((item) => item.parrentId === unitId)
          );
    }
  }, [requestedData, unitId]);

  useEffect(() => {
    if (unitId === "0" || unitId === "") {
      setRenderDataSource(summaryListOfEquipment);
    } else {
      setRenderDataSource(
        summaryListOfEquipment.filter((item) => item.unitId === unitId)
      );
    }
  }, [unitId]);

  useEffect(() => {
    if (subUnitId === "0" || subUnitId === "") {
      setRenderDataSource(summaryListOfEquipment);
    } else {
      setRenderDataSource(
        summaryListOfEquipment.filter((item) => item.subUnitId === subUnitId)
      );
    }
  }, [subUnitId]);

  const [currentRow, setCurrentRow] = useState<Views>();
  const [renderDataSource, setRenderDataSource] = useState<Views[]>([]);

  useEffect(() => {
    switch (target) {
      case "general-information": {
        setRenderDataSource(getAllGeneralInformation(requestedData));

        break;
      }
      case "signal": {
        setRenderDataSource(getAllSignal(requestedData));
        break;
      }
      case "cable-log": {
        setRenderDataSource(getAllCableLog(requestedData));
        break;
      }
      case "impulse-line-log": {
        setRenderDataSource(getAllImpulseLineLog(requestedData));
        break;
      }
      case "monitoring": {
        setRenderDataSource(getAllMonitoring(requestedData));
        break;
      }
      default:
        break;
    }
  }, [target, requestedData]);

  //Поиск по таблицам

  const [searchValue, setSearchValue] = useState("");
  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  // добавить фильтры для всех подтаблиц
  // useEffect(() => {
  //   setRenderDataSource(
  //     renderDataSource.filter(
  //       (item) =>

  //
  //
  //         (item as MonitoringView).mountDate.includes(
  //           searchValue.toUpperCase()
  //         ) ||
  //         (item as MonitoringView).connectDate
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as MonitoringView).testDate
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as MonitoringView).awpDate
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as MonitoringView).commisionDate
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase())
  //     )
  //   );
  // }, [searchValue]);

  const renderFormFormEditFlag =
    formVisible && actionType === FormActions.EDIT_EQUIPMENT;

  return {
    loading,
    searchValue,
    onSearch,
    unitsList,
    unitId,
    setUnitId,
    subUnitsList,
    subUnitId,
    setSubUnitId,
    renderFormFormEditFlag,
    currentRow,
    setCurrentRow,
    renderDataSource,
    setRenderDataSource,
  };
};
