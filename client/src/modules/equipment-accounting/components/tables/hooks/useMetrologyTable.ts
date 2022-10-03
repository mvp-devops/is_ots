import { useEquipmentAccountingTable } from ".";

export const useMetrologyTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("metrology");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
