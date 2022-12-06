import {useActions, useTypedSelector} from "../../../../../hooks";
import {ContainerOutlined, DeleteOutlined, DownloadOutlined, PlusOutlined} from "@ant-design/icons";
import {FormActions} from "../../../../main";
import {FC} from "react";
import {Roles} from "../../../../main/utils/main.consts";

interface MenuItemsProps {
  selectedRows: string[];
  resetSelectedRows: () => void;
  parentTarget: string;
}

const MenuItems:FC<MenuItemsProps> = ({selectedRows, resetSelectedRows, parentTarget}) => {

  const {setActionType, setFormVisible, removeDesignDocument, setCollectiveCheckSheetView} = useActions()

  const showForm = (action: string) => {
    setActionType(action);
    setFormVisible(true);
  }
  console.log(selectedRows);
  const removeSelectedRows = () => {
    removeDesignDocument(undefined, selectedRows, parentTarget);
    resetSelectedRows();
  }

  const {currentUser} = useTypedSelector(state => state.main);

  return (
    <>
      {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.ESCORT)) && (
<>
  <PlusOutlined
    key="ADD_DESIGN_DOCUMENT"
    className="text-success mr-3 mb-2 ms-2"
    style={{ fontSize: 16, cursor: "pointer" }}
    title={`Добавить запись`}
    onClick={() => showForm(FormActions.ADD_DOCUMENT)}
  />
  {
    selectedRows && selectedRows.length > 0 && (
      <DeleteOutlined
        key="REMOVE_DESIGN_DOCUMENT"
        title="Удалить выбранные документы"
        className="text-danger mb-2 ms-2"
        onClick={() => removeSelectedRows()}
      />
    )
  }
</>
      )  }



      {selectedRows && selectedRows.length > 0 &&
        (currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS)  || currentUser.roles.includes(Roles.CUSTOMER) || currentUser.roles.includes(Roles.GUEST)) &&
        (
        <ContainerOutlined
          key="download"
          className="text-warning mb-2 ms-2"
          style={{ fontSize: 16, cursor: "pointer" }}
          title="Сформировать ЛКП"
          onClick={() => {
            setActionType(FormActions.VIEW_COMMENT);
            setCollectiveCheckSheetView(true);
          }}
        />
      )}

      {
        //FIXME: реализщвать скачивание
      //   selectedRows && selectedRows.length > 0 && (
      //   <DownloadOutlined
      //     key="DOCUMENTATION_DOWNLOAD"
      //     className="text-primary  mb-2 ms-2"
      //     style={{ fontSize: 16, cursor: "pointer" }}
      //     title="Скачать"
      //     onClick={() => console.log("Скачать документы")}
      //   />
      // )
      }
    </>
  );
};

export default MenuItems;