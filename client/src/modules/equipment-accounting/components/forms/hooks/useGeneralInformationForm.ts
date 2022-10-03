import { InputRef } from "antd";
import { RcFile } from "antd/lib/upload";
import React, { useEffect, useRef, useState } from "react";
import {
  FacilityCreateOrUpdateAttrs,
  FacilityView,
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
} from "../../../../../../../server/common/types/equipment-accounting";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { facilityItem } from "../form.settings";
import { useEquipmentAccountingForm } from ".";

export const useGeneralInformationForm = (
  row?: GeneralInformationView,
  data?: GeneralInformationCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [modifications, setModifications] = useState<string[]>([]);
  const [newModification, setNewModification] = useState<string>("");
  const inputRef = useRef<InputRef>(null);
  const [editRow, setEditRow] =
    useState<GeneralInformationCreateOrUpdateAttrs>();

  const { facilitiesList } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  const [newFacility, setNewFacility] =
    useState<FacilityCreateOrUpdateAttrs>(facilityItem);
  const [facilities, setFacilities] = useState<FacilityView[]>(facilitiesList);

  const { getFacilitiesList } = useActions();

  useEffect(() => {
    getFacilitiesList();
  }, []);

  const { currentId, target } = useEquipmentAccountingForm(
    editRow,
    data,
    setData
  );

  useEffect(() => setFacilities(facilitiesList), [facilitiesList]);

  const changeItems = (
    key: string,
    value:
      | string
      | string[]
      | number
      | RcFile
      | FacilityCreateOrUpdateAttrs
      | null
  ) => {
    data && setData && setData({ ...data, [key]: value });
  };

  const addNewFacilityModification = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setModifications([...modifications, newModification]);
    setNewModification("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onHandlerChange = (
    key: string,
    value:
      | string
      | string[]
      | number
      | RcFile
      | FacilityCreateOrUpdateAttrs
      | null
  ) => {
    editRow
      ? setEditRow({
          ...editRow,
          [key]: value,
        })
      : changeItems(key, value);
  };

  const onModificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewModification(e.target.value);
  };

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        projectId: row.projectId,
        unitId: row.unitId,
        subUnitId: row.subUnitId,
        installationLocation: row.installationLocation,
        questionare: row.questionare,
        systemType: row.systemType,
        tag: row.tag,
        controlledParameter: row.controlledParameter,
        facilityId: row.facilityId,
        facility: row.facility,
        facilityModification: row.facilityModification,
        factoryNumber: row.factoryNumber,
        year: row.year,
        month: row.month,
        period: row.period,
        specification: row.specification,
        description: row.description,
      }),
    [row]
  );

  useEffect(() => {
    // editRow &&
    //   setEditRow({
    //     ...editRow,
    //     facility: { ...editRow.facility, modifications },
    //   });
    data &&
      setData &&
      setData({ ...data, facility: { ...data.facility, modifications } });
    editRow && console.log(editRow.facility);
  }, [modifications]);

  useEffect(() => {
    editRow
      ? setEditRow({ ...editRow, facility: newFacility })
      : changeItems("facility", newFacility);
  }, [newFacility]);

  useEffect(() => {
    facilities.length > 0 &&
      data &&
      data.facilityId &&
      setModifications(
        facilities.filter((item, index) => item.id === data.facilityId)[0]
          ?.modifications || []
      );
    facilities.length > 0 &&
      editRow &&
      editRow.facilityId &&
      setModifications(
        facilities.filter((item, index) => item.id === editRow.facilityId)[0]
          ?.modifications || []
      );
  }, [editRow?.facilityId, data?.facilityId]);

  return {
    currentId,
    target,
    setEditRow,
    changeItems,
    facilities,
    editRow,
    inputRef,
    modifications,
    newFacility,
    setNewFacility,
    onHandlerChange,
    setModifications,
    newModification,
    setNewModification,
    addNewFacilityModification,
    onModificationChange,
  };
};
