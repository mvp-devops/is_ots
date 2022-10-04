import { Divider, Space } from "antd";
import Header from "./Header";
import Items from "./Items";
import { ModalContainer } from "../../../../components";
import SummaryListOfFacilityForm from "../forms/SummaryListOfFacilityForm";
import { useTypedSelector } from "../../../../hooks";
import { FormActions } from "../../../main";

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
    </>
  );
};

export default SummaryListOfEquipment;
