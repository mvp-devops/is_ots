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
    renderMetrologyFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("metrology");

  useEffect(() => {
    setDataSource(renderDataSource as MetrologyView[]);
  }, [renderDataSource]);

  useEffect(() => {
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as MetrologyView[]).filter(
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
            (item?.sgroei &&
              item?.sgroei
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.measurementArea &&
              item?.measurementArea
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.meansurementType &&
              item?.meansurementType
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.meansureGroup &&
              item?.meansureGroup
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.grsi &&
              item?.grsi
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.documentType &&
              item?.documentType
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.documentNumber &&
              item?.documentNumber
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.counterparty &&
              item?.counterparty
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.fromDate &&
              item?.fromDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.toDate &&
              item?.toDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.status &&
              item?.status
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.mpi &&
              item?.mpi?.toUpperCase()?.includes(searchValue?.toUpperCase()))
        )
      );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderMetrologyFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
    setDataSource,
  };
};
