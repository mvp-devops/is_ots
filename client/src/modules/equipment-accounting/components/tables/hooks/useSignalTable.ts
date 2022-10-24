import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { SignalView } from "../../../types";
export const useSignalTable = () => {
  const [dataSource, setDataSource] = useState<SignalView[]>([]);
  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderSignalFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("signal");

  useEffect(() => {
    setDataSource(renderDataSource as SignalView[]);
  }, [renderDataSource]);

  useEffect(() => {
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as SignalView[])?.filter(
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
            (item?.signalType &&
              item?.signalType
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.signalProtocol &&
              item?.signalProtocol
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.signalTag &&
              item?.signalTag
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.signalParameter &&
              item?.signalParameter
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase())) ||
            (item?.emergencyProtocol &&
              item?.emergencyProtocol
                ?.toUpperCase()
                ?.includes(searchValue?.toUpperCase()))
        )
      );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    renderSignalFormEditFlag,
    loading,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
