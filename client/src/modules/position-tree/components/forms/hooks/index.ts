import { useEffect, useState } from "react";
import { notification } from "antd";
import { RcFile } from "antd/lib/upload";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeView,
  NSIView,
} from "../../../types";
import { FormActions } from "../../../../main";
import { useActions } from "../../../../../hooks";
import { usePositionTree } from "../../..";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";
import { initData } from "../form.settings";

export const usePositionTreeForm = () => {
  const {
    currentItem,
    checkedItem,
    target,
    childTarget,
    getAllItems: getParrentsList,
    getOneItem: getEditedItem,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
  } = usePositionTree();

  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();

  const {
    createPositionTreeItem,
    createManyPositionTreeItems,
    updatePositionTreeItem,
    deletePositionTreeItem,
  } = useActions();

  const [editRow, setEditRow] =
    useState<PositionTreeCreateOrUpdateAttrs | null>(null);
  const [designsList, setDesignsList] = useState<NSIView[]>([]);
  const [equipmentsList, setEquipmentsList] = useState<NSIView[]>([]);
  const [suppliersList, setSuppliersList] = useState<NSIView[]>([]);
  const [parrentsList, setParrentsList] = useState<PositionTreeView[]>([]);

  const [formTarget, setFormTarget] = useState("");

  useEffect(() => {
    switch (actionType) {
      case FormActions.ADD: {
        setEditRow(initData(target));
        setFormTarget(target);
        break;
      }
      case FormActions.EDIT: {
        currentItem &&
          getEditedItem(target, currentItem.id).then((data) =>
            setEditRow(initData(target, data))
          );
        setFormTarget(target);
        break;
      }
      case FormActions.ADD_CHILD: {
        currentItem &&
          setEditRow(initData(childTarget, undefined, currentItem.id));
        setFormTarget(childTarget);
        break;
      }
      case FormActions.EDIT_CHILD: {
        checkedItem &&
          getEditedItem(childTarget, checkedItem.id.toString()).then((data) =>
            setEditRow(initData(childTarget, data))
          );

        setFormTarget(childTarget);
        break;
      }

      case FormActions.REMOVE: {
        setFormTarget(target);
        break;
      }

      case FormActions.REMOVE_CHILD: {
        setFormTarget(childTarget);
        break;
      }

      default:
        break;
    }
  }, [actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      formVisible &&
      (actionType === FormActions.ADD ||
        actionType === FormActions.ADD_CHILD ||
        actionType === FormActions.EDIT ||
        actionType === FormActions.EDIT_CHILD)
    ) {
      switch (formTarget) {
        case "field": {
          getParrentsList("subsidiary").then((data) => setParrentsList(data));

          break;
        }
        case "project": {
          getParrentsList("field").then((data) => setParrentsList(data));
          getNSIList("design").then((data) => setDesignsList(data));

          break;
        }
        case "unit": {
          getParrentsList("project").then((data) => setParrentsList(data));
          getNSIList("counterparty").then((data) => setSuppliersList(data));
          getNSIList("equipment").then((data) => setEquipmentsList(data));
          break;
        }
        case "sub-unit": {
          getParrentsList("unit").then((data) => setParrentsList(data));
          getNSIList("counterparty").then((data) => setSuppliersList(data));
          getNSIList("equipment").then((data) => setEquipmentsList(data));

          break;
        }

        default:
          break;
      }
    }
  }, [actionType, formTarget]); // eslint-disable-line react-hooks/exhaustive-deps

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
    if (editRow) {
      actionType === FormActions.ADD_CHILD
        ? createPositionTreeItem(childTarget, editRow)
        : actionType === FormActions.ADD
        ? createPositionTreeItem(target, editRow)
        : notification["error"]({
            message: "???????????? ???????????????????? ????????????!",
            description: "???????????????????????????? ?????????? actions",
          });
    } else {
      notification["error"]({
        message: "???????????? ???????????????????? ????????????!",
        description: "?????????????????????? ???????????????????? ?????? ???????????????? ???? ????????????",
      });
    }
  };

  const addNewItems = (data: PositionTreeCreateOrUpdateAttrs[]) => {
    actionType === FormActions.ADD_CHILD
      ? createManyPositionTreeItems(childTarget, data)
      : actionType === FormActions.ADD
      ? createManyPositionTreeItems(target, data)
      : notification["error"]({
          message: "???????????? ???????????????????? ????????????!",
          description: "???????????????????????????? ?????????? actions",
        });
  };

  const updateItem = () => {
    if (actionType === FormActions.EDIT && currentItem && editRow) {
      updatePositionTreeItem(target, currentItem.id, editRow);
    } else if (
      actionType === FormActions.EDIT_CHILD &&
      checkedItem &&
      editRow
    ) {
      updatePositionTreeItem(childTarget, checkedItem.id.toString(), editRow);
    } else {
      notification["error"]({
        message: "???????????? ???????????????????? ????????????!",
        description: "?????????????????????? ???????????????????? ?????? ???????????????? ???? ????????????",
      });
    }
  };

  const deleteItem = () => {
    if (actionType === FormActions.REMOVE && currentItem) {
      deletePositionTreeItem(target, currentItem.id);
    } else if (actionType === FormActions.REMOVE_CHILD && checkedItem) {
      deletePositionTreeItem(childTarget, checkedItem.id.toString());
    } else {
      notification["error"]({
        message: "???????????? ???????????????? ????????????!",
        description: "?????????????????????? ???????????????????? ?????? ???????????????? ???? ????????????",
      });
    }
  };

  return {
    // loading,
    // error,
    formTarget,
    parrentsList,
    currentItem,
    designsList,
    equipmentsList,
    suppliersList,
    // currentTarget,
    editRow,
    onHandlerChange,
    addNewItem,
    addNewItems,
    updateItem,
    deleteItem,

    formVisible,
    setFormVisible,
    actionType,
    setActionType,
  };
};
