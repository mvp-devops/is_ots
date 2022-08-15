import { InputRef } from "antd";
import { RcFile } from "antd/lib/upload";
import React, { useEffect, useRef, useState } from "react";
import {
  FacilityCreateOrUpdateAtts,
  FacilityView,
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
} from "../../../../../../../common/types/equipment-accounting";
import { facilityItem } from "../form.settings";

export const useGeneralInformationData = (
  facilitiesList: FacilityView[],
  row?: GeneralInformationView,
  data?: GeneralInformationCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [modifications, setModifications] = useState<string[]>([]);
  const [newModification, setNewModification] = useState<string>("");
  const inputRef = useRef<InputRef>(null);
  const [editRow, setEditRow] =
    useState<GeneralInformationCreateOrUpdateAttrs>();

  const [newFacility, setNewFacility] =
    useState<FacilityCreateOrUpdateAtts>(facilityItem);
  const [facilities, setFacilities] = useState<FacilityView[]>([]);

  useEffect(() => setFacilities(facilitiesList), []);

  const changeItems = (
    key: string,
    value:
      | string
      | string[]
      | number
      | RcFile
      | FacilityCreateOrUpdateAtts
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
      | FacilityCreateOrUpdateAtts
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

  useEffect(() => {
    data &&
      setModifications(
        facilities.filter((item, index) => item.id === data.facilityId)[0]
          .modifications
      );
    editRow &&
      setModifications(
        facilities.filter((item, index) => item.id === editRow.facilityId)[0]
          .modifications
      );
  }, [editRow?.facilityId, data?.facilityId]);

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        unitId: row.unitId,
        subUnitId: row.subUnitId,
        installationLocation: row.installationLocation,
        questionare: null,
        systemType: row.systemType,
        tag: row.tag,
        controlledParameter: row.controlledParameter,
        facilityId: row.facilityId,
        facility: {
          id: row.facilityId,
          country: row.country,
          vendor: row.vendor,
          title: row.facilityTitle,
          equipmentType: row.equipmentType,
          measurementArea: null,
          meansurementType: null,
          meansureGroup: null,
          modifications: [],
        },
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
    editRow &&
      setEditRow({
        ...editRow,
        facility: { ...editRow?.facility, modifications },
      });
    data &&
      setData &&
      setData({ ...data, facility: { ...data?.facility, modifications } });
  }, [modifications]);

  useEffect(() => {
    editRow
      ? setEditRow({ ...editRow, facility: newFacility })
      : changeItems("facility", newFacility);
  }, [newFacility]);

  return {
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
