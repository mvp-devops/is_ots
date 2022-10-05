import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { MonitoringView } from "../../..";
export const useMonitoringTable = () => {
  const [dataSource, setDataSource] = useState<MonitoringView[]>([]);

  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderFormFormEditFlag,
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
  }, [searchValue]);

  return {
    searchValue,
    onSearch,
    loading,
    renderFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
