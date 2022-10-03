import { useEquipmentAccountingTable } from ".";

export const useCableLogTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("cable-log");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
