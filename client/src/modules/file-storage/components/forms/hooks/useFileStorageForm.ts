import { useEffect, useState } from "react";
import { RcFile } from "antd/lib/upload";
import { DesignDocumentCreateOrUpdateAttrs, NSIView } from "../../../types";
import { useActions } from "../../../../../hooks";
import { useFileStorage } from "../../..";
import { usePositionTree } from "../../../../position-tree";
import { notification } from "antd";
import { FormActions } from "../../../../main";
import { initData } from "../form.settings";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";

export const useFileStorageForm = () => {
  const { setFormVisible, actionType, currentDesignDocument } =
    useFileStorage();

  const { target, currentItem, currentItemFolderPath, setFolderPath } =
    usePositionTree();

  const {
    createOneDesignDocument,
    createManyDesignDocuments,
    updateOneDesignDocument,
    deleteOneDesignDocument,
  } = useActions();

  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();

  const [editRow, setEditRow] =
    useState<DesignDocumentCreateOrUpdateAttrs | null>(null);
  const [stagesList, setStagesList] = useState<NSIView[]>([]);
  const [sectionsList, setSectionsList] = useState<NSIView[]>([]);
  const [suppliersList, setSuppliersList] = useState<NSIView[]>([]);

  useEffect(() => {
    if (currentItem) {
      switch (actionType) {
        case FormActions.ADD_DOCUMENT: {
          setEditRow(
            initData("design-document", undefined, target, currentItem.id)
          );
          setFolderPath(currentItem.target, currentItem.id);
          getNSIList("stage").then((data) => {
            switch (target) {
              case "project": {
                setStagesList(data.slice(0, 4));
                break;
              }
              case "unit":
              case "sub-unit": {
                setStagesList([...data.slice(4, 8), ...data.slice(10)]);
                break;
              }
              default:
                break;
            }
          });
          getNSIList("section").then((data) => setSectionsList(data));
          break;
        }
        case FormActions.EDIT_DOCUMENT: {
          currentDesignDocument &&
            setEditRow(initData("design-document", currentDesignDocument));
          getNSIList("stage").then((data) => {
            switch (target) {
              case "project": {
                setStagesList(data.slice(0, 4));
                break;
              }
              case "unit":
              case "sub-unit": {
                setStagesList([...data.slice(4, 8), ...data.slice(10)]);
                break;
              }
              default:
                break;
            }
          });
          getNSIList("section").then((data) => setSectionsList(data));
          break;
        }

        default:
          break;
      }
    }
  }, [actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    editRow &&
      editRow.stageId === 5 &&
      getNSIList("counterparty").then((data) => setSuppliersList(data));
  }, [editRow?.stageId]); // eslint-disable-line react-hooks/exhaustive-deps

  //???????????????????? ???????????? ?????????? ??????????
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

  //???????????????? ???????????? ???? back-end
  const addNewItem = () => {
    editRow && currentItem
      ? createOneDesignDocument(
          currentItem.id,
          target,
          currentItemFolderPath,
          editRow
        )
      : notification["error"]({
          message: "???????????? ???????????????????? ??????????????????!",
          description: "?????????????????? ?????????? ???????????????? ????????????",
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
    stagesList,
    sectionsList,
    suppliersList,
  };
};
