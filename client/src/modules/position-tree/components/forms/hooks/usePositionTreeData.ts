import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeView,
} from "../../../../../../../server/common/types/position-tree";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";

import { useActions, useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { getItems } from "../../../../regulatory-reference-information";
import { getOneItem, getAllItems } from "../../../api/position-tree.api";
import {
  fieldItem,
  projectItem,
  subsidiaryItem,
  subUnitItem,
  unitItem,
} from "../form.settings";

export const usePositionTreeData = (target: string, actionType: string) => {
  const initData = (
    target: string,
    row?: PositionTreeView,
    parrentId?: string
  ): PositionTreeCreateOrUpdateAttrs => {
    let item: PositionTreeCreateOrUpdateAttrs = subsidiaryItem;

    switch (target) {
      case "subsidiary": {
        item = row
          ? {
              title: row.title,
              code: row.code,
              description: row.description,
              file: null,
            }
          : subsidiaryItem;
        break;
      }

      case "field": {
        item = row
          ? {
              subsidiaryId: "subsidiaryId" in row ? row.subsidiaryId : "",
              title: row.title,
              code: row.code,
              description: row.description,
            }
          : { ...fieldItem, subsidiaryId: parrentId ? parrentId : "" };
        break;
      }

      case "project": {
        item = row
          ? {
              fieldId: "fieldId" in row ? row.fieldId : "",
              designId: "designId" in row ? row.designId : "",
              title: row.title,
              code: row.code,
              contract: "contract" in row ? row.contract : "",
              description: row.description,
            }
          : { ...projectItem, fieldId: parrentId ? parrentId : "" };
        break;
      }

      case "unit": {
        item = row
          ? {
              projectId: "projectId" in row ? row.projectId : "",
              supplierId: "supplierId" in row ? row.supplierId : "",
              equipmentId: "equipmentId" in row ? row.equipmentId : "",
              position: "position" in row ? row.position : "",
              title: row.title,
              code: row.code,
              contract: "contract" in row ? row.contract : "",
              description: row.description,
              questionare: null,
            }
          : { ...unitItem, projectId: parrentId ? parrentId : "" };
        break;
      }
      case "sub-unit": {
        item = row
          ? {
              unitId: "unitId" in row ? row.unitId : "",
              supplierId: "supplierId" in row ? row.supplierId : "",
              equipmentId: "equipmentId" in row ? row.equipmentId : "",
              position: "position" in row ? row.position : "",
              title: row.title,
              code: row.code,
              contract: "contract" in row ? row.contract : "",
              description: row.description,
              questionare: null,
            }
          : { ...subUnitItem, unitId: parrentId ? parrentId : "" };
        break;
      }

      default:
        break;
    }

    return item;
  };

  const [editRow, setEditRow] = useState<PositionTreeCreateOrUpdateAttrs>(
    initData(target)
  );
  const [designsList, setDesignsList] = useState<NSIView[]>([]);
  const [equipmentsList, setEquipmentsList] = useState<NSIView[]>([]);
  const [suppliersList, setSuppliersList] = useState<NSIView[]>([]);
  const [currentTarget, setCurrentTarget] = useState("");
  const [parrentsList, setParrentsList] = useState<PositionTreeView[]>([]);

  const { currentItem, loading, error } = useTypedSelector(
    (state) => state.positionTree
  );

  const {
    createPositionTreeItem,
    createManyPositionTreeItems,
    updatePositionTreeItem,
    deletePositionTreeItem,
  } = useActions();

  useEffect(() => {
    switch (currentTarget) {
      case "field": {
        getAllItems("subsidiary").then((data) => setParrentsList(data));

        break;
      }
      case "project": {
        getItems("design").then((data) => setDesignsList(data));
        getAllItems("field").then((data) => setParrentsList(data));

        break;
      }
      case "unit":
      case "sub-unit": {
        getItems("counterparty").then((data) => setSuppliersList(data));
        getItems("equipment").then((data) => setEquipmentsList(data));
        const trgt = target === "unit" ? "project" : "unit";
        getAllItems(trgt).then((data) => setParrentsList(data));
        break;
      }

      default:
        break;
    }
  }, [currentTarget, target]);

  useEffect(() => {
    if (actionType === FormActions.EDIT && currentItem) {
      getOneItem(currentItem.target, currentItem.id).then(
        (data) => data && setEditRow(initData(currentItem.target, data))
      );
      setCurrentTarget(currentItem.target);
    }

    if (actionType === FormActions.ADD && currentItem) {
      setEditRow(
        initData(currentItem.childrenTarget, undefined, currentItem.id)
      );
      setCurrentTarget(currentItem.childrenTarget);
    }
  }, [currentItem, actionType]);

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

  const addNewChild = () => {
    const childrenTarget = currentItem ? currentItem.childrenTarget : null;
    childrenTarget && createPositionTreeItem(childrenTarget, editRow);
    console.log(editRow);
  };

  const addNewChildren = (data: PositionTreeCreateOrUpdateAttrs[]) => {
    const childrenTarget = currentItem ? currentItem.childrenTarget : null;
    childrenTarget && createManyPositionTreeItems(childrenTarget, data);
  };

  const updateOneItem = () => {
    currentItem &&
      updatePositionTreeItem(currentItem.target, currentItem.id, editRow);
  };

  const deleteOneItem = () => {
    currentItem && deletePositionTreeItem(currentItem.target, currentItem.id);
  };

  return {
    loading,
    error,
    parrentsList,
    currentItem,
    designsList,
    equipmentsList,
    suppliersList,
    currentTarget,
    editRow,
    onHandlerChange,
    addNewChild,
    addNewChildren,
    updateOneItem,
    deleteOneItem,
  };
};
