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
  FacilityView,
} from "../../../../../../../server/common/types/equipment-accounting";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { setDate } from "../../../../../utils/main.utils";
import { PositionTreeItem } from "../../../../position-tree";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";
import { facilityItem } from "../form.settings";

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
  const { currentItem, target, checkedItem, currentItemFolderPath } =
    useTypedSelector((state) => state.positionTree);

  const { actionType } = useTypedSelector((state) => state.main);
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
      | FacilityCreateOrUpdateAttrs
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
      | FacilityCreateOrUpdateAttrs
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
      | FacilityCreateOrUpdateAttrs
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
          unitId
            ? setSubUnitsList(
                currentItem?.children
                  ?.filter((item) => item.id === checkedItem?.id.toString())[0]
                  ?.children?.filter((item) => item.id === unitId)[0]
                  .children || []
              )
            : setSubUnitsList([]);
          break;
        }
        case "project": {
          setUnitsList(currentItem?.children || []);
          unitId
            ? setUnitsList(
                currentItem?.children?.filter((item) => item.id === unitId)[0]
                  .children || []
              )
            : setSubUnitsList([]);
          break;
        }
        case "unit": {
          setUnitsList([currentItem]);
          break;
        }
        default:
          break;
      }
    }
  }, [currentItem, checkedItem, target]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (currentItem && checkedItem) {
      switch (target) {
        case "field": {
          console.log("this!!!");
          unitId
            ? setSubUnitsList(
                currentItem?.children
                  ?.filter((item) => item.id === checkedItem?.id.toString())[0]
                  ?.children?.filter((item) => item.id === unitId)[0]
                  .children || []
              )
            : setSubUnitsList([]);
          break;
        }
        case "project": {
          unitId
            ? setUnitsList(
                currentItem?.children?.filter((item) => item.id === unitId)[0]
                  .children || []
              )
            : setSubUnitsList([]);
          break;
        }
        case "unit": {
          setUnitsList([currentItem]);
          break;
        }
        default:
          break;
      }
    }
  }, [unitId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => console.log("SubUnits: ", subUnitsList), [unitId]); // eslint-disable-line react-hooks/exhaustive-deps

  const { facilitiesList } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  const [newFacility, setNewFacility] =
    useState<FacilityCreateOrUpdateAttrs>(facilityItem);
  const [facilities, setFacilities] = useState<FacilityView[]>(facilitiesList);

  const { getFacilitiesList, setFormVisible } = useActions();

  useEffect(() => {
    getFacilitiesList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => setFacilities(facilitiesList), [facilitiesList]);

  const onChangeTargetId = (key: string, value: string) => {
    onHandlerChange(key, value);
    key === "unitId" && setUnitId(value);
    key === "subUnitId" && setSubUnitId(value);
  };

  // useEffect(() => console.log("Data: ", data), [data]);

  return {
    actionType,
    currentItemFolderPath,
    setFormVisible,
    onChangeTargetId,
    facilities,
    newFacility,
    setNewFacility,
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
