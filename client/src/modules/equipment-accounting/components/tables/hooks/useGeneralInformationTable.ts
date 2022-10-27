import { useEffect, useState } from "react";
import { useEquipmentAccountingTable } from ".";
import { useTypedSelector } from "../../../../..";
import { FormActions } from "../../../../main";
import { GeneralInformationView } from "../../../types";

export const useGeneralInformationTable = () => {
  const [dataSource, setDataSource] = useState<GeneralInformationView[]>([]);
  const [
    renderGeneralInformationFormEditFlag,
    setRenderGeneralInformationFormEditFlag,
  ] = useState(false);
  const {
    searchValue,
    onSearch,
    loading,
    renderDataSource,
    currentRow,
    setCurrentRow,
  } = useEquipmentAccountingTable("general-information");

  const { formVisible, actionType } = useTypedSelector((state) => state.main);

  useEffect(() => {
    setDataSource(
      (renderDataSource as GeneralInformationView[]).sort((a, b) =>
        a.createdAt > b.createdAt ? -1 : 0
      )
    );
  }, [renderDataSource]);

  // useEffect(() => {
  //   setDataSource(generalInformationList);
  // }, [generalInformationList]);

  useEffect(() => {
    formVisible &&
      (actionType === FormActions.EDIT_EQUIPMENT ||
        actionType === FormActions.REMOVE_EQUIPMENT) &&
      setRenderGeneralInformationFormEditFlag(true);
  }, [formVisible, actionType]);

  useEffect(() => {
    setDataSource(
      (renderDataSource as GeneralInformationView[]).filter(
        (item) =>
          (item &&
            item?.unit &&
            item?.unit?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.subUnit &&
            item?.subUnit
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.tag &&
            item?.tag?.toUpperCase()?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.installationLocation &&
            item?.installationLocation
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.controlledParameter &&
            item?.controlledParameter
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.systemType &&
            item?.systemType?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item &&
            item?.facility &&
            item?.facility?.equipmentType
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item &&
            item?.facility &&
            item?.facility?.country
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item &&
            item?.facility &&
            item?.facility?.vendor
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item &&
            item?.facility &&
            item?.facility?.title
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.facilityModification &&
            item?.facilityModification
              ?.toUpperCase()
              ?.includes(searchValue?.toUpperCase())) ||
          (item &&
            item?.specification &&
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
