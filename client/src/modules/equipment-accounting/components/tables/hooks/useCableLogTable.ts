import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { CableLogView } from "../../../types";

export const useCableLogTable = () => {
  const [dataSource, setDataSource] = useState<CableLogView[]>([]);

  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderCableLogFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("cable-log");

  useEffect(() => {
    setDataSource(renderDataSource as CableLogView[]);
  }, [renderDataSource]);

  useEffect(() => {
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as CableLogView[]).filter(
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
            (item?.numberOfTrace &&
              item?.numberOfTrace
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.cableMark &&
              item?.cableMark
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.cableSection &&
              item?.cableSection
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.fromUnit &&
              item?.fromUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.fromPlace &&
              item?.fromPlace
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.toUnit &&
              item?.toUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.toPlace &&
              item?.toPlace
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase()))
        )
      );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    renderCableLogFormEditFlag,
    loading,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
