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
    renderDataSource.length > 0 &&
      setDataSource(
        (renderDataSource as ImpulseLineLogView[]).filter(
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
              item?.impulseLineType &&
              item?.impulseLineType?.includes(searchValue?.toUpperCase())) ||
            (item &&
              item?.fromPlace &&
              item?.fromPlace
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
    loading,
    renderImpulseLineLogFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
