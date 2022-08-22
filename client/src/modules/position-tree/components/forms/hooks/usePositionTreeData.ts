import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import {
  PositionTreeCreateOrUpdateAttrs,
  PositionTreeView,
  UnitCreateOrUpdateAttrs,
} from "../../../../../../../server/common/types/position-tree";

import { useActions, useTypedSelector } from "../../../../../hooks";
import { getOneItem } from "../../../api/position-tree.api";
import {
  fieldItem,
  projectItem,
  subsidiaryItem,
  subUnitItem,
  unitItem,
} from "../form.settings";

export const usePositionTreeData = (target: string) => {
  const initData = (
    target: string,
    row?: PositionTreeView
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
          : fieldItem;
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
          : projectItem;
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
          : unitItem;
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
          : subUnitItem;
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

  const { menuItems, currentItem } = useTypedSelector(
    (state) => state.positionTree
  );

  const {} = useActions();

  useEffect(() => {
    currentItem &&
      getOneItem(currentItem?.target, currentItem.id).then(
        (data) => data && setEditRow(initData(currentItem.target, data))
      );
  }, [currentItem]);

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

    editRow,
    onHandlerChange,
  };
};
