import { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { getAllGeneralInformation, GeneralInformationView } from "../../..";
import { useEquipmentAccountingVeiw } from "../../views/hooks/useEquipmentAccountingVeiw";

export const useGeneralInformationTable = () => {
  const [currentRow, setCurrentRow] = useState<GeneralInformationView>();
  const [dataSource, setDataSource] = useState<GeneralInformationView[]>([]);

  const { formVisible, actionType } = useTypedSelector((state) => state.main);

  const { loading, summaryListOfEquipment } = useTypedSelector(
    (state) => state.equipmentAccounting
  );

  const { unitId, subUnitId, searchValue } = useEquipmentAccountingVeiw();

  const renderForm = formVisible && actionType === FormActions.EDIT_EQUIPMENT;

  useEffect(
    () => setDataSource(getAllGeneralInformation(summaryListOfEquipment)),
    [summaryListOfEquipment]
  );

  useEffect(
    () => console.log("useGI searchValue: ", searchValue),
    [searchValue]
  );

  useEffect(() => {
    unitId !== "0" && unitId !== ""
      ? setDataSource(
          getAllGeneralInformation(summaryListOfEquipment).filter(
            (item) => item?.unitId === unitId
          )
        )
      : setDataSource(getAllGeneralInformation(summaryListOfEquipment));
  }, [unitId]);

  useEffect(() => {
    subUnitId !== "0" && subUnitId !== ""
      ? setDataSource(
          getAllGeneralInformation(summaryListOfEquipment).filter(
            (item) => item?.subUnitId === subUnitId
          )
        )
      : setDataSource(getAllGeneralInformation(summaryListOfEquipment));
  }, [subUnitId]);

  // useEffect(() => {
  //   setDataSource(
  //     getAllGeneralInformation(summaryListOfEquipment).filter(
  //       (item) =>
  //         item.unit.toUpperCase().includes(searchValue.toUpperCase()) ||
  //         item.subUnit.toUpperCase().includes(searchValue.toUpperCase()) ||
  //         item.tag.toUpperCase().includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).installationLocation
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).facility.equipmentType
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).systemType.includes(
  //           searchValue.toUpperCase()
  //         ) ||
  //         (item as GeneralInformationView).facility.country
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).facility.vendor
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).facility.title
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).facilityModification
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase()) ||
  //         (item as GeneralInformationView).specification
  //           .toUpperCase()
  //           .includes(searchValue.toUpperCase())
  //     )
  //   );
  // }, [summaryListOfEquipment, searchValue]);

  return { loading, renderForm, dataSource, currentRow, setCurrentRow };
};
