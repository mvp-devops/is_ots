import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { CableLogView } from "../../..";

export const useCableLogTable = () => {
  const [dataSource, setDataSource] = useState<CableLogView[]>([]);

  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderCableLogFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("cable-log");

  useEffect(() => {
    setDataSource(renderDataSource as CableLogView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as CableLogView[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.numberOfTrace
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.cableMark.includes(searchValue.toUpperCase()) ||
          item.cableSection.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.fromUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.fromPlace.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.toUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.toPlace.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  return {
    searchValue,
    onSearch,
    renderCableLogFormFormEditFlag,
    loading,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
