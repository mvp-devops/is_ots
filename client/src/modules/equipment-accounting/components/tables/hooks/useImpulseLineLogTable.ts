import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { ImpulseLineLogView } from "../../../types";
export const useImpulseLineLogTable = () => {
  const [dataSource, setDataSource] = useState<ImpulseLineLogView[]>([]);
  const {
    searchValue,
    onSearch,
    loading,
    renderImpulseLineLogFormEditFlag,
    renderDataSource,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("impulse-line-log");

  useEffect(() => {
    setDataSource(renderDataSource as ImpulseLineLogView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as ImpulseLineLogView[]).filter(
        (item) =>
          item?.unit?.toUpperCase()?.includes(searchValue?.toUpperCase()) ||
          item?.subUnit?.toUpperCase()?.includes(searchValue?.toUpperCase()) ||
          item?.tag?.toUpperCase()?.includes(searchValue?.toUpperCase()) ||
          item?.numberOfTrace
            ?.toUpperCase()
            ?.includes(searchValue?.toUpperCase()) ||
          item?.impulseLineType?.includes(searchValue?.toUpperCase()) ||
          item?.fromPlace
            ?.toUpperCase()
            ?.includes(searchValue?.toUpperCase()) ||
          item?.toPlace?.toUpperCase()?.includes(searchValue?.toUpperCase())
      )
    );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderImpulseLineLogFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
