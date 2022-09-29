import { useEffect, useState } from "react";
import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../../server/common/types/equipment-accounting";
import { useEquipmentAccountingForm } from "./useEquipmentAccountingForms";
import { monitoringItem } from "./../form.settings";

export const useMonitoringForm = (
  row?: MonitoringView,
  data?: MonitoringCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<MonitoringCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        mountDate: row.mountDate,
        mountDocument: null,
        connectDate: row.connectDate,
        connectDocument: null,
        testDate: row.testDate,
        testDocument: null,
        awpDate: row.awpDate,
        awpDocument: null,
        commisionDate: row.commisionDate,
        commisionDocument: null,
      }),
    [row]
  );

  const { onHandlerChange, changeDate } = useEquipmentAccountingForm(
    monitoringItem,
    editRow,
    setEditRow,
    data,
    setData
  );

  return {
    editRow,
    onHandlerChange,
    changeDate,
  };
};
