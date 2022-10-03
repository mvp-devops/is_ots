import { useEquipmentAccountingTable } from ".";

export const useSignalTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("signal");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
