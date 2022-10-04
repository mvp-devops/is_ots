import { useEquipmentAccountingTable } from ".";

export const useMonitoringTable = () => {
  const {
    loading,
    renderDataSource: dataSource,
    renderFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("monitoring");

  return {
    loading,
    renderFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
