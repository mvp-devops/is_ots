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
    renderSignalFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("signal");

  useEffect(() => {
    setDataSource(renderDataSource as SignalView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as SignalView[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.signalType.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.signalProtocol
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.signalTag.includes(searchValue.toUpperCase()) ||
          item.emergencyProtocol
            .toUpperCase()
            .includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  return {
    searchValue,
    onSearch,
    renderSignalFormFormEditFlag,
    loading,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
