import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
} from "./../../../../../../../common/types/equipment-accounting";

import { useEffect, useState } from "react";

import { cableLogItem } from "../form.settings";

export const useCableLogData = (
  row?: CableLogView,
  data?: CableLogCreateOrUpdateAttrs[],
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<CableLogCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: Math.random(),
        sloeId: row.sloeId,
        wiringDiagram: null,
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

  const addItem = () => {
    data &&
      setData &&
      setData([...data, { ...cableLogItem, id: Math.random() }]);
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
