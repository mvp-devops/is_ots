import {useActions} from "../../../../../hooks";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {FormActions} from "../../../../main";
import {FC} from "react";

interface MenuItemsProps {
  selectedRows: string[];
  resetSelectedRows: () => void
}

const MenuItems:FC<MenuItemsProps> = ({selectedRows, resetSelectedRows}) => {

  const {setActionType, setFormVisible, removeNormative} = useActions()

  const showForm = (action: string) => {
    setActionType(action);
    setFormVisible(true);
  }

  const removeSelectedRows = () => {
    removeNormative(undefined, selectedRows);
    resetSelectedRows();
  }

  return (
    <>
      <PlusOutlined
        key="ADD_NORMATIVE"
        className="text-success mr-3 mb-2 ms-2"
        style={{ fontSize: 16, cursor: "pointer" }}
        title={`Добавить запись`}
        onClick={() => showForm(FormActions.ADD_NORMATIVE)}
      />
      {
        selectedRows && selectedRows.length > 0 && (
          <DeleteOutlined
            key="REMOVE_NORMATIVE"
            title="Удалить выбранные документы"
            className="text-danger mb-2 ms-2"
            onClick={() => removeSelectedRows()}
          />
        )
      }
    </>
  );
};

export default MenuItems;