import { Layout } from "antd";
import React, { useState } from "react";
import CollectiveCheckSheet from "../../comment-accounting";
import { commentAccountingRequestData } from "../../comment-accounting/utils/comment-accounting.consts";
import ModalContainer from "../../equipment-accounting/components/views/ModalContainer";
import SummaryListOfEquipment from "../../equipment-accounting/components/views/SummaryListOfEquipment";
import ItemPageBreadcrumbs from "./breadcrumbs/ItemPageBreadcrumbs";
import ItemPageMenu from "./menu/ItemPageMenu";
const { Content } = Layout;

const ItemPage: React.FC = () => {
  const [showSLOE, setShowSLOE] = useState<boolean>(false);
  return (
    <Layout style={{ minHeight: "100vh", padding: 0 }}>
      <Content style={{ padding: "0 10px" }}>
        <ItemPageBreadcrumbs
          items={[
            { id: "1", title: "Компания" },
            { id: "2", title: "Месторождение" },
            { id: "3", title: "Проект" },
          ]}
        />
        <Layout className="site-layout-background" style={{ padding: "0 0" }}>
          <Content style={{ padding: "0 5px", minHeight: "100%" }}>
            <CollectiveCheckSheet data={commentAccountingRequestData} />
          </Content>
          <ItemPageMenu
            target="project"
            childTarget=" unit"
            role="EXPERT"
            showSLOE={showSLOE}
            setShowSLOE={() => setShowSLOE(!showSLOE)}
          />
        </Layout>
      </Content>
      {showSLOE && (
        <ModalContainer
          show={showSLOE}
          onCancel={() => setShowSLOE(false)}
          action={"POST"}
          child={<SummaryListOfEquipment data={null} />}
        />
      )}
    </Layout>
  );
};

export default ItemPage;
