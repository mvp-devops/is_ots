import {
  SignalCreateOrUpdateAttrs,
  SignalView,
} from "../../../../../../../server/common/types/equipment-accounting";

import { useEffect, useState } from "react";

import { signalItem } from "../form.settings";

export const useSignalData = (
  row?: SignalView,
  data?: SignalCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<SignalCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: Math.random(),
        sloeId: row.sloeId,
        signalType: row.signalType,
        signalProtocol: row.signalProtocol,
        signalTag: row.signalTag,
        ll: row.ll,
        l: row.l,
        h: row.h,
        hh: row.hh,
        emergenceProtocol: row.emergenceProtocol,
      }),
    [row]
  );

  const addItem = () => {
    data && setData && setData([...data, { ...signalItem, id: Math.random() }]);
  };

  const removeItem = (index: string | number | null) => {
    data && setData && setData(data.filter((i) => i.id !== index));
  };

  const changeItems = (
    key: string,
    value: string | number,
    id: string | number | null
  ) => {
    data &&
      setData &&
      setData(data.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const onHandlerChange = (
    key: string,
    value: string | number,
    id: string | number | null
  ) => {
    editRow
      ? setEditRow({
          ...editRow,
          [key]: value,
        })
      : changeItems(key, value, id);
  };

  return {
    addItem,
    removeItem,
    onHandlerChange,
    editRow,
  };
};
