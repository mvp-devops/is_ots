import {
  SignalCreateOrUpdateAttrs,
  SignalView,
} from "../../../../../../../server/common/types/equipment-accounting";

import { useEffect, useState } from "react";

import { signalItem } from "../form.settings";
import { useEquipmentAccountingForm } from ".";

export const useSignalForm = (
  row?: SignalView,
  data?: SignalCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<SignalCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        signalType: row.signalType,
        signalProtocol: row.signalProtocol,
        signalTag: row.signalTag,
        ll: row.ll,
        l: row.l,
        h: row.h,
        hh: row.hh,
        emergencyProtocol: row.emergencyProtocol,
      }),
    [row]
  );

  const { addItem, removeItem, onHandlerChange } = useEquipmentAccountingForm(
    signalItem,
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
