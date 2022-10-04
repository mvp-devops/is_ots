import { useEquipmentAccountingTable } from ".";
import { useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";

export const useCableLogTable = () => {
  const { actionType, formVisible } = useTypedSelector((state) => state.main);
  const { loading, dataSource, currentRow, setCurrentRow } =
    useEquipmentAccountingTable("cable-log");

  const renderForm =
    formVisible &&
    (actionType === FormActions.EDIT_EQUIPMENT ||
      actionType === FormActions.REMOVE_EQUIPMENT);

  return { renderForm, loading, dataSource, currentRow, setCurrentRow };
};
