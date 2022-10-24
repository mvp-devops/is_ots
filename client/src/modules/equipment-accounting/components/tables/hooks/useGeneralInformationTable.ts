import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { useTypedSelector } from "../../../../..";
import { GeneralInformationView } from "../../../types";

export const useGeneralInformationTable = () => {
  const [dataSource, setDataSource] = useState<GeneralInformationView[]>([]);
  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    renderGeneralInformationFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("general-information");

  const { formVisible } = useTypedSelector((state) => state.main);

  useEffect(() => {
    setDataSource(renderDataSource as GeneralInformationView[]);
  }, [renderDataSource]);

  // useEffect(() => {
  //   setDataSource(generalInformationList);
  // }, [generalInformationList]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as GeneralInformationView[]).filter(
        (item) =>
          (item?.unit &&
            item?.unit?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
          (item?.subUnit &&
            item?.subUnit
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item?.tag &&
            item?.tag?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
          (item?.installationLocation &&
            item?.installationLocation
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item?.systemType &&
            item?.systemType?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item.facility &&
            item?.facility?.equipmentType
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item.facility &&
            item?.facility?.country
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item.facility &&
            item?.facility?.vendor
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item.facility &&
            item?.facility?.title
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item?.facilityModification &&
            item?.facilityModification
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item?.specification &&
            item?.specification
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase()))
      )
    );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    searchValue,
    onSearch,
    loading,
    renderGeneralInformationFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
    setDataSource,
  };
};
