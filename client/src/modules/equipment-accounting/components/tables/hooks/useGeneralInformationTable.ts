import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { GeneralInformationView } from "../../../types";

export const useGeneralInformationTable = () => {
  const [dataSource, setDataSource] = useState<GeneralInformationView[]>([]);
  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderGeneralInformationFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("general-information");

  useEffect(() => {
    setDataSource(renderDataSource as GeneralInformationView[]);
  }, [renderDataSource]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as GeneralInformationView[]).filter(
        (item) =>
          item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.installationLocation
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.facility.equipmentType
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.systemType.includes(searchValue.toUpperCase()) ||
          item.facility.country
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.facility.vendor
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.facility.title
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.facilityModification
            .toUpperCase()
            .includes(searchValue.toUpperCase()) ||
          item.specification.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);

  return {
    searchValue,
    onSearch,
    loading,
    renderGeneralInformationFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  };
};
