import { ChangeEventHandler, useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { SummaryListOfEquipmentView, Views } from "../../../types";

import {
  getAllMetrology,
  getAllGeneralInformation,
  getAllCableLog,
  getAllImpulseLineLog,
  getAllSignal,
  getAllMonitoring,
} from "../../../api";
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
  }, [checkedItem, actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(
    () =>
      setRequestedData(
        summaryListOfEquipment.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        )
      ),
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
  }, [unitId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (subUnitId === "0" || subUnitId === "") {
      setRenderDataSource(summaryListOfEquipment);
    } else {
      setRenderDataSource(
        summaryListOfEquipment.filter((item) => item.subUnitId === subUnitId)
      );
    }
  }, [subUnitId]); // eslint-disable-line react-hooks/exhaustive-deps

  const [currentRow, setCurrentRow] = useState<Views>();
  const [renderDataSource, setRenderDataSource] = useState<Views[]>([]);
  const [
    renderGeneralInformationFormEditFlag,
    setRenderGeneralInformationFormEditFlag,
  ] = useState(false);

  useEffect(() => {
    switch (target) {
      case "general-information": {
        setRenderDataSource(
          getAllGeneralInformation(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );

        break;
      }
      case "metrology": {
        setRenderDataSource(
          getAllMetrology(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );

        break;
      }
      case "signal": {
        setRenderDataSource(
          getAllSignal(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );
        break;
      }
      case "cable-log": {
        setRenderDataSource(
          getAllCableLog(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );
        break;
      }
      case "impulse-line-log": {
        setRenderDataSource(
          getAllImpulseLineLog(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );
        break;
      }
      case "monitoring": {
        setRenderDataSource(
          getAllMonitoring(requestedData).sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : 0
          )
        );
        break;
      }
      default:
        break;
    }
  }, [target, requestedData]);

  const [searchValue, setSearchValue] = useState("");
  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  // useEffect(() => {
  //   switch (target) {
  //     case "general-information": {
  //       setRenderGeneralInformationFormEditFlag(
  //         actionType === FormActions.EDIT_EQUIPMENT ||
  //           actionType === FormActions.REMOVE_EQUIPMENT
  //       );
  //       console.log(
  //         "renderGeneralInformationFormEditFlag: ",
  //         renderGeneralInformationFormEditFlag
  //       );
  //       break;
  //     }
  //     case "metrology": {
  //       setRenderGeneralInformationFormEditFlag(false);
  //       console.log(
  //         "renderGeneralInformationFormEditFlag: ",
  //         renderGeneralInformationFormEditFlag
  //       );
  //       break;
  //     }
  //     default: {
  //       setRenderGeneralInformationFormEditFlag(false);
  //       break;
  //     }
  //   }
  // }, [target, actionType]);

  const renderMetrologyFormEditFlag = false;
  // target === "metrology" &&
  // formVisible &&
  // (actionType === FormActions.EDIT_EQUIPMENT ||
  //   actionType === FormActions.REMOVE_EQUIPMENT);

  const renderSignalFormEditFlag = false;
  // target === "signal" &&
  // formVisible &&
  // (actionType === FormActions.EDIT_EQUIPMENT ||
  //   actionType === FormActions.REMOVE_EQUIPMENT);

  const renderCableLogFormEditFlag = false;
  // target === "cable-log" &&
  // formVisible &&
  // (actionType === FormActions.EDIT_EQUIPMENT ||
  //   actionType === FormActions.REMOVE_EQUIPMENT);

  const renderImpulseLineLogFormEditFlag = false;
  // target === "impulse-line-log" &&
  // formVisible &&
  // (actionType === FormActions.EDIT_EQUIPMENT ||
  //   actionType === FormActions.REMOVE_EQUIPMENT);

  const renderMonitoringFormEditFlag = false;
  // target === "monitoring" &&
  // formVisible &&
  // (actionType === FormActions.EDIT_EQUIPMENT ||
  //   actionType === FormActions.REMOVE_EQUIPMENT);

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

    renderMetrologyFormEditFlag,
    renderSignalFormEditFlag,
    renderCableLogFormEditFlag,
    renderImpulseLineLogFormEditFlag,
    renderMonitoringFormEditFlag,
    currentRow,
    setCurrentRow,
    renderDataSource,
    setRenderDataSource,
  };
};
