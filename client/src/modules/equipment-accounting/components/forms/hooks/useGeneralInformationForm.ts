import React, { useEffect, useRef, useState } from "react";
import { InputRef } from "antd";

import {
  GeneralInformationView,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../types";

import { generalInformationItem, useEquipmentAccountingForm } from "..";
import { deleteOneEssence, updateOneEssence } from "../../../api";
import { PositionTreeItem } from "../../../../position-tree";

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

    currentId,

    target,
  } = useEquipmentAccountingForm(editRow, data, setData);

  useEffect(() => {
    setSubUnitsList(
      unitsList.filter((item) => item.id === unitId)[0]?.children || []
    );
  }, [unitId]); // eslint-disable-line react-hooks/exhaustive-deps

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
    deleteOneEssence(
      "general-information",
      editRow.id,
      currentItemFolderPath
    ).finally(() => setFormVisible(false));
  };
  const [subUnitsList, setSubUnitsList] = useState<PositionTreeItem[]>([]);

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
    setSubUnitsList,
    setModifications,
    newModification,
    setNewModification,
    addNewFacilityModification,
    onModificationChange,
    updateGeneralInformationItem,
    deleteGeneralInformationItem,
  };
};
