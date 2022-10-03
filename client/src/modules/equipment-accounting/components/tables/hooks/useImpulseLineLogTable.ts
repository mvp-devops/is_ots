import { useEquipmentAccountingTable } from ".";

export const useImpulseLineLogTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("impulse-line-log");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
