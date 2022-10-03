import { useEquipmentAccountingTable } from ".";

export const useMonitoringTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("monitoring");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
