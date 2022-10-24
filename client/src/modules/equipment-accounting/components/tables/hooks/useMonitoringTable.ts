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
    renderMonitoringFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("monitoring");

  useEffect(() => {
    setDataSource(renderDataSource as MonitoringView[]);
  }, [renderDataSource]);

  useEffect(() => {
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as MonitoringView[]).filter(
          (item) =>
            (item?.unit &&
              item?.unit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.subUnit &&
              item?.subUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.tag &&
              item?.tag?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
            (item?.mountDate &&
              item?.mountDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item.connectDate &&
              item?.connectDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item.testDate &&
              item?.testDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item.awpDate &&
              item?.awpDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item.commisionDate &&
              item?.commisionDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase()))
        )
      );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderMonitoringFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
