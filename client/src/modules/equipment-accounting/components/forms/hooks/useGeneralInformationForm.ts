import React, { useEffect, useRef, useState } from "react";
import { InputRef } from "antd";

import {
  GeneralInformationView,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../types";

import { generalInformationItem, useEquipmentAccountingForm } from "..";
import { deleteOneEssence, updateOneEssence } from "../../../api";

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
    currentItemFolderPath,
    facilities,
    newFacility,
    setNewFacility,
    onHandlerChange,
    onChangeTargetId,
    setFormVisible,
    actionType,
    checkedItem,
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

  const {
    unitId,
    setUnitId,
    unitsList,
    subUnitId,
    setSubUnitId,
    subUnitsList,
    currentId,
    currentItem,
    target,
  } = useEquipmentAccountingForm(editRow, data, setData);

  const updateGeneralInformationItem = () => {
    editRow &&
      updateOneEssence(
        "general-information",
        editRow.id,
        editRow,
        currentItemFolderPath
      );
    setFormVisible(false);
  };

  const deleteGeneralInformationItem = () => {
    deleteOneEssence("general-information", editRow.id, currentItemFolderPath)
      .then((data) => console.log(data))
      .finally(() => setFormVisible(false));
  };

  useEffect(() => {
    switch (target) {
      case "field": {
        console.log("projectId: ", checkedItem.id);
        break;
      }
      case "project": {
        console.log("projectId: ", currentItem.keys[2]);
        console.log("unitId: ", checkedItem.id);
        break;
      }
      case "unit": {
        console.log("projectId: ", currentItem.keys[2]);
        console.log("unitId: ", currentItem.keys[3]);
        console.log("subUnitId: ", checkedItem.id);
        break;
      }
      case "sub-unit": {
        console.log("projectId: ", currentItem.keys[2]);
        console.log("unitId: ", currentItem.keys[3]);
        console.log("subUnitId: ", currentItem.keys[4]);
        break;
      }
      default:
        break;
    }
  }, [checkedItem, target]);

  return {
    actionType,
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
    updateGeneralInformationItem,
    deleteGeneralInformationItem,
  };
};
