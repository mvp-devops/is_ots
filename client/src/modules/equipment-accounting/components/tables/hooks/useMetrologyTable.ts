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
            (item &&
              item?.unit &&
              item?.unit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.subUnit &&
              item?.subUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.tag &&
              item?.tag?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.sgroei &&
              item?.sgroei
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.measurementArea &&
              item?.measurementArea
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.meansurementType &&
              item?.meansurementType
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.meansureGroup &&
              item?.meansureGroup
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.grsi &&
              item?.grsi
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.documentType &&
              item?.documentType
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.documentNumber &&
              item?.documentNumber
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.counterparty &&
              item?.counterparty
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.fromDate &&
              item?.fromDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.toDate &&
              item?.toDate
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.status &&
              item?.status
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.mpi &&
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
