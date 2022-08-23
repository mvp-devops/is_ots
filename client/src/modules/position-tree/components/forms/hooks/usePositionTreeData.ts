import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeView,
  UnitCreateOrUpdateAttrs,
} from "../../../../../../../server/common/types/position-tree";

import { useActions, useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { getOneItem } from "../../../api/position-tree.api";
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
  const [currentTarget, setCurrentTarget] = useState("");

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const {} = useActions();

  useEffect(() => {}, [currentItem]);

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

  return {
    currentItem,
    currentTarget,
    editRow,
    onHandlerChange,
  };
};
