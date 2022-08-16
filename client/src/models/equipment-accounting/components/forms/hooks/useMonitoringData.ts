import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../../common/types/equipment-accounting";

import { useEffect, useState } from "react";
import { RcFile } from "antd/lib/upload";
import { setDate } from "../../../../../utils/main.utils";

export const useMonitoringData = (
  row?: MonitoringView,
  data?: MonitoringCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<MonitoringCreateOrUpdateAttrs>();
  const [mount, setMount] = useState(false);
  const [mountDocument, setMountDocument] = useState(false);
  const [connect, setConnect] = useState(false);
  const [connectDocument, setConnectDocument] = useState(false);
  const [test, setTest] = useState(false);
  const [testDocument, setTestDocument] = useState(false);
  const [awp, setAwp] = useState(false);
  const [awpDocument, setAwpDocument] = useState(false);
  const [commision, setCommision] = useState(false);
  const [commisionDocument, setCommisionDocument] = useState(false);

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

  const changeData = (key: string, value: string | Date | null | RcFile) => {
    editRow ? changeEditRowItems(key, value) : changeItems(key, value);
  };

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        mountDate: new Date(row.mountDate),
        mountDocument: null,
        connectDate: new Date(row.connectDate),
        connectDocument: null,
        testDate: new Date(row.testDate),
        testDocument: null,
        awpDate: new Date(row.awpDate),
        awpDocument: null,
        commisionDate: new Date(row.commisionDate),
        commisionDocument: null,
        description: row.description,
      }),
    [row]
  );

  const onChange = (checked: boolean, target: string) => {
    switch (target) {
      case "mountDate": {
        setMount(checked);
        break;
      }
      case "mountDocument": {
        setMountDocument(checked);
        break;
      }
      case "connectDate": {
        setConnect(checked);
        break;
      }
      case "connectDocument": {
        setConnectDocument(checked);
        break;
      }
      case "testDate": {
        setTest(checked);
        break;
      }
      case "testDocument": {
        setTestDocument(checked);
        break;
      }
      case "awpDate": {
        setAwp(checked);
        break;
      }
      case "awpDocument": {
        setAwpDocument(checked);
        break;
      }
      case "commisionDate": {
        setCommision(checked);
        break;
      }
      case "commisionDocument": {
        setCommisionDocument(checked);
        break;
      }
      default:
        break;
    }
  };

  return {
    changeDate,
    changeData,
    mount,
    onChange,
    editRow,
    mountDocument,
    connect,
    connectDocument,
    test,
    testDocument,
    awp,
    awpDocument,
    commision,
    commisionDocument,
  };
};
