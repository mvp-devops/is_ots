import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import {
  CableLogCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  FacilityCreateOrUpdateAttrs,
} from "../../../../../../../server/common/types/equipment-accounting";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { setDate } from "../../../../../utils/main.utils";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";

type EquipmentAccountingSubFormData =
  | CableLogCreateOrUpdateAttrs
  | ImpulseLineLogCreateOrUpdateAttrs
  | SignalCreateOrUpdateAttrs
  | MetrologyCreateOrUpdateAttrs
  | MonitoringCreateOrUpdateAttrs
  | FacilityCreateOrUpdateAttrs;

export const useEquipmentAccountingForm = (
  item: EquipmentAccountingSubFormData,
  editRow?: EquipmentAccountingSubFormData,
  setEditRow?: Function,
  data?: EquipmentAccountingSubFormData[] | EquipmentAccountingSubFormData,
  setData?: Function
) => {
  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();

  const [counterpartiesList, setCounterpartiesList] = useState<NSIView[]>([]);
  const [vendorsList, setVendorsList] = useState<any[]>([]);
  const [modifications] = useState<string[]>([]);
  const [itemMeansureGroup] = useState("");

  const renderNSIList = (items: NSIView[]): any[] => {
    const arr: any[] = [];
    for (let i = 0; i < items.length; i++) {
      const { id, title, code, description } = items[i];
      const item = {
        id,
        title,
        code,
        value: title,
        description,
      };
      arr.push(item);
    }
    return arr;
  };

  const addItem = () => {
    data &&
      setData &&
      setData([
        ...(data as EquipmentAccountingSubFormData[]),
        { ...item, id: Math.random() },
      ]);
  };

  useEffect(() => {
    getNSIList("counterparty").then((data) => {
      setCounterpartiesList(data);
      setVendorsList(renderNSIList(data));
    });
  }, []);

  const removeItem = (index: string | number | null) => {
    data &&
      setData &&
      setData(
        (data as EquipmentAccountingSubFormData[]).filter((i) => i.id !== index)
      );
  };

  const changeItems = (
    key: string,
    value: string | string[] | number | Date | RcFile | null,
    id?: string | number | null
  ) => {
    if (data && setData) {
      id
        ? setData(
            (data as EquipmentAccountingSubFormData[]).map((i) =>
              i.id === id ? { ...i, [key]: value } : i
            )
          )
        : setData({
            ...data,
            [key]: value,
          });
    }
  };

  const changeEditRowItems = (
    key: string,
    value: string | string[] | number | Date | RcFile | null
  ) => {
    editRow &&
      setEditRow &&
      setEditRow({
        ...editRow,
        [key]: value,
      });
  };

  const onHandlerChange = (
    key: string,
    value: string | string[] | number | Date | RcFile | null,
    id?: string | number | null
  ) => {
    editRow
      ? changeEditRowItems(key, value)
      : id
      ? changeItems(key, value, id)
      : changeItems(key, value);
  };

  const changeDate = (key: string, value: string) => {
    editRow
      ? changeEditRowItems(key, setDate(value))
      : changeItems(key, setDate(value));
  };

  // useEffect(() => console.log("Data: ", data), [data]);

  return {
    itemMeansureGroup,
    modifications,
    vendorsList,
    counterpartiesList,
    onHandlerChange,
    addItem,
    removeItem,
    changeItems,
    changeDate,
  };
};
