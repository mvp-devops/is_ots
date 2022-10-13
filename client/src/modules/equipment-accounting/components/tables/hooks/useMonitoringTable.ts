import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { MonitoringView } from "../../../types";
export const useMonitoringTable = () => {
  const [dataSource, setDataSource] = useState<MonitoringView[]>([]);

  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderMonitoringFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("monitoring");

  useEffect(() => {
    setDataSource(renderDataSource as MonitoringView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as MonitoringView[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.mountDate.includes(searchValue.toUpperCase()) ||
          item.connectDate.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.testDate.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.awpDate.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.commisionDate.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderMonitoringFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
