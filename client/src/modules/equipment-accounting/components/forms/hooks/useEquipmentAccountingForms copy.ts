import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { RcFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import {
  CableLogCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  FacilityCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../../../../../server/common/types/equipment-accounting";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { useTypedSelector } from "../../../../../hooks";
import { setDate } from "../../../../../utils/main.utils";
import { PositionTreeItem } from "../../../../position-tree";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";

type EquipmentAccountingSubFormData =
  | CableLogCreateOrUpdateAttrs
  | ImpulseLineLogCreateOrUpdateAttrs
  | SignalCreateOrUpdateAttrs
  | MetrologyCreateOrUpdateAttrs
  | MonitoringCreateOrUpdateAttrs
  | FacilityCreateOrUpdateAttrs
  | GeneralInformationCreateOrUpdateAttrs;

export const useEquipmentAccountingForm = (
  item?: EquipmentAccountingSubFormData,
  editRow?: EquipmentAccountingSubFormData,
  setEditRow?: Function,
  data?: EquipmentAccountingSubFormData[] | EquipmentAccountingSubFormData,
  setData?: Function
) => {
  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();

  const [counterpartiesList, setCounterpartiesList] = useState<NSIView[]>([]);
  const [vendorsList, setVendorsList] = useState<NSIView[]>([]);
  const [modifications] = useState<string[]>([]);
  const [itemMeansureGroup] = useState("");
  const [unitsList, setUnitsList] = useState<PositionTreeItem[]>([]);
  const [subUnitsList, setSubUnitsList] = useState<PositionTreeItem[]>([]);
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");

  const [currentId, setCurrentId] = useState("");
  const { currentItem, target, checkedItem } = useTypedSelector(
    (state) => state.positionTree
  );
  useEffect(() => {
    if (currentItem) {
      setCurrentId(currentItem.id);
    }
  }, [currentItem]);

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const removeItem = (index: string | number | null) => {
    data &&
      setData &&
      setData(
        (data as EquipmentAccountingSubFormData[]).filter((i) => i.id !== index)
      );
  };

  const changeItems = (
    key: string,
    value:
      | string
      | string[]
      | number
      | Date
      | RcFile
      | CheckboxValueType[]
      | null,
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
    value:
      | string
      | string[]
      | number
      | Date
      | RcFile
      | CheckboxValueType[]
      | null
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
    value:
      | string
      | string[]
      | number
      | Date
      | RcFile
      | CheckboxValueType[]
      | null,
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

  useEffect(() => {
    if (currentItem && checkedItem) {
      switch (target) {
        case "field": {
          setUnitsList(
            currentItem?.children?.filter(
              (item) => item.id === checkedItem?.id.toString()
            )[0]?.children || []
          );
          break;
        }
        case "project": {
          setUnitsList(currentItem?.children || []);

          break;
        }
        case "unit": {
          setSubUnitsList(currentItem?.children || []);
          break;
        }
        default:
          break;
      }
    }
  }, [currentItem, checkedItem, target]);

  useEffect(() => {
    if (unitId) {
      unitsList.length > 0 &&
        setSubUnitsList(
          unitsList.filter((item) => item.id === unitId)[0].children || []
        );
      unitsList.length <= 0 && setSubUnitsList(currentItem?.children || []);
    }
  }, [unitsList, unitId]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    currentId,
    target,
    itemMeansureGroup,
    modifications,
    vendorsList,
    counterpartiesList,
    onHandlerChange,
    addItem,
    removeItem,
    changeItems,
    changeDate,
    unitId,
    setUnitId,
    unitsList,
    subUnitId,
    setSubUnitId,
    subUnitsList,
  };
};
