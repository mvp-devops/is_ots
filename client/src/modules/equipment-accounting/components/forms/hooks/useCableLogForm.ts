import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
} from "../../../../../../../server/common/types/equipment-accounting";

import { useEffect, useState } from "react";

import { cableLogItem } from "../form.settings";
import { useEquipmentAccountingForm } from ".";

export const useCableLogForm = (
  row?: CableLogView,
  data?: CableLogCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<CableLogCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        wiringDiagram: row.wiringDiagram,
        numberOfTrace: row.numberOfTrace,
        cableMark: row.cableMark,
        cableSection: row.cableSection,
        fromUnit: row.fromUnit,
        fromPlace: row.fromPlace,
        toUnit: row.toUnit,
        toPlace: row.toPlace,
        cableLenght: row.cableLenght,
        range: "м",
        description: row.description,
      }),
    [row]
  );

  const { addItem, removeItem, onHandlerChange } = useEquipmentAccountingForm(
    cableLogItem,
    editRow,
    setEditRow,
    data,
    setData
  );

  return {
    addItem,
    removeItem,
    onHandlerChange,
    editRow,
  };
};
