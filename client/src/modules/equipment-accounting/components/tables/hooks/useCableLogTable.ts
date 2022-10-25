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

  const onSearchItem = (initValue: string, compareValue: string): boolean => {
    return !initValue
      ? false
      : initValue.toUpperCase().includes(compareValue.toUpperCase());
  };

  useEffect(() => {
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as CableLogView[]).filter(
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
              item?.numberOfTrace &&
              item?.numberOfTrace
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.cableMark &&
              item?.cableMark
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.cableSection &&
              item?.cableSection
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.fromUnit &&
              item?.fromUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.fromPlace &&
              item?.fromPlace
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.toUnit &&
              item?.toUnit
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.toPlace &&
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
