import {
  ImpulseLineLogCreateOrUpdateAttrs,
  ImpulseLineLogView,
} from "../../../../../../../common/types/equipment-accounting";

import { useEffect, useState } from "react";

import { ImpulseLineLogItem } from "../form.settings";

export const useImpulseLineLogData = (
  row?: ImpulseLineLogView,
  data?: ImpulseLineLogCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<ImpulseLineLogCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: Math.random(),
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

  const addItem = () => {
    data &&
      setData &&
      setData([...data, { ...ImpulseLineLogItem, id: Math.random() }]);
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
