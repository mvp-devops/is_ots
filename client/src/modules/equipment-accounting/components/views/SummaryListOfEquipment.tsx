import { Divider, Space } from "antd";
import Header from "./Header";
import Navbar from "./Navbar";
import Items from "./Items";
import { ModalContainer } from "../../../../components";
import SummaryListOfFacilityForm from "../forms/SummaryListOfFacilityForm";
import { useEquipmentAccountingVeiw } from "./hooks/useEquipmentAccountingVeiw";
import { FormActions } from "../../../main";

const SummaryListOfEquipment = () => {
  const { formVisible, actionType } = useEquipmentAccountingVeiw();

  return (
    <>
      <Space
        direction="vertical"
        className="p-1 m-1 border"
        style={{ minWidth: "1840px", minHeight: "750px" }}
      >
        <Header />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Navbar />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Items />
      </Space>
      {formVisible && actionType === FormActions.ADD_EQUIPMENT && (
        <ModalContainer
          target="summary-list-of-equipment"
          child={<SummaryListOfFacilityForm />}
        />
      )}
    </>
  );
};

export default SummaryListOfEquipment;
