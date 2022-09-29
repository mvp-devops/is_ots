import { useEffect, useState } from "react";
import {
  FacilityCreateOrUpdateAttrs,
  FacilityView,
} from "../../../../../../../server/common/types/equipment-accounting";
import { useEquipmentAccountingForm } from ".";
import { facilityItem } from "../form.settings";

export const useFacilityForm = (
  row?: FacilityView,
  data?: FacilityCreateOrUpdateAttrs,
  setData?: Function
) => {
  const [editRow, setEditRow] = useState<FacilityCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        country: row.country,
        vendor: row.vendor,
        title: row.title,
        equipmentType: row.equipmentType,
        meansurementArea: row.meansurementArea,
        meansurementType: row.meansurementType,
        meansureGroup: row.meansureGroup,
        modifications: row.modifications,
      }),

    [row]
  );

  const { itemMeansureGroup, modifications, vendorsList, onHandlerChange } =
    useEquipmentAccountingForm(
      facilityItem,
      editRow,
      setEditRow,
      data,
      setData
    );

  return {
    vendorsList,
    modifications,
    itemMeansureGroup,
    editRow,
    onHandlerChange,
  };
};
