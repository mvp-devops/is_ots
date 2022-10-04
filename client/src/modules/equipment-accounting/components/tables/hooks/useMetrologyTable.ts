import { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../hooks";
import { getAllMetrology } from "../../../api/equipment-accounting.api";
import { MetrologyView } from "../../../types";

export const useMetrologyTable = () => {
  const [currentRow, setCurrentRow] = useState<MetrologyView>();
  const [dataSource, setDataSource] = useState<MetrologyView[]>([]);

  const { loading, summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  const { formVisible } = useTypedSelector((state) => state.main);

  useEffect(
    () => setDataSource(getAllMetrology(summaryListOfEquipment)),
    [summaryListOfEquipment]
  );

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
