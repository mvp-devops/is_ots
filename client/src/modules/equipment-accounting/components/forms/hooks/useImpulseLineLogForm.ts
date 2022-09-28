import {
  ImpulseLineLogCreateOrUpdateAttrs,
  ImpulseLineLogView,
} from "../../../../../../../server/common/types/equipment-accounting";

import { useEffect, useState } from "react";
import { useEquipmentAccountingForm } from ".";
import { ImpulseLineLogItem } from "../form.settings";

export const useImpulseLineLogForm = (
  row?: ImpulseLineLogView,
  data?: ImpulseLineLogCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<ImpulseLineLogCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        numberOfTrace: row.numberOfTrace,
        impulseLineType: row.impulseLineType,
        fromPlace: row.fromPlace,
        toPlace: row.toPlace,
        impulseLineLenght: row.impulseLineLenght,
        range: "м",
        description: row.description,
      }),
    [row]
  );

  const { addItem, removeItem, onHandlerChange } = useEquipmentAccountingForm(
    ImpulseLineLogItem,
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
