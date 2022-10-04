import { useEquipmentAccountingVeiw } from "./../../views/hooks/useEquipmentAccountingVeiw";
import { useEffect, useState } from "react";
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

export const useEquipmentAccountingTable = (target?: string) => {
  const [currentRow, setCurrentRow] = useState<Views>();
  const [dataSource, setDataSource] = useState<Views[]>([]);

  const { unitId, subUnitId, searchValue } = useEquipmentAccountingVeiw();
  const { setActionType, setFormVisible } = useActions();

  const { formVisible, actionType } = useTypedSelector((state) => state.main);

  const { loading, summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  // useEffect(() => {
  //   console.log("dataSource: ", dataSource);
  //   console.log("target: ", target);
  //   console.log("currentRow: ", currentRow);
  // }, [target, currentRow]);

  useEffect(() => {
    switch (target) {
      // case "general-information": {
      //   setDataSource(getAllGeneralInformation(summaryListOfEquipment));

      //   break;
      // }
      case "signal": {
        setDataSource(getAllSignal(summaryListOfEquipment));
        // console.log("signalList: ", dataSource);
        break;
      }
      case "cable-log": {
        setDataSource(getAllCableLog(summaryListOfEquipment));
        // console.log("cableLogList: ", dataSource);
        break;
      }
      case "impulse-line-log": {
        setDataSource(getAllImpulseLineLog(summaryListOfEquipment));
        // console.log("impulseLineLogList: ", dataSource);

        break;
      }
      case "monitoring": {
        setDataSource(getAllMonitoring(summaryListOfEquipment));
        // console.log("monitoringList: ", dataSource);

        break;
      }
      default:
        break;
    }
  }, [target, summaryListOfEquipment]);

  useEffect(() => {
    unitId !== "0"
      ? setDataSource(
          (summaryListOfEquipment as SummaryListOfEquipmentView[]).filter(
            (item) => item?.unitId === unitId
          )
        )
      : setDataSource(summaryListOfEquipment as SummaryListOfEquipmentView[]);
  }, [unitId]);

  useEffect(() => {
    subUnitId !== "0"
      ? setDataSource(
          (summaryListOfEquipment as SummaryListOfEquipmentView[]).filter(
            (item) => item?.subUnitId === subUnitId
          )
        )
      : setDataSource(summaryListOfEquipment as SummaryListOfEquipmentView[]);
  }, [subUnitId]);

  // добавить фильтры для всех подтаблиц
  useEffect(() => {
    setDataSource(
      (summaryListOfEquipment as Views[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).installationLocation
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).facility.equipmentType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).systemType.includes(
            searchValue.toUpperCase()
          ) ||
          (item as GeneralInformationView).facility.country
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).facility.vendor
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).facility.title
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).facilityModification
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as GeneralInformationView).specification
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).sgroei.includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).measurementArea
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).meansurementType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).meansureGroup
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).grsi
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).documentType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).documentNumber
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).counterparty
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).fromDate
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).toDate
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).status
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MetrologyView).mpi
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as SignalView).signalType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as SignalView).signalProtocol
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as SignalView).signalTag.includes(searchValue.toUpperCase()) ||
          (item as SignalView).emergencyProtocol
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView | ImpulseLineLogView).numberOfTrace
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView).cableMark.includes(
            searchValue.toUpperCase()
          ) ||
          (item as CableLogView).cableSection
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView).fromUnit
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView | ImpulseLineLogView).fromPlace
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView).toUnit
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as CableLogView | ImpulseLineLogView).toPlace
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as ImpulseLineLogView).impulseLineType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MonitoringView).mountDate.includes(
            searchValue.toUpperCase()
          ) ||
          (item as MonitoringView).connectDate
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MonitoringView).testDate
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MonitoringView).awpDate
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          (item as MonitoringView).commisionDate
            .toUpperCase()
            .includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  return {
    loading,
    dataSource,
    currentRow,
    setCurrentRow,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
  };
};
