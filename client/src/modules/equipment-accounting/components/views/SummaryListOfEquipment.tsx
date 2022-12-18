import { Divider, Space } from "antd";
import Header from "./Header";
import Items from "./Items";
import { ModalContainer } from "../../../../components";
import SummaryListOfFacilityForm from "../forms/SummaryListOfFacilityForm";
import { useTypedSelector } from "../../../../hooks";
import { FormActions } from "../../../main";
import ImportDataForm from "../forms/import-data-form/ImportDataForm";
import ExportToAtlasTable from "../tables/export-to-atlas/ExportToAtlasTable";

const SummaryListOfEquipment = () => {
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const renderFormAddFlag =
    formVisible && actionType === FormActions.ADD_EQUIPMENT;

  const renderForm = renderFormAddFlag && (
    <ModalContainer
      target="summary-list-of-equipment"
      child={<SummaryListOfFacilityForm />}
    />
  );

  const importData = formVisible && actionType === FormActions.IMPORT_EQUIPMENT_FROM_SLOE && <ModalContainer child={<ImportDataForm />}/>

  return (
    <>
      <Space
        direction="vertical"
        className="p-1 m-1 border"
        style={{ minWidth: "1840px", minHeight: "750px" }}
      >
        <Header />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Items />
      </Space>
      {renderForm}
      {importData}
      {formVisible && actionType === FormActions.EXPORT_TO_ATLAS && <ModalContainer child={<ExportToAtlasTable />} /> }
    </>
  );
};

export default SummaryListOfEquipment;