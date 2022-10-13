import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { MetrologyView } from "../../../types";

export const useMetrologyTable = () => {
  const [dataSource, setDataSource] = useState<MetrologyView[]>([]);
  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderMetrologyFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("metrology");

  useEffect(() => {
    setDataSource(renderDataSource as MetrologyView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as MetrologyView[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.sgroei.includes(searchValue.toUpperCase()) ||
          item.measurementArea
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.meansurementType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.meansureGroup
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.grsi.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.documentType.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.documentNumber
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.counterparty.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.fromDate.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.toDate.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.status.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.mpi.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderMetrologyFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
