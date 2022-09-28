import { metrologyItem } from "./../form.settings";
import {
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
} from "../../../../../../../server/common/types/equipment-accounting";

import { useEffect, useState } from "react";
import { useEquipmentAccountingForm } from ".";

export const useMetrologyForm = (
  row?: MetrologyView,
  data?: MetrologyCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<MetrologyCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId as number,
        sgroei: row.sgroei,
        grsi: row.grsi,
        min: row.min,
        max: row.max,
        range: row.range,
        accuracy: row.accuracy,
        mpi: row.mpi,
        metrologyType: row.metrologyType,
        documentType: row.documentType,
        documentNumber: row.documentNumber,
        counterpartyId: row.counterpartyId as number,
        document: null,
        fromDate: row.fromDate,
        toDate: row.toDate,
        status: row.status,
        arshin: row.arshin,
        verificationProcedure: null,
        typeApprovalCertificate: null,
      }),

    [row]
  );

  const { counterpartiesList, onHandlerChange, changeDate } =
    useEquipmentAccountingForm(
      metrologyItem,
      editRow,
      setEditRow,
      data,
      setData
    );

  return {
    counterpartiesList,
    editRow,
    onHandlerChange,
    changeDate,
  };
};
