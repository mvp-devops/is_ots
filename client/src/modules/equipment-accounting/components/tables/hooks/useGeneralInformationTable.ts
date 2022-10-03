import { useEquipmentAccountingTable } from ".";

export const useGeneralInformationTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("general-information");

  return { loading, formVisible, dataSource, currentRow, setCurrentRow };
};
