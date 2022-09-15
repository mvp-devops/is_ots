import { useState } from "react";
import { RcFile } from "antd/lib/upload";
import { DesignDocumentCreateOrUpdateAttrs } from "../../../../../../../server/common/types/file-storage";
import { useActions } from "../../../../../hooks";
import { useFileStorage } from "../../..";
import { usePositionTree } from "../../../../position-tree";
import { notification } from "antd";
import { FormActions } from "../../../../main";

export const useFileStorageForm = () => {
  const {
    loading,
    error,
    page,
    limit,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    designDocuments,
    checkedDesignDocuments,
    setCheckedDocuments,
    currentDesignDocument,
    setCurrentDocument,
  } = useFileStorage();

  const { target, currentItem } = usePositionTree();

  const {
    createOneDesignDocument,
    createManyDesignDocuments,
    updateOneDesignDocument,
    deleteOneDesignDocument,
  } = useActions();

  const [editRow, setEditRow] =
    useState<DesignDocumentCreateOrUpdateAttrs | null>(null);

  //Обновление данных полей формы
  const onHandlerChange = (
    key: string,
    value: string | number | RcFile | null
  ) => {
    editRow &&
      setEditRow({
        ...editRow,
        [key]: value,
      });
  };

  //отправка данных на back-end
  const addNewItem = () => {
    editRow && currentItem
      ? createOneDesignDocument(
          currentItem?.id,
          target,
          "parrentFolderPath",
          editRow
        )
      : notification["error"]({
          message: "Ошибка добавления записи!",
          description: "Несоответствие типов actions",
        });
  };

  const addNewItems = (data: DesignDocumentCreateOrUpdateAttrs[]) => {
    createManyDesignDocuments(data);
  };

  const updateItem = () => {
    currentDesignDocument && editRow && updateOneDesignDocument();
  };

  const deleteItem = () => {
    currentDesignDocument && deleteOneDesignDocument(currentDesignDocument.id);
  };

  return {
    actionType,
    editRow,
    onHandlerChange,
    addNewItem,
    addNewItems,
    deleteItem,
    updateItem,
    setFormVisible,
  };
};
