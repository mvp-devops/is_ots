import {
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
} from "../../../../../../../common/types/equipment-accounting";

import { useEffect, useState } from "react";
import { RcFile } from "antd/lib/upload";
import { setDate } from "../../../../../utils/main.utils";

export const useMetrologyData = (
  row?: MetrologyView,
  data?: MetrologyCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<MetrologyCreateOrUpdateAttrs>();

  const changeItems = (key: string, value: string | Date | null | RcFile) => {
    data && setData && setData({ ...data, [key]: value });
  };

  const changeEditRowItems = (
    key: string,
    value: string | Date | null | RcFile
  ) => {
    row && editRow && setEditRow({ ...editRow, [key]: value });
  };

  const changeDate = (key: string, value: string) => {
    editRow
      ? changeEditRowItems(key, setDate(value))
      : changeItems(key, setDate(value));
  };

  const onHandlerChange = (
    key: string,
    value: string | Date | null | RcFile
  ) => {
    editRow ? changeEditRowItems(key, value) : changeItems(key, value);
  };

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
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
        counterparty: row.counterparty,
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

  return {
    editRow,
    onHandlerChange,
    changeDate,
  };
};
