import React, { useEffect, useRef, useState } from "react";
import { InputRef } from "antd";

import {
  GeneralInformationView,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../types";

import { generalInformationItem, useEquipmentAccountingForm } from "..";

export const useGeneralInformationForm = (
  row?: GeneralInformationView,
  data?: GeneralInformationCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] =
    useState<GeneralInformationCreateOrUpdateAttrs>();

  const inputRef = useRef<InputRef>(null);

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

  const {
    facilities,
    newFacility,
    setNewFacility,
    onHandlerChange,
    onChangeTargetId,
  } = useEquipmentAccountingForm(
    generalInformationItem,
    editRow,
    setEditRow,
    data,
    setData
  );

  const [modifications, setModifications] = useState<string[]>([]);
  const [newModification, setNewModification] = useState<string>("");

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

  const onModificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewModification(e.target.value);
  };

  useEffect(() => {
    data &&
      setData &&
      setData({ ...data, facility: { ...data.facility, modifications } });
    editRow && console.log(editRow.facility);
  }, [modifications]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    onHandlerChange("facility", newFacility);
  }, [newFacility]); // eslint-disable-line react-hooks/exhaustive-deps

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
  }, [editRow?.facilityId, data?.facilityId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(
    () => console.log("GeneralInformationFormRow: ", editRow),
    [editRow]
  );

  const {
    unitId,
    setUnitId,
    unitsList,
    subUnitId,
    setSubUnitId,
    subUnitsList,
    currentId,
    target,
  } = useEquipmentAccountingForm(editRow, data, setData);

  return {
    onChangeTargetId,
    unitId,
    setUnitId,
    unitsList,
    subUnitId,
    setSubUnitId,
    subUnitsList,
    currentId,
    target,
    setEditRow,
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
